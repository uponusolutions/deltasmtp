window.BENCHMARK_DATA = {
  "lastUpdate": 1795170779558,
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
      }
    ]
  }
}