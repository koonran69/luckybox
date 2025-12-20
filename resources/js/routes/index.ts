import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
export const ckfinder_connector = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckfinder_connector.url(options),
    method: 'get',
})

ckfinder_connector.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/ckfinder/connector',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.url = (options?: RouteQueryOptions) => {
    return ckfinder_connector.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckfinder_connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ckfinder_connector.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ckfinder_connector.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: ckfinder_connector.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: ckfinder_connector.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ckfinder_connector.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connector.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: ckfinder_connector.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
const ckfinder_connectorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_connector.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
ckfinder_connectorForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ckfinder_connector.form = ckfinder_connectorForm

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
export const ckfinder_browser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckfinder_browser.url(options),
    method: 'get',
})

ckfinder_browser.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/ckfinder/browser',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.url = (options?: RouteQueryOptions) => {
    return ckfinder_browser.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ckfinder_browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ckfinder_browser.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: ckfinder_browser.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: ckfinder_browser.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: ckfinder_browser.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: ckfinder_browser.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browser.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: ckfinder_browser.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
const ckfinder_browserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_browser.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: ckfinder_browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::ckfinder_browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
ckfinder_browserForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: ckfinder_browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

ckfinder_browser.form = ckfinder_browserForm

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::home
* @see domains/Web/Http/Controllers/Home/HomeController.php:10
* @route '/'
*/
homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: home.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

home.form = homeForm
