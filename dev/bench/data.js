window.BENCHMARK_DATA = {
  "lastUpdate": 1795195586305,
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
      }
    ]
  }
}