window.BENCHMARK_DATA = {
  "lastUpdate": 1794924034861,
  "repoUrl": "https://github.com/uponusolutions/deltasmtp",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be4910546bc5eb1ad2b41474f0e1c854c7e843d2",
          "message": "Merge pull request #13 from uponusolutions/fix/issue7\n\nfix: rework parse.go and reject if smtputf8 is necessary",
          "timestamp": "2026-11-17T14:47:52+01:00",
          "tree_id": "9f521b1ef5b89c9f0b7fdb9c2e69438650e38fa3",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/be4910546bc5eb1ad2b41474f0e1c854c7e843d2"
        },
        "date": 1794924034452,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 398445,
            "unit": "ns/op",
            "extra": "29379 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 389858,
            "unit": "ns/op",
            "extra": "30763 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 336141,
            "unit": "ns/op",
            "extra": "35733 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 332314,
            "unit": "ns/op",
            "extra": "36074 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 486704,
            "unit": "ns/op",
            "extra": "25082 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 367644,
            "unit": "ns/op",
            "extra": "32523 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 434901,
            "unit": "ns/op",
            "extra": "27542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 328242,
            "unit": "ns/op",
            "extra": "36477 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 34431091,
            "unit": "ns/op",
            "extra": "349 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 36062687,
            "unit": "ns/op",
            "extra": "346 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 47958809,
            "unit": "ns/op",
            "extra": "265 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 48158709,
            "unit": "ns/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 34697201,
            "unit": "ns/op",
            "extra": "346 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 34701852,
            "unit": "ns/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 44421409,
            "unit": "ns/op",
            "extra": "283 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 47859521,
            "unit": "ns/op",
            "extra": "262 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 28371609,
            "unit": "ns/op",
            "extra": "422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 23087666,
            "unit": "ns/op",
            "extra": "534 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 20311036,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 21648094,
            "unit": "ns/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 28028854,
            "unit": "ns/op",
            "extra": "439 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 22140489,
            "unit": "ns/op",
            "extra": "536 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/go-smtp)",
            "value": 21479970,
            "unit": "ns/op",
            "extra": "537 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/go-smtp)",
            "value": 20121431,
            "unit": "ns/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 21563104,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 1154477,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 21527289,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 1154699,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 21529704,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 948409,
            "unit": "ns/op",
            "extra": "12614 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 21532289,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 927440,
            "unit": "ns/op",
            "extra": "13058 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 19960667,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 749806,
            "unit": "ns/op",
            "extra": "15978 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 20229220,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 848438,
            "unit": "ns/op",
            "extra": "14130 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 20137035,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 966439,
            "unit": "ns/op",
            "extra": "12412 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream (github.com/uponusolutions/go-smtp/internal)",
            "value": 20338888,
            "unit": "ns/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork (github.com/uponusolutions/go-smtp/internal)",
            "value": 1063317,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          }
        ]
      }
    ]
  }
}