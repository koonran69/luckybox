import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:23
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
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:23
* @route '/cms/dashboard'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:23
* @route '/cms/dashboard'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::index
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:23
* @route '/cms/dashboard'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const DashboardController = { index }

export default DashboardController