import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults, validateParameters } from './../../../../../wayfinder'
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
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
const provinceForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: province.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
provinceForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: province.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::province
* @see domains/Area/Http/Controllers/SearchAreaController.php:19
* @route '/search-area/province'
*/
provinceForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: province.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

province.form = provinceForm

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
* @route '/search-area/district/{hrv_province_id?}'
*/
const district586642abce2d205679bdd0686449c8a9Form = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district586642abce2d205679bdd0686449c8a9.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district586642abce2d205679bdd0686449c8a9Form.get = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district586642abce2d205679bdd0686449c8a9.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district/{hrv_province_id?}'
*/
district586642abce2d205679bdd0686449c8a9Form.head = (args?: { hrv_province_id?: string | number } | [hrv_province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district586642abce2d205679bdd0686449c8a9.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

district586642abce2d205679bdd0686449c8a9.form = district586642abce2d205679bdd0686449c8a9Form
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

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
const district0fb6b9a5a09f8e58fb842bfbaafae8edForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
district0fb6b9a5a09f8e58fb842bfbaafae8edForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url(options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::district
* @see domains/Area/Http/Controllers/SearchAreaController.php:38
* @route '/search-area/district-by-province'
*/
district0fb6b9a5a09f8e58fb842bfbaafae8edForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: district0fb6b9a5a09f8e58fb842bfbaafae8ed.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

district0fb6b9a5a09f8e58fb842bfbaafae8ed.form = district0fb6b9a5a09f8e58fb842bfbaafae8edForm

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

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
const wardForm = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ward.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
wardForm.get = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ward.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Area\Http\Controllers\SearchAreaController::ward
* @see domains/Area/Http/Controllers/SearchAreaController.php:58
* @route '/search-area/ward/{hrv_district_id?}'
*/
wardForm.head = (args?: { hrv_district_id?: string | number } | [hrv_district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ward.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ward.form = wardForm

const SearchAreaController = { province, district, ward }

export default SearchAreaController