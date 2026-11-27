window.BENCHMARK_DATA = {
  "lastUpdate": 1795791872912,
  "repoUrl": "https://github.com/uponusolutions/deltasmtp",
  "entries": {
    "Compare with go-smtp": [
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
        "date": 1795092987463,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 55999,
            "unit": "ns/op\t  63.11 MB/s",
            "extra": "211801 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 55999,
            "unit": "ns/op",
            "extra": "211801 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 63.11,
            "unit": "MB/s",
            "extra": "211801 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 134581,
            "unit": "ns/op\t  26.26 MB/s",
            "extra": "89162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 134581,
            "unit": "ns/op",
            "extra": "89162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 26.26,
            "unit": "MB/s",
            "extra": "89162 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 116798,
            "unit": "ns/op\t  30.26 MB/s",
            "extra": "102200 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 116798,
            "unit": "ns/op",
            "extra": "102200 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 30.26,
            "unit": "MB/s",
            "extra": "102200 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient",
            "value": 155039,
            "unit": "ns/op\t  22.79 MB/s",
            "extra": "77383 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 155039,
            "unit": "ns/op",
            "extra": "77383 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 22.79,
            "unit": "MB/s",
            "extra": "77383 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 320541,
            "unit": "ns/op\t  11.03 MB/s",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 320541,
            "unit": "ns/op",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 11.03,
            "unit": "MB/s",
            "extra": "38071 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 404419,
            "unit": "ns/op\t   8.74 MB/s",
            "extra": "29679 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 404419,
            "unit": "ns/op",
            "extra": "29679 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 8.74,
            "unit": "MB/s",
            "extra": "29679 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 420637,
            "unit": "ns/op\t   8.40 MB/s",
            "extra": "28527 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 420637,
            "unit": "ns/op",
            "extra": "28527 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 8.4,
            "unit": "MB/s",
            "extra": "28527 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient",
            "value": 478015,
            "unit": "ns/op\t   7.39 MB/s",
            "extra": "25096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 478015,
            "unit": "ns/op",
            "extra": "25096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 7.39,
            "unit": "MB/s",
            "extra": "25096 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 6178543,
            "unit": "ns/op\t2164.98 MB/s",
            "extra": "2030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 6178543,
            "unit": "ns/op",
            "extra": "2030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 2164.98,
            "unit": "MB/s",
            "extra": "2030 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 118251183,
            "unit": "ns/op\t 113.12 MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 118251183,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 113.12,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 11479936,
            "unit": "ns/op\t1165.20 MB/s",
            "extra": "1414 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 11479936,
            "unit": "ns/op",
            "extra": "1414 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 1165.2,
            "unit": "MB/s",
            "extra": "1414 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient",
            "value": 116180218,
            "unit": "ns/op\t 115.13 MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 116180218,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 115.13,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 6752415,
            "unit": "ns/op\t1980.98 MB/s",
            "extra": "1764 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 6752415,
            "unit": "ns/op",
            "extra": "1764 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 1980.98,
            "unit": "MB/s",
            "extra": "1764 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 117203826,
            "unit": "ns/op\t 114.13 MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 117203826,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 114.13,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 9251080,
            "unit": "ns/op\t1445.93 MB/s",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 9251080,
            "unit": "ns/op",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 1445.93,
            "unit": "MB/s",
            "extra": "1222 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient",
            "value": 97590102,
            "unit": "ns/op\t 137.07 MB/s",
            "extra": "122 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 97590102,
            "unit": "ns/op",
            "extra": "122 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 137.07,
            "unit": "MB/s",
            "extra": "122 times\n4 procs"
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
        "date": 1795093559373,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 38112,
            "unit": "ns/op\t  92.73 MB/s",
            "extra": "315951 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 38112,
            "unit": "ns/op",
            "extra": "315951 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 92.73,
            "unit": "MB/s",
            "extra": "315951 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 95481,
            "unit": "ns/op\t  37.01 MB/s",
            "extra": "128238 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 95481,
            "unit": "ns/op",
            "extra": "128238 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 37.01,
            "unit": "MB/s",
            "extra": "128238 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 64695,
            "unit": "ns/op\t  54.63 MB/s",
            "extra": "186160 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 64695,
            "unit": "ns/op",
            "extra": "186160 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 54.63,
            "unit": "MB/s",
            "extra": "186160 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient",
            "value": 102919,
            "unit": "ns/op\t  34.34 MB/s",
            "extra": "120386 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 102919,
            "unit": "ns/op",
            "extra": "120386 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/ReuseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 34.34,
            "unit": "MB/s",
            "extra": "120386 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 175909,
            "unit": "ns/op\t  20.09 MB/s",
            "extra": "68968 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 175909,
            "unit": "ns/op",
            "extra": "68968 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 20.09,
            "unit": "MB/s",
            "extra": "68968 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 241035,
            "unit": "ns/op\t  14.66 MB/s",
            "extra": "48986 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 241035,
            "unit": "ns/op",
            "extra": "48986 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 14.66,
            "unit": "MB/s",
            "extra": "48986 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 243474,
            "unit": "ns/op\t  14.51 MB/s",
            "extra": "49536 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 243474,
            "unit": "ns/op",
            "extra": "49536 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 14.51,
            "unit": "MB/s",
            "extra": "49536 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient",
            "value": 297756,
            "unit": "ns/op\t  11.87 MB/s",
            "extra": "42080 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 297756,
            "unit": "ns/op",
            "extra": "42080 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Small/CloseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 11.87,
            "unit": "MB/s",
            "extra": "42080 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 4527979,
            "unit": "ns/op\t2954.16 MB/s",
            "extra": "2721 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 4527979,
            "unit": "ns/op",
            "extra": "2721 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 2954.16,
            "unit": "MB/s",
            "extra": "2721 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 64439097,
            "unit": "ns/op\t 207.58 MB/s",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 64439097,
            "unit": "ns/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 207.58,
            "unit": "MB/s",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 4095296,
            "unit": "ns/op\t3266.28 MB/s",
            "extra": "3100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 4095296,
            "unit": "ns/op",
            "extra": "3100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 3266.28,
            "unit": "MB/s",
            "extra": "3100 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient",
            "value": 70241116,
            "unit": "ns/op\t 190.44 MB/s",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 70241116,
            "unit": "ns/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/ReuseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 190.44,
            "unit": "MB/s",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient",
            "value": 4971822,
            "unit": "ns/op\t2690.44 MB/s",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient - ns/op",
            "value": 4971822,
            "unit": "ns/op",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/DeltaSMTPClient - MB/s",
            "value": 2690.44,
            "unit": "MB/s",
            "extra": "2421 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient",
            "value": 59952496,
            "unit": "ns/op\t 223.12 MB/s",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient - ns/op",
            "value": 59952496,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/DeltaSMTPServer/GoSMTPClient - MB/s",
            "value": 223.12,
            "unit": "MB/s",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient",
            "value": 4554607,
            "unit": "ns/op\t2936.89 MB/s",
            "extra": "2630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient - ns/op",
            "value": 4554607,
            "unit": "ns/op",
            "extra": "2630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/DeltaSMTPClient - MB/s",
            "value": 2936.89,
            "unit": "MB/s",
            "extra": "2630 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient",
            "value": 61091411,
            "unit": "ns/op\t 218.96 MB/s",
            "extra": "196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient - ns/op",
            "value": 61091411,
            "unit": "ns/op",
            "extra": "196 times\n4 procs"
          },
          {
            "name": "BenchmarkCompare/Large/CloseConn/GoSMTPServer/GoSMTPClient - MB/s",
            "value": 218.96,
            "unit": "MB/s",
            "extra": "196 times\n4 procs"
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
        "date": 1795094496236,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkClient/Small/DeltaSMTP",
            "value": 20200,
            "unit": "ns/op\t 174.95 MB/s\t   41648 B/op\t      83 allocs/op",
            "extra": "577218 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - ns/op",
            "value": 20200,
            "unit": "ns/op",
            "extra": "577218 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - MB/s",
            "value": 174.95,
            "unit": "MB/s",
            "extra": "577218 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - B/op",
            "value": 41648,
            "unit": "B/op",
            "extra": "577218 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "577218 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP",
            "value": 48559,
            "unit": "ns/op\t  72.78 MB/s\t   41298 B/op\t      74 allocs/op",
            "extra": "244557 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - ns/op",
            "value": 48559,
            "unit": "ns/op",
            "extra": "244557 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - MB/s",
            "value": 72.78,
            "unit": "MB/s",
            "extra": "244557 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - B/op",
            "value": 41298,
            "unit": "B/op",
            "extra": "244557 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "244557 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP",
            "value": 3179923,
            "unit": "ns/op\t4206.51 MB/s\t   41667 B/op\t      83 allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - ns/op",
            "value": 3179923,
            "unit": "ns/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - MB/s",
            "value": 4206.51,
            "unit": "MB/s",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - B/op",
            "value": 41667,
            "unit": "B/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3732 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP",
            "value": 47782578,
            "unit": "ns/op\t 279.94 MB/s\t   41344 B/op\t      74 allocs/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - ns/op",
            "value": 47782578,
            "unit": "ns/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - MB/s",
            "value": 279.94,
            "unit": "MB/s",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - B/op",
            "value": 41344,
            "unit": "B/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "253 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP",
            "value": 20234,
            "unit": "ns/op\t 174.66 MB/s\t   41648 B/op\t      83 allocs/op",
            "extra": "579193 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - ns/op",
            "value": 20234,
            "unit": "ns/op",
            "extra": "579193 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - MB/s",
            "value": 174.66,
            "unit": "MB/s",
            "extra": "579193 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - B/op",
            "value": 41648,
            "unit": "B/op",
            "extra": "579193 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "579193 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP",
            "value": 60349,
            "unit": "ns/op\t  58.56 MB/s\t   46305 B/op\t      90 allocs/op",
            "extra": "203635 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - ns/op",
            "value": 60349,
            "unit": "ns/op",
            "extra": "203635 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - MB/s",
            "value": 58.56,
            "unit": "MB/s",
            "extra": "203635 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - B/op",
            "value": 46305,
            "unit": "B/op",
            "extra": "203635 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - allocs/op",
            "value": 90,
            "unit": "allocs/op",
            "extra": "203635 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP",
            "value": 3147842,
            "unit": "ns/op\t4249.38 MB/s\t   41673 B/op\t      83 allocs/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - ns/op",
            "value": 3147842,
            "unit": "ns/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - MB/s",
            "value": 4249.38,
            "unit": "MB/s",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - B/op",
            "value": 41673,
            "unit": "B/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3789 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP",
            "value": 3385019,
            "unit": "ns/op\t3951.64 MB/s\t   75033 B/op\t      90 allocs/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - ns/op",
            "value": 3385019,
            "unit": "ns/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - MB/s",
            "value": 3951.64,
            "unit": "MB/s",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - B/op",
            "value": 75033,
            "unit": "B/op",
            "extra": "3650 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - allocs/op",
            "value": 90,
            "unit": "allocs/op",
            "extra": "3650 times\n4 procs"
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
        "date": 1795095308822,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkClient/Small/DeltaSMTP",
            "value": 41307,
            "unit": "ns/op\t  85.55 MB/s\t   41656 B/op\t      83 allocs/op",
            "extra": "282482 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - ns/op",
            "value": 41307,
            "unit": "ns/op",
            "extra": "282482 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - MB/s",
            "value": 85.55,
            "unit": "MB/s",
            "extra": "282482 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - B/op",
            "value": 41656,
            "unit": "B/op",
            "extra": "282482 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "282482 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP",
            "value": 105223,
            "unit": "ns/op\t  33.59 MB/s\t   41302 B/op\t      74 allocs/op",
            "extra": "113821 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - ns/op",
            "value": 105223,
            "unit": "ns/op",
            "extra": "113821 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - MB/s",
            "value": 33.59,
            "unit": "MB/s",
            "extra": "113821 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - B/op",
            "value": 41302,
            "unit": "B/op",
            "extra": "113821 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Small/GoSMTP - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "113821 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP",
            "value": 5406490,
            "unit": "ns/op\t2474.14 MB/s\t   41659 B/op\t      83 allocs/op",
            "extra": "2248 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - ns/op",
            "value": 5406490,
            "unit": "ns/op",
            "extra": "2248 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - MB/s",
            "value": 2474.14,
            "unit": "MB/s",
            "extra": "2248 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - B/op",
            "value": 41659,
            "unit": "B/op",
            "extra": "2248 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2248 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP",
            "value": 85890254,
            "unit": "ns/op\t 155.74 MB/s\t   41403 B/op\t      74 allocs/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - ns/op",
            "value": 85890254,
            "unit": "ns/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - MB/s",
            "value": 155.74,
            "unit": "MB/s",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - B/op",
            "value": 41403,
            "unit": "B/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkClient/Large/GoSMTP - allocs/op",
            "value": 74,
            "unit": "allocs/op",
            "extra": "140 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP",
            "value": 41338,
            "unit": "ns/op\t  85.49 MB/s\t   41654 B/op\t      83 allocs/op",
            "extra": "287883 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - ns/op",
            "value": 41338,
            "unit": "ns/op",
            "extra": "287883 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - MB/s",
            "value": 85.49,
            "unit": "MB/s",
            "extra": "287883 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - B/op",
            "value": 41654,
            "unit": "B/op",
            "extra": "287883 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "287883 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP",
            "value": 75154,
            "unit": "ns/op\t  47.02 MB/s\t   46316 B/op\t      90 allocs/op",
            "extra": "160626 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - ns/op",
            "value": 75154,
            "unit": "ns/op",
            "extra": "160626 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - MB/s",
            "value": 47.02,
            "unit": "MB/s",
            "extra": "160626 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - B/op",
            "value": 46316,
            "unit": "B/op",
            "extra": "160626 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Small/GoSMTP - allocs/op",
            "value": 90,
            "unit": "allocs/op",
            "extra": "160626 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP",
            "value": 5339949,
            "unit": "ns/op\t2504.97 MB/s\t   41658 B/op\t      83 allocs/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - ns/op",
            "value": 5339949,
            "unit": "ns/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - MB/s",
            "value": 2504.97,
            "unit": "MB/s",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - B/op",
            "value": 41658,
            "unit": "B/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2270 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP",
            "value": 6188845,
            "unit": "ns/op\t2161.37 MB/s\t   75016 B/op\t      90 allocs/op",
            "extra": "2269 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - ns/op",
            "value": 6188845,
            "unit": "ns/op",
            "extra": "2269 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - MB/s",
            "value": 2161.37,
            "unit": "MB/s",
            "extra": "2269 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - B/op",
            "value": 75016,
            "unit": "B/op",
            "extra": "2269 times\n4 procs"
          },
          {
            "name": "BenchmarkServer/Large/GoSMTP - allocs/op",
            "value": 90,
            "unit": "allocs/op",
            "extra": "2269 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP",
            "value": 41727,
            "unit": "ns/op\t  84.69 MB/s\t   41654 B/op\t      83 allocs/op",
            "extra": "284275 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - ns/op",
            "value": 41727,
            "unit": "ns/op",
            "extra": "284275 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - MB/s",
            "value": 84.69,
            "unit": "MB/s",
            "extra": "284275 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - B/op",
            "value": 41654,
            "unit": "B/op",
            "extra": "284275 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "284275 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP",
            "value": 120925,
            "unit": "ns/op\t  29.22 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "96405 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - ns/op",
            "value": 120925,
            "unit": "ns/op",
            "extra": "96405 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - MB/s",
            "value": 29.22,
            "unit": "MB/s",
            "extra": "96405 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "96405 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "96405 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP",
            "value": 5541204,
            "unit": "ns/op\t2413.99 MB/s\t   41659 B/op\t      83 allocs/op",
            "extra": "2181 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - ns/op",
            "value": 5541204,
            "unit": "ns/op",
            "extra": "2181 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - MB/s",
            "value": 2413.99,
            "unit": "MB/s",
            "extra": "2181 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - B/op",
            "value": 41659,
            "unit": "B/op",
            "extra": "2181 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2181 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP",
            "value": 92351698,
            "unit": "ns/op\t 144.84 MB/s\t   41481 B/op\t      76 allocs/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - ns/op",
            "value": 92351698,
            "unit": "ns/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - MB/s",
            "value": 144.84,
            "unit": "MB/s",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - B/op",
            "value": 41481,
            "unit": "B/op",
            "extra": "132 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "132 times\n4 procs"
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
        "date": 1795095345212,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP",
            "value": 56643,
            "unit": "ns/op\t  62.39 MB/s\t   41656 B/op\t      83 allocs/op",
            "extra": "213607 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - ns/op",
            "value": 56643,
            "unit": "ns/op",
            "extra": "213607 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - MB/s",
            "value": 62.39,
            "unit": "MB/s",
            "extra": "213607 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - B/op",
            "value": 41656,
            "unit": "B/op",
            "extra": "213607 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "213607 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP",
            "value": 154090,
            "unit": "ns/op\t  22.93 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "78754 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - ns/op",
            "value": 154090,
            "unit": "ns/op",
            "extra": "78754 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - MB/s",
            "value": 22.93,
            "unit": "MB/s",
            "extra": "78754 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "78754 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "78754 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP",
            "value": 6392257,
            "unit": "ns/op\t2092.59 MB/s\t   41663 B/op\t      83 allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - ns/op",
            "value": 6392257,
            "unit": "ns/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - MB/s",
            "value": 2092.59,
            "unit": "MB/s",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - B/op",
            "value": 41663,
            "unit": "B/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "1989 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP",
            "value": 115858253,
            "unit": "ns/op\t 115.45 MB/s\t   41526 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - ns/op",
            "value": 115858253,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - MB/s",
            "value": 115.45,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - B/op",
            "value": 41526,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkCombined/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795096547121,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 41882,
            "unit": "ns/op\t  84.38 MB/s\t   41655 B/op\t      83 allocs/op",
            "extra": "285265 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 41882,
            "unit": "ns/op",
            "extra": "285265 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 84.38,
            "unit": "MB/s",
            "extra": "285265 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41655,
            "unit": "B/op",
            "extra": "285265 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "285265 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 120599,
            "unit": "ns/op\t  29.30 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "99006 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 120599,
            "unit": "ns/op",
            "extra": "99006 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.3,
            "unit": "MB/s",
            "extra": "99006 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "99006 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "99006 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5632335,
            "unit": "ns/op\t2374.93 MB/s\t   41670 B/op\t      83 allocs/op",
            "extra": "2238 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5632335,
            "unit": "ns/op",
            "extra": "2238 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2374.93,
            "unit": "MB/s",
            "extra": "2238 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41670,
            "unit": "B/op",
            "extra": "2238 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2238 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 96976837,
            "unit": "ns/op\t 137.93 MB/s\t   41626 B/op\t      76 allocs/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 96976837,
            "unit": "ns/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 137.93,
            "unit": "MB/s",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41626,
            "unit": "B/op",
            "extra": "123 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123 times\n4 procs"
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
        "date": 1795099125814,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 34525,
            "unit": "ns/op\t 102.36 MB/s\t   41670 B/op\t      83 allocs/op",
            "extra": "344979 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 34525,
            "unit": "ns/op",
            "extra": "344979 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 102.36,
            "unit": "MB/s",
            "extra": "344979 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41670,
            "unit": "B/op",
            "extra": "344979 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "344979 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 98519,
            "unit": "ns/op\t  35.87 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "122665 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 98519,
            "unit": "ns/op",
            "extra": "122665 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 35.87,
            "unit": "MB/s",
            "extra": "122665 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "122665 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "122665 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4995623,
            "unit": "ns/op\t2677.62 MB/s\t   41689 B/op\t      83 allocs/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4995623,
            "unit": "ns/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2677.62,
            "unit": "MB/s",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41689,
            "unit": "B/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2304 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 106398404,
            "unit": "ns/op\t 125.72 MB/s\t   41524 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 106398404,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 125.72,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41524,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 37398,
            "unit": "ns/op\t  94.50 MB/s\t   41653 B/op\t      82 allocs/op",
            "extra": "314210 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 37398,
            "unit": "ns/op",
            "extra": "314210 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 94.5,
            "unit": "MB/s",
            "extra": "314210 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41653,
            "unit": "B/op",
            "extra": "314210 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "314210 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 97202,
            "unit": "ns/op\t  36.36 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "123040 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 97202,
            "unit": "ns/op",
            "extra": "123040 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 36.36,
            "unit": "MB/s",
            "extra": "123040 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "123040 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123040 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 16266599,
            "unit": "ns/op\t 822.32 MB/s\t   41659 B/op\t      82 allocs/op",
            "extra": "751 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 16266599,
            "unit": "ns/op",
            "extra": "751 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 822.32,
            "unit": "MB/s",
            "extra": "751 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41659,
            "unit": "B/op",
            "extra": "751 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "751 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 101338381,
            "unit": "ns/op\t 132.00 MB/s\t   41684 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 101338381,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 132,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41684,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795104491323,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 42059,
            "unit": "ns/op\t  84.03 MB/s\t   41671 B/op\t      83 allocs/op",
            "extra": "282408 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 42059,
            "unit": "ns/op",
            "extra": "282408 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 84.03,
            "unit": "MB/s",
            "extra": "282408 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41671,
            "unit": "B/op",
            "extra": "282408 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "282408 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 120933,
            "unit": "ns/op\t  29.22 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "99169 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 120933,
            "unit": "ns/op",
            "extra": "99169 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.22,
            "unit": "MB/s",
            "extra": "99169 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "99169 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "99169 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4850056,
            "unit": "ns/op\t2757.99 MB/s\t   41681 B/op\t      83 allocs/op",
            "extra": "2540 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4850056,
            "unit": "ns/op",
            "extra": "2540 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2757.99,
            "unit": "MB/s",
            "extra": "2540 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41681,
            "unit": "B/op",
            "extra": "2540 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2540 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 94283303,
            "unit": "ns/op\t 141.87 MB/s\t   41551 B/op\t      76 allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 94283303,
            "unit": "ns/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 141.87,
            "unit": "MB/s",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41551,
            "unit": "B/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "128 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 44164,
            "unit": "ns/op\t  80.02 MB/s\t   41655 B/op\t      82 allocs/op",
            "extra": "266814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 44164,
            "unit": "ns/op",
            "extra": "266814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 80.02,
            "unit": "MB/s",
            "extra": "266814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41655,
            "unit": "B/op",
            "extra": "266814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "266814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 121273,
            "unit": "ns/op\t  29.14 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "99082 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 121273,
            "unit": "ns/op",
            "extra": "99082 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 29.14,
            "unit": "MB/s",
            "extra": "99082 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "99082 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "99082 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9406497,
            "unit": "ns/op\t1422.04 MB/s\t   41650 B/op\t      82 allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9406497,
            "unit": "ns/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1422.04,
            "unit": "MB/s",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41650,
            "unit": "B/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "1264 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 89457560,
            "unit": "ns/op\t 149.53 MB/s\t   41593 B/op\t      76 allocs/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 89457560,
            "unit": "ns/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 149.53,
            "unit": "MB/s",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41593,
            "unit": "B/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "139 times\n4 procs"
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
        "date": 1795168158519,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 36322,
            "unit": "ns/op\t  97.30 MB/s\t   41671 B/op\t      83 allocs/op",
            "extra": "324877 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 36322,
            "unit": "ns/op",
            "extra": "324877 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 97.3,
            "unit": "MB/s",
            "extra": "324877 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41671,
            "unit": "B/op",
            "extra": "324877 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "324877 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 103679,
            "unit": "ns/op\t  34.09 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "118129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 103679,
            "unit": "ns/op",
            "extra": "118129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 34.09,
            "unit": "MB/s",
            "extra": "118129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "118129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "118129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3498423,
            "unit": "ns/op\t3823.55 MB/s\t   41665 B/op\t      83 allocs/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3498423,
            "unit": "ns/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3823.55,
            "unit": "MB/s",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41665,
            "unit": "B/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3368 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 69324869,
            "unit": "ns/op\t 192.95 MB/s\t   41492 B/op\t      76 allocs/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 69324869,
            "unit": "ns/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 192.95,
            "unit": "MB/s",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41492,
            "unit": "B/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 37932,
            "unit": "ns/op\t  93.17 MB/s\t   41653 B/op\t      82 allocs/op",
            "extra": "314560 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 37932,
            "unit": "ns/op",
            "extra": "314560 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 93.17,
            "unit": "MB/s",
            "extra": "314560 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41653,
            "unit": "B/op",
            "extra": "314560 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "314560 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 101545,
            "unit": "ns/op\t  34.80 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "118809 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 101545,
            "unit": "ns/op",
            "extra": "118809 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 34.8,
            "unit": "MB/s",
            "extra": "118809 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "118809 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "118809 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6348266,
            "unit": "ns/op\t2107.09 MB/s\t   41649 B/op\t      82 allocs/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6348266,
            "unit": "ns/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2107.09,
            "unit": "MB/s",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41649,
            "unit": "B/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "1993 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 69825683,
            "unit": "ns/op\t 191.57 MB/s\t   41540 B/op\t      76 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 69825683,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 191.57,
            "unit": "MB/s",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41540,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
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
        "date": 1795169635607,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 55955,
            "unit": "ns/op\t  63.16 MB/s\t   41672 B/op\t      83 allocs/op",
            "extra": "213346 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 55955,
            "unit": "ns/op",
            "extra": "213346 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 63.16,
            "unit": "MB/s",
            "extra": "213346 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41672,
            "unit": "B/op",
            "extra": "213346 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "213346 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 154412,
            "unit": "ns/op\t  22.89 MB/s\t   41371 B/op\t      76 allocs/op",
            "extra": "74334 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 154412,
            "unit": "ns/op",
            "extra": "74334 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 22.89,
            "unit": "MB/s",
            "extra": "74334 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41371,
            "unit": "B/op",
            "extra": "74334 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "74334 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5638818,
            "unit": "ns/op\t2372.20 MB/s\t   41672 B/op\t      83 allocs/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5638818,
            "unit": "ns/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2372.2,
            "unit": "MB/s",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41672,
            "unit": "B/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2202 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 123111898,
            "unit": "ns/op\t 108.65 MB/s\t   41692 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 123111898,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 108.65,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41692,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 57218,
            "unit": "ns/op\t  61.76 MB/s\t   41653 B/op\t      82 allocs/op",
            "extra": "205548 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 57218,
            "unit": "ns/op",
            "extra": "205548 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 61.76,
            "unit": "MB/s",
            "extra": "205548 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41653,
            "unit": "B/op",
            "extra": "205548 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "205548 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 153913,
            "unit": "ns/op\t  22.96 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "78680 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 153913,
            "unit": "ns/op",
            "extra": "78680 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 22.96,
            "unit": "MB/s",
            "extra": "78680 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "78680 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "78680 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 11873052,
            "unit": "ns/op\t1126.62 MB/s\t   41653 B/op\t      82 allocs/op",
            "extra": "1087 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 11873052,
            "unit": "ns/op",
            "extra": "1087 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1126.62,
            "unit": "MB/s",
            "extra": "1087 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41653,
            "unit": "B/op",
            "extra": "1087 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "1087 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 121298517,
            "unit": "ns/op\t 110.28 MB/s\t   41688 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 121298517,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 110.28,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41688,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795170364834,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 38615,
            "unit": "ns/op\t  91.52 MB/s\t   41670 B/op\t      83 allocs/op",
            "extra": "306637 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 38615,
            "unit": "ns/op",
            "extra": "306637 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 91.52,
            "unit": "MB/s",
            "extra": "306637 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41670,
            "unit": "B/op",
            "extra": "306637 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "306637 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 104742,
            "unit": "ns/op\t  33.74 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "114538 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 104742,
            "unit": "ns/op",
            "extra": "114538 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 33.74,
            "unit": "MB/s",
            "extra": "114538 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "114538 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "114538 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4070978,
            "unit": "ns/op\t3285.79 MB/s\t   41676 B/op\t      83 allocs/op",
            "extra": "2984 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4070978,
            "unit": "ns/op",
            "extra": "2984 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3285.79,
            "unit": "MB/s",
            "extra": "2984 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41676,
            "unit": "B/op",
            "extra": "2984 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2984 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 72560225,
            "unit": "ns/op\t 184.35 MB/s\t   41498 B/op\t      76 allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 72560225,
            "unit": "ns/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 184.35,
            "unit": "MB/s",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41498,
            "unit": "B/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "172 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 40837,
            "unit": "ns/op\t  86.54 MB/s\t   41655 B/op\t      82 allocs/op",
            "extra": "294268 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 40837,
            "unit": "ns/op",
            "extra": "294268 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 86.54,
            "unit": "MB/s",
            "extra": "294268 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41655,
            "unit": "B/op",
            "extra": "294268 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "294268 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 106618,
            "unit": "ns/op\t  33.15 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "112594 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 106618,
            "unit": "ns/op",
            "extra": "112594 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 33.15,
            "unit": "MB/s",
            "extra": "112594 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "112594 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "112594 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6741785,
            "unit": "ns/op\t1984.10 MB/s\t   41655 B/op\t      82 allocs/op",
            "extra": "1754 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6741785,
            "unit": "ns/op",
            "extra": "1754 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1984.1,
            "unit": "MB/s",
            "extra": "1754 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41655,
            "unit": "B/op",
            "extra": "1754 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "1754 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 69503424,
            "unit": "ns/op\t 192.46 MB/s\t   41489 B/op\t      76 allocs/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 69503424,
            "unit": "ns/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 192.46,
            "unit": "MB/s",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41489,
            "unit": "B/op",
            "extra": "182 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "182 times\n4 procs"
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
        "date": 1795170633437,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 34100,
            "unit": "ns/op\t 103.64 MB/s\t   41670 B/op\t      83 allocs/op",
            "extra": "346486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 34100,
            "unit": "ns/op",
            "extra": "346486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 103.64,
            "unit": "MB/s",
            "extra": "346486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41670,
            "unit": "B/op",
            "extra": "346486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "346486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 96525,
            "unit": "ns/op\t  36.61 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "125028 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 96525,
            "unit": "ns/op",
            "extra": "125028 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 36.61,
            "unit": "MB/s",
            "extra": "125028 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "125028 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "125028 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3418163,
            "unit": "ns/op\t3913.33 MB/s\t   41664 B/op\t      83 allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3418163,
            "unit": "ns/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3913.33,
            "unit": "MB/s",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41664,
            "unit": "B/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "3568 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 69451476,
            "unit": "ns/op\t 192.60 MB/s\t   41446 B/op\t      76 allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 69451476,
            "unit": "ns/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 192.6,
            "unit": "MB/s",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41446,
            "unit": "B/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 35449,
            "unit": "ns/op\t  99.69 MB/s\t   41654 B/op\t      82 allocs/op",
            "extra": "334446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 35449,
            "unit": "ns/op",
            "extra": "334446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 99.69,
            "unit": "MB/s",
            "extra": "334446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41654,
            "unit": "B/op",
            "extra": "334446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "334446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 96161,
            "unit": "ns/op\t  36.75 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "123795 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 96161,
            "unit": "ns/op",
            "extra": "123795 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 36.75,
            "unit": "MB/s",
            "extra": "123795 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "123795 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123795 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 5758343,
            "unit": "ns/op\t2322.96 MB/s\t   41648 B/op\t      82 allocs/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 5758343,
            "unit": "ns/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2322.96,
            "unit": "MB/s",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41648,
            "unit": "B/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "2103 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 67734265,
            "unit": "ns/op\t 197.48 MB/s\t   41538 B/op\t      76 allocs/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 67734265,
            "unit": "ns/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 197.48,
            "unit": "MB/s",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41538,
            "unit": "B/op",
            "extra": "178 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "178 times\n4 procs"
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
        "date": 1795170778703,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 54136,
            "unit": "ns/op\t  65.28 MB/s\t   41671 B/op\t      83 allocs/op",
            "extra": "222668 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 54136,
            "unit": "ns/op",
            "extra": "222668 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 65.28,
            "unit": "MB/s",
            "extra": "222668 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41671,
            "unit": "B/op",
            "extra": "222668 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "222668 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 149565,
            "unit": "ns/op\t  23.63 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "80090 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 149565,
            "unit": "ns/op",
            "extra": "80090 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.63,
            "unit": "MB/s",
            "extra": "80090 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "80090 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "80090 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5436067,
            "unit": "ns/op\t2460.67 MB/s\t   41675 B/op\t      83 allocs/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5436067,
            "unit": "ns/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2460.67,
            "unit": "MB/s",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41675,
            "unit": "B/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 83,
            "unit": "allocs/op",
            "extra": "2252 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 123061856,
            "unit": "ns/op\t 108.70 MB/s\t   41608 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 123061856,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 108.7,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41608,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 55011,
            "unit": "ns/op\t  64.24 MB/s\t   41654 B/op\t      82 allocs/op",
            "extra": "213979 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 55011,
            "unit": "ns/op",
            "extra": "213979 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 64.24,
            "unit": "MB/s",
            "extra": "213979 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41654,
            "unit": "B/op",
            "extra": "213979 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "213979 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 150227,
            "unit": "ns/op\t  23.52 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "80240 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 150227,
            "unit": "ns/op",
            "extra": "80240 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 23.52,
            "unit": "MB/s",
            "extra": "80240 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "80240 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "80240 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 11674503,
            "unit": "ns/op\t1145.78 MB/s\t   41651 B/op\t      82 allocs/op",
            "extra": "1120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 11674503,
            "unit": "ns/op",
            "extra": "1120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1145.78,
            "unit": "MB/s",
            "extra": "1120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41651,
            "unit": "B/op",
            "extra": "1120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 82,
            "unit": "allocs/op",
            "extra": "1120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 116716329,
            "unit": "ns/op\t 114.61 MB/s\t   41527 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 116716329,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 114.61,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41527,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795195705225,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 40775,
            "unit": "ns/op\t  86.67 MB/s\t   41289 B/op\t      75 allocs/op",
            "extra": "288157 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 40775,
            "unit": "ns/op",
            "extra": "288157 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 86.67,
            "unit": "MB/s",
            "extra": "288157 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 41289,
            "unit": "B/op",
            "extra": "288157 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 75,
            "unit": "allocs/op",
            "extra": "288157 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 119030,
            "unit": "ns/op\t  29.69 MB/s\t   41375 B/op\t      76 allocs/op",
            "extra": "101794 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 119030,
            "unit": "ns/op",
            "extra": "101794 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.69,
            "unit": "MB/s",
            "extra": "101794 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41375,
            "unit": "B/op",
            "extra": "101794 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "101794 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4678828,
            "unit": "ns/op\t2858.92 MB/s\t   41287 B/op\t      75 allocs/op",
            "extra": "2580 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4678828,
            "unit": "ns/op",
            "extra": "2580 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2858.92,
            "unit": "MB/s",
            "extra": "2580 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 41287,
            "unit": "B/op",
            "extra": "2580 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 75,
            "unit": "allocs/op",
            "extra": "2580 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 81877731,
            "unit": "ns/op\t 163.37 MB/s\t   41460 B/op\t      76 allocs/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 81877731,
            "unit": "ns/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 163.37,
            "unit": "MB/s",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41460,
            "unit": "B/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "152 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 42488,
            "unit": "ns/op\t  83.18 MB/s\t   41221 B/op\t      73 allocs/op",
            "extra": "278553 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 42488,
            "unit": "ns/op",
            "extra": "278553 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 83.18,
            "unit": "MB/s",
            "extra": "278553 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 41221,
            "unit": "B/op",
            "extra": "278553 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "278553 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 118003,
            "unit": "ns/op\t  29.95 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "101227 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 118003,
            "unit": "ns/op",
            "extra": "101227 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 29.95,
            "unit": "MB/s",
            "extra": "101227 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "101227 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "101227 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9239157,
            "unit": "ns/op\t1447.79 MB/s\t   41224 B/op\t      73 allocs/op",
            "extra": "1354 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9239157,
            "unit": "ns/op",
            "extra": "1354 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1447.79,
            "unit": "MB/s",
            "extra": "1354 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 41224,
            "unit": "B/op",
            "extra": "1354 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 73,
            "unit": "allocs/op",
            "extra": "1354 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 84362659,
            "unit": "ns/op\t 158.56 MB/s\t   41586 B/op\t      76 allocs/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 84362659,
            "unit": "ns/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 158.56,
            "unit": "MB/s",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41586,
            "unit": "B/op",
            "extra": "144 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "144 times\n4 procs"
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
        "date": 1795200107968,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 33482,
            "unit": "ns/op\t 105.55 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "360040 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 33482,
            "unit": "ns/op",
            "extra": "360040 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 105.55,
            "unit": "MB/s",
            "extra": "360040 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "360040 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "360040 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 100209,
            "unit": "ns/op\t  35.27 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "122121 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 100209,
            "unit": "ns/op",
            "extra": "122121 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 35.27,
            "unit": "MB/s",
            "extra": "122121 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "122121 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "122121 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3743331,
            "unit": "ns/op\t3573.39 MB/s\t    1565 B/op\t      33 allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3743331,
            "unit": "ns/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3573.39,
            "unit": "MB/s",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1565,
            "unit": "B/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3246 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 65474431,
            "unit": "ns/op\t 204.30 MB/s\t   41442 B/op\t      76 allocs/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 65474431,
            "unit": "ns/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 204.3,
            "unit": "MB/s",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41442,
            "unit": "B/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "187 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 34693,
            "unit": "ns/op\t 101.86 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "342910 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 34693,
            "unit": "ns/op",
            "extra": "342910 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 101.86,
            "unit": "MB/s",
            "extra": "342910 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "342910 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "342910 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 103707,
            "unit": "ns/op\t  34.08 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "119282 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 103707,
            "unit": "ns/op",
            "extra": "119282 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 34.08,
            "unit": "MB/s",
            "extra": "119282 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "119282 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "119282 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6172657,
            "unit": "ns/op\t2167.04 MB/s\t    1409 B/op\t      29 allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6172657,
            "unit": "ns/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2167.04,
            "unit": "MB/s",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1409,
            "unit": "B/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1896 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 69447052,
            "unit": "ns/op\t 192.61 MB/s\t   41445 B/op\t      76 allocs/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 69447052,
            "unit": "ns/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 192.61,
            "unit": "MB/s",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41445,
            "unit": "B/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "181 times\n4 procs"
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
        "date": 1795442137910,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 15940,
            "unit": "ns/op\t 221.71 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "748683 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 15940,
            "unit": "ns/op",
            "extra": "748683 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 221.71,
            "unit": "MB/s",
            "extra": "748683 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "748683 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "748683 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 60022,
            "unit": "ns/op\t  58.88 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "201135 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 60022,
            "unit": "ns/op",
            "extra": "201135 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 58.88,
            "unit": "MB/s",
            "extra": "201135 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "201135 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "201135 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3269054,
            "unit": "ns/op\t4091.82 MB/s\t    1562 B/op\t      33 allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3269054,
            "unit": "ns/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 4091.82,
            "unit": "MB/s",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1562,
            "unit": "B/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3759 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 62589588,
            "unit": "ns/op\t 213.72 MB/s\t   41396 B/op\t      76 allocs/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 62589588,
            "unit": "ns/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 213.72,
            "unit": "MB/s",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41396,
            "unit": "B/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "192 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 17666,
            "unit": "ns/op\t 200.05 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "677475 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 17666,
            "unit": "ns/op",
            "extra": "677475 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 200.05,
            "unit": "MB/s",
            "extra": "677475 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "677475 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "677475 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 62294,
            "unit": "ns/op\t  56.73 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "193922 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 62294,
            "unit": "ns/op",
            "extra": "193922 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 56.73,
            "unit": "MB/s",
            "extra": "193922 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "193922 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "193922 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6431345,
            "unit": "ns/op\t2079.87 MB/s\t    1411 B/op\t      29 allocs/op",
            "extra": "1850 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6431345,
            "unit": "ns/op",
            "extra": "1850 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2079.87,
            "unit": "MB/s",
            "extra": "1850 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1411,
            "unit": "B/op",
            "extra": "1850 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1850 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 62412625,
            "unit": "ns/op\t 214.32 MB/s\t   41481 B/op\t      76 allocs/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 62412625,
            "unit": "ns/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 214.32,
            "unit": "MB/s",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41481,
            "unit": "B/op",
            "extra": "194 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "194 times\n4 procs"
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
        "date": 1795442972804,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 25506,
            "unit": "ns/op\t 138.56 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "460129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 25506,
            "unit": "ns/op",
            "extra": "460129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 138.56,
            "unit": "MB/s",
            "extra": "460129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "460129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "460129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 95971,
            "unit": "ns/op\t  36.82 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "123295 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 95971,
            "unit": "ns/op",
            "extra": "123295 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 36.82,
            "unit": "MB/s",
            "extra": "123295 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "123295 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123295 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4306013,
            "unit": "ns/op\t3106.44 MB/s\t    1585 B/op\t      33 allocs/op",
            "extra": "2940 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4306013,
            "unit": "ns/op",
            "extra": "2940 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3106.44,
            "unit": "MB/s",
            "extra": "2940 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1585,
            "unit": "B/op",
            "extra": "2940 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "2940 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 90027597,
            "unit": "ns/op\t 148.58 MB/s\t   41419 B/op\t      76 allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 90027597,
            "unit": "ns/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 148.58,
            "unit": "MB/s",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41419,
            "unit": "B/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "136 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 27813,
            "unit": "ns/op\t 127.06 MB/s\t    1352 B/op\t      29 allocs/op",
            "extra": "423814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 27813,
            "unit": "ns/op",
            "extra": "423814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 127.06,
            "unit": "MB/s",
            "extra": "423814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1352,
            "unit": "B/op",
            "extra": "423814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "423814 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 96304,
            "unit": "ns/op\t  36.70 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "125701 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 96304,
            "unit": "ns/op",
            "extra": "125701 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 36.7,
            "unit": "MB/s",
            "extra": "125701 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "125701 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "125701 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9981307,
            "unit": "ns/op\t1340.14 MB/s\t    1445 B/op\t      29 allocs/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9981307,
            "unit": "ns/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1340.14,
            "unit": "MB/s",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1445,
            "unit": "B/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1287 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 99635168,
            "unit": "ns/op\t 134.25 MB/s\t   41497 B/op\t      76 allocs/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 99635168,
            "unit": "ns/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 134.25,
            "unit": "MB/s",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41497,
            "unit": "B/op",
            "extra": "120 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "120 times\n4 procs"
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
        "date": 1795446183332,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 14852,
            "unit": "ns/op\t 237.95 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "790060 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 14852,
            "unit": "ns/op",
            "extra": "790060 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 237.95,
            "unit": "MB/s",
            "extra": "790060 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "790060 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "790060 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 58151,
            "unit": "ns/op\t  60.77 MB/s\t   41370 B/op\t      76 allocs/op",
            "extra": "203146 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 58151,
            "unit": "ns/op",
            "extra": "203146 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 60.77,
            "unit": "MB/s",
            "extra": "203146 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41370,
            "unit": "B/op",
            "extra": "203146 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "203146 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3238309,
            "unit": "ns/op\t4130.67 MB/s\t    1574 B/op\t      33 allocs/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3238309,
            "unit": "ns/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 4130.67,
            "unit": "MB/s",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1574,
            "unit": "B/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3680 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 59548502,
            "unit": "ns/op\t 224.63 MB/s\t   41353 B/op\t      76 allocs/op",
            "extra": "204 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 59548502,
            "unit": "ns/op",
            "extra": "204 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 224.63,
            "unit": "MB/s",
            "extra": "204 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41353,
            "unit": "B/op",
            "extra": "204 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "204 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 16507,
            "unit": "ns/op\t 214.09 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "709291 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 16507,
            "unit": "ns/op",
            "extra": "709291 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 214.09,
            "unit": "MB/s",
            "extra": "709291 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "709291 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "709291 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 59266,
            "unit": "ns/op\t  59.63 MB/s\t   41371 B/op\t      76 allocs/op",
            "extra": "201636 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 59266,
            "unit": "ns/op",
            "extra": "201636 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 59.63,
            "unit": "MB/s",
            "extra": "201636 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41371,
            "unit": "B/op",
            "extra": "201636 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "201636 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6548197,
            "unit": "ns/op\t2042.76 MB/s\t    1412 B/op\t      29 allocs/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6548197,
            "unit": "ns/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2042.76,
            "unit": "MB/s",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1412,
            "unit": "B/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1820 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 60290161,
            "unit": "ns/op\t 221.87 MB/s\t   41477 B/op\t      76 allocs/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 60290161,
            "unit": "ns/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 221.87,
            "unit": "MB/s",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41477,
            "unit": "B/op",
            "extra": "199 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "199 times\n4 procs"
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
        "date": 1795450654190,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 45439,
            "unit": "ns/op\t  77.77 MB/s\t    1527 B/op\t      33 allocs/op",
            "extra": "258608 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 45439,
            "unit": "ns/op",
            "extra": "258608 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 77.77,
            "unit": "MB/s",
            "extra": "258608 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1527,
            "unit": "B/op",
            "extra": "258608 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "258608 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 147564,
            "unit": "ns/op\t  23.95 MB/s\t   41371 B/op\t      76 allocs/op",
            "extra": "80383 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 147564,
            "unit": "ns/op",
            "extra": "80383 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.95,
            "unit": "MB/s",
            "extra": "80383 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41371,
            "unit": "B/op",
            "extra": "80383 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "80383 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5482246,
            "unit": "ns/op\t2439.95 MB/s\t    1596 B/op\t      33 allocs/op",
            "extra": "2332 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5482246,
            "unit": "ns/op",
            "extra": "2332 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2439.95,
            "unit": "MB/s",
            "extra": "2332 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1596,
            "unit": "B/op",
            "extra": "2332 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "2332 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 100001665,
            "unit": "ns/op\t 133.76 MB/s\t   41528 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 100001665,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 133.76,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41528,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 47728,
            "unit": "ns/op\t  74.04 MB/s\t    1354 B/op\t      29 allocs/op",
            "extra": "245836 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 47728,
            "unit": "ns/op",
            "extra": "245836 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 74.04,
            "unit": "MB/s",
            "extra": "245836 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1354,
            "unit": "B/op",
            "extra": "245836 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "245836 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 146544,
            "unit": "ns/op\t  24.12 MB/s\t   41371 B/op\t      76 allocs/op",
            "extra": "81446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 146544,
            "unit": "ns/op",
            "extra": "81446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 24.12,
            "unit": "MB/s",
            "extra": "81446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41371,
            "unit": "B/op",
            "extra": "81446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81446 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 11263850,
            "unit": "ns/op\t1187.55 MB/s\t    1452 B/op\t      29 allocs/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 11263850,
            "unit": "ns/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1187.55,
            "unit": "MB/s",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1452,
            "unit": "B/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 106650651,
            "unit": "ns/op\t 125.42 MB/s\t   41526 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 106650651,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 125.42,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41526,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795477604555,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 25304,
            "unit": "ns/op\t 139.66 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "454347 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 25304,
            "unit": "ns/op",
            "extra": "454347 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 139.66,
            "unit": "MB/s",
            "extra": "454347 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "454347 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "454347 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 96123,
            "unit": "ns/op\t  36.77 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "123903 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 96123,
            "unit": "ns/op",
            "extra": "123903 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 36.77,
            "unit": "MB/s",
            "extra": "123903 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "123903 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123903 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4552269,
            "unit": "ns/op\t2938.40 MB/s\t    1574 B/op\t      33 allocs/op",
            "extra": "2583 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4552269,
            "unit": "ns/op",
            "extra": "2583 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2938.4,
            "unit": "MB/s",
            "extra": "2583 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1574,
            "unit": "B/op",
            "extra": "2583 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "2583 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 93671612,
            "unit": "ns/op\t 142.80 MB/s\t   41549 B/op\t      76 allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 93671612,
            "unit": "ns/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 142.8,
            "unit": "MB/s",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41549,
            "unit": "B/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "129 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 27844,
            "unit": "ns/op\t 126.92 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "422569 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 27844,
            "unit": "ns/op",
            "extra": "422569 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 126.92,
            "unit": "MB/s",
            "extra": "422569 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "422569 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "422569 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 96169,
            "unit": "ns/op\t  36.75 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "125104 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 96169,
            "unit": "ns/op",
            "extra": "125104 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 36.75,
            "unit": "MB/s",
            "extra": "125104 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "125104 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "125104 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9448758,
            "unit": "ns/op\t1415.68 MB/s\t    1437 B/op\t      29 allocs/op",
            "extra": "1303 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9448758,
            "unit": "ns/op",
            "extra": "1303 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1415.68,
            "unit": "MB/s",
            "extra": "1303 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1437,
            "unit": "B/op",
            "extra": "1303 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1303 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 95524486,
            "unit": "ns/op\t 140.03 MB/s\t   41489 B/op\t      76 allocs/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 95524486,
            "unit": "ns/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 140.03,
            "unit": "MB/s",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41489,
            "unit": "B/op",
            "extra": "127 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "127 times\n4 procs"
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
        "date": 1795481554650,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 33903,
            "unit": "ns/op\t 104.24 MB/s\t    1526 B/op\t      33 allocs/op",
            "extra": "353820 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 33903,
            "unit": "ns/op",
            "extra": "353820 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 104.24,
            "unit": "MB/s",
            "extra": "353820 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1526,
            "unit": "B/op",
            "extra": "353820 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "353820 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 101329,
            "unit": "ns/op\t  34.88 MB/s\t   41375 B/op\t      76 allocs/op",
            "extra": "118369 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 101329,
            "unit": "ns/op",
            "extra": "118369 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 34.88,
            "unit": "MB/s",
            "extra": "118369 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41375,
            "unit": "B/op",
            "extra": "118369 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "118369 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3738921,
            "unit": "ns/op\t3577.61 MB/s\t    1567 B/op\t      33 allocs/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3738921,
            "unit": "ns/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3577.61,
            "unit": "MB/s",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1567,
            "unit": "B/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3224 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 67026497,
            "unit": "ns/op\t 199.57 MB/s\t   41444 B/op\t      76 allocs/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 67026497,
            "unit": "ns/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 199.57,
            "unit": "MB/s",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41444,
            "unit": "B/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "181 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 35645,
            "unit": "ns/op\t  99.14 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "335778 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 35645,
            "unit": "ns/op",
            "extra": "335778 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 99.14,
            "unit": "MB/s",
            "extra": "335778 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "335778 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "335778 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 102359,
            "unit": "ns/op\t  34.53 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "117574 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 102359,
            "unit": "ns/op",
            "extra": "117574 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 34.53,
            "unit": "MB/s",
            "extra": "117574 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "117574 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "117574 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6386638,
            "unit": "ns/op\t2094.43 MB/s\t    1389 B/op\t      29 allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6386638,
            "unit": "ns/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2094.43,
            "unit": "MB/s",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1389,
            "unit": "B/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 65646192,
            "unit": "ns/op\t 203.76 MB/s\t   41441 B/op\t      76 allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 65646192,
            "unit": "ns/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 203.76,
            "unit": "MB/s",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41441,
            "unit": "B/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "188 times\n4 procs"
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
        "date": 1795514847134,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 45018,
            "unit": "ns/op\t  78.50 MB/s\t    1496 B/op\t      32 allocs/op",
            "extra": "261375 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 45018,
            "unit": "ns/op",
            "extra": "261375 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 78.5,
            "unit": "MB/s",
            "extra": "261375 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1496,
            "unit": "B/op",
            "extra": "261375 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "261375 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 149903,
            "unit": "ns/op\t  23.58 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "81400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 149903,
            "unit": "ns/op",
            "extra": "81400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.58,
            "unit": "MB/s",
            "extra": "81400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "81400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5538998,
            "unit": "ns/op\t2414.95 MB/s\t    1550 B/op\t      32 allocs/op",
            "extra": "2329 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5538998,
            "unit": "ns/op",
            "extra": "2329 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2414.95,
            "unit": "MB/s",
            "extra": "2329 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1550,
            "unit": "B/op",
            "extra": "2329 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "2329 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 105033544,
            "unit": "ns/op\t 127.35 MB/s\t   41446 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 105033544,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 127.35,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41446,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 47385,
            "unit": "ns/op\t  74.58 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "248517 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 47385,
            "unit": "ns/op",
            "extra": "248517 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 74.58,
            "unit": "MB/s",
            "extra": "248517 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "248517 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "248517 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 148752,
            "unit": "ns/op\t  23.76 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "81022 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 148752,
            "unit": "ns/op",
            "extra": "81022 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 23.76,
            "unit": "MB/s",
            "extra": "81022 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "81022 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81022 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 11357458,
            "unit": "ns/op\t1177.76 MB/s\t    1459 B/op\t      29 allocs/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 11357458,
            "unit": "ns/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1177.76,
            "unit": "MB/s",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1459,
            "unit": "B/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1046 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 105508321,
            "unit": "ns/op\t 126.78 MB/s\t   41610 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 105508321,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 126.78,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41610,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
        "date": 1795517715792,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 36532,
            "unit": "ns/op\t  96.74 MB/s\t    1494 B/op\t      32 allocs/op",
            "extra": "322766 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 36532,
            "unit": "ns/op",
            "extra": "322766 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 96.74,
            "unit": "MB/s",
            "extra": "322766 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1494,
            "unit": "B/op",
            "extra": "322766 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "322766 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 118623,
            "unit": "ns/op\t  29.79 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "100438 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 118623,
            "unit": "ns/op",
            "extra": "100438 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.79,
            "unit": "MB/s",
            "extra": "100438 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "100438 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100438 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4971092,
            "unit": "ns/op\t2690.84 MB/s\t    1549 B/op\t      32 allocs/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4971092,
            "unit": "ns/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2690.84,
            "unit": "MB/s",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1549,
            "unit": "B/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "2400 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 81610391,
            "unit": "ns/op\t 163.91 MB/s\t   41574 B/op\t      76 allocs/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 81610391,
            "unit": "ns/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 163.91,
            "unit": "MB/s",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41574,
            "unit": "B/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "151 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 38466,
            "unit": "ns/op\t  91.87 MB/s\t    1353 B/op\t      29 allocs/op",
            "extra": "305605 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 38466,
            "unit": "ns/op",
            "extra": "305605 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 91.87,
            "unit": "MB/s",
            "extra": "305605 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1353,
            "unit": "B/op",
            "extra": "305605 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "305605 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 118429,
            "unit": "ns/op\t  29.84 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "101296 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 118429,
            "unit": "ns/op",
            "extra": "101296 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 29.84,
            "unit": "MB/s",
            "extra": "101296 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "101296 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "101296 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9466106,
            "unit": "ns/op\t1413.08 MB/s\t    1437 B/op\t      29 allocs/op",
            "extra": "1310 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9466106,
            "unit": "ns/op",
            "extra": "1310 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1413.08,
            "unit": "MB/s",
            "extra": "1310 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1437,
            "unit": "B/op",
            "extra": "1310 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1310 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 86268280,
            "unit": "ns/op\t 155.06 MB/s\t   41594 B/op\t      76 allocs/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 86268280,
            "unit": "ns/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 155.06,
            "unit": "MB/s",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41594,
            "unit": "B/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "139 times\n4 procs"
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
        "date": 1795518570107,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 36627,
            "unit": "ns/op\t  96.49 MB/s\t    1495 B/op\t      32 allocs/op",
            "extra": "320784 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 36627,
            "unit": "ns/op",
            "extra": "320784 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 96.49,
            "unit": "MB/s",
            "extra": "320784 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1495,
            "unit": "B/op",
            "extra": "320784 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "320784 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 119131,
            "unit": "ns/op\t  29.66 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "100764 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 119131,
            "unit": "ns/op",
            "extra": "100764 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.66,
            "unit": "MB/s",
            "extra": "100764 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "100764 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100764 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5068465,
            "unit": "ns/op\t2639.14 MB/s\t    1547 B/op\t      32 allocs/op",
            "extra": "2486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5068465,
            "unit": "ns/op",
            "extra": "2486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2639.14,
            "unit": "MB/s",
            "extra": "2486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1547,
            "unit": "B/op",
            "extra": "2486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 32,
            "unit": "allocs/op",
            "extra": "2486 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 84286375,
            "unit": "ns/op\t 158.70 MB/s\t   41471 B/op\t      76 allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 84286375,
            "unit": "ns/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 158.7,
            "unit": "MB/s",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41471,
            "unit": "B/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "145 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 38442,
            "unit": "ns/op\t  91.93 MB/s\t    1354 B/op\t      29 allocs/op",
            "extra": "307284 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 38442,
            "unit": "ns/op",
            "extra": "307284 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 91.93,
            "unit": "MB/s",
            "extra": "307284 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1354,
            "unit": "B/op",
            "extra": "307284 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "307284 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 119177,
            "unit": "ns/op\t  29.65 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "101078 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 119177,
            "unit": "ns/op",
            "extra": "101078 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 29.65,
            "unit": "MB/s",
            "extra": "101078 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "101078 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "101078 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9659025,
            "unit": "ns/op\t1384.86 MB/s\t    1438 B/op\t      29 allocs/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9659025,
            "unit": "ns/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1384.86,
            "unit": "MB/s",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1438,
            "unit": "B/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 29,
            "unit": "allocs/op",
            "extra": "1285 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 87053468,
            "unit": "ns/op\t 153.66 MB/s\t   41535 B/op\t      76 allocs/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 87053468,
            "unit": "ns/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 153.66,
            "unit": "MB/s",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41535,
            "unit": "B/op",
            "extra": "139 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "139 times\n4 procs"
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
        "date": 1795543660794,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 35011,
            "unit": "ns/op\t 100.94 MB/s\t    1644 B/op\t      38 allocs/op",
            "extra": "340354 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 35011,
            "unit": "ns/op",
            "extra": "340354 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 100.94,
            "unit": "MB/s",
            "extra": "340354 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1644,
            "unit": "B/op",
            "extra": "340354 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "340354 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 103169,
            "unit": "ns/op\t  34.25 MB/s\t   41375 B/op\t      76 allocs/op",
            "extra": "116016 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 103169,
            "unit": "ns/op",
            "extra": "116016 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 34.25,
            "unit": "MB/s",
            "extra": "116016 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41375,
            "unit": "B/op",
            "extra": "116016 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "116016 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3701498,
            "unit": "ns/op\t3613.78 MB/s\t    1682 B/op\t      38 allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3701498,
            "unit": "ns/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3613.78,
            "unit": "MB/s",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1682,
            "unit": "B/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 38,
            "unit": "allocs/op",
            "extra": "3279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 70220781,
            "unit": "ns/op\t 190.49 MB/s\t   41448 B/op\t      76 allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 70220781,
            "unit": "ns/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 190.49,
            "unit": "MB/s",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41448,
            "unit": "B/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "176 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 35585,
            "unit": "ns/op\t  99.31 MB/s\t    1504 B/op\t      35 allocs/op",
            "extra": "335983 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 35585,
            "unit": "ns/op",
            "extra": "335983 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 99.31,
            "unit": "MB/s",
            "extra": "335983 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1504,
            "unit": "B/op",
            "extra": "335983 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "335983 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 101446,
            "unit": "ns/op\t  34.84 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "113803 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 101446,
            "unit": "ns/op",
            "extra": "113803 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 34.84,
            "unit": "MB/s",
            "extra": "113803 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "113803 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "113803 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6269070,
            "unit": "ns/op\t2133.71 MB/s\t    1569 B/op\t      35 allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6269070,
            "unit": "ns/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2133.71,
            "unit": "MB/s",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1569,
            "unit": "B/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 35,
            "unit": "allocs/op",
            "extra": "2070 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 69582589,
            "unit": "ns/op\t 192.24 MB/s\t   41445 B/op\t      76 allocs/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 69582589,
            "unit": "ns/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 192.24,
            "unit": "MB/s",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41445,
            "unit": "B/op",
            "extra": "177 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "177 times\n4 procs"
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
          "id": "6b8796a56a91774f3f99ef58fa4a1163ef73a9d2",
          "message": "fix: edge cases in bdatwriterbuffered",
          "timestamp": "2026-11-25T13:52:47+01:00",
          "tree_id": "8b552c100c3c6619d20870ca65e6da3d5cdbaaa3",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/6b8796a56a91774f3f99ef58fa4a1163ef73a9d2"
        },
        "date": 1795611887866,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 14673,
            "unit": "ns/op\t 240.85 MB/s\t    1530 B/op\t      33 allocs/op",
            "extra": "797127 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 14673,
            "unit": "ns/op",
            "extra": "797127 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 240.85,
            "unit": "MB/s",
            "extra": "797127 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1530,
            "unit": "B/op",
            "extra": "797127 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "797127 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 56028,
            "unit": "ns/op\t  63.08 MB/s\t   41370 B/op\t      76 allocs/op",
            "extra": "213871 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 56028,
            "unit": "ns/op",
            "extra": "213871 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 63.08,
            "unit": "MB/s",
            "extra": "213871 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41370,
            "unit": "B/op",
            "extra": "213871 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "213871 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3058545,
            "unit": "ns/op\t4373.45 MB/s\t    1581 B/op\t      33 allocs/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3058545,
            "unit": "ns/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 4373.45,
            "unit": "MB/s",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1581,
            "unit": "B/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "3876 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 60298841,
            "unit": "ns/op\t 221.83 MB/s\t   41476 B/op\t      76 allocs/op",
            "extra": "198 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 60298841,
            "unit": "ns/op",
            "extra": "198 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 221.83,
            "unit": "MB/s",
            "extra": "198 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41476,
            "unit": "B/op",
            "extra": "198 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "198 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 16285,
            "unit": "ns/op\t 217.01 MB/s\t    1389 B/op\t      30 allocs/op",
            "extra": "717507 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 16285,
            "unit": "ns/op",
            "extra": "717507 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 217.01,
            "unit": "MB/s",
            "extra": "717507 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1389,
            "unit": "B/op",
            "extra": "717507 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "717507 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 55841,
            "unit": "ns/op\t  63.29 MB/s\t   41368 B/op\t      76 allocs/op",
            "extra": "214822 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 55841,
            "unit": "ns/op",
            "extra": "214822 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 63.29,
            "unit": "MB/s",
            "extra": "214822 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41368,
            "unit": "B/op",
            "extra": "214822 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "214822 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6200176,
            "unit": "ns/op\t2157.42 MB/s\t    1460 B/op\t      30 allocs/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6200176,
            "unit": "ns/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2157.42,
            "unit": "MB/s",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1460,
            "unit": "B/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1959 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 57811439,
            "unit": "ns/op\t 231.38 MB/s\t   41469 B/op\t      76 allocs/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 57811439,
            "unit": "ns/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 231.38,
            "unit": "MB/s",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41469,
            "unit": "B/op",
            "extra": "212 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "212 times\n4 procs"
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
          "id": "0275fc3da9c2d8ba2028736bce4190ec2dc3fedf",
          "message": "feat: cleanup test code",
          "timestamp": "2026-11-25T14:14:35+01:00",
          "tree_id": "0171134614edcaa2f393a47841a90baa51f4d4e1",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/0275fc3da9c2d8ba2028736bce4190ec2dc3fedf"
        },
        "date": 1795613171447,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 36824,
            "unit": "ns/op\t  95.97 MB/s\t    1530 B/op\t      33 allocs/op",
            "extra": "320737 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 36824,
            "unit": "ns/op",
            "extra": "320737 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 95.97,
            "unit": "MB/s",
            "extra": "320737 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 1530,
            "unit": "B/op",
            "extra": "320737 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "320737 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 118645,
            "unit": "ns/op\t  29.79 MB/s\t   41377 B/op\t      76 allocs/op",
            "extra": "97245 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 118645,
            "unit": "ns/op",
            "extra": "97245 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 29.79,
            "unit": "MB/s",
            "extra": "97245 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41377,
            "unit": "B/op",
            "extra": "97245 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "97245 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4535393,
            "unit": "ns/op\t2949.33 MB/s\t    1589 B/op\t      33 allocs/op",
            "extra": "2697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4535393,
            "unit": "ns/op",
            "extra": "2697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2949.33,
            "unit": "MB/s",
            "extra": "2697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 1589,
            "unit": "B/op",
            "extra": "2697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 33,
            "unit": "allocs/op",
            "extra": "2697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 91849861,
            "unit": "ns/op\t 145.63 MB/s\t   41611 B/op\t      76 allocs/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 91849861,
            "unit": "ns/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 145.63,
            "unit": "MB/s",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41611,
            "unit": "B/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "130 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 38736,
            "unit": "ns/op\t  91.23 MB/s\t    1392 B/op\t      30 allocs/op",
            "extra": "306028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 38736,
            "unit": "ns/op",
            "extra": "306028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 91.23,
            "unit": "MB/s",
            "extra": "306028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 1392,
            "unit": "B/op",
            "extra": "306028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "306028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 118072,
            "unit": "ns/op\t  29.93 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "101563 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 118072,
            "unit": "ns/op",
            "extra": "101563 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 29.93,
            "unit": "MB/s",
            "extra": "101563 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "101563 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "101563 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9280431,
            "unit": "ns/op\t1441.35 MB/s\t    1473 B/op\t      30 allocs/op",
            "extra": "1274 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9280431,
            "unit": "ns/op",
            "extra": "1274 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1441.35,
            "unit": "MB/s",
            "extra": "1274 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 1473,
            "unit": "B/op",
            "extra": "1274 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 30,
            "unit": "allocs/op",
            "extra": "1274 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 86423513,
            "unit": "ns/op\t 154.78 MB/s\t   41415 B/op\t      76 allocs/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 86423513,
            "unit": "ns/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 154.78,
            "unit": "MB/s",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41415,
            "unit": "B/op",
            "extra": "142 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "142 times\n4 procs"
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
          "id": "3bc58a5e44063172f5ced31982cc7d0156534ae6",
          "message": "feat: reduce allocations and improve tests",
          "timestamp": "2026-11-25T16:19:06+01:00",
          "tree_id": "2d86c57f0979450e1fb12b5dab1e374ef6561e70",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/3bc58a5e44063172f5ced31982cc7d0156534ae6"
        },
        "date": 1795620660810,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 32470,
            "unit": "ns/op\t 108.84 MB/s\t     661 B/op\t      12 allocs/op",
            "extra": "361630 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 32470,
            "unit": "ns/op",
            "extra": "361630 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 108.84,
            "unit": "MB/s",
            "extra": "361630 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 661,
            "unit": "B/op",
            "extra": "361630 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "361630 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 98831,
            "unit": "ns/op\t  35.76 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "120615 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 98831,
            "unit": "ns/op",
            "extra": "120615 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 35.76,
            "unit": "MB/s",
            "extra": "120615 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "120615 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "120615 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 3730404,
            "unit": "ns/op\t3585.78 MB/s\t     706 B/op\t      12 allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 3730404,
            "unit": "ns/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3585.78,
            "unit": "MB/s",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 706,
            "unit": "B/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "3403 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 66955124,
            "unit": "ns/op\t 199.78 MB/s\t   41485 B/op\t      76 allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 66955124,
            "unit": "ns/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 199.78,
            "unit": "MB/s",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41485,
            "unit": "B/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "188 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 34010,
            "unit": "ns/op\t 103.91 MB/s\t     662 B/op\t      12 allocs/op",
            "extra": "347379 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 34010,
            "unit": "ns/op",
            "extra": "347379 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 103.91,
            "unit": "MB/s",
            "extra": "347379 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 662,
            "unit": "B/op",
            "extra": "347379 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "347379 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 100909,
            "unit": "ns/op\t  35.02 MB/s\t   41374 B/op\t      76 allocs/op",
            "extra": "117399 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 100909,
            "unit": "ns/op",
            "extra": "117399 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 35.02,
            "unit": "MB/s",
            "extra": "117399 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41374,
            "unit": "B/op",
            "extra": "117399 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "117399 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 6263977,
            "unit": "ns/op\t2135.45 MB/s\t     750 B/op\t      12 allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 6263977,
            "unit": "ns/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 2135.45,
            "unit": "MB/s",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 750,
            "unit": "B/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2028 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 64724921,
            "unit": "ns/op\t 206.67 MB/s\t   41481 B/op\t      76 allocs/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 64724921,
            "unit": "ns/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 206.67,
            "unit": "MB/s",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41481,
            "unit": "B/op",
            "extra": "193 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "193 times\n4 procs"
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
          "id": "4925b71a9d8ea97f24d8349d5056a246b4f92438",
          "message": "feat: linter improvements",
          "timestamp": "2026-11-26T02:35:29+01:00",
          "tree_id": "404528456382b991aece2090981ecc982f92bf75",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/4925b71a9d8ea97f24d8349d5056a246b4f92438"
        },
        "date": 1795657644742,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 24947,
            "unit": "ns/op\t 141.66 MB/s\t     662 B/op\t      12 allocs/op",
            "extra": "480463 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 24947,
            "unit": "ns/op",
            "extra": "480463 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 141.66,
            "unit": "MB/s",
            "extra": "480463 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 662,
            "unit": "B/op",
            "extra": "480463 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "480463 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 97055,
            "unit": "ns/op\t  36.41 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "123861 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 97055,
            "unit": "ns/op",
            "extra": "123861 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 36.41,
            "unit": "MB/s",
            "extra": "123861 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "123861 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "123861 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 4371699,
            "unit": "ns/op\t3059.77 MB/s\t     718 B/op\t      12 allocs/op",
            "extra": "2698 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 4371699,
            "unit": "ns/op",
            "extra": "2698 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 3059.77,
            "unit": "MB/s",
            "extra": "2698 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 718,
            "unit": "B/op",
            "extra": "2698 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2698 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 100128585,
            "unit": "ns/op\t 133.59 MB/s\t   41609 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 100128585,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 133.59,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41609,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 28117,
            "unit": "ns/op\t 125.69 MB/s\t     662 B/op\t      12 allocs/op",
            "extra": "431994 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 28117,
            "unit": "ns/op",
            "extra": "431994 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 125.69,
            "unit": "MB/s",
            "extra": "431994 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 662,
            "unit": "B/op",
            "extra": "431994 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "431994 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 97315,
            "unit": "ns/op\t  36.32 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "122415 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 97315,
            "unit": "ns/op",
            "extra": "122415 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 36.32,
            "unit": "MB/s",
            "extra": "122415 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "122415 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "122415 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 9355346,
            "unit": "ns/op\t1429.81 MB/s\t     778 B/op\t      12 allocs/op",
            "extra": "1281 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 9355346,
            "unit": "ns/op",
            "extra": "1281 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1429.81,
            "unit": "MB/s",
            "extra": "1281 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 778,
            "unit": "B/op",
            "extra": "1281 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1281 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 96645791,
            "unit": "ns/op\t 138.41 MB/s\t   41490 B/op\t      76 allocs/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 96645791,
            "unit": "ns/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 138.41,
            "unit": "MB/s",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41490,
            "unit": "B/op",
            "extra": "126 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "126 times\n4 procs"
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
          "id": "aebd57177befce775f1ac7e8e1c37070a7ee911b",
          "message": "fix: always return buffer of bdatwritebuffered and improve comments",
          "timestamp": "2026-11-27T14:40:37+01:00",
          "tree_id": "891791054297c3373ff0649b744d0b12b953fcbc",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/aebd57177befce775f1ac7e8e1c37070a7ee911b"
        },
        "date": 1795787545073,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 44806,
            "unit": "ns/op\t  78.87 MB/s\t     662 B/op\t      12 allocs/op",
            "extra": "265327 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 44806,
            "unit": "ns/op",
            "extra": "265327 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 78.87,
            "unit": "MB/s",
            "extra": "265327 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 662,
            "unit": "B/op",
            "extra": "265327 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "265327 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 147375,
            "unit": "ns/op\t  23.98 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "81962 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 147375,
            "unit": "ns/op",
            "extra": "81962 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.98,
            "unit": "MB/s",
            "extra": "81962 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "81962 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81962 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5144091,
            "unit": "ns/op\t2600.34 MB/s\t     709 B/op\t      12 allocs/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5144091,
            "unit": "ns/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2600.34,
            "unit": "MB/s",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 709,
            "unit": "B/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2274 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 110609751,
            "unit": "ns/op\t 120.93 MB/s\t   41445 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 110609751,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 120.93,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41445,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 47250,
            "unit": "ns/op\t  74.79 MB/s\t     663 B/op\t      12 allocs/op",
            "extra": "250509 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 47250,
            "unit": "ns/op",
            "extra": "250509 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 74.79,
            "unit": "MB/s",
            "extra": "250509 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 663,
            "unit": "B/op",
            "extra": "250509 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "250509 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 146110,
            "unit": "ns/op\t  24.19 MB/s\t   41370 B/op\t      76 allocs/op",
            "extra": "81912 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 146110,
            "unit": "ns/op",
            "extra": "81912 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 24.19,
            "unit": "MB/s",
            "extra": "81912 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41370,
            "unit": "B/op",
            "extra": "81912 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81912 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 10436077,
            "unit": "ns/op\t1281.75 MB/s\t     766 B/op\t      12 allocs/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 10436077,
            "unit": "ns/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1281.75,
            "unit": "MB/s",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 766,
            "unit": "B/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1114 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 110639808,
            "unit": "ns/op\t 120.90 MB/s\t   41609 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 110639808,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 120.9,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41609,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
          "id": "2acfce82f5d1d6b054458c6374c8c682e034ec2c",
          "message": "feat: split Status in Status and StatusError",
          "timestamp": "2026-11-27T15:15:44+01:00",
          "tree_id": "80f891f7853050869e2af43e1b0343642f18d94e",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/2acfce82f5d1d6b054458c6374c8c682e034ec2c"
        },
        "date": 1795789691729,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 45779,
            "unit": "ns/op\t  77.20 MB/s\t     661 B/op\t      12 allocs/op",
            "extra": "259279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 45779,
            "unit": "ns/op",
            "extra": "259279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 77.2,
            "unit": "MB/s",
            "extra": "259279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 661,
            "unit": "B/op",
            "extra": "259279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "259279 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 153532,
            "unit": "ns/op\t  23.02 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "72507 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 153532,
            "unit": "ns/op",
            "extra": "72507 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.02,
            "unit": "MB/s",
            "extra": "72507 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "72507 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "72507 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5284112,
            "unit": "ns/op\t2531.44 MB/s\t     728 B/op\t      12 allocs/op",
            "extra": "2301 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5284112,
            "unit": "ns/op",
            "extra": "2301 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2531.44,
            "unit": "MB/s",
            "extra": "2301 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 728,
            "unit": "B/op",
            "extra": "2301 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2301 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 122530131,
            "unit": "ns/op\t 109.17 MB/s\t   41446 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 122530131,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 109.17,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41446,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 48671,
            "unit": "ns/op\t  72.61 MB/s\t     662 B/op\t      12 allocs/op",
            "extra": "244938 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 48671,
            "unit": "ns/op",
            "extra": "244938 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 72.61,
            "unit": "MB/s",
            "extra": "244938 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 662,
            "unit": "B/op",
            "extra": "244938 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "244938 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 153701,
            "unit": "ns/op\t  22.99 MB/s\t   41373 B/op\t      76 allocs/op",
            "extra": "77728 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 153701,
            "unit": "ns/op",
            "extra": "77728 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 22.99,
            "unit": "MB/s",
            "extra": "77728 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41373,
            "unit": "B/op",
            "extra": "77728 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "77728 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 10928766,
            "unit": "ns/op\t1223.96 MB/s\t     833 B/op\t      12 allocs/op",
            "extra": "1066 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 10928766,
            "unit": "ns/op",
            "extra": "1066 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1223.96,
            "unit": "MB/s",
            "extra": "1066 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 833,
            "unit": "B/op",
            "extra": "1066 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1066 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 107335385,
            "unit": "ns/op\t 124.62 MB/s\t   41527 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 107335385,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 124.62,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41527,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "68cd2e0925096195c48d47a765b396223f3fd4c7",
          "message": "Merge pull request #1 from uponusolutions/feat/is-reply\n\nchore: little helper",
          "timestamp": "2026-11-27T15:52:52+01:00",
          "tree_id": "fbceebb46b69fa47d6ff0186e3ee0794cafc042e",
          "url": "https://github.com/uponusolutions/deltasmtp/commit/68cd2e0925096195c48d47a765b396223f3fd4c7"
        },
        "date": 1795791872384,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP",
            "value": 44631,
            "unit": "ns/op\t  79.18 MB/s\t     663 B/op\t      12 allocs/op",
            "extra": "263697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - ns/op",
            "value": 44631,
            "unit": "ns/op",
            "extra": "263697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - MB/s",
            "value": 79.18,
            "unit": "MB/s",
            "extra": "263697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - B/op",
            "value": 663,
            "unit": "B/op",
            "extra": "263697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "263697 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP",
            "value": 148195,
            "unit": "ns/op\t  23.85 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "81043 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - ns/op",
            "value": 148195,
            "unit": "ns/op",
            "extra": "81043 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - MB/s",
            "value": 23.85,
            "unit": "MB/s",
            "extra": "81043 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "81043 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "81043 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP",
            "value": 5382453,
            "unit": "ns/op\t2485.18 MB/s\t     744 B/op\t      12 allocs/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - ns/op",
            "value": 5382453,
            "unit": "ns/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - MB/s",
            "value": 2485.18,
            "unit": "MB/s",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - B/op",
            "value": 744,
            "unit": "B/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "2319 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP",
            "value": 111365629,
            "unit": "ns/op\t 120.11 MB/s\t   41446 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - ns/op",
            "value": 111365629,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - MB/s",
            "value": 120.11,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - B/op",
            "value": 41446,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkEndToEnd/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP",
            "value": 47254,
            "unit": "ns/op\t  74.79 MB/s\t     663 B/op\t      12 allocs/op",
            "extra": "250597 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - ns/op",
            "value": 47254,
            "unit": "ns/op",
            "extra": "250597 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - MB/s",
            "value": 74.79,
            "unit": "MB/s",
            "extra": "250597 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - B/op",
            "value": 663,
            "unit": "B/op",
            "extra": "250597 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "250597 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP",
            "value": 149241,
            "unit": "ns/op\t  23.68 MB/s\t   41372 B/op\t      76 allocs/op",
            "extra": "80610 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - ns/op",
            "value": 149241,
            "unit": "ns/op",
            "extra": "80610 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - MB/s",
            "value": 23.68,
            "unit": "MB/s",
            "extra": "80610 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - B/op",
            "value": 41372,
            "unit": "B/op",
            "extra": "80610 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Small/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "80610 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP",
            "value": 11411284,
            "unit": "ns/op\t1172.21 MB/s\t     771 B/op\t      12 allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - ns/op",
            "value": 11411284,
            "unit": "ns/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - MB/s",
            "value": 1172.21,
            "unit": "MB/s",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - B/op",
            "value": 771,
            "unit": "B/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/DeltaSMTP - allocs/op",
            "value": 12,
            "unit": "allocs/op",
            "extra": "1108 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP",
            "value": 116236980,
            "unit": "ns/op\t 115.08 MB/s\t   41445 B/op\t      76 allocs/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - ns/op",
            "value": 116236980,
            "unit": "ns/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - MB/s",
            "value": 115.08,
            "unit": "MB/s",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - B/op",
            "value": 41445,
            "unit": "B/op",
            "extra": "100 times\n4 procs"
          },
          {
            "name": "BenchmarkData/Large/GoSMTP - allocs/op",
            "value": 76,
            "unit": "allocs/op",
            "extra": "100 times\n4 procs"
          }
        ]
      }
    ]
  }
}