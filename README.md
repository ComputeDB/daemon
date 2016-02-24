# ComputeDB daemon

RESTful API, using `httpie`

Retrieve

```sh
» http GET :63136/result task="add" 0=1 1=2
#=> 404, not there
```

Not there, compute (could have just done that in the first place).

```sh
» http POST :63136/compute task="add" 0=1 1=2
# computing...
# redirect
=> 307 /result/${HASH}
```

Now it is also there

```sh
» http GET :63136/result task="add" 0=1 1=2
# redirect
=> 307 /result/${HASH}
```sh

View available result sets.

```sh
» http GET :63136/ task="add"
# okay
=> 200
```

Shows query and for each param, available values and
how many matching documents for that value.

```json
[
  { "query": {
      "task": "CustomerReport",
      "customerId": 2423
    },
    "facets": {
      "yearMonth": [
        { "value": "2016-01", "count": 1 },
        { "value": "2016-02", "count": 1 }
      ],
      "size": [
        { "value": 10, "count": 2 }
      ]
    }
  }
]
```
