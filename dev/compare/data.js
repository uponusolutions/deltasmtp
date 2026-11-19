window.BENCHMARK_DATA = {
  "lastUpdate": 1795092988202,
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
      }
    ]
  }
}