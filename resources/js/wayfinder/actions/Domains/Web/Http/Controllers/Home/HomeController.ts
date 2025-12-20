import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

const HomeController = { index }

export default HomeController