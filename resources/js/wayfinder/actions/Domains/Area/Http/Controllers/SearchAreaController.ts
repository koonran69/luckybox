import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
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
const district586642abce2d205679bdd0686449c8a9 = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district586642abce2d205679bdd0686449c8a9.url(args, options),
    method: 'get',
})

district586642abce2d205679bdd0686449c8a9.definition = {
    methods: ["get","head"],
    url: '/search-area/district/{hrv_province_id?}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district586642abce2d205679bdd0686449c8a9.url = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return district586642abce2d205679bdd0686449c8a9.definition.url
            .replace('{hrv_province_id?}', parsedArgs.hrv_province_id?.toString() ?? '')
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district586642abce2d205679bdd0686449c8a9.get = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district586642abce2d205679bdd0686449c8a9.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district586642abce2d205679bdd0686449c8a9.head = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: district586642abce2d205679bdd0686449c8a9.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
const district0fb6b9a5a09f8e58fb842bfbaafae8ed = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url(options),
    method: 'get',
})

district0fb6b9a5a09f8e58fb842bfbaafae8ed.definition = {
    methods: ["get","head"],
    url: '/search-area/district-by-province',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
district0fb6b9a5a09f8e58fb842bfbaafae8ed.url = (options?: RouteQueryOptions) => {
    return district0fb6b9a5a09f8e58fb842bfbaafae8ed.definition.url + queryParams(options)
}

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
district0fb6b9a5a09f8e58fb842bfbaafae8ed.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
district0fb6b9a5a09f8e58fb842bfbaafae8ed.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url(options),
    method: 'head',
})

export const district = {
    '/search-area/district/{hrv_province_id?}': district586642abce2d205679bdd0686449c8a9,
    '/search-area/district-by-province': district0fb6b9a5a09f8e58fb842bfbaafae8ed,
}

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

const SearchAreaController = { province, district, ward }

export default SearchAreaController