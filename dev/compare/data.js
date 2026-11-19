window.BENCHMARK_DATA = {
  "lastUpdate": 1795099126808,
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
      }
    ]
  }
}