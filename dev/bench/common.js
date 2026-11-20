// Shared code of the benchmark pages. The workflow copies this file next to
// every page on gh-pages, see publish.sh. The pages read data.js, which
// github-action-benchmark maintains.
"use strict";

const Bench = (() => {
  // --- formatting ---

  function num(v, digits) {
    return v.toLocaleString("en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });
  }

  const fmt = {
    time(ns) {
      if (ns >= 1e9) return num(ns / 1e9, 2) + " s";
      if (ns >= 1e6) return num(ns / 1e6, ns >= 1e8 ? 0 : 2) + " ms";
      if (ns >= 1e3) return num(ns / 1e3, ns >= 1e5 ? 0 : 1) + " µs";
      return num(ns, 0) + " ns";
    },
    mbs(v) { return num(v, v >= 100 ? 0 : 1) + " MB/s"; },
    bytes(b) {
      if (b >= 1e6) return num(b / 1e6, 1) + " MB";
      if (b >= 1e3) return num(b / 1e3, 1) + " kB";
      return num(b, 0) + " B";
    },
    count(v) { return num(v, 0); },
    ratio(r) { return num(r, r >= 10 ? 0 : 1) + "×"; },
    // speed says how much faster a time is than other, e.g. "2.5× faster".
    speed(time, other) {
      return time <= other ? fmt.ratio(other / time) + " faster" : fmt.ratio(time / other) + " slower";
    },
    percent(p) { return num(Math.abs(p), Math.abs(p) >= 10 ? 0 : 1) + "%"; },
    // tick drops the zero decimals, an axis only shows round values.
    tick(s) { return s.replace(/\.0+(?=\s|$)|(\.\d*?[1-9])0+(?=\s|$)/, "$1"); },
  };

  // --- DOM ---

  function cssVar(name) {
    return getComputedStyle(document.querySelector(".viz-root")).getPropertyValue(name).trim();
  }

  function el(tag, attrs, ...children) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null) continue;
      if (k === "class") e.className = v; else e.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c == null) continue;
      // Strings are untrusted data (commit messages), never parsed as HTML.
      e.append(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return e;
  }

  // --- data ---

  // loadRuns returns every run of the github-action-benchmark entry that has
  // a value for at least one name accepted by keep, oldest first.
  //
  // run.values maps the benchmark name without the Benchmark prefix (e.g.
  // "Dot/Read/Text/MinimalReader/Fork") to unit ("ns/op", "B/op", ...) to
  // value. The action stores "<name> - <unit>" when a benchmark reports more
  // than one metric, otherwise just the name. Runs from the time the
  // benchmarks were spread over several packages carry a " (<package>)"
  // suffix, it is dropped so their history continues.
  function loadRuns(entry, keep) {
    const data = window.BENCHMARK_DATA;
    const entries = (data && data.entries && data.entries[entry]) || [];
    const re = /^Benchmark(\S+?)(?:-\d+)?(?: \([^)]*\))?(?: - (\S+))?$/;
    const runs = [];

    for (const e of entries) {
      const values = {};
      let found = false;

      for (const bench of e.benches) {
        const m = re.exec(bench.name);
        if (!m || !keep(m[1])) continue;
        const unit = m[2] || String(bench.unit).split(/\s/)[0];
        (values[m[1]] = values[m[1]] || {})[unit] = bench.value;
        found = true;
      }

      if (found) runs.push({ commit: e.commit, date: e.date, values });
    }

    return runs;
  }

  function value(run, name, unit) {
    const v = run && run.values[name];
    return v ? v[unit] : undefined;
  }

  function shortID(run) { return run.commit.id.slice(0, 7); }
  function subject(run) { return run.commit.message.split("\n")[0]; }

  // --- page pieces ---

  function meta(runs) {
    const latest = runs[runs.length - 1];
    document.getElementById("meta").replaceChildren(
      "Latest run: ",
      el("a", { href: latest.commit.url }, shortID(latest)),
      " (" + subject(latest) + "), " + new Date(latest.date).toLocaleString() +
        " · " + runs.length + (runs.length === 1 ? " run" : " runs") + " · raw data in ",
      el("a", { href: "data.js" }, "data.js"));
  }

  // filter is a segmented control, onChange receives the key of the option.
  function filter(label, options, current, onChange) {
    const group = el("div", { class: "segmented", role: "group", "aria-label": label });
    for (const o of options) {
      const b = el("button", { type: "button", "aria-pressed": String(o.key === current) }, o.label);
      b.addEventListener("click", () => onChange(o.key));
      group.append(b);
    }
    return el("div", { class: "filter" }, el("span", null, label), group);
  }

  // delta compares cur with prev, lower values are better.
  function delta(cur, prev) {
    if (cur === undefined || prev === undefined) return null;
    const p = (cur - prev) / prev * 100;
    if (Math.abs(p) < 0.05) return el("span", { class: "delta" }, "± 0% vs. previous run");
    const good = p < 0;
    return el("span", { class: "delta " + (good ? "good" : "bad") },
      (good ? "▼ " : "▲ ") + fmt.percent(p) + (good ? " faster" : " slower") + " than the previous run");
  }

  // change is the compact form of delta for table cells, e.g. "▼ 2.1%".
  // The direction carries the meaning with the color, lower is better.
  function change(cur, prev) {
    if (cur === undefined || prev === undefined) return "–";
    const p = (cur - prev) / prev * 100;
    if (Math.abs(p) < 0.05) return el("span", { class: "delta" }, "± 0%");
    const good = p < 0;
    return el("span", {
      class: "delta " + (good ? "good" : "bad"),
      title: (good ? "faster" : "slower") + " than the previous run",
    }, (good ? "▼ " : "▲ ") + fmt.percent(p));
  }

  // previous returns the latest run before the last one that has a value for
  // name, the run to compare the last one with.
  function previous(runs, name, unit) {
    for (let i = runs.length - 2; i >= 0; i--) {
      if (value(runs[i], name, unit) !== undefined) return runs[i];
    }
    return undefined;
  }

  function tile(label, val, ...details) {
    return el("div", { class: "tile" },
      el("div", { class: "label" }, label),
      el("div", { class: "value" }, val),
      details.filter(Boolean).map((d) => el("div", { class: "detail" }, d)));
  }

  function key(color) {
    const k = el("span", { class: "key" });
    k.style.background = cssVar(color);
    return k;
  }

  // table renders head (strings, first ones listed in textCols are left aligned)
  // and rows of cells (strings or nodes).
  function table(head, rows, textCols) {
    const left = (i) => (i < (textCols || 1) ? "text" : null);
    return el("div", { class: "table-wrap" },
      el("table", null,
        el("thead", null, el("tr", null, head.map((h, i) => el("th", { class: left(i) }, h)))),
        el("tbody", null, rows.map((r) => el("tr", null, r.map((c, i) => el("td", { class: left(i) }, c)))))));
  }

  // historyTable is the table view of a chart: every run, every series,
  // always shown, newest first.
  function historyTable(title, runs, series, format) {
    const rows = runs.slice().reverse().map((run) => [
      el("a", { href: run.commit.url }, shortID(run)),
      new Date(run.date).toLocaleString(),
      ...series.map((s) => {
        const v = s.get(run);
        return v === undefined ? "–" : format(v);
      }),
    ]);
    return el("div", { class: "history" },
      el("h3", null, title + " (" + runs.length + (runs.length === 1 ? " run)" : " runs)")),
      table(["Commit", "Date", ...series.map((s) => s.label)], rows, 2));
  }

  function markerSVG(color, point) {
    const ns = "http://www.w3.org/2000/svg";
    const make = (tag, attrs) => {
      const e = document.createElementNS(ns, tag);
      for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
      return e;
    };
    const svg = make("svg", { width: 28, height: 12, "aria-hidden": "true" });
    svg.append(make("line", { x1: 0, y1: 6, x2: 28, y2: 6, stroke: color, "stroke-width": 2 }));
    const ring = { fill: color, stroke: cssVar("--surface-1"), "stroke-width": 2 };
    if (point === "circle") svg.append(make("circle", { cx: 14, cy: 6, r: 4.5, ...ring }));
    else if (point === "triangle") svg.append(make("path", { d: "M14 0.5 L19.5 10.5 L8.5 10.5 Z", ...ring }));
    else if (point === "rectRot") svg.append(make("path", { d: "M14 0.5 L19.5 6 L14 11.5 L8.5 6 Z", ...ring }));
    else svg.append(make("rect", { x: 9.5, y: 1.5, width: 9, height: 9, rx: 2, ...ring }));
    return svg;
  }

  function legend(series) {
    return el("div", { class: "legend" },
      series.map((s) => el("span", null, markerSVG(cssVar(s.color), s.point), s.label)));
  }

  // --- charts ---

  const charts = [];

  function isDecade(v) { return v > 0 && /^10*$/.test(String(Math.round(v))); }

  // crosshair draws a hairline at the commit the tooltip shows.
  const crosshair = {
    id: "crosshair",
    afterDatasetsDraw(chart) {
      const active = chart.tooltip && chart.tooltip.getActiveElements();
      if (!active || !active.length) return;
      const x = active[0].element.x;
      const { top, bottom } = chart.chartArea;
      const ctx = chart.ctx;
      ctx.save();
      ctx.strokeStyle = cssVar("--axis");
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, top);
      ctx.lineTo(x, bottom);
      ctx.stroke();
      ctx.restore();
    },
  };

  // lineChart is a card with one line per series over the runs. A series has
  // a label, a color (CSS variable), a point style and get(run).
  function lineChart({ title, note, runs, series, format, log }) {
    const canvas = el("canvas", { role: "img", "aria-label": title + " per commit, the table below has the values" });
    const card = el("div", { class: "card" },
      el("h3", null, title),
      note ? el("p", { class: "muted" }, note) : null,
      el("div", { class: "plot" }, canvas));

    if (typeof Chart === "undefined") {
      canvas.replaceWith(el("p", { class: "muted" }, "The chart could not be loaded (Chart.js from jsdelivr), the tables have all values."));
      return card;
    }

    const surface = cssVar("--surface-1");
    const gridColor = cssVar("--grid");
    const muted = cssVar("--text-muted");
    const axis = cssVar("--axis");

    const datasets = series.map((s) => {
      const color = cssVar(s.color);
      return {
        label: s.label,
        data: runs.map((r) => s.get(r) ?? null),
        borderColor: color,
        backgroundColor: color,
        pointStyle: s.point,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderColor: surface,
        pointBorderWidth: 2,
        pointHitRadius: 12,
        borderWidth: 2,
        borderCapStyle: "round",
        borderJoinStyle: "round",
        spanGaps: true,
      };
    });

    charts.push(new Chart(canvas, {
      type: "line",
      data: { labels: runs.map(shortID), datasets },
      plugins: [crosshair],
      options: {
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: "index", intersect: false },
        layout: { padding: { top: 4, right: 8 } },
        scales: {
          x: {
            grid: { display: false },
            border: { color: axis },
            ticks: { color: muted, maxRotation: 0, autoSkip: true, font: { family: "ui-monospace, monospace", size: 11 } },
          },
          y: {
            type: log ? "logarithmic" : "linear",
            beginAtZero: !log,
            // Log scales only get a gridline at the labelled decades.
            grid: { color: (c) => (log && !isDecade(c.tick && c.tick.value) ? "transparent" : gridColor) },
            border: { display: false },
            ticks: {
              color: muted,
              maxTicksLimit: 6,
              font: { size: 11 },
              callback(v) {
                // Log scales tick at every digit, only label the decades.
                if (log && !isDecade(v)) return "";
                return fmt.tick(format(v));
              },
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: surface,
            borderColor: axis,
            borderWidth: 1,
            titleColor: cssVar("--text-primary"),
            bodyColor: cssVar("--text-primary"),
            footerColor: cssVar("--text-secondary"),
            footerFont: { weight: "normal" },
            usePointStyle: true,
            boxPadding: 4,
            padding: 10,
            callbacks: {
              title: (items) => {
                const run = runs[items[0].dataIndex];
                return shortID(run) + " · " + new Date(run.date).toLocaleDateString();
              },
              label: (item) => format(item.parsed.y) + "  " + item.dataset.label,
              labelColor: (item) => ({ borderColor: surface, backgroundColor: item.dataset.borderColor }),
              footer: (items) => subject(runs[items[0].dataIndex]),
            },
          },
        },
        onClick(_, elements) {
          if (elements.length) window.open(runs[elements[0].index].commit.url, "_blank", "noopener");
        },
      },
    }));

    return card;
  }

  // start renders the page and renders it again when the color scheme
  // changes, the charts read their colors once.
  function start(render) {
    const content = document.getElementById("content");
    const draw = () => {
      for (const c of charts.splice(0)) c.destroy();
      content.replaceChildren();
      render(content);
    };
    draw();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", draw);
    return draw;
  }

  function empty(content) {
    content.append(el("p", { class: "empty" }, "No results yet, they are added by the Benchmark workflow on every push to main."));
  }

  return {
    fmt, cssVar, el, loadRuns, value, previous, meta, filter, delta, change, tile, key, table,
    historyTable, legend, lineChart, start, empty,
  };
})();
