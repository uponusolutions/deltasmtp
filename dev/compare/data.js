window.BENCHMARK_DATA = {
  "lastUpdate": 1795094496600,
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
      }
    ]
  }
}