export const setProvider = function () {
    window.cf.registerProvider({
        name: 'Elasticsearch',
        provider: 'elasticsearch',
        url: 'https://chartfactor.com/vcairlines',
        metadata: {
            realtor_monthly_inventory_state_all: {
                fields: {
                    '@timestamp': {
                        label: 'Date'
                    },
                   'state_name.keyword': {
                        label: 'State Name'
                    },
                    active_listing_count: {
                        label: 'Active listings'
                    },
                    average_listing_price: {
                        label: 'Average listings price'
                    },
                    median_days_on_market: {
                        label: 'Median days on market'
                    },
                    median_listing_price: {
                        label: 'Median listing price'
                    },
                    median_square_feet: {
                        label: 'Median square feet'
                    },
                    new_listing_count: {
                        label: 'New listings'
                    },
                    pending_listing_count: {
                        label: 'Pending listings'
                    },
                    price_increased_count: {
                        label: 'Price increased count'
                    },
                    price_reduced_count: {
                        label: 'Price reduced count'
                    },
                    active_listing_count_mm: {
                        label: '% change in active listings w/prev month',
                        type: 'PERCENT'
                    },
                    active_listing_count_yy: {
                        label: '% change in active listings w/prev year',
                        type: 'PERCENT'
                    },
                    average_listing_price_mm: {
                        label: '% change in average listing price w/prev month',
                        type: 'PERCENT'
                    },
                    average_listing_price_yy: {
                        label: '% change in average listing price w/prev year',
                        type: 'PERCENT'
                    },
                    median_days_on_market_mm: {
                        label: '% change in median days on market w/prev month',
                        type: 'PERCENT'
                    },
                    median_days_on_market_yy: {
                        label: '% change in median days on market w/prev year',
                        type: 'PERCENT'
                    },
                    median_listing_price_mm: {
                        label: '% change in median listing price w/prev month',
                        type: 'PERCENT'
                    },
                    median_listing_price_per_square_feet: {
                        label: 'Median listing price per square feet'
                    },
                    median_listing_price_per_square_feet_mm: {
                        label:
                            '% change in median listing price per square feet w/prev month',
                        type: 'PERCENT'
                    },
                    median_listing_price_per_square_feet_yy: {
                        label:
                            '% change in median listing price per square feet w/prev year',
                        type: 'PERCENT'
                    },
                    median_listing_price_yy: {
                        label: '% change in median listing price w/prev year',
                        type: 'PERCENT'
                    },
                    median_square_feet_mm: {
                        label: '% change in median square feet w/prev month',
                        type: 'PERCENT'
                    },
                    median_square_feet_yy: {
                        label: '% change in median square feet w/prev year',
                        type: 'PERCENT'
                    },
                    new_listing_count_mm: {
                        label: '% change in new listings w/prev month',
                        type: 'PERCENT'
                    },
                    new_listing_count_yy: {
                        label: '% change in new listings w/prev year',
                        type: 'PERCENT'
                    },
                    pending_listing_count_mm: {
                        label: '% change in pending listings w/prev month',
                        type: 'PERCENT'
                    },
                    pending_listing_count_yy: {
                        label: '% change in pending listings w/prev year',
                        type: 'PERCENT'
                    },
                    price_increased_count_mm: {
                        label: '% change in price increased count w/prev month',
                        type: 'PERCENT'
                    },
                    price_increased_count_yy: {
                        label: '% change in price increased count w/prev year',
                        type: 'PERCENT'
                    },
                    price_reduced_count_mm: {
                        label: '% change in price reduced count w/prev month',
                        type: 'PERCENT'
                    },
                    price_reduced_count_yy: {
                        label: '% change in price reduced count w/prev year',
                        type: 'PERCENT'
                    }
                }
            },
            realtor_monthly_inventory_county_all: {
                fields: {
                    '@timestamp': {
                        label: 'Date'
                    },
                    'state_name': {
                        label: 'State Name'
                    },
                    active_listing_count: {
                        label: 'Active listings'
                    },
                    average_listing_price: {
                        label: 'Average listings price'
                    },
                    median_days_on_market: {
                        label: 'Median days on market'
                    },
                    median_listing_price: {
                        label: 'Median listing price'
                    },
                    median_square_feet: {
                        label: 'Median square feet'
                    },
                    new_listing_count: {
                        label: 'New listings'
                    },
                    pending_listing_count: {
                        label: 'Pending listings'
                    },
                    price_increased_count: {
                        label: 'Price increased count'
                    },
                    price_reduced_count: {
                        label: 'Price reduced count'
                    },
                    active_listing_count_mm: {
                        label: '% change in active listings w/prev month',
                        type: 'PERCENT'
                    },
                    active_listing_count_yy: {
                        label: '% change in active listings w/prev year',
                        type: 'PERCENT'
                    },
                    average_listing_price_mm: {
                        label: '% change in average listing price w/prev month',
                        type: 'PERCENT'
                    },
                    average_listing_price_yy: {
                        label: '% change in average listing price w/prev year',
                        type: 'PERCENT'
                    },
                    median_days_on_market_mm: {
                        label: '% change in median days on market w/prev month',
                        type: 'PERCENT'
                    },
                    median_days_on_market_yy: {
                        label: '% change in median days on market w/prev year',
                        type: 'PERCENT'
                    },
                    median_listing_price_mm: {
                        label: '% change in median listing price w/prev month',
                        type: 'PERCENT'
                    },
                    median_listing_price_per_square_feet: {
                        label: 'Median listing price per square feet'
                    },
                    median_listing_price_per_square_feet_mm: {
                        label:
                            '% change in median listing price per square feet w/prev month',
                        type: 'PERCENT'
                    },
                    median_listing_price_per_square_feet_yy: {
                        label:
                            '% change in median listing price per square feet w/prev year',
                        type: 'PERCENT'
                    },
                    median_listing_price_yy: {
                        label: '% change in median listing price w/prev year',
                        type: 'PERCENT'
                    },
                    median_square_feet_mm: {
                        label: '% change in median square feet w/prev month',
                        type: 'PERCENT'
                    },
                    median_square_feet_yy: {
                        label: '% change in median square feet w/prev year',
                        type: 'PERCENT'
                    },
                    new_listing_count_mm: {
                        label: '% change in new listings w/prev month',
                        type: 'PERCENT'
                    },
                    new_listing_count_yy: {
                        label: '% change in new listings w/prev year',
                        type: 'PERCENT'
                    },
                    pending_listing_count_mm: {
                        label: '% change in pending listings w/prev month',
                        type: 'PERCENT'
                    },
                    pending_listing_count_yy: {
                        label: '% change in pending listings w/prev year',
                        type: 'PERCENT'
                    },
                    price_increased_count_mm: {
                        label: '% change in price increased count w/prev month',
                        type: 'PERCENT'
                    },
                    price_increased_count_yy: {
                        label: '% change in price increased count w/prev year',
                        type: 'PERCENT'
                    },
                    price_reduced_count_mm: {
                        label: '% change in price reduced count w/prev month',
                        type: 'PERCENT'
                    },
                    price_reduced_count_yy: {
                        label: '% change in price reduced count w/prev year',
                        type: 'PERCENT'
                    }
                }
            }
        }
    })
}
