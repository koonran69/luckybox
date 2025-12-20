import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../wayfinder'
/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
export const province = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: province.url(options),
    method: 'get',
})

province.definition = {
    methods: ["get","head"],
    url: '/search-area/province',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
province.url = (options?: RouteQueryOptions) => {
    return province.definition.url + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
province.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: province.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
province.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: province.url(options),
    method: 'head',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
export const district = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district.url(args, options),
    method: 'get',
})

district.definition = {
    methods: ["get","head"],
    url: '/search-area/district/{hrv_province_id?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district.url = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hrv_province_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            hrv_province_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "hrv_province_id",
    ])

    const parsedArgs = {
        hrv_province_id: args?.hrv_province_id,
    }

    return district.definition.url
            .replace('{hrv_province_id?}', parsedArgs.hrv_province_id?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district.get = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district.head = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: district.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::search_district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
export const search_district = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_district.url(options),
    method: 'get',
})

search_district.definition = {
    methods: ["get","head"],
    url: '/search-area/district-by-province',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::search_district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
search_district.url = (options?: RouteQueryOptions) => {
    return search_district.definition.url + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::search_district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
search_district.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_district.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::search_district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
search_district.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search_district.url(options),
    method: 'head',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
export const ward = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ward.url(args, options),
    method: 'get',
})

ward.definition = {
    methods: ["get","head"],
    url: '/search-area/ward/{hrv_district_id?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
ward.url = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { hrv_district_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            hrv_district_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    validateParameters(args, [
        "hrv_district_id",
    ])

    const parsedArgs = {
        hrv_district_id: args?.hrv_district_id,
    }

    return ward.definition.url
            .replace('{hrv_district_id?}', parsedArgs.hrv_district_id?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
ward.get = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ward.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
ward.head = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ward.url(args, options),
    method: 'head',
})

const search_area = {
    province: Object.assign(province, province),
    district: Object.assign(district, district),
    search_district: Object.assign(search_district, search_district),
    ward: Object.assign(ward, ward),
}

export default search_area