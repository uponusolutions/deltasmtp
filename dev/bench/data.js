window.BENCHMARK_DATA = {
  "lastUpdate": 1795543541368,
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
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "c3d314f76ce6673836556845d9e5bd21fea0394d",
          "message": "chore: go-smtp to deltasmtp",
          "timestamp": "2026-11-17T15:00:08+01:00",
          "tree_id": "7e2120a1b262c3f8cc3686ae832cea8277553094",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/c3d314f76ce6673836556845d9e5bd21fea0394d"
        },
        "date": 1794924526605,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 402179,
            "unit": "ns/op",
            "extra": "30424 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 390887,
            "unit": "ns/op",
            "extra": "30733 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 339435,
            "unit": "ns/op",
            "extra": "35434 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 334230,
            "unit": "ns/op",
            "extra": "35497 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 491718,
            "unit": "ns/op",
            "extra": "24493 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 374173,
            "unit": "ns/op",
            "extra": "32439 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 452762,
            "unit": "ns/op",
            "extra": "26200 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 331600,
            "unit": "ns/op",
            "extra": "36234 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 33451872,
            "unit": "ns/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 32438289,
            "unit": "ns/op",
            "extra": "373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 43680137,
            "unit": "ns/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 44261927,
            "unit": "ns/op",
            "extra": "274 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 32601236,
            "unit": "ns/op",
            "extra": "367 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 34143203,
            "unit": "ns/op",
            "extra": "351 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 46821249,
            "unit": "ns/op",
            "extra": "276 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 48087139,
            "unit": "ns/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 25113866,
            "unit": "ns/op",
            "extra": "474 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 20084911,
            "unit": "ns/op",
            "extra": "573 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 20863082,
            "unit": "ns/op",
            "extra": "565 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 19128012,
            "unit": "ns/op",
            "extra": "625 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 26728666,
            "unit": "ns/op",
            "extra": "471 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 20747049,
            "unit": "ns/op",
            "extra": "561 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 20514527,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 20217715,
            "unit": "ns/op",
            "extra": "612 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21659466,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1158112,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21553313,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1153938,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21514151,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 983638,
            "unit": "ns/op",
            "extra": "12146 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21557136,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 944942,
            "unit": "ns/op",
            "extra": "12717 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20010938,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 750779,
            "unit": "ns/op",
            "extra": "15936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20269245,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 850416,
            "unit": "ns/op",
            "extra": "14092 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20186673,
            "unit": "ns/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 968329,
            "unit": "ns/op",
            "extra": "12380 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20390328,
            "unit": "ns/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1068108,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "176130d040188fc4af24c07c6b440e9ccf7b2f6e",
          "message": "chore: rename smtp to deltasmtp",
          "timestamp": "2026-11-18T15:32:15+01:00",
          "tree_id": "e57772034225ab0f67b8d39e18fe015466882a2e",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/176130d040188fc4af24c07c6b440e9ccf7b2f6e"
        },
        "date": 1795012833670,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 393752,
            "unit": "ns/op",
            "extra": "30102 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 391637,
            "unit": "ns/op",
            "extra": "30844 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 337070,
            "unit": "ns/op",
            "extra": "34446 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 330010,
            "unit": "ns/op",
            "extra": "36495 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 468329,
            "unit": "ns/op",
            "extra": "25542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 366214,
            "unit": "ns/op",
            "extra": "32628 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 427971,
            "unit": "ns/op",
            "extra": "28032 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 332011,
            "unit": "ns/op",
            "extra": "35032 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 32929977,
            "unit": "ns/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 32757307,
            "unit": "ns/op",
            "extra": "362 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 45378616,
            "unit": "ns/op",
            "extra": "289 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 46545452,
            "unit": "ns/op",
            "extra": "264 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 34543585,
            "unit": "ns/op",
            "extra": "330 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 33121749,
            "unit": "ns/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 42643734,
            "unit": "ns/op",
            "extra": "277 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 41373021,
            "unit": "ns/op",
            "extra": "291 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 28441059,
            "unit": "ns/op",
            "extra": "420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 21182253,
            "unit": "ns/op",
            "extra": "530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 20765196,
            "unit": "ns/op",
            "extra": "583 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 20218717,
            "unit": "ns/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 28264893,
            "unit": "ns/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 20583569,
            "unit": "ns/op",
            "extra": "572 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 21670716,
            "unit": "ns/op",
            "extra": "580 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 19130580,
            "unit": "ns/op",
            "extra": "643 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21481965,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1155543,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21499566,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1154979,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21451434,
            "unit": "ns/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 919711,
            "unit": "ns/op",
            "extra": "13005 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 21506761,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 932492,
            "unit": "ns/op",
            "extra": "12903 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20130072,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 752867,
            "unit": "ns/op",
            "extra": "15924 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20196995,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 846761,
            "unit": "ns/op",
            "extra": "14167 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20192479,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 974297,
            "unit": "ns/op",
            "extra": "12303 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 20339510,
            "unit": "ns/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 1062990,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "44d351ba9294de7058fde1dc029039948bc34570",
          "message": "feat: pipelining and chunking on by default",
          "timestamp": "2026-11-19T13:05:39+01:00",
          "tree_id": "0c6e91fd4bd02013277e3c62fc28215a72e27334",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/44d351ba9294de7058fde1dc029039948bc34570"
        },
        "date": 1795090441144,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 144455,
            "unit": "ns/op",
            "extra": "81558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 141349,
            "unit": "ns/op",
            "extra": "84595 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 128713,
            "unit": "ns/op",
            "extra": "93327 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 126739,
            "unit": "ns/op",
            "extra": "94965 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 281934,
            "unit": "ns/op",
            "extra": "42484 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 132354,
            "unit": "ns/op",
            "extra": "89830 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 277427,
            "unit": "ns/op",
            "extra": "43371 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 118523,
            "unit": "ns/op",
            "extra": "101272 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 23323122,
            "unit": "ns/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 23153805,
            "unit": "ns/op",
            "extra": "514 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 23633537,
            "unit": "ns/op",
            "extra": "510 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 24327450,
            "unit": "ns/op",
            "extra": "481 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 23227244,
            "unit": "ns/op",
            "extra": "513 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 22990793,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 23983702,
            "unit": "ns/op",
            "extra": "486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 25672305,
            "unit": "ns/op",
            "extra": "482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 25039194,
            "unit": "ns/op",
            "extra": "478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 18038224,
            "unit": "ns/op",
            "extra": "661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 19765423,
            "unit": "ns/op",
            "extra": "602 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 17804022,
            "unit": "ns/op",
            "extra": "646 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 25132186,
            "unit": "ns/op",
            "extra": "475 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 17901444,
            "unit": "ns/op",
            "extra": "662 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader (github.com/uponusolutions/deltasmtp)",
            "value": 19771275,
            "unit": "ns/op",
            "extra": "610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader (github.com/uponusolutions/deltasmtp)",
            "value": 17503937,
            "unit": "ns/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 11568425,
            "unit": "ns/op",
            "extra": "1039 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 911676,
            "unit": "ns/op",
            "extra": "13165 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 11556416,
            "unit": "ns/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 915392,
            "unit": "ns/op",
            "extra": "13077 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 11798302,
            "unit": "ns/op",
            "extra": "1018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 694841,
            "unit": "ns/op",
            "extra": "17115 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 11828276,
            "unit": "ns/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 688573,
            "unit": "ns/op",
            "extra": "17319 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 9307807,
            "unit": "ns/op",
            "extra": "1291 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 536360,
            "unit": "ns/op",
            "extra": "22341 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 9510992,
            "unit": "ns/op",
            "extra": "1252 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 653195,
            "unit": "ns/op",
            "extra": "18339 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 10881069,
            "unit": "ns/op",
            "extra": "1101 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 590543,
            "unit": "ns/op",
            "extra": "20312 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream (github.com/uponusolutions/deltasmtp/internal)",
            "value": 11097653,
            "unit": "ns/op",
            "extra": "1081 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork (github.com/uponusolutions/deltasmtp/internal)",
            "value": 698334,
            "unit": "ns/op",
            "extra": "17113 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "3db3e9826f1ba4709d26c1c426415b5590e7e4e1",
          "message": "feat: compare benchmark, separate benchmark folder",
          "timestamp": "2026-11-19T13:44:15+01:00",
          "tree_id": "0d86cf1e617449049141e81f107eb85af7e847cc",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/3db3e9826f1ba4709d26c1c426415b5590e7e4e1"
        },
        "date": 1795092761645,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11478611,
            "unit": "ns/op",
            "extra": "1047 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 921531,
            "unit": "ns/op",
            "extra": "13021 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11415813,
            "unit": "ns/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 922838,
            "unit": "ns/op",
            "extra": "12928 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11615425,
            "unit": "ns/op",
            "extra": "1032 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 690674,
            "unit": "ns/op",
            "extra": "17158 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11628724,
            "unit": "ns/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 691627,
            "unit": "ns/op",
            "extra": "17136 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 9499685,
            "unit": "ns/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 533284,
            "unit": "ns/op",
            "extra": "22417 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 9486537,
            "unit": "ns/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 649320,
            "unit": "ns/op",
            "extra": "18469 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 9807583,
            "unit": "ns/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 566667,
            "unit": "ns/op",
            "extra": "21222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 10255007,
            "unit": "ns/op",
            "extra": "1168 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 680295,
            "unit": "ns/op",
            "extra": "17643 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 145862,
            "unit": "ns/op",
            "extra": "81370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 143498,
            "unit": "ns/op",
            "extra": "83373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 131372,
            "unit": "ns/op",
            "extra": "90790 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 128898,
            "unit": "ns/op",
            "extra": "93042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 284730,
            "unit": "ns/op",
            "extra": "41822 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 135566,
            "unit": "ns/op",
            "extra": "87290 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 279003,
            "unit": "ns/op",
            "extra": "42940 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 126579,
            "unit": "ns/op",
            "extra": "94974 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 28614562,
            "unit": "ns/op",
            "extra": "417 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 28237951,
            "unit": "ns/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 28749503,
            "unit": "ns/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 30109550,
            "unit": "ns/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 28206466,
            "unit": "ns/op",
            "extra": "422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 28222994,
            "unit": "ns/op",
            "extra": "426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 28319284,
            "unit": "ns/op",
            "extra": "420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 30168994,
            "unit": "ns/op",
            "extra": "403 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 25586541,
            "unit": "ns/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 23564636,
            "unit": "ns/op",
            "extra": "505 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 22691360,
            "unit": "ns/op",
            "extra": "518 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 23227324,
            "unit": "ns/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 26322955,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 23945348,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 23419184,
            "unit": "ns/op",
            "extra": "490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 23719506,
            "unit": "ns/op",
            "extra": "505 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "f09f10a34c5a2dcf778502ba672aa8ea6f98a809",
          "message": "fix: disable max transactions for benchmark",
          "timestamp": "2026-11-19T13:52:26+01:00",
          "tree_id": "889d177cbb159d22cc3e9a62e09856b347e77a33",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/f09f10a34c5a2dcf778502ba672aa8ea6f98a809"
        },
        "date": 1795093345328,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 21556364,
            "unit": "ns/op",
            "extra": "554 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1137409,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 21627235,
            "unit": "ns/op",
            "extra": "553 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1133459,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 21746590,
            "unit": "ns/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 950296,
            "unit": "ns/op",
            "extra": "12524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 21691185,
            "unit": "ns/op",
            "extra": "555 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 948727,
            "unit": "ns/op",
            "extra": "12621 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 17694800,
            "unit": "ns/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 744438,
            "unit": "ns/op",
            "extra": "16106 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 17951674,
            "unit": "ns/op",
            "extra": "664 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 842550,
            "unit": "ns/op",
            "extra": "14223 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 18307160,
            "unit": "ns/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 943186,
            "unit": "ns/op",
            "extra": "12722 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 18527653,
            "unit": "ns/op",
            "extra": "644 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1039396,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 398475,
            "unit": "ns/op",
            "extra": "30526 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 392875,
            "unit": "ns/op",
            "extra": "30723 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 123032,
            "unit": "ns/op",
            "extra": "97136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 118776,
            "unit": "ns/op",
            "extra": "101530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 335260,
            "unit": "ns/op",
            "extra": "35685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 337921,
            "unit": "ns/op",
            "extra": "36184 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 63619,
            "unit": "ns/op",
            "extra": "181926 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 60475,
            "unit": "ns/op",
            "extra": "197484 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 477343,
            "unit": "ns/op",
            "extra": "25468 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 369050,
            "unit": "ns/op",
            "extra": "32416 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 97009,
            "unit": "ns/op",
            "extra": "123258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 96245,
            "unit": "ns/op",
            "extra": "123142 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 431616,
            "unit": "ns/op",
            "extra": "28064 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 328622,
            "unit": "ns/op",
            "extra": "36498 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 56178,
            "unit": "ns/op",
            "extra": "212647 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 57081,
            "unit": "ns/op",
            "extra": "208076 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 45178792,
            "unit": "ns/op",
            "extra": "271 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 44425828,
            "unit": "ns/op",
            "extra": "278 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 56000337,
            "unit": "ns/op",
            "extra": "225 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 50706988,
            "unit": "ns/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 46945260,
            "unit": "ns/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 46138331,
            "unit": "ns/op",
            "extra": "256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 48936532,
            "unit": "ns/op",
            "extra": "246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 54886032,
            "unit": "ns/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 31194739,
            "unit": "ns/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 30829507,
            "unit": "ns/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 31820947,
            "unit": "ns/op",
            "extra": "343 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 33268355,
            "unit": "ns/op",
            "extra": "346 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 32602477,
            "unit": "ns/op",
            "extra": "356 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 30428612,
            "unit": "ns/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 27526753,
            "unit": "ns/op",
            "extra": "441 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 31323915,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "46d0d438878384db3d7e33205aa7a6f6ab10ec72",
          "message": "fix: compare benchmark view",
          "timestamp": "2026-11-19T14:09:34+01:00",
          "tree_id": "7d2e53bfd1c61edba7460ffefef1a344dd5453e0",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/46d0d438878384db3d7e33205aa7a6f6ab10ec72"
        },
        "date": 1795094379867,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11580871,
            "unit": "ns/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 925723,
            "unit": "ns/op",
            "extra": "12960 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11567633,
            "unit": "ns/op",
            "extra": "1035 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 919427,
            "unit": "ns/op",
            "extra": "13046 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11724254,
            "unit": "ns/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 693247,
            "unit": "ns/op",
            "extra": "17178 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11734628,
            "unit": "ns/op",
            "extra": "1018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 684469,
            "unit": "ns/op",
            "extra": "17440 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 9527937,
            "unit": "ns/op",
            "extra": "1257 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 534285,
            "unit": "ns/op",
            "extra": "22456 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 9518223,
            "unit": "ns/op",
            "extra": "1255 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 651382,
            "unit": "ns/op",
            "extra": "18385 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 9898230,
            "unit": "ns/op",
            "extra": "1203 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 571728,
            "unit": "ns/op",
            "extra": "20966 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 10329285,
            "unit": "ns/op",
            "extra": "1161 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 684381,
            "unit": "ns/op",
            "extra": "17532 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 153639,
            "unit": "ns/op",
            "extra": "78086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 150824,
            "unit": "ns/op",
            "extra": "78543 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 41968,
            "unit": "ns/op",
            "extra": "282685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 39033,
            "unit": "ns/op",
            "extra": "307651 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 138200,
            "unit": "ns/op",
            "extra": "85033 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 136100,
            "unit": "ns/op",
            "extra": "88797 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 25889,
            "unit": "ns/op",
            "extra": "457016 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 23268,
            "unit": "ns/op",
            "extra": "512852 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 289537,
            "unit": "ns/op",
            "extra": "41474 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 146239,
            "unit": "ns/op",
            "extra": "82525 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 31404,
            "unit": "ns/op",
            "extra": "371624 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 31502,
            "unit": "ns/op",
            "extra": "377360 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 280536,
            "unit": "ns/op",
            "extra": "42634 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 130058,
            "unit": "ns/op",
            "extra": "92720 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 20651,
            "unit": "ns/op",
            "extra": "567567 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 20838,
            "unit": "ns/op",
            "extra": "569988 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 29415302,
            "unit": "ns/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 28703112,
            "unit": "ns/op",
            "extra": "417 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 28883275,
            "unit": "ns/op",
            "extra": "393 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 28326594,
            "unit": "ns/op",
            "extra": "423 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 29073759,
            "unit": "ns/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 28986885,
            "unit": "ns/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 29026550,
            "unit": "ns/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 28938118,
            "unit": "ns/op",
            "extra": "412 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 30349452,
            "unit": "ns/op",
            "extra": "391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 24635941,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 31882859,
            "unit": "ns/op",
            "extra": "370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 25503906,
            "unit": "ns/op",
            "extra": "460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 30101824,
            "unit": "ns/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 24756535,
            "unit": "ns/op",
            "extra": "484 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 30750147,
            "unit": "ns/op",
            "extra": "392 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 25472245,
            "unit": "ns/op",
            "extra": "448 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "38062e6871d75d59dd4458333289dbd0fd6ecb19",
          "message": "feat: combined benchmark",
          "timestamp": "2026-11-19T14:22:26+01:00",
          "tree_id": "bd8a7e6eb26f20261055707e0d4762a5feb4bf5f",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/38062e6871d75d59dd4458333289dbd0fd6ecb19"
        },
        "date": 1795095141325,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22040661,
            "unit": "ns/op",
            "extra": "543 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1142742,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22064020,
            "unit": "ns/op",
            "extra": "548 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1141272,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 21672953,
            "unit": "ns/op",
            "extra": "550 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 922339,
            "unit": "ns/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 21983825,
            "unit": "ns/op",
            "extra": "546 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 907321,
            "unit": "ns/op",
            "extra": "13263 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 17471647,
            "unit": "ns/op",
            "extra": "687 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 748319,
            "unit": "ns/op",
            "extra": "16017 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 17822370,
            "unit": "ns/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 851974,
            "unit": "ns/op",
            "extra": "14090 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 17656758,
            "unit": "ns/op",
            "extra": "681 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 946530,
            "unit": "ns/op",
            "extra": "12669 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 18151231,
            "unit": "ns/op",
            "extra": "668 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1053012,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 403050,
            "unit": "ns/op",
            "extra": "29865 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 396735,
            "unit": "ns/op",
            "extra": "30212 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 124291,
            "unit": "ns/op",
            "extra": "91456 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 119520,
            "unit": "ns/op",
            "extra": "100020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 341742,
            "unit": "ns/op",
            "extra": "35107 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 338822,
            "unit": "ns/op",
            "extra": "35413 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 66099,
            "unit": "ns/op",
            "extra": "181363 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 62875,
            "unit": "ns/op",
            "extra": "194575 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 562797,
            "unit": "ns/op",
            "extra": "21286 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 374313,
            "unit": "ns/op",
            "extra": "31906 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 96476,
            "unit": "ns/op",
            "extra": "123429 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 97195,
            "unit": "ns/op",
            "extra": "124664 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 531985,
            "unit": "ns/op",
            "extra": "22321 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 335744,
            "unit": "ns/op",
            "extra": "35703 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 57734,
            "unit": "ns/op",
            "extra": "204778 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 57977,
            "unit": "ns/op",
            "extra": "206084 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 43100000,
            "unit": "ns/op",
            "extra": "284 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 43436540,
            "unit": "ns/op",
            "extra": "272 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 51308019,
            "unit": "ns/op",
            "extra": "235 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 55743740,
            "unit": "ns/op",
            "extra": "218 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 44410988,
            "unit": "ns/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 45596611,
            "unit": "ns/op",
            "extra": "272 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 55713738,
            "unit": "ns/op",
            "extra": "224 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 49325516,
            "unit": "ns/op",
            "extra": "254 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 32869742,
            "unit": "ns/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 29428386,
            "unit": "ns/op",
            "extra": "380 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 28080321,
            "unit": "ns/op",
            "extra": "396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 33128572,
            "unit": "ns/op",
            "extra": "358 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 32794446,
            "unit": "ns/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 30076472,
            "unit": "ns/op",
            "extra": "402 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 32149852,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 29760286,
            "unit": "ns/op",
            "extra": "391 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "827fb648ccf637a032c4553afc9ab3fc8585665c",
          "message": "feat: improve benchmark",
          "timestamp": "2026-11-19T14:24:47+01:00",
          "tree_id": "e3aef34c198e8be7cdcb86fc00be88e219bab54b",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/827fb648ccf637a032c4553afc9ab3fc8585665c"
        },
        "date": 1795095279391,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 15576744,
            "unit": "ns/op",
            "extra": "771 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1207922,
            "unit": "ns/op",
            "extra": "9913 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 15567955,
            "unit": "ns/op",
            "extra": "768 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1216028,
            "unit": "ns/op",
            "extra": "9891 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 15887111,
            "unit": "ns/op",
            "extra": "756 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 939814,
            "unit": "ns/op",
            "extra": "12748 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 15863726,
            "unit": "ns/op",
            "extra": "757 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 975077,
            "unit": "ns/op",
            "extra": "12285 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 13876397,
            "unit": "ns/op",
            "extra": "864 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 661695,
            "unit": "ns/op",
            "extra": "18108 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 14458702,
            "unit": "ns/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 790606,
            "unit": "ns/op",
            "extra": "15114 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 14241072,
            "unit": "ns/op",
            "extra": "844 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 697492,
            "unit": "ns/op",
            "extra": "17234 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 14599079,
            "unit": "ns/op",
            "extra": "819 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 825933,
            "unit": "ns/op",
            "extra": "14515 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 259269,
            "unit": "ns/op",
            "extra": "46226 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 255656,
            "unit": "ns/op",
            "extra": "46387 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 64238,
            "unit": "ns/op",
            "extra": "173818 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 59094,
            "unit": "ns/op",
            "extra": "202981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 232160,
            "unit": "ns/op",
            "extra": "51735 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 224532,
            "unit": "ns/op",
            "extra": "53194 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 38695,
            "unit": "ns/op",
            "extra": "308589 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 34572,
            "unit": "ns/op",
            "extra": "349635 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 397436,
            "unit": "ns/op",
            "extra": "30003 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 245000,
            "unit": "ns/op",
            "extra": "48877 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 47582,
            "unit": "ns/op",
            "extra": "250239 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 47993,
            "unit": "ns/op",
            "extra": "251083 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 373529,
            "unit": "ns/op",
            "extra": "31659 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 221687,
            "unit": "ns/op",
            "extra": "54450 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 30813,
            "unit": "ns/op",
            "extra": "388702 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 30975,
            "unit": "ns/op",
            "extra": "387243 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 29539412,
            "unit": "ns/op",
            "extra": "405 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 29327831,
            "unit": "ns/op",
            "extra": "402 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 31482762,
            "unit": "ns/op",
            "extra": "376 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 31408033,
            "unit": "ns/op",
            "extra": "364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 30092577,
            "unit": "ns/op",
            "extra": "408 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 29530083,
            "unit": "ns/op",
            "extra": "404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 31268674,
            "unit": "ns/op",
            "extra": "375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 30745795,
            "unit": "ns/op",
            "extra": "393 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 24798814,
            "unit": "ns/op",
            "extra": "465 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 21655567,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 23304444,
            "unit": "ns/op",
            "extra": "512 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 20812460,
            "unit": "ns/op",
            "extra": "574 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 25058960,
            "unit": "ns/op",
            "extra": "482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 21867529,
            "unit": "ns/op",
            "extra": "559 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 23548862,
            "unit": "ns/op",
            "extra": "498 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 21264254,
            "unit": "ns/op",
            "extra": "576 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "8b276eeaeac9c4c8ce73820892b93f890b8fd79b",
          "message": "chore: benchmark page",
          "timestamp": "2026-11-19T14:44:42+01:00",
          "tree_id": "a3ebdaeee834387446603fd8cfdc5e81e38cb8b9",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/8b276eeaeac9c4c8ce73820892b93f890b8fd79b"
        },
        "date": 1795096480182,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 21529507,
            "unit": "ns/op\t    4287 B/op\t       4 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 21529507,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1195259,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "9962 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1195259,
            "unit": "ns/op",
            "extra": "9962 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "9962 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "9962 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 21361315,
            "unit": "ns/op\t    4271 B/op\t       4 allocs/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 21361315,
            "unit": "ns/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4271,
            "unit": "B/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "562 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1191324,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1191324,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 21407960,
            "unit": "ns/op\t    4287 B/op\t       4 allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 21407960,
            "unit": "ns/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 890292,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13461 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 890292,
            "unit": "ns/op",
            "extra": "13461 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13461 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13461 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 21376925,
            "unit": "ns/op\t    4271 B/op\t       4 allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 21376925,
            "unit": "ns/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4271,
            "unit": "B/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "560 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 891503,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13441 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 891503,
            "unit": "ns/op",
            "extra": "13441 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13441 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13441 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 18914238,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 18914238,
            "unit": "ns/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "660 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 762235,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 762235,
            "unit": "ns/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15729 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 18509120,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 18509120,
            "unit": "ns/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 871275,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "13759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 871275,
            "unit": "ns/op",
            "extra": "13759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "13759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "13759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 19023127,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 19023127,
            "unit": "ns/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 854846,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "14018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 854846,
            "unit": "ns/op",
            "extra": "14018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "14018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14018 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 18572025,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "646 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 18572025,
            "unit": "ns/op",
            "extra": "646 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "646 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "646 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 977127,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "12282 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 977127,
            "unit": "ns/op",
            "extra": "12282 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "12282 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "12282 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 381193,
            "unit": "ns/op\t   75169 B/op\t     201 allocs/op",
            "extra": "31502 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 381193,
            "unit": "ns/op",
            "extra": "31502 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 75169,
            "unit": "B/op",
            "extra": "31502 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "31502 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 379537,
            "unit": "ns/op\t   42507 B/op\t     202 allocs/op",
            "extra": "31610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 379537,
            "unit": "ns/op",
            "extra": "31610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42507,
            "unit": "B/op",
            "extra": "31610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "31610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 125288,
            "unit": "ns/op\t   53866 B/op\t      92 allocs/op",
            "extra": "96392 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 125288,
            "unit": "ns/op",
            "extra": "96392 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 53866,
            "unit": "B/op",
            "extra": "96392 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "96392 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 122223,
            "unit": "ns/op\t   21184 B/op\t      93 allocs/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 122223,
            "unit": "ns/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 21184,
            "unit": "B/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "97990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 317073,
            "unit": "ns/op\t   75180 B/op\t     201 allocs/op",
            "extra": "37762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 317073,
            "unit": "ns/op",
            "extra": "37762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 75180,
            "unit": "B/op",
            "extra": "37762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 201,
            "unit": "allocs/op",
            "extra": "37762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 315330,
            "unit": "ns/op\t   42520 B/op\t     202 allocs/op",
            "extra": "38170 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 315330,
            "unit": "ns/op",
            "extra": "38170 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42520,
            "unit": "B/op",
            "extra": "38170 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 202,
            "unit": "allocs/op",
            "extra": "38170 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 63011,
            "unit": "ns/op\t   53867 B/op\t      92 allocs/op",
            "extra": "188907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 63011,
            "unit": "ns/op",
            "extra": "188907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 53867,
            "unit": "B/op",
            "extra": "188907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "188907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 60342,
            "unit": "ns/op\t   21184 B/op\t      93 allocs/op",
            "extra": "200218 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 60342,
            "unit": "ns/op",
            "extra": "200218 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 21184,
            "unit": "B/op",
            "extra": "200218 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 93,
            "unit": "allocs/op",
            "extra": "200218 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 458784,
            "unit": "ns/op\t 2141132 B/op\t     205 allocs/op",
            "extra": "26464 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 458784,
            "unit": "ns/op",
            "extra": "26464 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 2141132,
            "unit": "B/op",
            "extra": "26464 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "26464 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 353266,
            "unit": "ns/op\t   42524 B/op\t     205 allocs/op",
            "extra": "33927 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 353266,
            "unit": "ns/op",
            "extra": "33927 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42524,
            "unit": "B/op",
            "extra": "33927 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "33927 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 98477,
            "unit": "ns/op\t   21120 B/op\t      92 allocs/op",
            "extra": "121488 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 98477,
            "unit": "ns/op",
            "extra": "121488 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 21120,
            "unit": "B/op",
            "extra": "121488 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "121488 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 98472,
            "unit": "ns/op\t   21185 B/op\t      94 allocs/op",
            "extra": "121042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 98472,
            "unit": "ns/op",
            "extra": "121042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 21185,
            "unit": "B/op",
            "extra": "121042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "121042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 415781,
            "unit": "ns/op\t 2141096 B/op\t     205 allocs/op",
            "extra": "28597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 415781,
            "unit": "ns/op",
            "extra": "28597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 2141096,
            "unit": "B/op",
            "extra": "28597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "28597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 314702,
            "unit": "ns/op\t   42524 B/op\t     205 allocs/op",
            "extra": "38091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 314702,
            "unit": "ns/op",
            "extra": "38091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42524,
            "unit": "B/op",
            "extra": "38091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 205,
            "unit": "allocs/op",
            "extra": "38091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 57024,
            "unit": "ns/op\t   21111 B/op\t      92 allocs/op",
            "extra": "207007 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 57024,
            "unit": "ns/op",
            "extra": "207007 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 21111,
            "unit": "B/op",
            "extra": "207007 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 92,
            "unit": "allocs/op",
            "extra": "207007 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 57370,
            "unit": "ns/op\t   21184 B/op\t      94 allocs/op",
            "extra": "209104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 57370,
            "unit": "ns/op",
            "extra": "209104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 21184,
            "unit": "B/op",
            "extra": "209104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 94,
            "unit": "allocs/op",
            "extra": "209104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 44817124,
            "unit": "ns/op\t82056517 B/op\t     244 allocs/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 44817124,
            "unit": "ns/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 82056517,
            "unit": "B/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 244,
            "unit": "allocs/op",
            "extra": "267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 45634028,
            "unit": "ns/op\t82023873 B/op\t     245 allocs/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 45634028,
            "unit": "ns/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 82023873,
            "unit": "B/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 245,
            "unit": "allocs/op",
            "extra": "249 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 54487339,
            "unit": "ns/op\t82035147 B/op\t     135 allocs/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 54487339,
            "unit": "ns/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 82035147,
            "unit": "B/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 135,
            "unit": "allocs/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 55068047,
            "unit": "ns/op\t82002504 B/op\t     136 allocs/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 55068047,
            "unit": "ns/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 82002504,
            "unit": "B/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "223 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 48707588,
            "unit": "ns/op\t82056528 B/op\t     244 allocs/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 48707588,
            "unit": "ns/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 82056528,
            "unit": "B/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 244,
            "unit": "allocs/op",
            "extra": "255 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 45437030,
            "unit": "ns/op\t82023881 B/op\t     245 allocs/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 45437030,
            "unit": "ns/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 82023881,
            "unit": "B/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 245,
            "unit": "allocs/op",
            "extra": "258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 54971897,
            "unit": "ns/op\t82035143 B/op\t     135 allocs/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 54971897,
            "unit": "ns/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 82035143,
            "unit": "B/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 135,
            "unit": "allocs/op",
            "extra": "229 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 53030946,
            "unit": "ns/op\t82002481 B/op\t     136 allocs/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 53030946,
            "unit": "ns/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 82002481,
            "unit": "B/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 136,
            "unit": "allocs/op",
            "extra": "236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 33839212,
            "unit": "ns/op\t84123092 B/op\t     331 allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 33839212,
            "unit": "ns/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 84123092,
            "unit": "B/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 331,
            "unit": "allocs/op",
            "extra": "345 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 33142563,
            "unit": "ns/op\t82023896 B/op\t     248 allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 33142563,
            "unit": "ns/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 82023896,
            "unit": "B/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 248,
            "unit": "allocs/op",
            "extra": "372 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 29687007,
            "unit": "ns/op\t82009991 B/op\t     219 allocs/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 29687007,
            "unit": "ns/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 82009991,
            "unit": "B/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 219,
            "unit": "allocs/op",
            "extra": "385 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 31994419,
            "unit": "ns/op\t82002543 B/op\t     137 allocs/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 31994419,
            "unit": "ns/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 82002543,
            "unit": "B/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 33442786,
            "unit": "ns/op\t84123079 B/op\t     331 allocs/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 33442786,
            "unit": "ns/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 84123079,
            "unit": "B/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 331,
            "unit": "allocs/op",
            "extra": "354 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 32068335,
            "unit": "ns/op\t82023919 B/op\t     248 allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 32068335,
            "unit": "ns/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 82023919,
            "unit": "B/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 248,
            "unit": "allocs/op",
            "extra": "384 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 27978346,
            "unit": "ns/op\t82009144 B/op\t     219 allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 27978346,
            "unit": "ns/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 82009144,
            "unit": "B/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 219,
            "unit": "allocs/op",
            "extra": "454 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 31146100,
            "unit": "ns/op\t82002527 B/op\t     137 allocs/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 31146100,
            "unit": "ns/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 82002527,
            "unit": "B/op",
            "extra": "360 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 137,
            "unit": "allocs/op",
            "extra": "360 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "6397bf1c9cc30537930b4e29bc5d3f12e46430e3",
          "message": "feat: improve benchmark mailer",
          "timestamp": "2026-11-19T15:27:03+01:00",
          "tree_id": "b343a2af7d9de2b0bdb4b19ea909c3e22d86b1d3",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/6397bf1c9cc30537930b4e29bc5d3f12e46430e3"
        },
        "date": 1795099013136,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22749279,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22749279,
            "unit": "ns/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "522 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1148275,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1148275,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22763091,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22763091,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1147995,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1147995,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22708049,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22708049,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 901056,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13275 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 901056,
            "unit": "ns/op",
            "extra": "13275 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13275 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13275 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22660956,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22660956,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 900919,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13426 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 900919,
            "unit": "ns/op",
            "extra": "13426 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13426 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13426 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 17325444,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 17325444,
            "unit": "ns/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "691 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 750319,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 750319,
            "unit": "ns/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 17565511,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 17565511,
            "unit": "ns/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "672 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 842966,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 842966,
            "unit": "ns/op",
            "extra": "14230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 17542783,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 17542783,
            "unit": "ns/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "682 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 959422,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12508 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 959422,
            "unit": "ns/op",
            "extra": "12508 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12508 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12508 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 17738330,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 17738330,
            "unit": "ns/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1058405,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1058405,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 385252,
            "unit": "ns/op\t   62880 B/op\t     188 allocs/op",
            "extra": "31104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 385252,
            "unit": "ns/op",
            "extra": "31104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 62880,
            "unit": "B/op",
            "extra": "31104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "31104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 382297,
            "unit": "ns/op\t   30198 B/op\t     189 allocs/op",
            "extra": "31324 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 382297,
            "unit": "ns/op",
            "extra": "31324 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 30198,
            "unit": "B/op",
            "extra": "31324 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "31324 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 116601,
            "unit": "ns/op\t   41569 B/op\t      80 allocs/op",
            "extra": "103335 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 116601,
            "unit": "ns/op",
            "extra": "103335 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41569,
            "unit": "B/op",
            "extra": "103335 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "103335 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 112451,
            "unit": "ns/op\t    8895 B/op\t      81 allocs/op",
            "extra": "105477 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 112451,
            "unit": "ns/op",
            "extra": "105477 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "105477 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "105477 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 334067,
            "unit": "ns/op\t   62905 B/op\t     188 allocs/op",
            "extra": "35772 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 334067,
            "unit": "ns/op",
            "extra": "35772 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 62905,
            "unit": "B/op",
            "extra": "35772 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "35772 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 325443,
            "unit": "ns/op\t   30220 B/op\t     189 allocs/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 325443,
            "unit": "ns/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 30220,
            "unit": "B/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "36895 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 58612,
            "unit": "ns/op\t   41567 B/op\t      80 allocs/op",
            "extra": "199946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 58612,
            "unit": "ns/op",
            "extra": "199946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41567,
            "unit": "B/op",
            "extra": "199946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "199946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 55408,
            "unit": "ns/op\t    8893 B/op\t      81 allocs/op",
            "extra": "215428 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 55408,
            "unit": "ns/op",
            "extra": "215428 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8893,
            "unit": "B/op",
            "extra": "215428 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "215428 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 361197,
            "unit": "ns/op\t   31033 B/op\t     190 allocs/op",
            "extra": "32997 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 361197,
            "unit": "ns/op",
            "extra": "32997 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 31033,
            "unit": "B/op",
            "extra": "32997 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "32997 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 367098,
            "unit": "ns/op\t   30211 B/op\t     192 allocs/op",
            "extra": "33134 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 367098,
            "unit": "ns/op",
            "extra": "33134 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 30211,
            "unit": "B/op",
            "extra": "33134 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "33134 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 91424,
            "unit": "ns/op\t   10677 B/op\t      80 allocs/op",
            "extra": "129554 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 91424,
            "unit": "ns/op",
            "extra": "129554 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10677,
            "unit": "B/op",
            "extra": "129554 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "129554 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 90493,
            "unit": "ns/op\t    8897 B/op\t      82 allocs/op",
            "extra": "132081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 90493,
            "unit": "ns/op",
            "extra": "132081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8897,
            "unit": "B/op",
            "extra": "132081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "132081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 322362,
            "unit": "ns/op\t   31049 B/op\t     190 allocs/op",
            "extra": "37045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 322362,
            "unit": "ns/op",
            "extra": "37045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 31049,
            "unit": "B/op",
            "extra": "37045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "37045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 322427,
            "unit": "ns/op\t   30211 B/op\t     192 allocs/op",
            "extra": "37096 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 322427,
            "unit": "ns/op",
            "extra": "37096 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 30211,
            "unit": "B/op",
            "extra": "37096 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "37096 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 53742,
            "unit": "ns/op\t   10598 B/op\t      80 allocs/op",
            "extra": "222370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 53742,
            "unit": "ns/op",
            "extra": "222370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10598,
            "unit": "B/op",
            "extra": "222370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "222370 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 52725,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "221456 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 52725,
            "unit": "ns/op",
            "extra": "221456 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "221456 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "221456 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 17905077,
            "unit": "ns/op\t   62971 B/op\t     188 allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 17905077,
            "unit": "ns/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 62971,
            "unit": "B/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "673 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 17688040,
            "unit": "ns/op\t   30233 B/op\t     189 allocs/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 17688040,
            "unit": "ns/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 30233,
            "unit": "B/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "685 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 31695230,
            "unit": "ns/op\t   41595 B/op\t      80 allocs/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 31695230,
            "unit": "ns/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41595,
            "unit": "B/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "397 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 30701038,
            "unit": "ns/op\t    8933 B/op\t      81 allocs/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 30701038,
            "unit": "ns/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8933,
            "unit": "B/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 17949257,
            "unit": "ns/op\t   62994 B/op\t     188 allocs/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 17949257,
            "unit": "ns/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 62994,
            "unit": "B/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "663 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 17731179,
            "unit": "ns/op\t   30242 B/op\t     189 allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 17731179,
            "unit": "ns/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 30242,
            "unit": "B/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "675 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 20750575,
            "unit": "ns/op\t   41578 B/op\t      80 allocs/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 20750575,
            "unit": "ns/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41578,
            "unit": "B/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "568 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 30547972,
            "unit": "ns/op\t    8912 B/op\t      81 allocs/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 30547972,
            "unit": "ns/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8912,
            "unit": "B/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "406 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6426296,
            "unit": "ns/op\t   40182 B/op\t     274 allocs/op",
            "extra": "1862 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6426296,
            "unit": "ns/op",
            "extra": "1862 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 40182,
            "unit": "B/op",
            "extra": "1862 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "1862 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5826368,
            "unit": "ns/op\t   30238 B/op\t     192 allocs/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5826368,
            "unit": "ns/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 30238,
            "unit": "B/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2048 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 5938123,
            "unit": "ns/op\t   13155 B/op\t     164 allocs/op",
            "extra": "1886 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5938123,
            "unit": "ns/op",
            "extra": "1886 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 13155,
            "unit": "B/op",
            "extra": "1886 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1886 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 4278196,
            "unit": "ns/op\t    8903 B/op\t      82 allocs/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 4278196,
            "unit": "ns/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8903,
            "unit": "B/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6302753,
            "unit": "ns/op\t   44532 B/op\t     274 allocs/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6302753,
            "unit": "ns/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 44532,
            "unit": "B/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "1885 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 6111491,
            "unit": "ns/op\t   30235 B/op\t     192 allocs/op",
            "extra": "1995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 6111491,
            "unit": "ns/op",
            "extra": "1995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 30235,
            "unit": "B/op",
            "extra": "1995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "1995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 5643491,
            "unit": "ns/op\t   13088 B/op\t     164 allocs/op",
            "extra": "1952 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5643491,
            "unit": "ns/op",
            "extra": "1952 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 13088,
            "unit": "B/op",
            "extra": "1952 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "1952 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 4228314,
            "unit": "ns/op\t    8906 B/op\t      82 allocs/op",
            "extra": "2631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 4228314,
            "unit": "ns/op",
            "extra": "2631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8906,
            "unit": "B/op",
            "extra": "2631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "2631 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "a4a7c693e350d233e4b0aa4a522df803d66d14e7",
          "message": "feat: improve buffer defaults",
          "timestamp": "2026-11-19T16:56:28+01:00",
          "tree_id": "82e21b3dd84096c7e4650186525956e35576afeb",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/a4a7c693e350d233e4b0aa4a522df803d66d14e7"
        },
        "date": 1795104376557,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 17744720,
            "unit": "ns/op\t    4284 B/op\t       4 allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 17744720,
            "unit": "ns/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4284,
            "unit": "B/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 936729,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12825 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 936729,
            "unit": "ns/op",
            "extra": "12825 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12825 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12825 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 17684443,
            "unit": "ns/op\t    4268 B/op\t       4 allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 17684443,
            "unit": "ns/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4268,
            "unit": "B/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 931595,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12874 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 931595,
            "unit": "ns/op",
            "extra": "12874 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12874 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12874 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 17731609,
            "unit": "ns/op\t    4284 B/op\t       4 allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 17731609,
            "unit": "ns/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4284,
            "unit": "B/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 690412,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "17362 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 690412,
            "unit": "ns/op",
            "extra": "17362 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "17362 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17362 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 17642143,
            "unit": "ns/op\t    4268 B/op\t       4 allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 17642143,
            "unit": "ns/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4268,
            "unit": "B/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "680 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 687286,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "17479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 687286,
            "unit": "ns/op",
            "extra": "17479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "17479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 14074273,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 14074273,
            "unit": "ns/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "853 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 590219,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "20329 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 590219,
            "unit": "ns/op",
            "extra": "20329 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "20329 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20329 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 14291660,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "832 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 14291660,
            "unit": "ns/op",
            "extra": "832 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "832 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "832 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 673172,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "17816 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 673172,
            "unit": "ns/op",
            "extra": "17816 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "17816 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "17816 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 14175104,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 14175104,
            "unit": "ns/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "846 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 661499,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "18157 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 661499,
            "unit": "ns/op",
            "extra": "18157 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "18157 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "18157 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 14414565,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 14414565,
            "unit": "ns/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "834 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 757177,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "15849 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 757177,
            "unit": "ns/op",
            "extra": "15849 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "15849 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "15849 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 289945,
            "unit": "ns/op\t  120248 B/op\t     188 allocs/op",
            "extra": "41362 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 289945,
            "unit": "ns/op",
            "extra": "41362 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120248,
            "unit": "B/op",
            "extra": "41362 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "41362 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 288263,
            "unit": "ns/op\t   87556 B/op\t     189 allocs/op",
            "extra": "41726 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 288263,
            "unit": "ns/op",
            "extra": "41726 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87556,
            "unit": "B/op",
            "extra": "41726 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "41726 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 94203,
            "unit": "ns/op\t   41570 B/op\t      80 allocs/op",
            "extra": "126698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 94203,
            "unit": "ns/op",
            "extra": "126698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41570,
            "unit": "B/op",
            "extra": "126698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "126698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 92257,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "129492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 92257,
            "unit": "ns/op",
            "extra": "129492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "129492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "129492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 240141,
            "unit": "ns/op\t  120268 B/op\t     188 allocs/op",
            "extra": "49906 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 240141,
            "unit": "ns/op",
            "extra": "49906 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120268,
            "unit": "B/op",
            "extra": "49906 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "49906 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 238298,
            "unit": "ns/op\t   87580 B/op\t     189 allocs/op",
            "extra": "50298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 238298,
            "unit": "ns/op",
            "extra": "50298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87580,
            "unit": "B/op",
            "extra": "50298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "50298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 45469,
            "unit": "ns/op\t   41568 B/op\t      80 allocs/op",
            "extra": "260348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 45469,
            "unit": "ns/op",
            "extra": "260348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41568,
            "unit": "B/op",
            "extra": "260348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "260348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 44353,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "271146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 44353,
            "unit": "ns/op",
            "extra": "271146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "271146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "271146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 269223,
            "unit": "ns/op\t   87961 B/op\t     190 allocs/op",
            "extra": "44530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 269223,
            "unit": "ns/op",
            "extra": "44530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 87961,
            "unit": "B/op",
            "extra": "44530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "44530 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 268761,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "44558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 268761,
            "unit": "ns/op",
            "extra": "44558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "44558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "44558 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 74671,
            "unit": "ns/op\t   10511 B/op\t      80 allocs/op",
            "extra": "159475 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 74671,
            "unit": "ns/op",
            "extra": "159475 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10511,
            "unit": "B/op",
            "extra": "159475 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "159475 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 74425,
            "unit": "ns/op\t    8895 B/op\t      82 allocs/op",
            "extra": "161342 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 74425,
            "unit": "ns/op",
            "extra": "161342 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "161342 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "161342 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 235358,
            "unit": "ns/op\t   88193 B/op\t     190 allocs/op",
            "extra": "50692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 235358,
            "unit": "ns/op",
            "extra": "50692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88193,
            "unit": "B/op",
            "extra": "50692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "50692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 236798,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "50760 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 236798,
            "unit": "ns/op",
            "extra": "50760 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "50760 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "50760 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 42455,
            "unit": "ns/op\t   10436 B/op\t      80 allocs/op",
            "extra": "275490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 42455,
            "unit": "ns/op",
            "extra": "275490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10436,
            "unit": "B/op",
            "extra": "275490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "275490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 41770,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "284395 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 41770,
            "unit": "ns/op",
            "extra": "284395 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "284395 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "284395 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 8727396,
            "unit": "ns/op\t  120371 B/op\t     188 allocs/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 8727396,
            "unit": "ns/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120371,
            "unit": "B/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 8298641,
            "unit": "ns/op\t   87645 B/op\t     189 allocs/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 8298641,
            "unit": "ns/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87645,
            "unit": "B/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1441 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 9263274,
            "unit": "ns/op\t   41567 B/op\t      80 allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 9263274,
            "unit": "ns/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41567,
            "unit": "B/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 8876378,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 8876378,
            "unit": "ns/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 8688377,
            "unit": "ns/op\t  120396 B/op\t     188 allocs/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 8688377,
            "unit": "ns/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120396,
            "unit": "B/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1380 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 8254034,
            "unit": "ns/op\t   87648 B/op\t     189 allocs/op",
            "extra": "1450 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 8254034,
            "unit": "ns/op",
            "extra": "1450 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87648,
            "unit": "B/op",
            "extra": "1450 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1450 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 9205674,
            "unit": "ns/op\t   41562 B/op\t      80 allocs/op",
            "extra": "1332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 9205674,
            "unit": "ns/op",
            "extra": "1332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41562,
            "unit": "B/op",
            "extra": "1332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 8781268,
            "unit": "ns/op\t    8900 B/op\t      81 allocs/op",
            "extra": "1434 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 8781268,
            "unit": "ns/op",
            "extra": "1434 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8900,
            "unit": "B/op",
            "extra": "1434 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1434 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 4649473,
            "unit": "ns/op\t  117090 B/op\t     274 allocs/op",
            "extra": "2524 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 4649473,
            "unit": "ns/op",
            "extra": "2524 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 117090,
            "unit": "B/op",
            "extra": "2524 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2524 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3780130,
            "unit": "ns/op\t   87654 B/op\t     192 allocs/op",
            "extra": "3206 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3780130,
            "unit": "ns/op",
            "extra": "3206 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87654,
            "unit": "B/op",
            "extra": "3206 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3206 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3933216,
            "unit": "ns/op\t   13819 B/op\t     164 allocs/op",
            "extra": "2907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3933216,
            "unit": "ns/op",
            "extra": "2907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 13819,
            "unit": "B/op",
            "extra": "2907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2907 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2954928,
            "unit": "ns/op\t    8903 B/op\t      82 allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2954928,
            "unit": "ns/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8903,
            "unit": "B/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "3810 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4642576,
            "unit": "ns/op\t  112585 B/op\t     274 allocs/op",
            "extra": "2562 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4642576,
            "unit": "ns/op",
            "extra": "2562 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 112585,
            "unit": "B/op",
            "extra": "2562 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2562 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3728164,
            "unit": "ns/op\t   87635 B/op\t     192 allocs/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3728164,
            "unit": "ns/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87635,
            "unit": "B/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3231 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4016661,
            "unit": "ns/op\t   13335 B/op\t     164 allocs/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4016661,
            "unit": "ns/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 13335,
            "unit": "B/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2622 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2929758,
            "unit": "ns/op\t    8901 B/op\t      82 allocs/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2929758,
            "unit": "ns/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8901,
            "unit": "B/op",
            "extra": "3936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "3936 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "41f9233aa42a9cb6743d660eb4be3754b2049dbe",
          "message": "chore: pages",
          "timestamp": "2026-11-20T10:37:28+01:00",
          "tree_id": "4d91ba64cd76ad3a74457e88c347fd710b6af452",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/41f9233aa42a9cb6743d660eb4be3754b2049dbe"
        },
        "date": 1795168039459,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22884509,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22884509,
            "unit": "ns/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1210255,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1210255,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22915188,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22915188,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1207998,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1207998,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22745743,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22745743,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 890551,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 890551,
            "unit": "ns/op",
            "extra": "13479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13479 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22772635,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22772635,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 890848,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13478 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 890848,
            "unit": "ns/op",
            "extra": "13478 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13478 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13478 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 18137517,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "657 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 18137517,
            "unit": "ns/op",
            "extra": "657 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "657 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "657 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 760817,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 760817,
            "unit": "ns/op",
            "extra": "15759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 18367702,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 18367702,
            "unit": "ns/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "652 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 868284,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "13820 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 868284,
            "unit": "ns/op",
            "extra": "13820 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "13820 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "13820 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 18346924,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "654 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 18346924,
            "unit": "ns/op",
            "extra": "654 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "654 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "654 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 854190,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "14043 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 854190,
            "unit": "ns/op",
            "extra": "14043 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "14043 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14043 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 18559366,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 18559366,
            "unit": "ns/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "650 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 976149,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 976149,
            "unit": "ns/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "12295 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 377820,
            "unit": "ns/op\t  120257 B/op\t     188 allocs/op",
            "extra": "31759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 377820,
            "unit": "ns/op",
            "extra": "31759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120257,
            "unit": "B/op",
            "extra": "31759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "31759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 377615,
            "unit": "ns/op\t   87556 B/op\t     189 allocs/op",
            "extra": "31898 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 377615,
            "unit": "ns/op",
            "extra": "31898 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87556,
            "unit": "B/op",
            "extra": "31898 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "31898 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 120492,
            "unit": "ns/op\t   41570 B/op\t      80 allocs/op",
            "extra": "98818 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 120492,
            "unit": "ns/op",
            "extra": "98818 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41570,
            "unit": "B/op",
            "extra": "98818 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "98818 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 118541,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "101138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 118541,
            "unit": "ns/op",
            "extra": "101138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "101138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "101138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 315660,
            "unit": "ns/op\t  120281 B/op\t     188 allocs/op",
            "extra": "38020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 315660,
            "unit": "ns/op",
            "extra": "38020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120281,
            "unit": "B/op",
            "extra": "38020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "38020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 312353,
            "unit": "ns/op\t   87586 B/op\t     189 allocs/op",
            "extra": "38376 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 312353,
            "unit": "ns/op",
            "extra": "38376 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87586,
            "unit": "B/op",
            "extra": "38376 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "38376 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 58997,
            "unit": "ns/op\t   41566 B/op\t      80 allocs/op",
            "extra": "201908 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 58997,
            "unit": "ns/op",
            "extra": "201908 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41566,
            "unit": "B/op",
            "extra": "201908 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "201908 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 56616,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "212394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 56616,
            "unit": "ns/op",
            "extra": "212394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "212394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "212394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 353201,
            "unit": "ns/op\t   87803 B/op\t     190 allocs/op",
            "extra": "33835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 353201,
            "unit": "ns/op",
            "extra": "33835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 87803,
            "unit": "B/op",
            "extra": "33835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "33835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 350512,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "34201 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 350512,
            "unit": "ns/op",
            "extra": "34201 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "34201 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "34201 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 95643,
            "unit": "ns/op\t   10125 B/op\t      80 allocs/op",
            "extra": "124725 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 95643,
            "unit": "ns/op",
            "extra": "124725 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10125,
            "unit": "B/op",
            "extra": "124725 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "124725 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 95210,
            "unit": "ns/op\t    8895 B/op\t      82 allocs/op",
            "extra": "125672 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 95210,
            "unit": "ns/op",
            "extra": "125672 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "125672 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "125672 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 308352,
            "unit": "ns/op\t   88524 B/op\t     190 allocs/op",
            "extra": "38644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 308352,
            "unit": "ns/op",
            "extra": "38644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88524,
            "unit": "B/op",
            "extra": "38644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "38644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 308345,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "38835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 308345,
            "unit": "ns/op",
            "extra": "38835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "38835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "38835 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 54478,
            "unit": "ns/op\t   10574 B/op\t      80 allocs/op",
            "extra": "216976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 54478,
            "unit": "ns/op",
            "extra": "216976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10574,
            "unit": "B/op",
            "extra": "216976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "216976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 53816,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "222734 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 53816,
            "unit": "ns/op",
            "extra": "222734 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "222734 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "222734 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 12239777,
            "unit": "ns/op\t  120351 B/op\t     188 allocs/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 12239777,
            "unit": "ns/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120351,
            "unit": "B/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "969 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 11795397,
            "unit": "ns/op\t   87688 B/op\t     189 allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 11795397,
            "unit": "ns/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87688,
            "unit": "B/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11405217,
            "unit": "ns/op\t   41565 B/op\t      80 allocs/op",
            "extra": "1074 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11405217,
            "unit": "ns/op",
            "extra": "1074 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41565,
            "unit": "B/op",
            "extra": "1074 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1074 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 10666511,
            "unit": "ns/op\t    8912 B/op\t      81 allocs/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 10666511,
            "unit": "ns/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8912,
            "unit": "B/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 12154314,
            "unit": "ns/op\t  120388 B/op\t     188 allocs/op",
            "extra": "984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 12154314,
            "unit": "ns/op",
            "extra": "984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120388,
            "unit": "B/op",
            "extra": "984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 11697979,
            "unit": "ns/op\t   87679 B/op\t     189 allocs/op",
            "extra": "1020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 11697979,
            "unit": "ns/op",
            "extra": "1020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87679,
            "unit": "B/op",
            "extra": "1020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1020 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11102468,
            "unit": "ns/op\t   41573 B/op\t      80 allocs/op",
            "extra": "1082 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11102468,
            "unit": "ns/op",
            "extra": "1082 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41573,
            "unit": "B/op",
            "extra": "1082 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1082 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10527038,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "1177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10527038,
            "unit": "ns/op",
            "extra": "1177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "1177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5687350,
            "unit": "ns/op\t  104850 B/op\t     274 allocs/op",
            "extra": "2072 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5687350,
            "unit": "ns/op",
            "extra": "2072 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 104850,
            "unit": "B/op",
            "extra": "2072 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2072 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 4801688,
            "unit": "ns/op\t   87603 B/op\t     192 allocs/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4801688,
            "unit": "ns/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87603,
            "unit": "B/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 5079240,
            "unit": "ns/op\t   12926 B/op\t     164 allocs/op",
            "extra": "2106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5079240,
            "unit": "ns/op",
            "extra": "2106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 12926,
            "unit": "B/op",
            "extra": "2106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3802486,
            "unit": "ns/op\t    8905 B/op\t      82 allocs/op",
            "extra": "2931 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3802486,
            "unit": "ns/op",
            "extra": "2931 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8905,
            "unit": "B/op",
            "extra": "2931 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "2931 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 5659835,
            "unit": "ns/op\t  102718 B/op\t     274 allocs/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5659835,
            "unit": "ns/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 102718,
            "unit": "B/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 4731378,
            "unit": "ns/op\t   87619 B/op\t     192 allocs/op",
            "extra": "2527 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4731378,
            "unit": "ns/op",
            "extra": "2527 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87619,
            "unit": "B/op",
            "extra": "2527 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2527 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 5019273,
            "unit": "ns/op\t   13899 B/op\t     164 allocs/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5019273,
            "unit": "ns/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 13899,
            "unit": "B/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3727175,
            "unit": "ns/op\t    8899 B/op\t      82 allocs/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3727175,
            "unit": "ns/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8899,
            "unit": "B/op",
            "extra": "3090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "3090 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "e57557eebb26bc5f2fe0776d3476ad86ec9a4e90",
          "message": "chore: devcontainer, tools",
          "timestamp": "2026-11-20T11:02:11+01:00",
          "tree_id": "76a13b3b08deacac4d021873d54a43aaf10dff8d",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/e57557eebb26bc5f2fe0776d3476ad86ec9a4e90"
        },
        "date": 1795169521643,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11708146,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 11708146,
            "unit": "ns/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 788336,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "14968 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 788336,
            "unit": "ns/op",
            "extra": "14968 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "14968 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14968 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11521000,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11521000,
            "unit": "ns/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1063 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 765095,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "15667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 765095,
            "unit": "ns/op",
            "extra": "15667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "15667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11534455,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 11534455,
            "unit": "ns/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1017 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 514592,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "23410 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 514592,
            "unit": "ns/op",
            "extra": "23410 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "23410 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "23410 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11667293,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 11667293,
            "unit": "ns/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 525820,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "23340 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 525820,
            "unit": "ns/op",
            "extra": "23340 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "23340 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "23340 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 11326313,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1052 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 11326313,
            "unit": "ns/op",
            "extra": "1052 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1052 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1052 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 448359,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "26743 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 448359,
            "unit": "ns/op",
            "extra": "26743 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "26743 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "26743 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 10339864,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 10339864,
            "unit": "ns/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 509376,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "23494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 509376,
            "unit": "ns/op",
            "extra": "23494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "23494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "23494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 9872580,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 9872580,
            "unit": "ns/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1314 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 491603,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "24219 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 491603,
            "unit": "ns/op",
            "extra": "24219 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "24219 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "24219 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 9985623,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 9985623,
            "unit": "ns/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1261 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 555412,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "21428 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 555412,
            "unit": "ns/op",
            "extra": "21428 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "21428 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "21428 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 220078,
            "unit": "ns/op\t  120218 B/op\t     188 allocs/op",
            "extra": "55060 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 220078,
            "unit": "ns/op",
            "extra": "55060 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120218,
            "unit": "B/op",
            "extra": "55060 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "55060 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 223416,
            "unit": "ns/op\t   87548 B/op\t     189 allocs/op",
            "extra": "54840 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 223416,
            "unit": "ns/op",
            "extra": "54840 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87548,
            "unit": "B/op",
            "extra": "54840 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "54840 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 81809,
            "unit": "ns/op\t   41571 B/op\t      80 allocs/op",
            "extra": "142137 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 81809,
            "unit": "ns/op",
            "extra": "142137 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41571,
            "unit": "B/op",
            "extra": "142137 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "142137 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 81920,
            "unit": "ns/op\t    8895 B/op\t      81 allocs/op",
            "extra": "146178 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 81920,
            "unit": "ns/op",
            "extra": "146178 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "146178 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "146178 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 180108,
            "unit": "ns/op\t  120250 B/op\t     188 allocs/op",
            "extra": "63322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 180108,
            "unit": "ns/op",
            "extra": "63322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120250,
            "unit": "B/op",
            "extra": "63322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "63322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 178812,
            "unit": "ns/op\t   87581 B/op\t     189 allocs/op",
            "extra": "68041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 178812,
            "unit": "ns/op",
            "extra": "68041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87581,
            "unit": "B/op",
            "extra": "68041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "68041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 37285,
            "unit": "ns/op\t   41566 B/op\t      80 allocs/op",
            "extra": "322942 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 37285,
            "unit": "ns/op",
            "extra": "322942 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41566,
            "unit": "B/op",
            "extra": "322942 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "322942 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 36636,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "325332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 36636,
            "unit": "ns/op",
            "extra": "325332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "325332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "325332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 201844,
            "unit": "ns/op\t   88378 B/op\t     190 allocs/op",
            "extra": "59248 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 201844,
            "unit": "ns/op",
            "extra": "59248 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 88378,
            "unit": "B/op",
            "extra": "59248 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "59248 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 201746,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "59461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 201746,
            "unit": "ns/op",
            "extra": "59461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "59461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "59461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 63666,
            "unit": "ns/op\t   10499 B/op\t      80 allocs/op",
            "extra": "189330 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 63666,
            "unit": "ns/op",
            "extra": "189330 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10499,
            "unit": "B/op",
            "extra": "189330 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "189330 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 63216,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "189702 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 63216,
            "unit": "ns/op",
            "extra": "189702 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "189702 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "189702 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 177688,
            "unit": "ns/op\t   88164 B/op\t     190 allocs/op",
            "extra": "68833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 177688,
            "unit": "ns/op",
            "extra": "68833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88164,
            "unit": "B/op",
            "extra": "68833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "68833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 184672,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "66180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 184672,
            "unit": "ns/op",
            "extra": "66180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "66180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "66180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 35471,
            "unit": "ns/op\t   10458 B/op\t      80 allocs/op",
            "extra": "330586 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 35471,
            "unit": "ns/op",
            "extra": "330586 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10458,
            "unit": "B/op",
            "extra": "330586 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "330586 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 35519,
            "unit": "ns/op\t    8895 B/op\t      82 allocs/op",
            "extra": "344234 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 35519,
            "unit": "ns/op",
            "extra": "344234 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "344234 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "344234 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6066476,
            "unit": "ns/op\t  120371 B/op\t     188 allocs/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6066476,
            "unit": "ns/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120371,
            "unit": "B/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 5820734,
            "unit": "ns/op\t   87630 B/op\t     189 allocs/op",
            "extra": "2068 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5820734,
            "unit": "ns/op",
            "extra": "2068 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87630,
            "unit": "B/op",
            "extra": "2068 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "2068 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 5886320,
            "unit": "ns/op\t   41560 B/op\t      80 allocs/op",
            "extra": "2092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5886320,
            "unit": "ns/op",
            "extra": "2092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41560,
            "unit": "B/op",
            "extra": "2092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "2092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 5842365,
            "unit": "ns/op\t    8897 B/op\t      81 allocs/op",
            "extra": "2187 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 5842365,
            "unit": "ns/op",
            "extra": "2187 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8897,
            "unit": "B/op",
            "extra": "2187 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "2187 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 6332518,
            "unit": "ns/op\t  120337 B/op\t     188 allocs/op",
            "extra": "1903 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6332518,
            "unit": "ns/op",
            "extra": "1903 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120337,
            "unit": "B/op",
            "extra": "1903 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1903 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 6145140,
            "unit": "ns/op\t   87675 B/op\t     189 allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 6145140,
            "unit": "ns/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87675,
            "unit": "B/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 5795700,
            "unit": "ns/op\t   41556 B/op\t      80 allocs/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5795700,
            "unit": "ns/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41556,
            "unit": "B/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "2090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 5756562,
            "unit": "ns/op\t    8897 B/op\t      81 allocs/op",
            "extra": "2138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 5756562,
            "unit": "ns/op",
            "extra": "2138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8897,
            "unit": "B/op",
            "extra": "2138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "2138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 3947100,
            "unit": "ns/op\t  106258 B/op\t     274 allocs/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 3947100,
            "unit": "ns/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 106258,
            "unit": "B/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3563735,
            "unit": "ns/op\t   87645 B/op\t     192 allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3563735,
            "unit": "ns/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87645,
            "unit": "B/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3298 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3646359,
            "unit": "ns/op\t   13879 B/op\t     164 allocs/op",
            "extra": "2851 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3646359,
            "unit": "ns/op",
            "extra": "2851 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 13879,
            "unit": "B/op",
            "extra": "2851 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2851 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2750236,
            "unit": "ns/op\t    8902 B/op\t      82 allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2750236,
            "unit": "ns/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8902,
            "unit": "B/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "4317 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4152021,
            "unit": "ns/op\t  111152 B/op\t     274 allocs/op",
            "extra": "2732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4152021,
            "unit": "ns/op",
            "extra": "2732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 111152,
            "unit": "B/op",
            "extra": "2732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3196437,
            "unit": "ns/op\t   87647 B/op\t     192 allocs/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3196437,
            "unit": "ns/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87647,
            "unit": "B/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 3502063,
            "unit": "ns/op\t   12701 B/op\t     164 allocs/op",
            "extra": "3549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3502063,
            "unit": "ns/op",
            "extra": "3549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 12701,
            "unit": "B/op",
            "extra": "3549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "3549 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2361700,
            "unit": "ns/op\t    8903 B/op\t      82 allocs/op",
            "extra": "5150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2361700,
            "unit": "ns/op",
            "extra": "5150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8903,
            "unit": "B/op",
            "extra": "5150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "5150 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "7867782243d71f8938b2b5c7cd355a3921aaae90",
          "message": "chore: devcontainer",
          "timestamp": "2026-11-20T11:14:13+01:00",
          "tree_id": "21ba962db9149de931fc8ba5c28f8d687b5eb8ad",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/7867782243d71f8938b2b5c7cd355a3921aaae90"
        },
        "date": 1795170246029,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22834000,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22834000,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1213386,
            "unit": "ns/op\t    4273 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1213386,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4273,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22798275,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22798275,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1207866,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1207866,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22806466,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22806466,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 890217,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13466 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 890217,
            "unit": "ns/op",
            "extra": "13466 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13466 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13466 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22702679,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22702679,
            "unit": "ns/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "529 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 891017,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13462 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 891017,
            "unit": "ns/op",
            "extra": "13462 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13462 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13462 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 18164339,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 18164339,
            "unit": "ns/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "658 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 763148,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 763148,
            "unit": "ns/op",
            "extra": "15730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 18378698,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "651 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 18378698,
            "unit": "ns/op",
            "extra": "651 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "651 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "651 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 871003,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "13768 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 871003,
            "unit": "ns/op",
            "extra": "13768 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "13768 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "13768 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 17968522,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 17968522,
            "unit": "ns/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "655 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 852345,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "14065 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 852345,
            "unit": "ns/op",
            "extra": "14065 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "14065 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14065 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 18539413,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "643 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 18539413,
            "unit": "ns/op",
            "extra": "643 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "643 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "643 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 975367,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "12304 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 975367,
            "unit": "ns/op",
            "extra": "12304 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "12304 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "12304 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 378788,
            "unit": "ns/op\t  120237 B/op\t     188 allocs/op",
            "extra": "31770 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 378788,
            "unit": "ns/op",
            "extra": "31770 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120237,
            "unit": "B/op",
            "extra": "31770 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "31770 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 376691,
            "unit": "ns/op\t   87547 B/op\t     189 allocs/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 376691,
            "unit": "ns/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87547,
            "unit": "B/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "31754 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 121946,
            "unit": "ns/op\t   41571 B/op\t      80 allocs/op",
            "extra": "98478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 121946,
            "unit": "ns/op",
            "extra": "98478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41571,
            "unit": "B/op",
            "extra": "98478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "98478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 118394,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "100382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 118394,
            "unit": "ns/op",
            "extra": "100382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "100382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "100382 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 314701,
            "unit": "ns/op\t  120278 B/op\t     188 allocs/op",
            "extra": "38089 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 314701,
            "unit": "ns/op",
            "extra": "38089 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120278,
            "unit": "B/op",
            "extra": "38089 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "38089 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 313840,
            "unit": "ns/op\t   87591 B/op\t     189 allocs/op",
            "extra": "38318 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 313840,
            "unit": "ns/op",
            "extra": "38318 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87591,
            "unit": "B/op",
            "extra": "38318 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "38318 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 58762,
            "unit": "ns/op\t   41566 B/op\t      80 allocs/op",
            "extra": "200467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 58762,
            "unit": "ns/op",
            "extra": "200467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41566,
            "unit": "B/op",
            "extra": "200467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "200467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 56415,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "213597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 56415,
            "unit": "ns/op",
            "extra": "213597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "213597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "213597 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 351530,
            "unit": "ns/op\t   87738 B/op\t     190 allocs/op",
            "extra": "34084 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 351530,
            "unit": "ns/op",
            "extra": "34084 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 87738,
            "unit": "B/op",
            "extra": "34084 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "34084 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 351835,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "34146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 351835,
            "unit": "ns/op",
            "extra": "34146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "34146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "34146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 95851,
            "unit": "ns/op\t   10424 B/op\t      80 allocs/op",
            "extra": "123928 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 95851,
            "unit": "ns/op",
            "extra": "123928 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10424,
            "unit": "B/op",
            "extra": "123928 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "123928 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 95085,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "125877 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 95085,
            "unit": "ns/op",
            "extra": "125877 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "125877 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "125877 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 308946,
            "unit": "ns/op\t   89064 B/op\t     190 allocs/op",
            "extra": "38679 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 308946,
            "unit": "ns/op",
            "extra": "38679 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 89064,
            "unit": "B/op",
            "extra": "38679 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "38679 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 311185,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "38566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 311185,
            "unit": "ns/op",
            "extra": "38566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "38566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "38566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 54455,
            "unit": "ns/op\t   10391 B/op\t      80 allocs/op",
            "extra": "218180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 54455,
            "unit": "ns/op",
            "extra": "218180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10391,
            "unit": "B/op",
            "extra": "218180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "218180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 53804,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "222025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 53804,
            "unit": "ns/op",
            "extra": "222025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "222025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "222025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 12484001,
            "unit": "ns/op\t  120389 B/op\t     188 allocs/op",
            "extra": "950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 12484001,
            "unit": "ns/op",
            "extra": "950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120389,
            "unit": "B/op",
            "extra": "950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "950 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 11905527,
            "unit": "ns/op\t   87601 B/op\t     189 allocs/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 11905527,
            "unit": "ns/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87601,
            "unit": "B/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11648808,
            "unit": "ns/op\t   41564 B/op\t      80 allocs/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11648808,
            "unit": "ns/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41564,
            "unit": "B/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 10632523,
            "unit": "ns/op\t    8903 B/op\t      81 allocs/op",
            "extra": "1167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 10632523,
            "unit": "ns/op",
            "extra": "1167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8903,
            "unit": "B/op",
            "extra": "1167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 12353715,
            "unit": "ns/op\t  120341 B/op\t     188 allocs/op",
            "extra": "955 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 12353715,
            "unit": "ns/op",
            "extra": "955 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120341,
            "unit": "B/op",
            "extra": "955 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "955 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 11797209,
            "unit": "ns/op\t   87646 B/op\t     189 allocs/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 11797209,
            "unit": "ns/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87646,
            "unit": "B/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11710176,
            "unit": "ns/op\t   41566 B/op\t      80 allocs/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11710176,
            "unit": "ns/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41566,
            "unit": "B/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10499882,
            "unit": "ns/op\t    8909 B/op\t      81 allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10499882,
            "unit": "ns/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8909,
            "unit": "B/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5754919,
            "unit": "ns/op\t  116092 B/op\t     274 allocs/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5754919,
            "unit": "ns/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 116092,
            "unit": "B/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2062 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 4908638,
            "unit": "ns/op\t   87652 B/op\t     192 allocs/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4908638,
            "unit": "ns/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87652,
            "unit": "B/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4850033,
            "unit": "ns/op\t   13663 B/op\t     164 allocs/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4850033,
            "unit": "ns/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 13663,
            "unit": "B/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2308 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3863968,
            "unit": "ns/op\t    8902 B/op\t      82 allocs/op",
            "extra": "2953 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3863968,
            "unit": "ns/op",
            "extra": "2953 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8902,
            "unit": "B/op",
            "extra": "2953 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "2953 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 5723934,
            "unit": "ns/op\t  114054 B/op\t     274 allocs/op",
            "extra": "2067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5723934,
            "unit": "ns/op",
            "extra": "2067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 114054,
            "unit": "B/op",
            "extra": "2067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 4834577,
            "unit": "ns/op\t   87644 B/op\t     192 allocs/op",
            "extra": "2452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4834577,
            "unit": "ns/op",
            "extra": "2452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87644,
            "unit": "B/op",
            "extra": "2452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4842023,
            "unit": "ns/op\t   12722 B/op\t     164 allocs/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4842023,
            "unit": "ns/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 12722,
            "unit": "B/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3886620,
            "unit": "ns/op\t    8905 B/op\t      82 allocs/op",
            "extra": "3030 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3886620,
            "unit": "ns/op",
            "extra": "3030 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8905,
            "unit": "B/op",
            "extra": "3030 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "3030 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "5dfabfde681f34af8a62679f4a2d223a26789c71",
          "message": "fix: zed linting",
          "timestamp": "2026-11-20T11:18:51+01:00",
          "tree_id": "3c94de30991623da721247c64110c33fcafe4f24",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/5dfabfde681f34af8a62679f4a2d223a26789c71"
        },
        "date": 1795170525585,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11586607,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 11586607,
            "unit": "ns/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 772289,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "15622 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 772289,
            "unit": "ns/op",
            "extra": "15622 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "15622 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15622 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11386216,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11386216,
            "unit": "ns/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1024 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 755875,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 755875,
            "unit": "ns/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11322993,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 11322993,
            "unit": "ns/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1060 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 501442,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "23984 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 501442,
            "unit": "ns/op",
            "extra": "23984 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "23984 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "23984 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11358527,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1062 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 11358527,
            "unit": "ns/op",
            "extra": "1062 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1062 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1062 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 504280,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "23770 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 504280,
            "unit": "ns/op",
            "extra": "23770 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "23770 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "23770 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 10333166,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 10333166,
            "unit": "ns/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1236 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 414257,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "28926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 414257,
            "unit": "ns/op",
            "extra": "28926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "28926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "28926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 10325675,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 10325675,
            "unit": "ns/op",
            "extra": "1230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1230 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 475417,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "25184 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 475417,
            "unit": "ns/op",
            "extra": "25184 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "25184 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "25184 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 10034123,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 10034123,
            "unit": "ns/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 487291,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 487291,
            "unit": "ns/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "24465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 9958435,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 9958435,
            "unit": "ns/op",
            "extra": "1266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 550093,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "21756 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 550093,
            "unit": "ns/op",
            "extra": "21756 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "21756 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "21756 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 216701,
            "unit": "ns/op\t  120220 B/op\t     188 allocs/op",
            "extra": "55536 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 216701,
            "unit": "ns/op",
            "extra": "55536 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120220,
            "unit": "B/op",
            "extra": "55536 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "55536 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 215511,
            "unit": "ns/op\t   87546 B/op\t     189 allocs/op",
            "extra": "55708 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 215511,
            "unit": "ns/op",
            "extra": "55708 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87546,
            "unit": "B/op",
            "extra": "55708 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "55708 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 78795,
            "unit": "ns/op\t   41570 B/op\t      80 allocs/op",
            "extra": "152043 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 78795,
            "unit": "ns/op",
            "extra": "152043 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41570,
            "unit": "B/op",
            "extra": "152043 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "152043 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 77951,
            "unit": "ns/op\t    8895 B/op\t      81 allocs/op",
            "extra": "154483 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 77951,
            "unit": "ns/op",
            "extra": "154483 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "154483 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "154483 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 175462,
            "unit": "ns/op\t  120248 B/op\t     188 allocs/op",
            "extra": "68359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 175462,
            "unit": "ns/op",
            "extra": "68359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120248,
            "unit": "B/op",
            "extra": "68359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "68359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 173919,
            "unit": "ns/op\t   87574 B/op\t     189 allocs/op",
            "extra": "69405 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 173919,
            "unit": "ns/op",
            "extra": "69405 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87574,
            "unit": "B/op",
            "extra": "69405 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "69405 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 37348,
            "unit": "ns/op\t   41567 B/op\t      80 allocs/op",
            "extra": "316910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 37348,
            "unit": "ns/op",
            "extra": "316910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41567,
            "unit": "B/op",
            "extra": "316910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "316910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 36202,
            "unit": "ns/op\t    8893 B/op\t      81 allocs/op",
            "extra": "331122 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 36202,
            "unit": "ns/op",
            "extra": "331122 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8893,
            "unit": "B/op",
            "extra": "331122 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "331122 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 199056,
            "unit": "ns/op\t   87911 B/op\t     190 allocs/op",
            "extra": "60279 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 199056,
            "unit": "ns/op",
            "extra": "60279 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 87911,
            "unit": "B/op",
            "extra": "60279 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "60279 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 200096,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "60022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 200096,
            "unit": "ns/op",
            "extra": "60022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "60022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "60022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 62765,
            "unit": "ns/op\t   10169 B/op\t      80 allocs/op",
            "extra": "188802 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 62765,
            "unit": "ns/op",
            "extra": "188802 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10169,
            "unit": "B/op",
            "extra": "188802 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "188802 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 62327,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "191288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 62327,
            "unit": "ns/op",
            "extra": "191288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "191288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "191288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 171513,
            "unit": "ns/op\t   88427 B/op\t     190 allocs/op",
            "extra": "69717 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 171513,
            "unit": "ns/op",
            "extra": "69717 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88427,
            "unit": "B/op",
            "extra": "69717 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "69717 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 171525,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "69752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 171525,
            "unit": "ns/op",
            "extra": "69752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "69752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "69752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 34792,
            "unit": "ns/op\t   10420 B/op\t      80 allocs/op",
            "extra": "339716 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 34792,
            "unit": "ns/op",
            "extra": "339716 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10420,
            "unit": "B/op",
            "extra": "339716 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "339716 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 34518,
            "unit": "ns/op\t    8895 B/op\t      82 allocs/op",
            "extra": "346706 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 34518,
            "unit": "ns/op",
            "extra": "346706 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "346706 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "346706 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5999705,
            "unit": "ns/op\t  120364 B/op\t     188 allocs/op",
            "extra": "1990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5999705,
            "unit": "ns/op",
            "extra": "1990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120364,
            "unit": "B/op",
            "extra": "1990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1990 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 5739603,
            "unit": "ns/op\t   87661 B/op\t     189 allocs/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5739603,
            "unit": "ns/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87661,
            "unit": "B/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 5832557,
            "unit": "ns/op\t   41564 B/op\t      80 allocs/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5832557,
            "unit": "ns/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41564,
            "unit": "B/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 5494522,
            "unit": "ns/op\t    8899 B/op\t      81 allocs/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 5494522,
            "unit": "ns/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8899,
            "unit": "B/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "2349 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 5978469,
            "unit": "ns/op\t  120331 B/op\t     188 allocs/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5978469,
            "unit": "ns/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120331,
            "unit": "B/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "2004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 5708825,
            "unit": "ns/op\t   87635 B/op\t     189 allocs/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5708825,
            "unit": "ns/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87635,
            "unit": "B/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "2101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 5776771,
            "unit": "ns/op\t   41552 B/op\t      80 allocs/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 5776771,
            "unit": "ns/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41552,
            "unit": "B/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "2150 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 5446259,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "2281 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 5446259,
            "unit": "ns/op",
            "extra": "2281 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "2281 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "2281 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 3692156,
            "unit": "ns/op\t  106642 B/op\t     274 allocs/op",
            "extra": "3216 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 3692156,
            "unit": "ns/op",
            "extra": "3216 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 106642,
            "unit": "B/op",
            "extra": "3216 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "3216 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3002394,
            "unit": "ns/op\t   87638 B/op\t     192 allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3002394,
            "unit": "ns/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87638,
            "unit": "B/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3978 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3323329,
            "unit": "ns/op\t   12686 B/op\t     164 allocs/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3323329,
            "unit": "ns/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 12686,
            "unit": "B/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "3584 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2231479,
            "unit": "ns/op\t    8903 B/op\t      82 allocs/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2231479,
            "unit": "ns/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8903,
            "unit": "B/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "5101 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 3661496,
            "unit": "ns/op\t  113583 B/op\t     274 allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 3661496,
            "unit": "ns/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 113583,
            "unit": "B/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 2979691,
            "unit": "ns/op\t   87683 B/op\t     192 allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 2979691,
            "unit": "ns/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87683,
            "unit": "B/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "4038 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 3314646,
            "unit": "ns/op\t   12974 B/op\t     164 allocs/op",
            "extra": "3086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3314646,
            "unit": "ns/op",
            "extra": "3086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 12974,
            "unit": "B/op",
            "extra": "3086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "3086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2301918,
            "unit": "ns/op\t    8910 B/op\t      82 allocs/op",
            "extra": "5100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2301918,
            "unit": "ns/op",
            "extra": "5100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8910,
            "unit": "B/op",
            "extra": "5100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "5100 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "fe12a03cdacf1048ac9b6056d2406fa425424e84",
          "message": "chore: benchmark",
          "timestamp": "2026-11-20T11:21:04+01:00",
          "tree_id": "1cb3b6b77ea6efd466313921f3a0943fec405669",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/fe12a03cdacf1048ac9b6056d2406fa425424e84"
        },
        "date": 1795170659786,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 12502451,
            "unit": "ns/op\t    4281 B/op\t       4 allocs/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 12502451,
            "unit": "ns/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 847625,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "14222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 847625,
            "unit": "ns/op",
            "extra": "14222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "14222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14222 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 12799714,
            "unit": "ns/op\t    4265 B/op\t       4 allocs/op",
            "extra": "925 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 12799714,
            "unit": "ns/op",
            "extra": "925 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "925 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "925 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 828184,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "14469 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 828184,
            "unit": "ns/op",
            "extra": "14469 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "14469 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14469 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 12642677,
            "unit": "ns/op\t    4281 B/op\t       4 allocs/op",
            "extra": "934 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 12642677,
            "unit": "ns/op",
            "extra": "934 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "934 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "934 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 563757,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "21166 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 563757,
            "unit": "ns/op",
            "extra": "21166 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "21166 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "21166 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 12848691,
            "unit": "ns/op\t    4265 B/op\t       4 allocs/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 12848691,
            "unit": "ns/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4265,
            "unit": "B/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "940 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 569462,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "20956 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 569462,
            "unit": "ns/op",
            "extra": "20956 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "20956 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20956 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 11742531,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1033 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 11742531,
            "unit": "ns/op",
            "extra": "1033 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1033 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1033 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 455405,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "25888 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 455405,
            "unit": "ns/op",
            "extra": "25888 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "25888 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "25888 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 11077512,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 11077512,
            "unit": "ns/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 517766,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "23266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 517766,
            "unit": "ns/op",
            "extra": "23266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "23266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "23266 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 10863619,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 10863619,
            "unit": "ns/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1159 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 521438,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "22926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 521438,
            "unit": "ns/op",
            "extra": "22926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "22926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22926 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 10470045,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 10470045,
            "unit": "ns/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 595483,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "19982 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 595483,
            "unit": "ns/op",
            "extra": "19982 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "19982 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "19982 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 246674,
            "unit": "ns/op\t  120216 B/op\t     188 allocs/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 246674,
            "unit": "ns/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120216,
            "unit": "B/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "49494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 238706,
            "unit": "ns/op\t   87550 B/op\t     189 allocs/op",
            "extra": "50095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 238706,
            "unit": "ns/op",
            "extra": "50095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87550,
            "unit": "B/op",
            "extra": "50095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "50095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 86280,
            "unit": "ns/op\t   41574 B/op\t      80 allocs/op",
            "extra": "140076 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 86280,
            "unit": "ns/op",
            "extra": "140076 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41574,
            "unit": "B/op",
            "extra": "140076 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "140076 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 84149,
            "unit": "ns/op\t    8896 B/op\t      81 allocs/op",
            "extra": "144177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 84149,
            "unit": "ns/op",
            "extra": "144177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "144177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "144177 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 196263,
            "unit": "ns/op\t  120250 B/op\t     188 allocs/op",
            "extra": "61357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 196263,
            "unit": "ns/op",
            "extra": "61357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120250,
            "unit": "B/op",
            "extra": "61357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "61357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 194948,
            "unit": "ns/op\t   87580 B/op\t     189 allocs/op",
            "extra": "60900 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 194948,
            "unit": "ns/op",
            "extra": "60900 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87580,
            "unit": "B/op",
            "extra": "60900 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "60900 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 42014,
            "unit": "ns/op\t   41569 B/op\t      80 allocs/op",
            "extra": "288480 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 42014,
            "unit": "ns/op",
            "extra": "288480 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41569,
            "unit": "B/op",
            "extra": "288480 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "288480 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 41136,
            "unit": "ns/op\t    8894 B/op\t      81 allocs/op",
            "extra": "303486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 41136,
            "unit": "ns/op",
            "extra": "303486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8894,
            "unit": "B/op",
            "extra": "303486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "303486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 234032,
            "unit": "ns/op\t   88139 B/op\t     190 allocs/op",
            "extra": "51993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 234032,
            "unit": "ns/op",
            "extra": "51993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 88139,
            "unit": "B/op",
            "extra": "51993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "51993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 239696,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "49960 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 239696,
            "unit": "ns/op",
            "extra": "49960 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "49960 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "49960 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 72386,
            "unit": "ns/op\t   10435 B/op\t      80 allocs/op",
            "extra": "164391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 72386,
            "unit": "ns/op",
            "extra": "164391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10435,
            "unit": "B/op",
            "extra": "164391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "164391 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 72447,
            "unit": "ns/op\t    8896 B/op\t      82 allocs/op",
            "extra": "167415 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 72447,
            "unit": "ns/op",
            "extra": "167415 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8896,
            "unit": "B/op",
            "extra": "167415 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "167415 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 202838,
            "unit": "ns/op\t   88424 B/op\t     190 allocs/op",
            "extra": "58534 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 202838,
            "unit": "ns/op",
            "extra": "58534 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88424,
            "unit": "B/op",
            "extra": "58534 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 190,
            "unit": "allocs/op",
            "extra": "58534 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 202535,
            "unit": "ns/op\t   87559 B/op\t     192 allocs/op",
            "extra": "58792 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 202535,
            "unit": "ns/op",
            "extra": "58792 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87559,
            "unit": "B/op",
            "extra": "58792 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "58792 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 40324,
            "unit": "ns/op\t   10218 B/op\t      80 allocs/op",
            "extra": "297332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 40324,
            "unit": "ns/op",
            "extra": "297332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10218,
            "unit": "B/op",
            "extra": "297332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "297332 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 40235,
            "unit": "ns/op\t    8895 B/op\t      82 allocs/op",
            "extra": "296680 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 40235,
            "unit": "ns/op",
            "extra": "296680 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8895,
            "unit": "B/op",
            "extra": "296680 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "296680 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 7464443,
            "unit": "ns/op\t  120347 B/op\t     188 allocs/op",
            "extra": "1592 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 7464443,
            "unit": "ns/op",
            "extra": "1592 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 120347,
            "unit": "B/op",
            "extra": "1592 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1592 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 7203146,
            "unit": "ns/op\t   87674 B/op\t     189 allocs/op",
            "extra": "1707 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 7203146,
            "unit": "ns/op",
            "extra": "1707 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87674,
            "unit": "B/op",
            "extra": "1707 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1707 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 6961366,
            "unit": "ns/op\t   41558 B/op\t      80 allocs/op",
            "extra": "1741 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6961366,
            "unit": "ns/op",
            "extra": "1741 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41558,
            "unit": "B/op",
            "extra": "1741 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1741 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 6873751,
            "unit": "ns/op\t    8898 B/op\t      81 allocs/op",
            "extra": "1779 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 6873751,
            "unit": "ns/op",
            "extra": "1779 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8898,
            "unit": "B/op",
            "extra": "1779 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1779 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 7440649,
            "unit": "ns/op\t  120356 B/op\t     188 allocs/op",
            "extra": "1588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 7440649,
            "unit": "ns/op",
            "extra": "1588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 120356,
            "unit": "B/op",
            "extra": "1588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 188,
            "unit": "allocs/op",
            "extra": "1588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 7208299,
            "unit": "ns/op\t   87685 B/op\t     189 allocs/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 7208299,
            "unit": "ns/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87685,
            "unit": "B/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 189,
            "unit": "allocs/op",
            "extra": "1664 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 6775832,
            "unit": "ns/op\t   41557 B/op\t      80 allocs/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6775832,
            "unit": "ns/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41557,
            "unit": "B/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 80,
            "unit": "allocs/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 6757432,
            "unit": "ns/op\t    8898 B/op\t      81 allocs/op",
            "extra": "1831 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 6757432,
            "unit": "ns/op",
            "extra": "1831 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8898,
            "unit": "B/op",
            "extra": "1831 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 81,
            "unit": "allocs/op",
            "extra": "1831 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 4701159,
            "unit": "ns/op\t  103776 B/op\t     274 allocs/op",
            "extra": "2523 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 4701159,
            "unit": "ns/op",
            "extra": "2523 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 103776,
            "unit": "B/op",
            "extra": "2523 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2523 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 4037271,
            "unit": "ns/op\t   87634 B/op\t     192 allocs/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4037271,
            "unit": "ns/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87634,
            "unit": "B/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "2988 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3974581,
            "unit": "ns/op\t   14039 B/op\t     164 allocs/op",
            "extra": "2700 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3974581,
            "unit": "ns/op",
            "extra": "2700 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 14039,
            "unit": "B/op",
            "extra": "2700 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2700 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2914088,
            "unit": "ns/op\t    8901 B/op\t      82 allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2914088,
            "unit": "ns/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8901,
            "unit": "B/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4582293,
            "unit": "ns/op\t  118302 B/op\t     274 allocs/op",
            "extra": "2638 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4582293,
            "unit": "ns/op",
            "extra": "2638 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 118302,
            "unit": "B/op",
            "extra": "2638 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 274,
            "unit": "allocs/op",
            "extra": "2638 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3593929,
            "unit": "ns/op\t   87661 B/op\t     192 allocs/op",
            "extra": "3334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3593929,
            "unit": "ns/op",
            "extra": "3334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87661,
            "unit": "B/op",
            "extra": "3334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 192,
            "unit": "allocs/op",
            "extra": "3334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 3892704,
            "unit": "ns/op\t   13157 B/op\t     164 allocs/op",
            "extra": "2827 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3892704,
            "unit": "ns/op",
            "extra": "2827 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 13157,
            "unit": "B/op",
            "extra": "2827 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 164,
            "unit": "allocs/op",
            "extra": "2827 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2935314,
            "unit": "ns/op\t    8902 B/op\t      82 allocs/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2935314,
            "unit": "ns/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8902,
            "unit": "B/op",
            "extra": "4239 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "4239 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "8ebedff1eadf089c6350c940ce244f357b1af818",
          "message": "feat: use LogAttrs instead of DebugContext\n\nSigned-off-by: Marcel Link <marcel.link@uponu.com>",
          "timestamp": "2026-11-20T18:16:07+01:00",
          "tree_id": "5c61779b93b5505cd7099bd6cda8a2b20aa079ef",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/8ebedff1eadf089c6350c940ce244f357b1af818"
        },
        "date": 1795195585569,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 16495492,
            "unit": "ns/op\t    4283 B/op\t       4 allocs/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 16495492,
            "unit": "ns/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4283,
            "unit": "B/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "732 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 922423,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 922423,
            "unit": "ns/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12990 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 16542856,
            "unit": "ns/op\t    4268 B/op\t       4 allocs/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 16542856,
            "unit": "ns/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4268,
            "unit": "B/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 925779,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 925779,
            "unit": "ns/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12972 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 16525252,
            "unit": "ns/op\t    4284 B/op\t       4 allocs/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 16525252,
            "unit": "ns/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4284,
            "unit": "B/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "726 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 688215,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "17421 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 688215,
            "unit": "ns/op",
            "extra": "17421 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "17421 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17421 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 16466593,
            "unit": "ns/op\t    4268 B/op\t       4 allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 16466593,
            "unit": "ns/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4268,
            "unit": "B/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 689433,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "17403 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 689433,
            "unit": "ns/op",
            "extra": "17403 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "17403 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17403 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 14238846,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 14238846,
            "unit": "ns/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "814 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 589839,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "20355 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 589839,
            "unit": "ns/op",
            "extra": "20355 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "20355 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20355 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 14430747,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "840 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 14430747,
            "unit": "ns/op",
            "extra": "840 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "840 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "840 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 676251,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "17713 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 676251,
            "unit": "ns/op",
            "extra": "17713 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "17713 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "17713 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 14221576,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "841 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 14221576,
            "unit": "ns/op",
            "extra": "841 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "841 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "841 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 664145,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "18084 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 664145,
            "unit": "ns/op",
            "extra": "18084 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "18084 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "18084 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 14364162,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "830 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 14364162,
            "unit": "ns/op",
            "extra": "830 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "830 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "830 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 756591,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "15854 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 756591,
            "unit": "ns/op",
            "extra": "15854 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "15854 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "15854 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 310698,
            "unit": "ns/op\t  119625 B/op\t     174 allocs/op",
            "extra": "38539 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 310698,
            "unit": "ns/op",
            "extra": "38539 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 119625,
            "unit": "B/op",
            "extra": "38539 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "38539 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 309022,
            "unit": "ns/op\t   86931 B/op\t     175 allocs/op",
            "extra": "38870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 309022,
            "unit": "ns/op",
            "extra": "38870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 86931,
            "unit": "B/op",
            "extra": "38870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "38870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 91236,
            "unit": "ns/op\t   41138 B/op\t      71 allocs/op",
            "extra": "127948 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 91236,
            "unit": "ns/op",
            "extra": "127948 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41138,
            "unit": "B/op",
            "extra": "127948 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "127948 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 89468,
            "unit": "ns/op\t    8463 B/op\t      72 allocs/op",
            "extra": "132888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 89468,
            "unit": "ns/op",
            "extra": "132888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8463,
            "unit": "B/op",
            "extra": "132888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "132888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 260924,
            "unit": "ns/op\t  119638 B/op\t     174 allocs/op",
            "extra": "45967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 260924,
            "unit": "ns/op",
            "extra": "45967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 119638,
            "unit": "B/op",
            "extra": "45967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "45967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 259500,
            "unit": "ns/op\t   86977 B/op\t     175 allocs/op",
            "extra": "46132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 259500,
            "unit": "ns/op",
            "extra": "46132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 86977,
            "unit": "B/op",
            "extra": "46132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "46132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 43287,
            "unit": "ns/op\t   41134 B/op\t      71 allocs/op",
            "extra": "275426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 43287,
            "unit": "ns/op",
            "extra": "275426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41134,
            "unit": "B/op",
            "extra": "275426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "275426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 41618,
            "unit": "ns/op\t    8462 B/op\t      72 allocs/op",
            "extra": "285634 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 41618,
            "unit": "ns/op",
            "extra": "285634 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8462,
            "unit": "B/op",
            "extra": "285634 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "285634 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 281575,
            "unit": "ns/op\t   87510 B/op\t     177 allocs/op",
            "extra": "42567 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 281575,
            "unit": "ns/op",
            "extra": "42567 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 87510,
            "unit": "B/op",
            "extra": "42567 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 177,
            "unit": "allocs/op",
            "extra": "42567 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 283042,
            "unit": "ns/op\t   86983 B/op\t     179 allocs/op",
            "extra": "42595 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 283042,
            "unit": "ns/op",
            "extra": "42595 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 86983,
            "unit": "B/op",
            "extra": "42595 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "42595 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 72247,
            "unit": "ns/op\t   10038 B/op\t      72 allocs/op",
            "extra": "164394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 72247,
            "unit": "ns/op",
            "extra": "164394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 10038,
            "unit": "B/op",
            "extra": "164394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "164394 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 72269,
            "unit": "ns/op\t    8511 B/op\t      74 allocs/op",
            "extra": "165494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 72269,
            "unit": "ns/op",
            "extra": "165494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8511,
            "unit": "B/op",
            "extra": "165494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "165494 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 248481,
            "unit": "ns/op\t   88143 B/op\t     177 allocs/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 248481,
            "unit": "ns/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 88143,
            "unit": "B/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 177,
            "unit": "allocs/op",
            "extra": "47956 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 249852,
            "unit": "ns/op\t   86985 B/op\t     179 allocs/op",
            "extra": "48014 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 249852,
            "unit": "ns/op",
            "extra": "48014 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 86985,
            "unit": "B/op",
            "extra": "48014 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "48014 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 40210,
            "unit": "ns/op\t   10094 B/op\t      72 allocs/op",
            "extra": "293830 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 40210,
            "unit": "ns/op",
            "extra": "293830 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 10094,
            "unit": "B/op",
            "extra": "293830 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "293830 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 39857,
            "unit": "ns/op\t    8512 B/op\t      74 allocs/op",
            "extra": "301182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 39857,
            "unit": "ns/op",
            "extra": "301182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8512,
            "unit": "B/op",
            "extra": "301182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "301182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 8955260,
            "unit": "ns/op\t  119719 B/op\t     174 allocs/op",
            "extra": "1322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 8955260,
            "unit": "ns/op",
            "extra": "1322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 119719,
            "unit": "B/op",
            "extra": "1322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "1322 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 8165266,
            "unit": "ns/op\t   86961 B/op\t     175 allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 8165266,
            "unit": "ns/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 86961,
            "unit": "B/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "1420 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 8879550,
            "unit": "ns/op\t   41141 B/op\t      71 allocs/op",
            "extra": "1356 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 8879550,
            "unit": "ns/op",
            "extra": "1356 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 41141,
            "unit": "B/op",
            "extra": "1356 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "1356 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 8754035,
            "unit": "ns/op\t    8474 B/op\t      72 allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 8754035,
            "unit": "ns/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8474,
            "unit": "B/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "1398 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 8927765,
            "unit": "ns/op\t  119669 B/op\t     174 allocs/op",
            "extra": "1320 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 8927765,
            "unit": "ns/op",
            "extra": "1320 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 119669,
            "unit": "B/op",
            "extra": "1320 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 174,
            "unit": "allocs/op",
            "extra": "1320 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 8039104,
            "unit": "ns/op\t   86969 B/op\t     175 allocs/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 8039104,
            "unit": "ns/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 86969,
            "unit": "B/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 175,
            "unit": "allocs/op",
            "extra": "1491 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 9102719,
            "unit": "ns/op\t   41137 B/op\t      71 allocs/op",
            "extra": "1288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 9102719,
            "unit": "ns/op",
            "extra": "1288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 41137,
            "unit": "B/op",
            "extra": "1288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 71,
            "unit": "allocs/op",
            "extra": "1288 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 8600968,
            "unit": "ns/op\t    8468 B/op\t      72 allocs/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 8600968,
            "unit": "ns/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8468,
            "unit": "B/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 72,
            "unit": "allocs/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5235702,
            "unit": "ns/op\t  100677 B/op\t     249 allocs/op",
            "extra": "2244 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5235702,
            "unit": "ns/op",
            "extra": "2244 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 100677,
            "unit": "B/op",
            "extra": "2244 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 249,
            "unit": "allocs/op",
            "extra": "2244 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 4221741,
            "unit": "ns/op\t   87065 B/op\t     179 allocs/op",
            "extra": "2848 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4221741,
            "unit": "ns/op",
            "extra": "2848 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 87065,
            "unit": "B/op",
            "extra": "2848 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "2848 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3887528,
            "unit": "ns/op\t   13919 B/op\t     144 allocs/op",
            "extra": "2661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3887528,
            "unit": "ns/op",
            "extra": "2661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 13919,
            "unit": "B/op",
            "extra": "2661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 144,
            "unit": "allocs/op",
            "extra": "2661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2930942,
            "unit": "ns/op\t    8517 B/op\t      74 allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2930942,
            "unit": "ns/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 8517,
            "unit": "B/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "3946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 5182859,
            "unit": "ns/op\t   97691 B/op\t     249 allocs/op",
            "extra": "2287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5182859,
            "unit": "ns/op",
            "extra": "2287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 97691,
            "unit": "B/op",
            "extra": "2287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 249,
            "unit": "allocs/op",
            "extra": "2287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 4181401,
            "unit": "ns/op\t   87051 B/op\t     179 allocs/op",
            "extra": "2932 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4181401,
            "unit": "ns/op",
            "extra": "2932 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 87051,
            "unit": "B/op",
            "extra": "2932 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 179,
            "unit": "allocs/op",
            "extra": "2932 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4052127,
            "unit": "ns/op\t   12209 B/op\t     144 allocs/op",
            "extra": "2815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4052127,
            "unit": "ns/op",
            "extra": "2815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 12209,
            "unit": "B/op",
            "extra": "2815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 144,
            "unit": "allocs/op",
            "extra": "2815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2893102,
            "unit": "ns/op\t    8517 B/op\t      74 allocs/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2893102,
            "unit": "ns/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 8517,
            "unit": "B/op",
            "extra": "3991 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "3991 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "154087c795882c2e129bfe8ef8b43085f153c13e",
          "message": "feat: less allocations",
          "timestamp": "2026-11-20T19:29:49+01:00",
          "tree_id": "b7fbbd687bf5b361cfa4d932a4f6605a5ddc037d",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/154087c795882c2e129bfe8ef8b43085f153c13e"
        },
        "date": 1795199989609,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11675962,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1044 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 11675962,
            "unit": "ns/op",
            "extra": "1044 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1044 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1044 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 783819,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "15288 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 783819,
            "unit": "ns/op",
            "extra": "15288 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "15288 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15288 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11571765,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11571765,
            "unit": "ns/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1048 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 787916,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "15229 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 787916,
            "unit": "ns/op",
            "extra": "15229 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "15229 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15229 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11614202,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 11614202,
            "unit": "ns/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1028 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 523224,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "22953 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 523224,
            "unit": "ns/op",
            "extra": "22953 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "22953 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22953 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11741854,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 11741854,
            "unit": "ns/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1029 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 525404,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 525404,
            "unit": "ns/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22797 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 11780908,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 11780908,
            "unit": "ns/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 431364,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "27967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 431364,
            "unit": "ns/op",
            "extra": "27967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "27967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "27967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 11117096,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 11117096,
            "unit": "ns/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1164 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 492161,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "24242 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 492161,
            "unit": "ns/op",
            "extra": "24242 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "24242 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "24242 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 11576102,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 11576102,
            "unit": "ns/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1140 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 522086,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "22995 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 522086,
            "unit": "ns/op",
            "extra": "22995 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "22995 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22995 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 11581202,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1047 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 11581202,
            "unit": "ns/op",
            "extra": "1047 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1047 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1047 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 581660,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "20761 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 581660,
            "unit": "ns/op",
            "extra": "20761 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "20761 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "20761 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 236385,
            "unit": "ns/op\t   42573 B/op\t     106 allocs/op",
            "extra": "51018 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 236385,
            "unit": "ns/op",
            "extra": "51018 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42573,
            "unit": "B/op",
            "extra": "51018 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "51018 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 240873,
            "unit": "ns/op\t   42668 B/op\t     107 allocs/op",
            "extra": "50776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 240873,
            "unit": "ns/op",
            "extra": "50776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42668,
            "unit": "B/op",
            "extra": "50776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "50776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 79859,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "150718 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 79859,
            "unit": "ns/op",
            "extra": "150718 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "150718 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "150718 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 80251,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "150492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 80251,
            "unit": "ns/op",
            "extra": "150492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "150492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "150492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 191641,
            "unit": "ns/op\t   42571 B/op\t     106 allocs/op",
            "extra": "62487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 191641,
            "unit": "ns/op",
            "extra": "62487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42571,
            "unit": "B/op",
            "extra": "62487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "62487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 190202,
            "unit": "ns/op\t   42671 B/op\t     107 allocs/op",
            "extra": "62588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 190202,
            "unit": "ns/op",
            "extra": "62588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42671,
            "unit": "B/op",
            "extra": "62588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "62588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 35124,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "337659 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 35124,
            "unit": "ns/op",
            "extra": "337659 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "337659 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "337659 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 35058,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "299174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 35058,
            "unit": "ns/op",
            "extra": "299174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "299174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "299174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 213713,
            "unit": "ns/op\t   43065 B/op\t     111 allocs/op",
            "extra": "55287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 213713,
            "unit": "ns/op",
            "extra": "55287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43065,
            "unit": "B/op",
            "extra": "55287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "55287 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 212789,
            "unit": "ns/op\t   42860 B/op\t     112 allocs/op",
            "extra": "55983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 212789,
            "unit": "ns/op",
            "extra": "55983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42860,
            "unit": "B/op",
            "extra": "55983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "55983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 62957,
            "unit": "ns/op\t    1795 B/op\t      32 allocs/op",
            "extra": "189764 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 62957,
            "unit": "ns/op",
            "extra": "189764 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1795,
            "unit": "B/op",
            "extra": "189764 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "189764 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 63226,
            "unit": "ns/op\t    1550 B/op\t      33 allocs/op",
            "extra": "190657 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 63226,
            "unit": "ns/op",
            "extra": "190657 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1550,
            "unit": "B/op",
            "extra": "190657 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "190657 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 187779,
            "unit": "ns/op\t   43258 B/op\t     111 allocs/op",
            "extra": "63276 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 187779,
            "unit": "ns/op",
            "extra": "63276 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43258,
            "unit": "B/op",
            "extra": "63276 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "63276 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 186755,
            "unit": "ns/op\t   42854 B/op\t     112 allocs/op",
            "extra": "63813 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 186755,
            "unit": "ns/op",
            "extra": "63813 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42854,
            "unit": "B/op",
            "extra": "63813 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "63813 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 33549,
            "unit": "ns/op\t    1752 B/op\t      32 allocs/op",
            "extra": "352350 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 33549,
            "unit": "ns/op",
            "extra": "352350 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1752,
            "unit": "B/op",
            "extra": "352350 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "352350 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 33702,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "358203 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 33702,
            "unit": "ns/op",
            "extra": "358203 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "358203 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "358203 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6181810,
            "unit": "ns/op\t   42838 B/op\t     106 allocs/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6181810,
            "unit": "ns/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42838,
            "unit": "B/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1904 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 5743644,
            "unit": "ns/op\t   42776 B/op\t     107 allocs/op",
            "extra": "2047 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5743644,
            "unit": "ns/op",
            "extra": "2047 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42776,
            "unit": "B/op",
            "extra": "2047 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2047 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 6184108,
            "unit": "ns/op\t    1339 B/op\t      28 allocs/op",
            "extra": "1968 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6184108,
            "unit": "ns/op",
            "extra": "1968 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1339,
            "unit": "B/op",
            "extra": "1968 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1968 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 5807791,
            "unit": "ns/op\t    1380 B/op\t      29 allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 5807791,
            "unit": "ns/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1380,
            "unit": "B/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 6150709,
            "unit": "ns/op\t   42727 B/op\t     106 allocs/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6150709,
            "unit": "ns/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42727,
            "unit": "B/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "2010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 5844348,
            "unit": "ns/op\t   42885 B/op\t     107 allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5844348,
            "unit": "ns/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42885,
            "unit": "B/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 6123785,
            "unit": "ns/op\t    1332 B/op\t      28 allocs/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6123785,
            "unit": "ns/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1332,
            "unit": "B/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "2078 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 5849552,
            "unit": "ns/op\t    1391 B/op\t      29 allocs/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 5849552,
            "unit": "ns/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1391,
            "unit": "B/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 4145290,
            "unit": "ns/op\t   51406 B/op\t     129 allocs/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 4145290,
            "unit": "ns/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 51406,
            "unit": "B/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2841 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3495797,
            "unit": "ns/op\t   42981 B/op\t     112 allocs/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3495797,
            "unit": "ns/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42981,
            "unit": "B/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "3492 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4249184,
            "unit": "ns/op\t    3295 B/op\t      50 allocs/op",
            "extra": "2899 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4249184,
            "unit": "ns/op",
            "extra": "2899 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 3295,
            "unit": "B/op",
            "extra": "2899 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2899 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2547780,
            "unit": "ns/op\t    1571 B/op\t      33 allocs/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2547780,
            "unit": "ns/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1571,
            "unit": "B/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "4513 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4095338,
            "unit": "ns/op\t   50395 B/op\t     129 allocs/op",
            "extra": "2941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4095338,
            "unit": "ns/op",
            "extra": "2941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 50395,
            "unit": "B/op",
            "extra": "2941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3447036,
            "unit": "ns/op\t   43013 B/op\t     112 allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3447036,
            "unit": "ns/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43013,
            "unit": "B/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "3426 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 3642652,
            "unit": "ns/op\t    3232 B/op\t      50 allocs/op",
            "extra": "3022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3642652,
            "unit": "ns/op",
            "extra": "3022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 3232,
            "unit": "B/op",
            "extra": "3022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "3022 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2460547,
            "unit": "ns/op\t    1570 B/op\t      33 allocs/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2460547,
            "unit": "ns/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1570,
            "unit": "B/op",
            "extra": "4780 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "4780 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "580198ccf006cde4afea5d01d8530eea0cc9fc96",
          "message": "feat: remove abortOnRcptReject",
          "timestamp": "2026-11-23T14:43:44+01:00",
          "tree_id": "eca3cde1b1ac7f4f4c491a4def9f504af50ee085",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/580198ccf006cde4afea5d01d8530eea0cc9fc96"
        },
        "date": 1795442021491,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 23004790,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 23004790,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1133306,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1133306,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22848062,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22848062,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1132583,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1132583,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22816048,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22816048,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 948885,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 948885,
            "unit": "ns/op",
            "extra": "12549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22867079,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22867079,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 950083,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 950083,
            "unit": "ns/op",
            "extra": "12601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 19962873,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 19962873,
            "unit": "ns/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 750606,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 750606,
            "unit": "ns/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15981 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 20302798,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 20302798,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 850157,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14086 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 850157,
            "unit": "ns/op",
            "extra": "14086 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14086 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14086 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 20164087,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 20164087,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 961481,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 961481,
            "unit": "ns/op",
            "extra": "12494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12494 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 20389677,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 20389677,
            "unit": "ns/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "584 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1058173,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1058173,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 423978,
            "unit": "ns/op\t   42592 B/op\t     106 allocs/op",
            "extra": "27778 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 423978,
            "unit": "ns/op",
            "extra": "27778 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42592,
            "unit": "B/op",
            "extra": "27778 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "27778 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 418455,
            "unit": "ns/op\t   42676 B/op\t     107 allocs/op",
            "extra": "28651 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 418455,
            "unit": "ns/op",
            "extra": "28651 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42676,
            "unit": "B/op",
            "extra": "28651 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "28651 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 104595,
            "unit": "ns/op\t    1283 B/op\t      28 allocs/op",
            "extra": "114102 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 104595,
            "unit": "ns/op",
            "extra": "114102 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1283,
            "unit": "B/op",
            "extra": "114102 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "114102 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 104484,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "114105 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 104484,
            "unit": "ns/op",
            "extra": "114105 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "114105 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "114105 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 366509,
            "unit": "ns/op\t   42607 B/op\t     106 allocs/op",
            "extra": "33010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 366509,
            "unit": "ns/op",
            "extra": "33010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42607,
            "unit": "B/op",
            "extra": "33010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "33010 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 363366,
            "unit": "ns/op\t   42696 B/op\t     107 allocs/op",
            "extra": "33104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 363366,
            "unit": "ns/op",
            "extra": "33104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42696,
            "unit": "B/op",
            "extra": "33104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "33104 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 48512,
            "unit": "ns/op\t    1282 B/op\t      28 allocs/op",
            "extra": "242107 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 48512,
            "unit": "ns/op",
            "extra": "242107 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1282,
            "unit": "B/op",
            "extra": "242107 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "242107 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 48805,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "244375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 48805,
            "unit": "ns/op",
            "extra": "244375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "244375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "244375 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 381575,
            "unit": "ns/op\t   43035 B/op\t     111 allocs/op",
            "extra": "31411 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 381575,
            "unit": "ns/op",
            "extra": "31411 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43035,
            "unit": "B/op",
            "extra": "31411 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "31411 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 386747,
            "unit": "ns/op\t   42884 B/op\t     112 allocs/op",
            "extra": "31352 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 386747,
            "unit": "ns/op",
            "extra": "31352 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42884,
            "unit": "B/op",
            "extra": "31352 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "31352 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 83938,
            "unit": "ns/op\t    1721 B/op\t      32 allocs/op",
            "extra": "141310 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 83938,
            "unit": "ns/op",
            "extra": "141310 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1721,
            "unit": "B/op",
            "extra": "141310 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "141310 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 83617,
            "unit": "ns/op\t    1550 B/op\t      33 allocs/op",
            "extra": "142762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 83617,
            "unit": "ns/op",
            "extra": "142762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1550,
            "unit": "B/op",
            "extra": "142762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "142762 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 343417,
            "unit": "ns/op\t   43360 B/op\t     111 allocs/op",
            "extra": "34791 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 343417,
            "unit": "ns/op",
            "extra": "34791 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43360,
            "unit": "B/op",
            "extra": "34791 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "34791 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 344679,
            "unit": "ns/op\t   42862 B/op\t     112 allocs/op",
            "extra": "34566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 344679,
            "unit": "ns/op",
            "extra": "34566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42862,
            "unit": "B/op",
            "extra": "34566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "34566 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 46414,
            "unit": "ns/op\t    1765 B/op\t      32 allocs/op",
            "extra": "253648 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 46414,
            "unit": "ns/op",
            "extra": "253648 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1765,
            "unit": "B/op",
            "extra": "253648 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "253648 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 46628,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "261080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 46628,
            "unit": "ns/op",
            "extra": "261080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "261080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "261080 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11832383,
            "unit": "ns/op\t   42995 B/op\t     106 allocs/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11832383,
            "unit": "ns/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42995,
            "unit": "B/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1005 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 9678441,
            "unit": "ns/op\t   42720 B/op\t     107 allocs/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 9678441,
            "unit": "ns/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42720,
            "unit": "B/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11669554,
            "unit": "ns/op\t    1383 B/op\t      28 allocs/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11669554,
            "unit": "ns/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1383,
            "unit": "B/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 11226789,
            "unit": "ns/op\t    1461 B/op\t      29 allocs/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 11226789,
            "unit": "ns/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1461,
            "unit": "B/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1117 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11655634,
            "unit": "ns/op\t   42933 B/op\t     106 allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11655634,
            "unit": "ns/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42933,
            "unit": "B/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9748558,
            "unit": "ns/op\t   42725 B/op\t     107 allocs/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9748558,
            "unit": "ns/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42725,
            "unit": "B/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11292424,
            "unit": "ns/op\t    1382 B/op\t      28 allocs/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11292424,
            "unit": "ns/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1382,
            "unit": "B/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1095 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 11341214,
            "unit": "ns/op\t    1380 B/op\t      29 allocs/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 11341214,
            "unit": "ns/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1380,
            "unit": "B/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1172 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6535698,
            "unit": "ns/op\t   51271 B/op\t     129 allocs/op",
            "extra": "1842 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6535698,
            "unit": "ns/op",
            "extra": "1842 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 51271,
            "unit": "B/op",
            "extra": "1842 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1842 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5665509,
            "unit": "ns/op\t   43076 B/op\t     112 allocs/op",
            "extra": "2139 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5665509,
            "unit": "ns/op",
            "extra": "2139 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43076,
            "unit": "B/op",
            "extra": "2139 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2139 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4992492,
            "unit": "ns/op\t    4806 B/op\t      50 allocs/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4992492,
            "unit": "ns/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4806,
            "unit": "B/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2146 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3729733,
            "unit": "ns/op\t    1556 B/op\t      33 allocs/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3729733,
            "unit": "ns/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1556,
            "unit": "B/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6405374,
            "unit": "ns/op\t   52298 B/op\t     129 allocs/op",
            "extra": "1875 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6405374,
            "unit": "ns/op",
            "extra": "1875 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 52298,
            "unit": "B/op",
            "extra": "1875 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1875 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5743380,
            "unit": "ns/op\t   43036 B/op\t     112 allocs/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5743380,
            "unit": "ns/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43036,
            "unit": "B/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2196 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4743181,
            "unit": "ns/op\t    4471 B/op\t      50 allocs/op",
            "extra": "2414 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4743181,
            "unit": "ns/op",
            "extra": "2414 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4471,
            "unit": "B/op",
            "extra": "2414 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2414 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3585960,
            "unit": "ns/op\t    1569 B/op\t      33 allocs/op",
            "extra": "3070 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3585960,
            "unit": "ns/op",
            "extra": "3070 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1569,
            "unit": "B/op",
            "extra": "3070 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3070 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "8b34270fe14a820290be5d9eea32577f23404891",
          "message": "fix: error handler mailing inconsistent",
          "timestamp": "2026-11-23T14:57:46+01:00",
          "tree_id": "2eefdc03e3810e0c8cb53f070bff4b9b18ee8902",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/8b34270fe14a820290be5d9eea32577f23404891"
        },
        "date": 1795442855629,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22955446,
            "unit": "ns/op\t    4289 B/op\t       4 allocs/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22955446,
            "unit": "ns/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4289,
            "unit": "B/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "516 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1137298,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1137298,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22850196,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22850196,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1137897,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1137897,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22815560,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22815560,
            "unit": "ns/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 914914,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13023 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 914914,
            "unit": "ns/op",
            "extra": "13023 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13023 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13023 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22791998,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22791998,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 934099,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12961 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 934099,
            "unit": "ns/op",
            "extra": "12961 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12961 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12961 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 20045085,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 20045085,
            "unit": "ns/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "601 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 749863,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 749863,
            "unit": "ns/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15987 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 20223703,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 20223703,
            "unit": "ns/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 845461,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14194 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 845461,
            "unit": "ns/op",
            "extra": "14194 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14194 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14194 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 20154331,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 20154331,
            "unit": "ns/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "596 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 956127,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12538 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 956127,
            "unit": "ns/op",
            "extra": "12538 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12538 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12538 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 20408735,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 20408735,
            "unit": "ns/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "588 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1057478,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1057478,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 398550,
            "unit": "ns/op\t   42605 B/op\t     106 allocs/op",
            "extra": "30097 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 398550,
            "unit": "ns/op",
            "extra": "30097 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42605,
            "unit": "B/op",
            "extra": "30097 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "30097 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 401411,
            "unit": "ns/op\t   42679 B/op\t     107 allocs/op",
            "extra": "29967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 401411,
            "unit": "ns/op",
            "extra": "29967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42679,
            "unit": "B/op",
            "extra": "29967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "29967 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 102524,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "116212 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 102524,
            "unit": "ns/op",
            "extra": "116212 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "116212 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "116212 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 102082,
            "unit": "ns/op\t    1378 B/op\t      29 allocs/op",
            "extra": "116714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 102082,
            "unit": "ns/op",
            "extra": "116714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1378,
            "unit": "B/op",
            "extra": "116714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "116714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 345418,
            "unit": "ns/op\t   42631 B/op\t     106 allocs/op",
            "extra": "34550 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 345418,
            "unit": "ns/op",
            "extra": "34550 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42631,
            "unit": "B/op",
            "extra": "34550 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "34550 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 344252,
            "unit": "ns/op\t   42712 B/op\t     107 allocs/op",
            "extra": "34698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 344252,
            "unit": "ns/op",
            "extra": "34698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42712,
            "unit": "B/op",
            "extra": "34698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "34698 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 47320,
            "unit": "ns/op\t    1282 B/op\t      28 allocs/op",
            "extra": "252829 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 47320,
            "unit": "ns/op",
            "extra": "252829 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1282,
            "unit": "B/op",
            "extra": "252829 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "252829 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 48159,
            "unit": "ns/op\t    1378 B/op\t      29 allocs/op",
            "extra": "250158 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 48159,
            "unit": "ns/op",
            "extra": "250158 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1378,
            "unit": "B/op",
            "extra": "250158 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "250158 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 360817,
            "unit": "ns/op\t   43024 B/op\t     111 allocs/op",
            "extra": "33088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 360817,
            "unit": "ns/op",
            "extra": "33088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43024,
            "unit": "B/op",
            "extra": "33088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "33088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 361289,
            "unit": "ns/op\t   42866 B/op\t     112 allocs/op",
            "extra": "33192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 361289,
            "unit": "ns/op",
            "extra": "33192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42866,
            "unit": "B/op",
            "extra": "33192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "33192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 81334,
            "unit": "ns/op\t    1804 B/op\t      32 allocs/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 81334,
            "unit": "ns/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1804,
            "unit": "B/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "144714 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 81847,
            "unit": "ns/op\t    1548 B/op\t      33 allocs/op",
            "extra": "145678 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 81847,
            "unit": "ns/op",
            "extra": "145678 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1548,
            "unit": "B/op",
            "extra": "145678 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "145678 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 330212,
            "unit": "ns/op\t   43391 B/op\t     111 allocs/op",
            "extra": "36661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 330212,
            "unit": "ns/op",
            "extra": "36661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43391,
            "unit": "B/op",
            "extra": "36661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "36661 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 327653,
            "unit": "ns/op\t   42881 B/op\t     112 allocs/op",
            "extra": "36721 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 327653,
            "unit": "ns/op",
            "extra": "36721 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42881,
            "unit": "B/op",
            "extra": "36721 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "36721 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 45468,
            "unit": "ns/op\t    1735 B/op\t      32 allocs/op",
            "extra": "258204 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 45468,
            "unit": "ns/op",
            "extra": "258204 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1735,
            "unit": "B/op",
            "extra": "258204 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "258204 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 45459,
            "unit": "ns/op\t    1551 B/op\t      33 allocs/op",
            "extra": "264285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 45459,
            "unit": "ns/op",
            "extra": "264285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1551,
            "unit": "B/op",
            "extra": "264285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "264285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11728586,
            "unit": "ns/op\t   42797 B/op\t     106 allocs/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11728586,
            "unit": "ns/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42797,
            "unit": "B/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1008 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 10100239,
            "unit": "ns/op\t   42778 B/op\t     107 allocs/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 10100239,
            "unit": "ns/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42778,
            "unit": "B/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11227736,
            "unit": "ns/op\t    1382 B/op\t      28 allocs/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11227736,
            "unit": "ns/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1382,
            "unit": "B/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1094 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 10608209,
            "unit": "ns/op\t    1409 B/op\t      29 allocs/op",
            "extra": "1125 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 10608209,
            "unit": "ns/op",
            "extra": "1125 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1409,
            "unit": "B/op",
            "extra": "1125 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1125 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11754513,
            "unit": "ns/op\t   42890 B/op\t     106 allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11754513,
            "unit": "ns/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42890,
            "unit": "B/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9970204,
            "unit": "ns/op\t   42771 B/op\t     107 allocs/op",
            "extra": "1194 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9970204,
            "unit": "ns/op",
            "extra": "1194 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42771,
            "unit": "B/op",
            "extra": "1194 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1194 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11627392,
            "unit": "ns/op\t    1377 B/op\t      28 allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11627392,
            "unit": "ns/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10802418,
            "unit": "ns/op\t    1469 B/op\t      29 allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10802418,
            "unit": "ns/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1469,
            "unit": "B/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6371248,
            "unit": "ns/op\t   53381 B/op\t     129 allocs/op",
            "extra": "1892 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6371248,
            "unit": "ns/op",
            "extra": "1892 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 53381,
            "unit": "B/op",
            "extra": "1892 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1892 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5263679,
            "unit": "ns/op\t   42984 B/op\t     112 allocs/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5263679,
            "unit": "ns/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42984,
            "unit": "B/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4728948,
            "unit": "ns/op\t    4719 B/op\t      50 allocs/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4728948,
            "unit": "ns/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4719,
            "unit": "B/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2210 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3518362,
            "unit": "ns/op\t    1553 B/op\t      33 allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3518362,
            "unit": "ns/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1553,
            "unit": "B/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3339 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6360442,
            "unit": "ns/op\t   50990 B/op\t     129 allocs/op",
            "extra": "1921 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6360442,
            "unit": "ns/op",
            "extra": "1921 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 50990,
            "unit": "B/op",
            "extra": "1921 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1921 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5338277,
            "unit": "ns/op\t   43107 B/op\t     112 allocs/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5338277,
            "unit": "ns/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43107,
            "unit": "B/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2156 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4926264,
            "unit": "ns/op\t    3751 B/op\t      50 allocs/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4926264,
            "unit": "ns/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 3751,
            "unit": "B/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3424866,
            "unit": "ns/op\t    1553 B/op\t      33 allocs/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3424866,
            "unit": "ns/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1553,
            "unit": "B/op",
            "extra": "3453 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3453 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "3c481ca8ed60b985fdcf598f17264c2ef71e978e",
          "message": "feat: improve client session handling",
          "timestamp": "2026-11-23T15:51:02+01:00",
          "tree_id": "5ad9f8e31e26afae3bbc562c675974e6f613601c",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/3c481ca8ed60b985fdcf598f17264c2ef71e978e"
        },
        "date": 1795446062447,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11542973,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 11542973,
            "unit": "ns/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1041 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 939737,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 939737,
            "unit": "ns/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12794 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11519827,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11519827,
            "unit": "ns/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 935715,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12806 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 935715,
            "unit": "ns/op",
            "extra": "12806 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12806 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12806 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11872548,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 11872548,
            "unit": "ns/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1011 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 697132,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "17190 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 697132,
            "unit": "ns/op",
            "extra": "17190 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "17190 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17190 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11852016,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 11852016,
            "unit": "ns/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 703903,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "17068 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 703903,
            "unit": "ns/op",
            "extra": "17068 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "17068 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17068 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 9325981,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1279 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 9325981,
            "unit": "ns/op",
            "extra": "1279 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1279 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1279 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 530147,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "22552 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 530147,
            "unit": "ns/op",
            "extra": "22552 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "22552 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22552 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 9511509,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 9511509,
            "unit": "ns/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1256 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 661908,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "18075 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 661908,
            "unit": "ns/op",
            "extra": "18075 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "18075 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "18075 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 10695755,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 10695755,
            "unit": "ns/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1107 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 580368,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "20634 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 580368,
            "unit": "ns/op",
            "extra": "20634 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "20634 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20634 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 10980789,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1096 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 10980789,
            "unit": "ns/op",
            "extra": "1096 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1096 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1096 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 710223,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "16909 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 710223,
            "unit": "ns/op",
            "extra": "16909 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "16909 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "16909 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 155201,
            "unit": "ns/op\t   42642 B/op\t     106 allocs/op",
            "extra": "77448 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 155201,
            "unit": "ns/op",
            "extra": "77448 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42642,
            "unit": "B/op",
            "extra": "77448 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "77448 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 155348,
            "unit": "ns/op\t   42732 B/op\t     107 allocs/op",
            "extra": "77037 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 155348,
            "unit": "ns/op",
            "extra": "77037 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42732,
            "unit": "B/op",
            "extra": "77037 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "77037 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 33137,
            "unit": "ns/op\t    1282 B/op\t      28 allocs/op",
            "extra": "359490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 33137,
            "unit": "ns/op",
            "extra": "359490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1282,
            "unit": "B/op",
            "extra": "359490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "359490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 32999,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "355292 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 32999,
            "unit": "ns/op",
            "extra": "355292 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "355292 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "355292 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 136027,
            "unit": "ns/op\t   42632 B/op\t     106 allocs/op",
            "extra": "89160 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 136027,
            "unit": "ns/op",
            "extra": "89160 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42632,
            "unit": "B/op",
            "extra": "89160 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "89160 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 134645,
            "unit": "ns/op\t   42716 B/op\t     107 allocs/op",
            "extra": "88267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 134645,
            "unit": "ns/op",
            "extra": "88267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42716,
            "unit": "B/op",
            "extra": "88267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "88267 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 17005,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "695486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 17005,
            "unit": "ns/op",
            "extra": "695486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "695486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "695486 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 17009,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "700578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 17009,
            "unit": "ns/op",
            "extra": "700578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "700578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "700578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 140754,
            "unit": "ns/op\t   43651 B/op\t     111 allocs/op",
            "extra": "85452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 140754,
            "unit": "ns/op",
            "extra": "85452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43651,
            "unit": "B/op",
            "extra": "85452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "85452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 139469,
            "unit": "ns/op\t   42896 B/op\t     112 allocs/op",
            "extra": "85897 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 139469,
            "unit": "ns/op",
            "extra": "85897 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42896,
            "unit": "B/op",
            "extra": "85897 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "85897 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 26112,
            "unit": "ns/op\t    1727 B/op\t      32 allocs/op",
            "extra": "449538 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 26112,
            "unit": "ns/op",
            "extra": "449538 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1727,
            "unit": "B/op",
            "extra": "449538 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "449538 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 26082,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "456873 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 26082,
            "unit": "ns/op",
            "extra": "456873 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "456873 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "456873 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 127632,
            "unit": "ns/op\t   43525 B/op\t     111 allocs/op",
            "extra": "93220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 127632,
            "unit": "ns/op",
            "extra": "93220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43525,
            "unit": "B/op",
            "extra": "93220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "93220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 127004,
            "unit": "ns/op\t   42891 B/op\t     112 allocs/op",
            "extra": "94148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 127004,
            "unit": "ns/op",
            "extra": "94148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42891,
            "unit": "B/op",
            "extra": "94148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "94148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 15404,
            "unit": "ns/op\t    1732 B/op\t      32 allocs/op",
            "extra": "759471 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 15404,
            "unit": "ns/op",
            "extra": "759471 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1732,
            "unit": "B/op",
            "extra": "759471 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "759471 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 15456,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "768091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 15456,
            "unit": "ns/op",
            "extra": "768091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "768091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "768091 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5389563,
            "unit": "ns/op\t   42734 B/op\t     106 allocs/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5389563,
            "unit": "ns/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42734,
            "unit": "B/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 4897851,
            "unit": "ns/op\t   42673 B/op\t     107 allocs/op",
            "extra": "2466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4897851,
            "unit": "ns/op",
            "extra": "2466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42673,
            "unit": "B/op",
            "extra": "2466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 6564896,
            "unit": "ns/op\t    1356 B/op\t      28 allocs/op",
            "extra": "1858 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6564896,
            "unit": "ns/op",
            "extra": "1858 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1356,
            "unit": "B/op",
            "extra": "1858 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1858 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 5876649,
            "unit": "ns/op\t    1397 B/op\t      29 allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 5876649,
            "unit": "ns/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1397,
            "unit": "B/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2017 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 5417926,
            "unit": "ns/op\t   42782 B/op\t     106 allocs/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5417926,
            "unit": "ns/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42782,
            "unit": "B/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "2205 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 4895972,
            "unit": "ns/op\t   42734 B/op\t     107 allocs/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4895972,
            "unit": "ns/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42734,
            "unit": "B/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2460 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 6602474,
            "unit": "ns/op\t    1339 B/op\t      28 allocs/op",
            "extra": "1845 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6602474,
            "unit": "ns/op",
            "extra": "1845 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1339,
            "unit": "B/op",
            "extra": "1845 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1845 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 6034249,
            "unit": "ns/op\t    1426 B/op\t      29 allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 6034249,
            "unit": "ns/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1426,
            "unit": "B/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5087080,
            "unit": "ns/op\t   48641 B/op\t     129 allocs/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5087080,
            "unit": "ns/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 48641,
            "unit": "B/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2344 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3040502,
            "unit": "ns/op\t   42968 B/op\t     112 allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3040502,
            "unit": "ns/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42968,
            "unit": "B/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "3993 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4632350,
            "unit": "ns/op\t    4295 B/op\t      50 allocs/op",
            "extra": "2588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4632350,
            "unit": "ns/op",
            "extra": "2588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4295,
            "unit": "B/op",
            "extra": "2588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2588 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2305510,
            "unit": "ns/op\t    1558 B/op\t      33 allocs/op",
            "extra": "4833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2305510,
            "unit": "ns/op",
            "extra": "4833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1558,
            "unit": "B/op",
            "extra": "4833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "4833 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 5177437,
            "unit": "ns/op\t   51621 B/op\t     129 allocs/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5177437,
            "unit": "ns/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 51621,
            "unit": "B/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3053246,
            "unit": "ns/op\t   42956 B/op\t     112 allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3053246,
            "unit": "ns/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42956,
            "unit": "B/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "3891 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4644059,
            "unit": "ns/op\t    4347 B/op\t      50 allocs/op",
            "extra": "2535 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4644059,
            "unit": "ns/op",
            "extra": "2535 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4347,
            "unit": "B/op",
            "extra": "2535 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2535 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2280792,
            "unit": "ns/op\t    1553 B/op\t      33 allocs/op",
            "extra": "4996 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2280792,
            "unit": "ns/op",
            "extra": "4996 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1553,
            "unit": "B/op",
            "extra": "4996 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "4996 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "1f8ffacb9c803f001138d3203cdba7b5fb1eb0b6",
          "message": "fix: perf issue with many recipient and partial sending",
          "timestamp": "2026-11-23T17:05:36+01:00",
          "tree_id": "d974e03a637ef9b7e6de175c1b0cc27f02a907d4",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/1f8ffacb9c803f001138d3203cdba7b5fb1eb0b6"
        },
        "date": 1795450534939,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 17799514,
            "unit": "ns/op\t    4285 B/op\t       4 allocs/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 17799514,
            "unit": "ns/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4285,
            "unit": "B/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "674 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 924537,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 924537,
            "unit": "ns/op",
            "extra": "12967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12967 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 17804556,
            "unit": "ns/op\t    4269 B/op\t       4 allocs/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 17804556,
            "unit": "ns/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4269,
            "unit": "B/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "667 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 929228,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12891 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 929228,
            "unit": "ns/op",
            "extra": "12891 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12891 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12891 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 17764306,
            "unit": "ns/op\t    4284 B/op\t       4 allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 17764306,
            "unit": "ns/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4284,
            "unit": "B/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "679 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 716923,
            "unit": "ns/op\t    4273 B/op\t       4 allocs/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 716923,
            "unit": "ns/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4273,
            "unit": "B/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "16753 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 17700380,
            "unit": "ns/op\t    4268 B/op\t       4 allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 17700380,
            "unit": "ns/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4268,
            "unit": "B/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "678 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 692866,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "17293 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 692866,
            "unit": "ns/op",
            "extra": "17293 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "17293 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17293 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 15269920,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 15269920,
            "unit": "ns/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "787 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 590905,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "20356 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 590905,
            "unit": "ns/op",
            "extra": "20356 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "20356 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "20356 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 15743540,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "748 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 15743540,
            "unit": "ns/op",
            "extra": "748 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "748 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "748 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 686294,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "17376 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 686294,
            "unit": "ns/op",
            "extra": "17376 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "17376 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "17376 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 15423114,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 15423114,
            "unit": "ns/op",
            "extra": "778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 663513,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "18046 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 663513,
            "unit": "ns/op",
            "extra": "18046 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "18046 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "18046 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 15748669,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 15748669,
            "unit": "ns/op",
            "extra": "759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "759 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 775260,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "15465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 775260,
            "unit": "ns/op",
            "extra": "15465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "15465 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "15465 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 299403,
            "unit": "ns/op\t   42621 B/op\t     106 allocs/op",
            "extra": "39692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 299403,
            "unit": "ns/op",
            "extra": "39692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42621,
            "unit": "B/op",
            "extra": "39692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "39692 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 298471,
            "unit": "ns/op\t   42719 B/op\t     107 allocs/op",
            "extra": "40202 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 298471,
            "unit": "ns/op",
            "extra": "40202 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42719,
            "unit": "B/op",
            "extra": "40202 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "40202 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 85738,
            "unit": "ns/op\t    1282 B/op\t      28 allocs/op",
            "extra": "140452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 85738,
            "unit": "ns/op",
            "extra": "140452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1282,
            "unit": "B/op",
            "extra": "140452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "140452 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 85612,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "138880 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 85612,
            "unit": "ns/op",
            "extra": "138880 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "138880 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "138880 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 250690,
            "unit": "ns/op\t   42625 B/op\t     106 allocs/op",
            "extra": "47815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 250690,
            "unit": "ns/op",
            "extra": "47815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42625,
            "unit": "B/op",
            "extra": "47815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "47815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 252044,
            "unit": "ns/op\t   42720 B/op\t     107 allocs/op",
            "extra": "48099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 252044,
            "unit": "ns/op",
            "extra": "48099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42720,
            "unit": "B/op",
            "extra": "48099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "48099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 38341,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "316759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 38341,
            "unit": "ns/op",
            "extra": "316759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "316759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "316759 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 39018,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "306992 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 39018,
            "unit": "ns/op",
            "extra": "306992 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "306992 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "306992 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 272062,
            "unit": "ns/op\t   42963 B/op\t     111 allocs/op",
            "extra": "43995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 272062,
            "unit": "ns/op",
            "extra": "43995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42963,
            "unit": "B/op",
            "extra": "43995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "43995 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 275528,
            "unit": "ns/op\t   42889 B/op\t     112 allocs/op",
            "extra": "43066 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 275528,
            "unit": "ns/op",
            "extra": "43066 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42889,
            "unit": "B/op",
            "extra": "43066 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "43066 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 68711,
            "unit": "ns/op\t    1687 B/op\t      32 allocs/op",
            "extra": "174610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 68711,
            "unit": "ns/op",
            "extra": "174610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1687,
            "unit": "B/op",
            "extra": "174610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "174610 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 68506,
            "unit": "ns/op\t    1548 B/op\t      33 allocs/op",
            "extra": "175467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 68506,
            "unit": "ns/op",
            "extra": "175467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1548,
            "unit": "B/op",
            "extra": "175467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "175467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 240807,
            "unit": "ns/op\t   43323 B/op\t     111 allocs/op",
            "extra": "49671 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 240807,
            "unit": "ns/op",
            "extra": "49671 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43323,
            "unit": "B/op",
            "extra": "49671 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "49671 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 239995,
            "unit": "ns/op\t   42892 B/op\t     112 allocs/op",
            "extra": "49746 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 239995,
            "unit": "ns/op",
            "extra": "49746 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42892,
            "unit": "B/op",
            "extra": "49746 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "49746 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 36953,
            "unit": "ns/op\t    1731 B/op\t      32 allocs/op",
            "extra": "321410 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 36953,
            "unit": "ns/op",
            "extra": "321410 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1731,
            "unit": "B/op",
            "extra": "321410 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "321410 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 36940,
            "unit": "ns/op\t    1550 B/op\t      33 allocs/op",
            "extra": "327026 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 36940,
            "unit": "ns/op",
            "extra": "327026 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1550,
            "unit": "B/op",
            "extra": "327026 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "327026 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 9396877,
            "unit": "ns/op\t   42841 B/op\t     106 allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 9396877,
            "unit": "ns/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42841,
            "unit": "B/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1269 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 8554285,
            "unit": "ns/op\t   42780 B/op\t     107 allocs/op",
            "extra": "1407 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 8554285,
            "unit": "ns/op",
            "extra": "1407 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42780,
            "unit": "B/op",
            "extra": "1407 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1407 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 9796608,
            "unit": "ns/op\t    1370 B/op\t      28 allocs/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 9796608,
            "unit": "ns/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1370,
            "unit": "B/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1238 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 9267825,
            "unit": "ns/op\t    1429 B/op\t      29 allocs/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 9267825,
            "unit": "ns/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1429,
            "unit": "B/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1323 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 9364606,
            "unit": "ns/op\t   42872 B/op\t     106 allocs/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 9364606,
            "unit": "ns/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42872,
            "unit": "B/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1263 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 8557489,
            "unit": "ns/op\t   42860 B/op\t     107 allocs/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 8557489,
            "unit": "ns/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42860,
            "unit": "B/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1404 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 9686502,
            "unit": "ns/op\t    1366 B/op\t      28 allocs/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 9686502,
            "unit": "ns/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1366,
            "unit": "B/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 9050844,
            "unit": "ns/op\t    1427 B/op\t      29 allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 9050844,
            "unit": "ns/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1427,
            "unit": "B/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1359 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5359199,
            "unit": "ns/op\t   48946 B/op\t     129 allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5359199,
            "unit": "ns/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 48946,
            "unit": "B/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 4645676,
            "unit": "ns/op\t   42925 B/op\t     112 allocs/op",
            "extra": "2611 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4645676,
            "unit": "ns/op",
            "extra": "2611 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42925,
            "unit": "B/op",
            "extra": "2611 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2611 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4119975,
            "unit": "ns/op\t    3322 B/op\t      50 allocs/op",
            "extra": "2846 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4119975,
            "unit": "ns/op",
            "extra": "2846 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 3322,
            "unit": "B/op",
            "extra": "2846 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2846 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3299053,
            "unit": "ns/op\t    1562 B/op\t      33 allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3299053,
            "unit": "ns/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1562,
            "unit": "B/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3627 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 5409255,
            "unit": "ns/op\t   50082 B/op\t     129 allocs/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5409255,
            "unit": "ns/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 50082,
            "unit": "B/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2173 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 4615966,
            "unit": "ns/op\t   42922 B/op\t     112 allocs/op",
            "extra": "2599 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4615966,
            "unit": "ns/op",
            "extra": "2599 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42922,
            "unit": "B/op",
            "extra": "2599 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2599 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4061763,
            "unit": "ns/op\t    4127 B/op\t      50 allocs/op",
            "extra": "2773 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4061763,
            "unit": "ns/op",
            "extra": "2773 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4127,
            "unit": "B/op",
            "extra": "2773 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2773 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3183841,
            "unit": "ns/op\t    1555 B/op\t      33 allocs/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3183841,
            "unit": "ns/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1555,
            "unit": "B/op",
            "extra": "3544 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3544 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "f5fb1f2846e4cf164bba91eea5c6b0f3dee7d824",
          "message": "feat: recipient verification by RCPT TO or VRFY, client refusals keep\nthe connection",
          "timestamp": "2026-11-24T00:34:54+01:00",
          "tree_id": "a7cf1b16bea3f0613bc9330a489d42aec6cb6bf8",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/f5fb1f2846e4cf164bba91eea5c6b0f3dee7d824"
        },
        "date": 1795477489067,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22825139,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22825139,
            "unit": "ns/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1136004,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1136004,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22699688,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22699688,
            "unit": "ns/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "526 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1136800,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1136800,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22732204,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22732204,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 965976,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12352 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 965976,
            "unit": "ns/op",
            "extra": "12352 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12352 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12352 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22671945,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22671945,
            "unit": "ns/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "528 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 980778,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12217 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 980778,
            "unit": "ns/op",
            "extra": "12217 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12217 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12217 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 19992347,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 19992347,
            "unit": "ns/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "600 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 755517,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 755517,
            "unit": "ns/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15872 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 20091710,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 20091710,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 844994,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14206 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 844994,
            "unit": "ns/op",
            "extra": "14206 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14206 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14206 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 20144833,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 20144833,
            "unit": "ns/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "595 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 958366,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 958366,
            "unit": "ns/op",
            "extra": "12524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 20326966,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 20326966,
            "unit": "ns/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "589 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1055978,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1055978,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 410004,
            "unit": "ns/op\t   42671 B/op\t     106 allocs/op",
            "extra": "29217 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 410004,
            "unit": "ns/op",
            "extra": "29217 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42671,
            "unit": "B/op",
            "extra": "29217 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "29217 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 410312,
            "unit": "ns/op\t   42774 B/op\t     107 allocs/op",
            "extra": "29161 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 410312,
            "unit": "ns/op",
            "extra": "29161 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42774,
            "unit": "B/op",
            "extra": "29161 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "29161 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 104531,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "113722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 104531,
            "unit": "ns/op",
            "extra": "113722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "113722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "113722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 106684,
            "unit": "ns/op\t    1378 B/op\t      29 allocs/op",
            "extra": "112654 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 106684,
            "unit": "ns/op",
            "extra": "112654 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1378,
            "unit": "B/op",
            "extra": "112654 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "112654 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 355499,
            "unit": "ns/op\t   42700 B/op\t     106 allocs/op",
            "extra": "33730 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 355499,
            "unit": "ns/op",
            "extra": "33730 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42700,
            "unit": "B/op",
            "extra": "33730 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "33730 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 355245,
            "unit": "ns/op\t   42769 B/op\t     107 allocs/op",
            "extra": "33860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 355245,
            "unit": "ns/op",
            "extra": "33860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42769,
            "unit": "B/op",
            "extra": "33860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "33860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 48602,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "243422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 48602,
            "unit": "ns/op",
            "extra": "243422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "243422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "243422 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 48888,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "244896 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 48888,
            "unit": "ns/op",
            "extra": "244896 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "244896 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "244896 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 382938,
            "unit": "ns/op\t   43100 B/op\t     111 allocs/op",
            "extra": "31466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 382938,
            "unit": "ns/op",
            "extra": "31466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43100,
            "unit": "B/op",
            "extra": "31466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "31466 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 375071,
            "unit": "ns/op\t   42950 B/op\t     112 allocs/op",
            "extra": "31893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 375071,
            "unit": "ns/op",
            "extra": "31893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42950,
            "unit": "B/op",
            "extra": "31893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "31893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 84248,
            "unit": "ns/op\t    1751 B/op\t      32 allocs/op",
            "extra": "141063 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 84248,
            "unit": "ns/op",
            "extra": "141063 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1751,
            "unit": "B/op",
            "extra": "141063 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "141063 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 83829,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "142333 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 83829,
            "unit": "ns/op",
            "extra": "142333 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "142333 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "142333 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 340251,
            "unit": "ns/op\t   43499 B/op\t     111 allocs/op",
            "extra": "35119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 340251,
            "unit": "ns/op",
            "extra": "35119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43499,
            "unit": "B/op",
            "extra": "35119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "35119 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 345705,
            "unit": "ns/op\t   42953 B/op\t     112 allocs/op",
            "extra": "34976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 345705,
            "unit": "ns/op",
            "extra": "34976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42953,
            "unit": "B/op",
            "extra": "34976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "34976 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 46491,
            "unit": "ns/op\t    1730 B/op\t      32 allocs/op",
            "extra": "255537 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 46491,
            "unit": "ns/op",
            "extra": "255537 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1730,
            "unit": "B/op",
            "extra": "255537 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "255537 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 46577,
            "unit": "ns/op\t    1550 B/op\t      33 allocs/op",
            "extra": "257577 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 46577,
            "unit": "ns/op",
            "extra": "257577 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1550,
            "unit": "B/op",
            "extra": "257577 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "257577 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11274119,
            "unit": "ns/op\t   42870 B/op\t     106 allocs/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11274119,
            "unit": "ns/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42870,
            "unit": "B/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1051 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 9776809,
            "unit": "ns/op\t   42841 B/op\t     107 allocs/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 9776809,
            "unit": "ns/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42841,
            "unit": "B/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1228 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 12005254,
            "unit": "ns/op\t    1386 B/op\t      28 allocs/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 12005254,
            "unit": "ns/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1386,
            "unit": "B/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1059 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 11415122,
            "unit": "ns/op\t    1373 B/op\t      29 allocs/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 11415122,
            "unit": "ns/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1373,
            "unit": "B/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1130 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11190461,
            "unit": "ns/op\t   43040 B/op\t     106 allocs/op",
            "extra": "1081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11190461,
            "unit": "ns/op",
            "extra": "1081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43040,
            "unit": "B/op",
            "extra": "1081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1081 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9741811,
            "unit": "ns/op\t   42928 B/op\t     107 allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9741811,
            "unit": "ns/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42928,
            "unit": "B/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1215 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11032430,
            "unit": "ns/op\t    1369 B/op\t      28 allocs/op",
            "extra": "1162 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11032430,
            "unit": "ns/op",
            "extra": "1162 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1369,
            "unit": "B/op",
            "extra": "1162 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1162 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 11141549,
            "unit": "ns/op\t    1408 B/op\t      29 allocs/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 11141549,
            "unit": "ns/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1408,
            "unit": "B/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1174 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6207560,
            "unit": "ns/op\t   53328 B/op\t     129 allocs/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6207560,
            "unit": "ns/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 53328,
            "unit": "B/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1917 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5409612,
            "unit": "ns/op\t   43088 B/op\t     112 allocs/op",
            "extra": "2221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5409612,
            "unit": "ns/op",
            "extra": "2221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43088,
            "unit": "B/op",
            "extra": "2221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4787448,
            "unit": "ns/op\t    4742 B/op\t      50 allocs/op",
            "extra": "2190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4787448,
            "unit": "ns/op",
            "extra": "2190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4742,
            "unit": "B/op",
            "extra": "2190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3428835,
            "unit": "ns/op\t    1576 B/op\t      33 allocs/op",
            "extra": "3214 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3428835,
            "unit": "ns/op",
            "extra": "3214 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1576,
            "unit": "B/op",
            "extra": "3214 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3214 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6365847,
            "unit": "ns/op\t   51222 B/op\t     129 allocs/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6365847,
            "unit": "ns/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 51222,
            "unit": "B/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "1870 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5502349,
            "unit": "ns/op\t   43049 B/op\t     112 allocs/op",
            "extra": "2235 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5502349,
            "unit": "ns/op",
            "extra": "2235 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43049,
            "unit": "B/op",
            "extra": "2235 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "2235 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4893372,
            "unit": "ns/op\t    4740 B/op\t      50 allocs/op",
            "extra": "2192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4893372,
            "unit": "ns/op",
            "extra": "2192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4740,
            "unit": "B/op",
            "extra": "2192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2192 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3398810,
            "unit": "ns/op\t    1565 B/op\t      33 allocs/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3398810,
            "unit": "ns/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1565,
            "unit": "B/op",
            "extra": "3440 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3440 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "ab74189eb7cecc58e665f25cf4448205eadfcb3d",
          "message": "feat: Verifier for recipient verification, SMTPUTF8 whenever supported",
          "timestamp": "2026-11-24T01:40:43+01:00",
          "tree_id": "5ae4e6b09282021df75726c517d08cb7a057f453",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/ab74189eb7cecc58e665f25cf4448205eadfcb3d"
        },
        "date": 1795481439532,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 11583660,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 11583660,
            "unit": "ns/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 926181,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 926181,
            "unit": "ns/op",
            "extra": "12938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11576434,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11576434,
            "unit": "ns/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1036 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 927642,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "12904 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 927642,
            "unit": "ns/op",
            "extra": "12904 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "12904 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12904 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 11886397,
            "unit": "ns/op\t    4280 B/op\t       4 allocs/op",
            "extra": "1009 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 11886397,
            "unit": "ns/op",
            "extra": "1009 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4280,
            "unit": "B/op",
            "extra": "1009 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1009 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 690438,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 690438,
            "unit": "ns/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17311 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 11883466,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1006 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 11883466,
            "unit": "ns/op",
            "extra": "1006 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1006 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1006 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 694115,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "17264 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 694115,
            "unit": "ns/op",
            "extra": "17264 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "17264 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "17264 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 9394335,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1272 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 9394335,
            "unit": "ns/op",
            "extra": "1272 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1272 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1272 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 529393,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "22609 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 529393,
            "unit": "ns/op",
            "extra": "22609 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "22609 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22609 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 9548505,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 9548505,
            "unit": "ns/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1251 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 650605,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "18386 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 650605,
            "unit": "ns/op",
            "extra": "18386 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "18386 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "18386 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 10793091,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1105 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 10793091,
            "unit": "ns/op",
            "extra": "1105 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1105 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1105 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 569308,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "21081 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 569308,
            "unit": "ns/op",
            "extra": "21081 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "21081 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "21081 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 11021303,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 11021303,
            "unit": "ns/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1089 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 687653,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 687653,
            "unit": "ns/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "17445 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 158045,
            "unit": "ns/op\t   42713 B/op\t     106 allocs/op",
            "extra": "74682 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 158045,
            "unit": "ns/op",
            "extra": "74682 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42713,
            "unit": "B/op",
            "extra": "74682 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "74682 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 159576,
            "unit": "ns/op\t   42806 B/op\t     107 allocs/op",
            "extra": "75578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 159576,
            "unit": "ns/op",
            "extra": "75578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42806,
            "unit": "B/op",
            "extra": "75578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "75578 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 33140,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "355572 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 33140,
            "unit": "ns/op",
            "extra": "355572 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "355572 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "355572 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 33177,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "362336 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 33177,
            "unit": "ns/op",
            "extra": "362336 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "362336 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "362336 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 138838,
            "unit": "ns/op\t   42691 B/op\t     106 allocs/op",
            "extra": "86348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 138838,
            "unit": "ns/op",
            "extra": "86348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42691,
            "unit": "B/op",
            "extra": "86348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "86348 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 139726,
            "unit": "ns/op\t   42792 B/op\t     107 allocs/op",
            "extra": "86067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 139726,
            "unit": "ns/op",
            "extra": "86067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42792,
            "unit": "B/op",
            "extra": "86067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "86067 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 17039,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "677737 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 17039,
            "unit": "ns/op",
            "extra": "677737 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "677737 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "677737 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 17211,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "708181 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 17211,
            "unit": "ns/op",
            "extra": "708181 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "708181 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "708181 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 144558,
            "unit": "ns/op\t   43179 B/op\t     111 allocs/op",
            "extra": "82501 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 144558,
            "unit": "ns/op",
            "extra": "82501 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43179,
            "unit": "B/op",
            "extra": "82501 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "82501 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 145607,
            "unit": "ns/op\t   42961 B/op\t     112 allocs/op",
            "extra": "81164 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 145607,
            "unit": "ns/op",
            "extra": "81164 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42961,
            "unit": "B/op",
            "extra": "81164 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "81164 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 26214,
            "unit": "ns/op\t    1717 B/op\t      32 allocs/op",
            "extra": "447888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 26214,
            "unit": "ns/op",
            "extra": "447888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1717,
            "unit": "B/op",
            "extra": "447888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "447888 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 26185,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "451658 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 26185,
            "unit": "ns/op",
            "extra": "451658 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "451658 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "451658 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 127677,
            "unit": "ns/op\t   43444 B/op\t     111 allocs/op",
            "extra": "93325 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 127677,
            "unit": "ns/op",
            "extra": "93325 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43444,
            "unit": "B/op",
            "extra": "93325 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "93325 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 129387,
            "unit": "ns/op\t   42957 B/op\t     112 allocs/op",
            "extra": "92786 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 129387,
            "unit": "ns/op",
            "extra": "92786 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42957,
            "unit": "B/op",
            "extra": "92786 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "92786 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 15522,
            "unit": "ns/op\t    1748 B/op\t      32 allocs/op",
            "extra": "755601 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 15522,
            "unit": "ns/op",
            "extra": "755601 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1748,
            "unit": "B/op",
            "extra": "755601 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "755601 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 15440,
            "unit": "ns/op\t    1549 B/op\t      33 allocs/op",
            "extra": "768745 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 15440,
            "unit": "ns/op",
            "extra": "768745 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "768745 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "768745 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 5307480,
            "unit": "ns/op\t   42878 B/op\t     106 allocs/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 5307480,
            "unit": "ns/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42878,
            "unit": "B/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 4807239,
            "unit": "ns/op\t   42855 B/op\t     107 allocs/op",
            "extra": "2529 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 4807239,
            "unit": "ns/op",
            "extra": "2529 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42855,
            "unit": "B/op",
            "extra": "2529 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2529 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 6338685,
            "unit": "ns/op\t    1337 B/op\t      28 allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6338685,
            "unit": "ns/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1337,
            "unit": "B/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1894 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 5818145,
            "unit": "ns/op\t    1404 B/op\t      29 allocs/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 5818145,
            "unit": "ns/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1404,
            "unit": "B/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2065 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 5316777,
            "unit": "ns/op\t   42889 B/op\t     106 allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 5316777,
            "unit": "ns/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42889,
            "unit": "B/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "2236 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 4759055,
            "unit": "ns/op\t   42907 B/op\t     107 allocs/op",
            "extra": "2517 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 4759055,
            "unit": "ns/op",
            "extra": "2517 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42907,
            "unit": "B/op",
            "extra": "2517 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2517 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 6254128,
            "unit": "ns/op\t    1336 B/op\t      28 allocs/op",
            "extra": "1936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6254128,
            "unit": "ns/op",
            "extra": "1936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1336,
            "unit": "B/op",
            "extra": "1936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 5778468,
            "unit": "ns/op\t    1404 B/op\t      29 allocs/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 5778468,
            "unit": "ns/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1404,
            "unit": "B/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2085 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 4904241,
            "unit": "ns/op\t   50255 B/op\t     129 allocs/op",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 4904241,
            "unit": "ns/op",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 50255,
            "unit": "B/op",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 2927938,
            "unit": "ns/op\t   43098 B/op\t     112 allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 2927938,
            "unit": "ns/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43098,
            "unit": "B/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "4086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4394646,
            "unit": "ns/op\t    3437 B/op\t      50 allocs/op",
            "extra": "2644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4394646,
            "unit": "ns/op",
            "extra": "2644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 3437,
            "unit": "B/op",
            "extra": "2644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2644 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2195683,
            "unit": "ns/op\t    1569 B/op\t      33 allocs/op",
            "extra": "5036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2195683,
            "unit": "ns/op",
            "extra": "5036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1569,
            "unit": "B/op",
            "extra": "5036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "5036 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4857864,
            "unit": "ns/op\t   54834 B/op\t     129 allocs/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4857864,
            "unit": "ns/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 54834,
            "unit": "B/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 129,
            "unit": "allocs/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 2899798,
            "unit": "ns/op\t   43058 B/op\t     112 allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 2899798,
            "unit": "ns/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43058,
            "unit": "B/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 112,
            "unit": "allocs/op",
            "extra": "4167 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4466064,
            "unit": "ns/op\t    4175 B/op\t      50 allocs/op",
            "extra": "2724 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4466064,
            "unit": "ns/op",
            "extra": "2724 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4175,
            "unit": "B/op",
            "extra": "2724 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2724 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2212684,
            "unit": "ns/op\t    1553 B/op\t      33 allocs/op",
            "extra": "4981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2212684,
            "unit": "ns/op",
            "extra": "4981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1553,
            "unit": "B/op",
            "extra": "4981 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "4981 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "16bb2545e778c949ee8548aac37e0c94374f67e1",
          "message": "feat: modernize and reduce allocations",
          "timestamp": "2026-11-24T10:55:30+01:00",
          "tree_id": "6c7d0b46fd8d27a23932273179ecbe8b7e02b6da",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/16bb2545e778c949ee8548aac37e0c94374f67e1"
        },
        "date": 1795514736243,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 22870723,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 22870723,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1143807,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1143807,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22930572,
            "unit": "ns/op\t    4273 B/op\t       4 allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22930572,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4273,
            "unit": "B/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1143867,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1143867,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22844830,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22844830,
            "unit": "ns/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 903363,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13252 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 903363,
            "unit": "ns/op",
            "extra": "13252 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13252 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13252 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22880026,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22880026,
            "unit": "ns/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "523 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 901610,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13318 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 901610,
            "unit": "ns/op",
            "extra": "13318 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13318 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13318 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 20181578,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 20181578,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 752307,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 752307,
            "unit": "ns/op",
            "extra": "15936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 20440259,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 20440259,
            "unit": "ns/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "591 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 852441,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14056 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 852441,
            "unit": "ns/op",
            "extra": "14056 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14056 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14056 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 20173111,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 20173111,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 957128,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12553 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 957128,
            "unit": "ns/op",
            "extra": "12553 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12553 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12553 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 20520729,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 20520729,
            "unit": "ns/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "585 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1088843,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1088843,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 411661,
            "unit": "ns/op\t   42631 B/op\t     106 allocs/op",
            "extra": "29004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 411661,
            "unit": "ns/op",
            "extra": "29004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42631,
            "unit": "B/op",
            "extra": "29004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "29004 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 413177,
            "unit": "ns/op\t   42692 B/op\t     107 allocs/op",
            "extra": "29023 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 413177,
            "unit": "ns/op",
            "extra": "29023 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42692,
            "unit": "B/op",
            "extra": "29023 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "29023 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 104927,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "113478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 104927,
            "unit": "ns/op",
            "extra": "113478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "113478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "113478 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 104678,
            "unit": "ns/op\t    1378 B/op\t      29 allocs/op",
            "extra": "113893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 104678,
            "unit": "ns/op",
            "extra": "113893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1378,
            "unit": "B/op",
            "extra": "113893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "113893 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 359935,
            "unit": "ns/op\t   42615 B/op\t     106 allocs/op",
            "extra": "33542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 359935,
            "unit": "ns/op",
            "extra": "33542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42615,
            "unit": "B/op",
            "extra": "33542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "33542 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 356176,
            "unit": "ns/op\t   42719 B/op\t     107 allocs/op",
            "extra": "33776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 356176,
            "unit": "ns/op",
            "extra": "33776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42719,
            "unit": "B/op",
            "extra": "33776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "33776 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 48924,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "238266 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 48924,
            "unit": "ns/op",
            "extra": "238266 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "238266 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "238266 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 49466,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "242185 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 49466,
            "unit": "ns/op",
            "extra": "242185 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "242185 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "242185 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 376466,
            "unit": "ns/op\t   42992 B/op\t     110 allocs/op",
            "extra": "31752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 376466,
            "unit": "ns/op",
            "extra": "31752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42992,
            "unit": "B/op",
            "extra": "31752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "31752 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 383539,
            "unit": "ns/op\t   42837 B/op\t     111 allocs/op",
            "extra": "31704 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 383539,
            "unit": "ns/op",
            "extra": "31704 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42837,
            "unit": "B/op",
            "extra": "31704 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "31704 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 84201,
            "unit": "ns/op\t    1674 B/op\t      31 allocs/op",
            "extra": "141777 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 84201,
            "unit": "ns/op",
            "extra": "141777 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1674,
            "unit": "B/op",
            "extra": "141777 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "141777 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 83873,
            "unit": "ns/op\t    1518 B/op\t      32 allocs/op",
            "extra": "143361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 83873,
            "unit": "ns/op",
            "extra": "143361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1518,
            "unit": "B/op",
            "extra": "143361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "143361 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 336060,
            "unit": "ns/op\t   43445 B/op\t     110 allocs/op",
            "extra": "35516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 336060,
            "unit": "ns/op",
            "extra": "35516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43445,
            "unit": "B/op",
            "extra": "35516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "35516 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 339083,
            "unit": "ns/op\t   42841 B/op\t     111 allocs/op",
            "extra": "35503 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 339083,
            "unit": "ns/op",
            "extra": "35503 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42841,
            "unit": "B/op",
            "extra": "35503 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "35503 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 47145,
            "unit": "ns/op\t    1714 B/op\t      31 allocs/op",
            "extra": "247788 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 47145,
            "unit": "ns/op",
            "extra": "247788 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1714,
            "unit": "B/op",
            "extra": "247788 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "247788 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 46249,
            "unit": "ns/op\t    1517 B/op\t      32 allocs/op",
            "extra": "254635 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 46249,
            "unit": "ns/op",
            "extra": "254635 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1517,
            "unit": "B/op",
            "extra": "254635 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "254635 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11604479,
            "unit": "ns/op\t   42995 B/op\t     106 allocs/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11604479,
            "unit": "ns/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42995,
            "unit": "B/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1064 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 9563332,
            "unit": "ns/op\t   42639 B/op\t     107 allocs/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 9563332,
            "unit": "ns/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42639,
            "unit": "B/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1233 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11084987,
            "unit": "ns/op\t    1351 B/op\t      28 allocs/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11084987,
            "unit": "ns/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1351,
            "unit": "B/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1106 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 11386552,
            "unit": "ns/op\t    1430 B/op\t      29 allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 11386552,
            "unit": "ns/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1430,
            "unit": "B/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11493631,
            "unit": "ns/op\t   42910 B/op\t     106 allocs/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11493631,
            "unit": "ns/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42910,
            "unit": "B/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1042 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9553880,
            "unit": "ns/op\t   42669 B/op\t     107 allocs/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9553880,
            "unit": "ns/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42669,
            "unit": "B/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1280 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11565925,
            "unit": "ns/op\t    1382 B/op\t      28 allocs/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11565925,
            "unit": "ns/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1382,
            "unit": "B/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10494333,
            "unit": "ns/op\t    1380 B/op\t      29 allocs/op",
            "extra": "1183 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10494333,
            "unit": "ns/op",
            "extra": "1183 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1380,
            "unit": "B/op",
            "extra": "1183 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1183 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6481112,
            "unit": "ns/op\t   53348 B/op\t     122 allocs/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6481112,
            "unit": "ns/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 53348,
            "unit": "B/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "1878 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5620393,
            "unit": "ns/op\t   42973 B/op\t     111 allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5620393,
            "unit": "ns/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42973,
            "unit": "B/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4980874,
            "unit": "ns/op\t    3688 B/op\t      43 allocs/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4980874,
            "unit": "ns/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 3688,
            "unit": "B/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "2143 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3711145,
            "unit": "ns/op\t    1556 B/op\t      32 allocs/op",
            "extra": "3092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3711145,
            "unit": "ns/op",
            "extra": "3092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1556,
            "unit": "B/op",
            "extra": "3092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "3092 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6376460,
            "unit": "ns/op\t   53348 B/op\t     122 allocs/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6376460,
            "unit": "ns/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 53348,
            "unit": "B/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "1874 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5653713,
            "unit": "ns/op\t   42929 B/op\t     111 allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5653713,
            "unit": "ns/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42929,
            "unit": "B/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "2136 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4835687,
            "unit": "ns/op\t    3651 B/op\t      43 allocs/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4835687,
            "unit": "ns/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 3651,
            "unit": "B/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "2180 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3556782,
            "unit": "ns/op\t    1548 B/op\t      32 allocs/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3556782,
            "unit": "ns/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1548,
            "unit": "B/op",
            "extra": "3088 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "3088 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "90d483c06b8f403a7d6b9132bea475e6eebd4459",
          "message": "chore: improve readme / examples",
          "timestamp": "2026-11-24T11:43:21+01:00",
          "tree_id": "6bc2c370d65fe2a2aa603e75f439a307cf4031b4",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/90d483c06b8f403a7d6b9132bea475e6eebd4459"
        },
        "date": 1795517601463,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 12320697,
            "unit": "ns/op\t    4281 B/op\t       4 allocs/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 12320697,
            "unit": "ns/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "944 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 815346,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "14706 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 815346,
            "unit": "ns/op",
            "extra": "14706 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "14706 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "14706 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 11810339,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "997 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 11810339,
            "unit": "ns/op",
            "extra": "997 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "997 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "997 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 793107,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "15124 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 793107,
            "unit": "ns/op",
            "extra": "15124 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "15124 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15124 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 12397207,
            "unit": "ns/op\t    4281 B/op\t       4 allocs/op",
            "extra": "936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 12397207,
            "unit": "ns/op",
            "extra": "936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4281,
            "unit": "B/op",
            "extra": "936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "936 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 549519,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "21728 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 549519,
            "unit": "ns/op",
            "extra": "21728 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "21728 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "21728 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 12022242,
            "unit": "ns/op\t    4264 B/op\t       4 allocs/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 12022242,
            "unit": "ns/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4264,
            "unit": "B/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "1027 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 548030,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "21883 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 548030,
            "unit": "ns/op",
            "extra": "21883 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "21883 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "21883 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 11548044,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 11548044,
            "unit": "ns/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1045 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 434377,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "27540 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 434377,
            "unit": "ns/op",
            "extra": "27540 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "27540 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "27540 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 10747948,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 10747948,
            "unit": "ns/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1153 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 500117,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "23954 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 500117,
            "unit": "ns/op",
            "extra": "23954 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "23954 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "23954 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 11754523,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "1010 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 11754523,
            "unit": "ns/op",
            "extra": "1010 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "1010 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "1010 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 526861,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "22796 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 526861,
            "unit": "ns/op",
            "extra": "22796 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "22796 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "22796 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 11289447,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 11289447,
            "unit": "ns/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "1040 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 574985,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "20865 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 574985,
            "unit": "ns/op",
            "extra": "20865 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "20865 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "20865 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 241185,
            "unit": "ns/op\t   42575 B/op\t     106 allocs/op",
            "extra": "49922 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 241185,
            "unit": "ns/op",
            "extra": "49922 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42575,
            "unit": "B/op",
            "extra": "49922 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "49922 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 241858,
            "unit": "ns/op\t   42660 B/op\t     107 allocs/op",
            "extra": "49338 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 241858,
            "unit": "ns/op",
            "extra": "49338 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42660,
            "unit": "B/op",
            "extra": "49338 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "49338 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 80086,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "153121 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 80086,
            "unit": "ns/op",
            "extra": "153121 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "153121 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "153121 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 85130,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "155796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 85130,
            "unit": "ns/op",
            "extra": "155796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "155796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "155796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 205160,
            "unit": "ns/op\t   42581 B/op\t     106 allocs/op",
            "extra": "56983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 205160,
            "unit": "ns/op",
            "extra": "56983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42581,
            "unit": "B/op",
            "extra": "56983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "56983 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 197015,
            "unit": "ns/op\t   42670 B/op\t     107 allocs/op",
            "extra": "60694 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 197015,
            "unit": "ns/op",
            "extra": "60694 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42670,
            "unit": "B/op",
            "extra": "60694 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "60694 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 35258,
            "unit": "ns/op\t    1280 B/op\t      28 allocs/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 35258,
            "unit": "ns/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1280,
            "unit": "B/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "333631 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 35382,
            "unit": "ns/op\t    1376 B/op\t      29 allocs/op",
            "extra": "341409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 35382,
            "unit": "ns/op",
            "extra": "341409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1376,
            "unit": "B/op",
            "extra": "341409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "341409 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 220929,
            "unit": "ns/op\t   42876 B/op\t     110 allocs/op",
            "extra": "54300 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 220929,
            "unit": "ns/op",
            "extra": "54300 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42876,
            "unit": "B/op",
            "extra": "54300 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "54300 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 221285,
            "unit": "ns/op\t   42822 B/op\t     111 allocs/op",
            "extra": "53728 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 221285,
            "unit": "ns/op",
            "extra": "53728 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42822,
            "unit": "B/op",
            "extra": "53728 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "53728 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 63905,
            "unit": "ns/op\t    1671 B/op\t      31 allocs/op",
            "extra": "191295 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 63905,
            "unit": "ns/op",
            "extra": "191295 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1671,
            "unit": "B/op",
            "extra": "191295 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "191295 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 62705,
            "unit": "ns/op\t    1517 B/op\t      32 allocs/op",
            "extra": "187171 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 62705,
            "unit": "ns/op",
            "extra": "187171 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1517,
            "unit": "B/op",
            "extra": "187171 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "187171 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 184075,
            "unit": "ns/op\t   43552 B/op\t     110 allocs/op",
            "extra": "65796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 184075,
            "unit": "ns/op",
            "extra": "65796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43552,
            "unit": "B/op",
            "extra": "65796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "65796 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 183596,
            "unit": "ns/op\t   42832 B/op\t     111 allocs/op",
            "extra": "64809 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 183596,
            "unit": "ns/op",
            "extra": "64809 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42832,
            "unit": "B/op",
            "extra": "64809 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "64809 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 33016,
            "unit": "ns/op\t    1686 B/op\t      31 allocs/op",
            "extra": "356815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 33016,
            "unit": "ns/op",
            "extra": "356815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1686,
            "unit": "B/op",
            "extra": "356815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "356815 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 32781,
            "unit": "ns/op\t    1517 B/op\t      32 allocs/op",
            "extra": "372463 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 32781,
            "unit": "ns/op",
            "extra": "372463 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1517,
            "unit": "B/op",
            "extra": "372463 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "372463 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6191339,
            "unit": "ns/op\t   42739 B/op\t     106 allocs/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6191339,
            "unit": "ns/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42739,
            "unit": "B/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1984 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 5829823,
            "unit": "ns/op\t   42662 B/op\t     107 allocs/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5829823,
            "unit": "ns/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42662,
            "unit": "B/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "2073 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 6837820,
            "unit": "ns/op\t    1350 B/op\t      28 allocs/op",
            "extra": "1999 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6837820,
            "unit": "ns/op",
            "extra": "1999 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1350,
            "unit": "B/op",
            "extra": "1999 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1999 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 6679526,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 6679526,
            "unit": "ns/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1816 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 6942129,
            "unit": "ns/op\t   42785 B/op\t     106 allocs/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6942129,
            "unit": "ns/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42785,
            "unit": "B/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1712 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 6377626,
            "unit": "ns/op\t   42661 B/op\t     107 allocs/op",
            "extra": "1861 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 6377626,
            "unit": "ns/op",
            "extra": "1861 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42661,
            "unit": "B/op",
            "extra": "1861 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1861 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 6417959,
            "unit": "ns/op\t    1351 B/op\t      28 allocs/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 6417959,
            "unit": "ns/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1351,
            "unit": "B/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1982 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 6417841,
            "unit": "ns/op\t    1390 B/op\t      29 allocs/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 6417841,
            "unit": "ns/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1390,
            "unit": "B/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1876 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 4361894,
            "unit": "ns/op\t   55153 B/op\t     122 allocs/op",
            "extra": "2649 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 4361894,
            "unit": "ns/op",
            "extra": "2649 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 55153,
            "unit": "B/op",
            "extra": "2649 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "2649 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 3852062,
            "unit": "ns/op\t   42989 B/op\t     111 allocs/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 3852062,
            "unit": "ns/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42989,
            "unit": "B/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "3313 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 3839060,
            "unit": "ns/op\t    3071 B/op\t      43 allocs/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3839060,
            "unit": "ns/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 3071,
            "unit": "B/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 2939031,
            "unit": "ns/op\t    1531 B/op\t      32 allocs/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 2939031,
            "unit": "ns/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1531,
            "unit": "B/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "4188 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 4447542,
            "unit": "ns/op\t   47000 B/op\t     122 allocs/op",
            "extra": "2722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 4447542,
            "unit": "ns/op",
            "extra": "2722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 47000,
            "unit": "B/op",
            "extra": "2722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "2722 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 3831615,
            "unit": "ns/op\t   42960 B/op\t     111 allocs/op",
            "extra": "3163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 3831615,
            "unit": "ns/op",
            "extra": "3163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42960,
            "unit": "B/op",
            "extra": "3163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "3163 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 3836365,
            "unit": "ns/op\t    3074 B/op\t      43 allocs/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 3836365,
            "unit": "ns/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 3074,
            "unit": "B/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "3099 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 2867154,
            "unit": "ns/op\t    1545 B/op\t      32 allocs/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 2867154,
            "unit": "ns/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1545,
            "unit": "B/op",
            "extra": "4176 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "4176 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "e4b7f76f5d7bcd757ee44ade3b3c8a350bab2a6b",
          "message": "feat: make send generic and improve docs",
          "timestamp": "2026-11-24T11:57:47+01:00",
          "tree_id": "f21dc3971010ad9edd0d27e9c75a59046a382b8d",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/e4b7f76f5d7bcd757ee44ade3b3c8a350bab2a6b"
        },
        "date": 1795518452430,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 23176205,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 23176205,
            "unit": "ns/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "519 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1142429,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1142429,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 22877021,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 22877021,
            "unit": "ns/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "524 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1143507,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1143507,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 22821216,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 22821216,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 901019,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "13416 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 901019,
            "unit": "ns/op",
            "extra": "13416 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "13416 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13416 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 22783547,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 22783547,
            "unit": "ns/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "525 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 918311,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13296 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 918311,
            "unit": "ns/op",
            "extra": "13296 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13296 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13296 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 19987277,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 19987277,
            "unit": "ns/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "598 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 749343,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "16012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 749343,
            "unit": "ns/op",
            "extra": "16012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "16012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "16012 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 20262188,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 20262188,
            "unit": "ns/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "592 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 847789,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14143 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 847789,
            "unit": "ns/op",
            "extra": "14143 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14143 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14143 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 20143042,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 20143042,
            "unit": "ns/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "594 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 955933,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12550 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 955933,
            "unit": "ns/op",
            "extra": "12550 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12550 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12550 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 20322051,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 20322051,
            "unit": "ns/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "590 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1064906,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1064906,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 409910,
            "unit": "ns/op\t   42598 B/op\t     106 allocs/op",
            "extra": "29190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 409910,
            "unit": "ns/op",
            "extra": "29190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42598,
            "unit": "B/op",
            "extra": "29190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "29190 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 407740,
            "unit": "ns/op\t   42711 B/op\t     107 allocs/op",
            "extra": "29319 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 407740,
            "unit": "ns/op",
            "extra": "29319 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42711,
            "unit": "B/op",
            "extra": "29319 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "29319 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 105170,
            "unit": "ns/op\t    1281 B/op\t      28 allocs/op",
            "extra": "113482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 105170,
            "unit": "ns/op",
            "extra": "113482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1281,
            "unit": "B/op",
            "extra": "113482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "113482 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 105796,
            "unit": "ns/op\t    1378 B/op\t      29 allocs/op",
            "extra": "111936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 105796,
            "unit": "ns/op",
            "extra": "111936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1378,
            "unit": "B/op",
            "extra": "111936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "111936 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 354733,
            "unit": "ns/op\t   42625 B/op\t     106 allocs/op",
            "extra": "34044 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 354733,
            "unit": "ns/op",
            "extra": "34044 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42625,
            "unit": "B/op",
            "extra": "34044 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "34044 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 352223,
            "unit": "ns/op\t   42724 B/op\t     107 allocs/op",
            "extra": "33972 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 352223,
            "unit": "ns/op",
            "extra": "33972 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42724,
            "unit": "B/op",
            "extra": "33972 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "33972 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 49077,
            "unit": "ns/op\t    1282 B/op\t      28 allocs/op",
            "extra": "240334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 49077,
            "unit": "ns/op",
            "extra": "240334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1282,
            "unit": "B/op",
            "extra": "240334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "240334 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 49148,
            "unit": "ns/op\t    1377 B/op\t      29 allocs/op",
            "extra": "241261 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 49148,
            "unit": "ns/op",
            "extra": "241261 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1377,
            "unit": "B/op",
            "extra": "241261 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "241261 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 370390,
            "unit": "ns/op\t   43002 B/op\t     110 allocs/op",
            "extra": "32467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 370390,
            "unit": "ns/op",
            "extra": "32467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43002,
            "unit": "B/op",
            "extra": "32467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "32467 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 372872,
            "unit": "ns/op\t   42832 B/op\t     111 allocs/op",
            "extra": "32373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 372872,
            "unit": "ns/op",
            "extra": "32373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42832,
            "unit": "B/op",
            "extra": "32373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "32373 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 85241,
            "unit": "ns/op\t    1702 B/op\t      31 allocs/op",
            "extra": "134490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 85241,
            "unit": "ns/op",
            "extra": "134490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1702,
            "unit": "B/op",
            "extra": "134490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "134490 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 84390,
            "unit": "ns/op\t    1517 B/op\t      32 allocs/op",
            "extra": "142285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 84390,
            "unit": "ns/op",
            "extra": "142285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1517,
            "unit": "B/op",
            "extra": "142285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "142285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 331141,
            "unit": "ns/op\t   43148 B/op\t     110 allocs/op",
            "extra": "36256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 331141,
            "unit": "ns/op",
            "extra": "36256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43148,
            "unit": "B/op",
            "extra": "36256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 110,
            "unit": "allocs/op",
            "extra": "36256 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 331831,
            "unit": "ns/op\t   42846 B/op\t     111 allocs/op",
            "extra": "35979 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 331831,
            "unit": "ns/op",
            "extra": "35979 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42846,
            "unit": "B/op",
            "extra": "35979 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "35979 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 47005,
            "unit": "ns/op\t    1703 B/op\t      31 allocs/op",
            "extra": "250285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 47005,
            "unit": "ns/op",
            "extra": "250285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1703,
            "unit": "B/op",
            "extra": "250285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 31,
            "unit": "allocs/op",
            "extra": "250285 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 46884,
            "unit": "ns/op\t    1519 B/op\t      32 allocs/op",
            "extra": "256774 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 46884,
            "unit": "ns/op",
            "extra": "256774 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1519,
            "unit": "B/op",
            "extra": "256774 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "256774 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11445227,
            "unit": "ns/op\t   43086 B/op\t     106 allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11445227,
            "unit": "ns/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43086,
            "unit": "B/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "1034 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 9918624,
            "unit": "ns/op\t   42678 B/op\t     107 allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 9918624,
            "unit": "ns/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42678,
            "unit": "B/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1219 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11023395,
            "unit": "ns/op\t    1411 B/op\t      28 allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11023395,
            "unit": "ns/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1411,
            "unit": "B/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 10231645,
            "unit": "ns/op\t    1409 B/op\t      29 allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 10231645,
            "unit": "ns/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1409,
            "unit": "B/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1148 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11660389,
            "unit": "ns/op\t   43145 B/op\t     106 allocs/op",
            "extra": "975 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11660389,
            "unit": "ns/op",
            "extra": "975 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43145,
            "unit": "B/op",
            "extra": "975 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 106,
            "unit": "allocs/op",
            "extra": "975 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9829189,
            "unit": "ns/op\t   42708 B/op\t     107 allocs/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9829189,
            "unit": "ns/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42708,
            "unit": "B/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 107,
            "unit": "allocs/op",
            "extra": "1227 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11538616,
            "unit": "ns/op\t    1379 B/op\t      28 allocs/op",
            "extra": "1132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11538616,
            "unit": "ns/op",
            "extra": "1132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1379,
            "unit": "B/op",
            "extra": "1132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 28,
            "unit": "allocs/op",
            "extra": "1132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10873298,
            "unit": "ns/op\t    1380 B/op\t      29 allocs/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10873298,
            "unit": "ns/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1380,
            "unit": "B/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1186 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6205034,
            "unit": "ns/op\t   57629 B/op\t     122 allocs/op",
            "extra": "1910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6205034,
            "unit": "ns/op",
            "extra": "1910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 57629,
            "unit": "B/op",
            "extra": "1910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "1910 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5321964,
            "unit": "ns/op\t   42894 B/op\t     111 allocs/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5321964,
            "unit": "ns/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 42894,
            "unit": "B/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "2025 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4879477,
            "unit": "ns/op\t    4694 B/op\t      43 allocs/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4879477,
            "unit": "ns/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4694,
            "unit": "B/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "2132 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3400856,
            "unit": "ns/op\t    1533 B/op\t      32 allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3400856,
            "unit": "ns/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1533,
            "unit": "B/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "3364 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6180681,
            "unit": "ns/op\t   49715 B/op\t     122 allocs/op",
            "extra": "1941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6180681,
            "unit": "ns/op",
            "extra": "1941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 49715,
            "unit": "B/op",
            "extra": "1941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 122,
            "unit": "allocs/op",
            "extra": "1941 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5279887,
            "unit": "ns/op\t   42861 B/op\t     111 allocs/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5279887,
            "unit": "ns/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 42861,
            "unit": "B/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 111,
            "unit": "allocs/op",
            "extra": "2258 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4785068,
            "unit": "ns/op\t    4589 B/op\t      43 allocs/op",
            "extra": "2209 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4785068,
            "unit": "ns/op",
            "extra": "2209 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4589,
            "unit": "B/op",
            "extra": "2209 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 43,
            "unit": "allocs/op",
            "extra": "2209 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3430299,
            "unit": "ns/op\t    1536 B/op\t      32 allocs/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3430299,
            "unit": "ns/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1536,
            "unit": "B/op",
            "extra": "3357 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "3357 times\n4 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "committer": {
            "email": "marcel.link@uponu.com",
            "name": "Marcel Link",
            "username": "ml1nk"
          },
          "distinct": true,
          "id": "56339cd716383d2ece6fd360d3b8d9825de6d191",
          "message": "feat: mailer rework to support limits",
          "timestamp": "2026-11-24T17:02:07+01:00",
          "tree_id": "2451a3f9add2c7cdd521831bf1738089c4660f96",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/56339cd716383d2ece6fd360d3b8d9825de6d191"
        },
        "date": 1795543540542,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream",
            "value": 21594610,
            "unit": "ns/op\t    4288 B/op\t       4 allocs/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - ns/op",
            "value": 21594610,
            "unit": "ns/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - B/op",
            "value": 4288,
            "unit": "B/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "549 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork",
            "value": 1139554,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - ns/op",
            "value": 1139554,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream",
            "value": 21538387,
            "unit": "ns/op\t    4271 B/op\t       4 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - ns/op",
            "value": 21538387,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - B/op",
            "value": 4271,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork",
            "value": 1137333,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - ns/op",
            "value": 1137333,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Binary/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream",
            "value": 21602850,
            "unit": "ns/op\t    4287 B/op\t       4 allocs/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - ns/op",
            "value": 21602850,
            "unit": "ns/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - B/op",
            "value": 4287,
            "unit": "B/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "558 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork",
            "value": 940833,
            "unit": "ns/op\t    4272 B/op\t       4 allocs/op",
            "extra": "12778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - ns/op",
            "value": 940833,
            "unit": "ns/op",
            "extra": "12778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - B/op",
            "value": 4272,
            "unit": "B/op",
            "extra": "12778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12778 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream",
            "value": 21586289,
            "unit": "ns/op\t    4271 B/op\t       4 allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - ns/op",
            "value": 21586289,
            "unit": "ns/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - B/op",
            "value": 4271,
            "unit": "B/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Upstream - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "556 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork",
            "value": 918832,
            "unit": "ns/op\t    4256 B/op\t       4 allocs/op",
            "extra": "13290 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - ns/op",
            "value": 918832,
            "unit": "ns/op",
            "extra": "13290 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - B/op",
            "value": 4256,
            "unit": "B/op",
            "extra": "13290 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Read/Text/BufferReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "13290 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream",
            "value": 16065256,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "746 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - ns/op",
            "value": 16065256,
            "unit": "ns/op",
            "extra": "746 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "746 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "746 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork",
            "value": 752612,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "15938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - ns/op",
            "value": 752612,
            "unit": "ns/op",
            "extra": "15938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "15938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "15938 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream",
            "value": 16316122,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - ns/op",
            "value": 16316122,
            "unit": "ns/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "712 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork",
            "value": 848084,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "14176 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - ns/op",
            "value": 848084,
            "unit": "ns/op",
            "extra": "14176 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "14176 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Binary/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "14176 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream",
            "value": 16272654,
            "unit": "ns/op\t    4240 B/op\t       5 allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - ns/op",
            "value": 16272654,
            "unit": "ns/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - B/op",
            "value": 4240,
            "unit": "B/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Upstream - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "736 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork",
            "value": 991363,
            "unit": "ns/op\t    4224 B/op\t       4 allocs/op",
            "extra": "12093 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - ns/op",
            "value": 991363,
            "unit": "ns/op",
            "extra": "12093 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - B/op",
            "value": 4224,
            "unit": "B/op",
            "extra": "12093 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/MinimalReader/Fork - allocs/op",
            "value": 4,
            "unit": "allocs/op",
            "extra": "12093 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream",
            "value": 16408293,
            "unit": "ns/op\t   36992 B/op\t       6 allocs/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - ns/op",
            "value": 16408293,
            "unit": "ns/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - B/op",
            "value": 36992,
            "unit": "B/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Upstream - allocs/op",
            "value": 6,
            "unit": "allocs/op",
            "extra": "730 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork",
            "value": 1085588,
            "unit": "ns/op\t   36976 B/op\t       5 allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - ns/op",
            "value": 1085588,
            "unit": "ns/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - B/op",
            "value": 36976,
            "unit": "B/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkDot/Write/Text/BufferReader/Fork - allocs/op",
            "value": 5,
            "unit": "allocs/op",
            "extra": "10000 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 409965,
            "unit": "ns/op\t   42951 B/op\t     116 allocs/op",
            "extra": "29461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 409965,
            "unit": "ns/op",
            "extra": "29461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 42951,
            "unit": "B/op",
            "extra": "29461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 116,
            "unit": "allocs/op",
            "extra": "29461 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 409030,
            "unit": "ns/op\t   43043 B/op\t     117 allocs/op",
            "extra": "29246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 409030,
            "unit": "ns/op",
            "extra": "29246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43043,
            "unit": "B/op",
            "extra": "29246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "29246 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 103754,
            "unit": "ns/op\t    1459 B/op\t      35 allocs/op",
            "extra": "114711 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 103754,
            "unit": "ns/op",
            "extra": "114711 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1459,
            "unit": "B/op",
            "extra": "114711 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "114711 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 103678,
            "unit": "ns/op\t    1554 B/op\t      36 allocs/op",
            "extra": "114775 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 103678,
            "unit": "ns/op",
            "extra": "114775 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1554,
            "unit": "B/op",
            "extra": "114775 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "114775 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 355631,
            "unit": "ns/op\t   42969 B/op\t     116 allocs/op",
            "extra": "32794 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 355631,
            "unit": "ns/op",
            "extra": "32794 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 42969,
            "unit": "B/op",
            "extra": "32794 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 116,
            "unit": "allocs/op",
            "extra": "32794 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 351723,
            "unit": "ns/op\t   43070 B/op\t     117 allocs/op",
            "extra": "34138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 351723,
            "unit": "ns/op",
            "extra": "34138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43070,
            "unit": "B/op",
            "extra": "34138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "34138 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 49209,
            "unit": "ns/op\t    1457 B/op\t      35 allocs/op",
            "extra": "227443 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 49209,
            "unit": "ns/op",
            "extra": "227443 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1457,
            "unit": "B/op",
            "extra": "227443 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "227443 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 49188,
            "unit": "ns/op\t    1554 B/op\t      36 allocs/op",
            "extra": "242919 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 49188,
            "unit": "ns/op",
            "extra": "242919 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1554,
            "unit": "B/op",
            "extra": "242919 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "242919 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 369043,
            "unit": "ns/op\t   43888 B/op\t     120 allocs/op",
            "extra": "32500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 369043,
            "unit": "ns/op",
            "extra": "32500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43888,
            "unit": "B/op",
            "extra": "32500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "32500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 375074,
            "unit": "ns/op\t   43209 B/op\t     121 allocs/op",
            "extra": "31609 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 375074,
            "unit": "ns/op",
            "extra": "31609 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43209,
            "unit": "B/op",
            "extra": "31609 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "31609 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 83714,
            "unit": "ns/op\t    1789 B/op\t      38 allocs/op",
            "extra": "141838 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 83714,
            "unit": "ns/op",
            "extra": "141838 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1789,
            "unit": "B/op",
            "extra": "141838 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "141838 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 83767,
            "unit": "ns/op\t    1696 B/op\t      39 allocs/op",
            "extra": "141782 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 83767,
            "unit": "ns/op",
            "extra": "141782 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1696,
            "unit": "B/op",
            "extra": "141782 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "141782 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 333175,
            "unit": "ns/op\t   44314 B/op\t     120 allocs/op",
            "extra": "35860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 333175,
            "unit": "ns/op",
            "extra": "35860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 44314,
            "unit": "B/op",
            "extra": "35860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 120,
            "unit": "allocs/op",
            "extra": "35860 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 339486,
            "unit": "ns/op\t   43192 B/op\t     121 allocs/op",
            "extra": "35182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 339486,
            "unit": "ns/op",
            "extra": "35182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43192,
            "unit": "B/op",
            "extra": "35182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "35182 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 47009,
            "unit": "ns/op\t    1844 B/op\t      38 allocs/op",
            "extra": "252090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 47009,
            "unit": "ns/op",
            "extra": "252090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1844,
            "unit": "B/op",
            "extra": "252090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "252090 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 47015,
            "unit": "ns/op\t    1696 B/op\t      39 allocs/op",
            "extra": "251889 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 47015,
            "unit": "ns/op",
            "extra": "251889 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1696,
            "unit": "B/op",
            "extra": "251889 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Small/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "251889 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader",
            "value": 11618678,
            "unit": "ns/op\t   43172 B/op\t     116 allocs/op",
            "extra": "1039 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 11618678,
            "unit": "ns/op",
            "extra": "1039 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 43172,
            "unit": "B/op",
            "extra": "1039 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 116,
            "unit": "allocs/op",
            "extra": "1039 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader",
            "value": 9666867,
            "unit": "ns/op\t   43243 B/op\t     117 allocs/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 9666867,
            "unit": "ns/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43243,
            "unit": "B/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "1220 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 11109535,
            "unit": "ns/op\t    1619 B/op\t      35 allocs/op",
            "extra": "1086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11109535,
            "unit": "ns/op",
            "extra": "1086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 1619,
            "unit": "B/op",
            "extra": "1086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "1086 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader",
            "value": 10844368,
            "unit": "ns/op\t    1586 B/op\t      36 allocs/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 10844368,
            "unit": "ns/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1586,
            "unit": "B/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "1100 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader",
            "value": 11440943,
            "unit": "ns/op\t   43302 B/op\t     116 allocs/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 11440943,
            "unit": "ns/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 43302,
            "unit": "B/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 116,
            "unit": "allocs/op",
            "extra": "1050 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader",
            "value": 9753491,
            "unit": "ns/op\t   43068 B/op\t     117 allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 9753491,
            "unit": "ns/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43068,
            "unit": "B/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 117,
            "unit": "allocs/op",
            "extra": "1221 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader",
            "value": 11263269,
            "unit": "ns/op\t    1586 B/op\t      35 allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 11263269,
            "unit": "ns/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 1586,
            "unit": "B/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader",
            "value": 10255639,
            "unit": "ns/op\t    1665 B/op\t      36 allocs/op",
            "extra": "1189 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 10255639,
            "unit": "ns/op",
            "extra": "1189 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1665,
            "unit": "B/op",
            "extra": "1189 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/NoChunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 36,
            "unit": "allocs/op",
            "extra": "1189 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader",
            "value": 6178676,
            "unit": "ns/op\t   55240 B/op\t     132 allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - ns/op",
            "value": 6178676,
            "unit": "ns/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - B/op",
            "value": 55240,
            "unit": "B/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/MinimalReader - allocs/op",
            "value": 132,
            "unit": "allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader",
            "value": 5068589,
            "unit": "ns/op\t   43330 B/op\t     121 allocs/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - ns/op",
            "value": 5068589,
            "unit": "ns/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - B/op",
            "value": 43330,
            "unit": "B/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/CloseConn/BufferReader - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "2418 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader",
            "value": 4806396,
            "unit": "ns/op\t    4553 B/op\t      50 allocs/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4806396,
            "unit": "ns/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - B/op",
            "value": 4553,
            "unit": "B/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2396 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader",
            "value": 3449306,
            "unit": "ns/op\t    1704 B/op\t      39 allocs/op",
            "extra": "3297 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - ns/op",
            "value": 3449306,
            "unit": "ns/op",
            "extra": "3297 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - B/op",
            "value": 1704,
            "unit": "B/op",
            "extra": "3297 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/NoPipelining/ReuseConn/BufferReader - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3297 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader",
            "value": 6172157,
            "unit": "ns/op\t   51098 B/op\t     132 allocs/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - ns/op",
            "value": 6172157,
            "unit": "ns/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - B/op",
            "value": 51098,
            "unit": "B/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/MinimalReader - allocs/op",
            "value": 132,
            "unit": "allocs/op",
            "extra": "1946 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader",
            "value": 5111643,
            "unit": "ns/op\t   43346 B/op\t     121 allocs/op",
            "extra": "2326 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - ns/op",
            "value": 5111643,
            "unit": "ns/op",
            "extra": "2326 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - B/op",
            "value": 43346,
            "unit": "B/op",
            "extra": "2326 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/CloseConn/BufferReader - allocs/op",
            "value": 121,
            "unit": "allocs/op",
            "extra": "2326 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader",
            "value": 4939040,
            "unit": "ns/op\t    4454 B/op\t      50 allocs/op",
            "extra": "2487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - ns/op",
            "value": 4939040,
            "unit": "ns/op",
            "extra": "2487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - B/op",
            "value": 4454,
            "unit": "B/op",
            "extra": "2487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/MinimalReader - allocs/op",
            "value": 50,
            "unit": "allocs/op",
            "extra": "2487 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader",
            "value": 3437240,
            "unit": "ns/op\t    1703 B/op\t      39 allocs/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - ns/op",
            "value": 3437240,
            "unit": "ns/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - B/op",
            "value": 1703,
            "unit": "B/op",
            "extra": "3500 times\n4 procs"
          },
          {
            "name": "BenchmarkMailer/Large/Chunking/Pipelining/ReuseConn/BufferReader - allocs/op",
            "value": 39,
            "unit": "allocs/op",
            "extra": "3500 times\n4 procs"
          }
        ]
      }
    ]
  }
}