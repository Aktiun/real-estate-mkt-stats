import { COUNTY_COLORS } from './colors'

const cf = window.cf
export const bars = function () {
    const color = cf.Color().match(COUNTY_COLORS)
    let grid = cf.Grid().top(10).right(25).bottom(4).left(35)
    let metric0 = cf.Metric('active_listing_count', 'avg')
    let group1 = cf.Attribute('state_name').limit(100).sort('desc', metric0)

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_county_all')
        .groupby(group1)
        .metrics(metric0)
        .filter(window.timeFilter)
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
    color.palette(
        [
          '#1e4261',
          '#224f75',
          '#3b7169',
          '#53925d',
          '#7b9d5e',
          '#a2a85f',
          '#b1aa51',
          '#bfac42'
        ]
    )
    color.autoRange({ dynamic: true })

    return cf
        .provider('Elasticsearch')
        .source('realtor_monthly_inventory_county_all')
        .groupby(group1)
        .metrics(metric0)
        .filter(window.timeFilter)
        .graph('Vector Map')
        .set('shape', 'usa')
        .set('min', 0)
        .set('zoom', 0.7727272727272736)
        .set('enableZoom', true)
        .set('center', [-90.32006117906128, 37.05450525954102])
        .set('color', color)
        .set('legend', 'right')
}

export const trend = function () {
    const color = cf.Color().match(COUNTY_COLORS)
    let grid = cf.Grid().top(30).right(25).bottom(65).left(55)
    let metric0 = cf.Metric('active_listing_count', 'avg')
    let group1 = cf.Attribute('state_name').limit(100).sort('desc', metric0)
    let group2 = cf
        .Attribute('@timestamp')
        .limit(1000)
        .func('MONTH')
        .sort('asc', '@timestamp')

    return cf.provider('Elasticsearch')
        .source('realtor_monthly_inventory_county_all')
        .groupby(group1, group2)
        .metrics(metric0)
        .clientFilter(window.timeFilter)
        .graph('Trend')
        .set('grid', grid)
        .set('color', color)
        .set('axisLabels', false)
        .set('xAxis', { labelGap: 30 })
        .set('dataZoom', false)
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
        .source('realtor_monthly_inventory_county_all')
        .fields()
        .filter(window.timeFilter)
        .graph('Raw Data Table')
        .set('loader', 'images/loading.gif')
        .set('showRowNumber', false)
        .set('autoSizeColumns', false)
        .set('cellFormat', formatter)
}

export const fieldselector = function () {
    return cf.provider('Elasticsearch')
        .source('realtor_monthly_inventory_county_all')
        .graph('Field Selector')
        .set('type', ['NUMBER', 'INTEGER', 'PERCENT'])
        .set('metric', 1)
        .set('extend', { func: 'AVG', })
        .set('charts', [
            'vectormap-counties',
            'bars-counties',
            'trend-counties'
        ])
        .set('field', 'price_reduced_count_mm')
}
