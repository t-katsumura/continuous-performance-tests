# Limited Resources

| Column No. | Data Name           | Field                                 | Data Type | Notes                     |
| ---------- | ------------------- | ------------------------------------- | --------- | ------------------------- |
| 1          | Date                | -                                     | String    | Test finished date in UTC |
| 2          | Time                | -                                     | String    | Test finished time in UTC |
| 3          | Version             | -                                     | String    | K6 Version                |
| 4          | Version             | -                                     | String    | Target Gateway Version    |
| 5          | Test ID             | .root_group.id                        | string    | -                         |
| 6          | Test Duration       | .state.testRunDurationMs              | float     | -                         |
| 7          | Request Count       | .metrics.http_reqs.values.count       | int       | -                         |
| 8          | Request Rate        | .metrics.http_reqs.values.rate        | float     | -                         |
| 9          | Vus                 | .metrics.vus.values.min               | int       | value=min=max             |
| 10         | Data Received Count | .metrics.data_received.values.count   | int       | -                         |
| 11         | Data Received Rate  | .metrics.data_received.values.rate    | float     | -                         |
| 12         | Data Sent Count     | .metrics.data_sent.values.count       | int       | -                         |
| 13         | Data Sent Rate      | .metrics.data_sent.values.rate        | float     | -                         |
| 14         | Iteration Count     | .metrics.iterations.values.count      | int       | -                         |
| 15         | Iteration Rate      | .metrics.iterations.values.rate       | float     | -                         |
| 16         | Request Failed      | .metrics.http_req_failed.values.fails | int       | -                         |

cpu1 k6 run script.js --vus 100
cpu5 k6 run script.js --vus 100
cpu10 k6 run script.js --vus 100
cpu20 k6 run script.js --vus 150
cpu30 k6 run script.js --vus 200
cpu40 k6 run script.js --vus 250
cpu50 k6 run script.js --vus 300
