const moment = cf.getDependency('moment');

window.timeFilter = window.cf.Filter().fromJSON({
    granularity: 'MONTH',
    label: 'Date',
    oneTimeUnit: true,
    operation: 'BETWEEN',
    path: '@timestamp',
    sender: { type: 'Time Slider', id: 'time-range' },
    value: [moment().clone().startOf('month').subtract(1, 'months').format('YYYY-MM-DD HH:mm'), moment().clone().endOf('month').subtract(1, 'months').format('YYYY-MM-DD HH:mm')]
})
