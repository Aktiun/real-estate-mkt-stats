import { STATE_COLORS } from './colors'

const cf = window.cf

export const changeTrendPinColor = () => {
    const chart = cf.getVisualization('trend-states').get('visual')._chart
    const opts = chart ? chart.getOption() : false

    if (opts && opts.series.length === 1 && opts.series[0].markPoint) {
        const color = STATE_COLORS[opts.series[0].name]

        opts.series[0].markPoint.itemStyle.color = color
        chart.setOption(opts)
    }
}

export const bars = function () {
    const color = cf.Color().match(STATE_COLORS)
    let grid = cf.Grid().top(10).right(25).bottom(4).left(35)
    let metric0 = cf.Metric('active_listing_count', 'avg')
    let group1 = cf.Attribute('state_name').limit(100).sort('desc', metric0)

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .groupby(group1)
        .filter(window.timeFilter)
        .metrics(metric0)
        .graph('Bars')
        .set('grid', grid)
        .set('color', color)
        .set('orientation', 'horizontal')
        .set('axisLabels', false)
        .set('xAxis', { show: true, lines: true })
        .set('yAxis', { text: 'out', lines: false })
        .set('dataZoom', false)
}

export const vectormap = function () {
    let metric0 = cf.Metric('active_listing_count', 'avg')
    let group1 = cf.Attribute('state_name').limit(100).sort('desc', metric0)
    let color = cf.Color().metric(metric0)
    color.palette([
        '#1e4261',
        '#224f75',
        '#3b7169',
        '#53925d',
        '#7b9d5e',
        '#a2a85f',
        '#b1aa51',
        '#bfac42'
    ])
    color.autoRange({ dynamic: true })

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .groupby(group1)
        .metrics(metric0)
        .filter(window.timeFilter)
        .graph('Vector Map')
        .set('shape', 'usa')
        .set('min', 0)
        .set('zoom', 0.7727272727272736)
        .set('enableZoom', false)
        .set('center', [-90.32006117906128, 37.05450525954102])
        .set('color', color)
        .set('legend', 'right')
}

export const timerange = function () {
    /* Configuration code for this widget */
    let grid = cf.Grid().right(20).left(10)
    let field = cf.Attribute('@timestamp').func('MONTH')
    let theme = {
        top: '#457297', // Top bar of the slider
        mid: '#1a5281', // Middle bar
        bottom: '#16344d', // Bottom bar and field name background
        ticks: '#fefcbb', // Ticks and ticks labels
        selection: '#fefcbb' // Range selection
    }
    let color = cf.Color().theme(theme)

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .timeField(field)
        .clientFilter(window.timeFilter)
        .graph('Time Slider')
        .set('grid', grid)
        .set('color', color)
        .set('player', {
            enable: true,
            'pin-left': false,
            step: 1,
            'step-unit': 'MONTH',
            refresh: 2,
            'animation-delay': 0.8,
            live: false,
            autoplay: false
        })
        .set('single-period', true)
}

export const trend = function () {
    const color = cf.Color().match(STATE_COLORS)
    let grid = cf.Grid().top(30).right(25).bottom(65).left(55)
    let metric0 = cf.Metric('active_listing_count', 'avg')
    let group1 = cf.Attribute('state_name').limit(100).sort('desc', metric0)
    let group2 = cf
        .Attribute('@timestamp')
        .limit(1000)
        .func('MONTH')
        .sort('asc', '@timestamp')

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .groupby(group1, group2)
        .metrics(metric0)
        .clientFilter(window.timeFilter)
        .graph('Trend')
        .set('grid', grid)
        .set('color', color)
        .set('axisLabels', false)
        .set('xAxis', { labelGap: 30 })
        .set('dataZoom', false)
        .on('execute:stop', changeTrendPinColor)
}

export const rawdata = function () {
    const moment = cf.getDependency('moment');
    let formatter = {
        fields: ['@timestamp'],
        format: function(field, value) {
            return {
                value: moment(value.slice(0,4) + "-" + value.slice(4,6)).format('MMM, YYYY')
            }
          }
      }
    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .fields()
        .filter(window.timeFilter)
        .graph('Raw Data Table')
        .set('loader', 'images/loading.gif')
        .set('showRowNumber', false)
        .set('autoSizeColumns', true)
        .set('cellFormat', formatter)
}

export const fieldselector = function () {
    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_state_all')
        .graph('Field Selector')
        .set('type', ['NUMBER', 'INTEGER', 'PERCENT'])
        .set('metric', 1)
        .set('extend', { func: 'AVG' })
        .set('charts', [
            'vectormap-states',
            'bars-states',
            'trend-states',
            'vectormap-counties',
            'bars-counties',
            'trend-counties'
        ])
        .set('field', 'average_listing_price')
}
