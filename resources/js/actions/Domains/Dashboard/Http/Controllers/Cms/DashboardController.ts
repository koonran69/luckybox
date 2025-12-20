import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const DashboardController = { index }

export default DashboardController