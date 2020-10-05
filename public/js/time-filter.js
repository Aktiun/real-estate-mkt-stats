window.timeFilter = window.cf.Filter().fromJSON({
    granularity: 'MONTH',
    label: 'Date',
    oneTimeUnit: true,
    operation: 'BETWEEN',
    path: '@timestamp',
    sender: { type: 'Time Slider', id: 'time-range' },
    value: ['2020-06-01 00:00:00.000', '2020-06-30 23:59:59.999']
})
