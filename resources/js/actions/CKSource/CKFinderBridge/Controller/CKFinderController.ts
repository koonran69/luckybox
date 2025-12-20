import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
const requestActionb7309958cc3279fb32db42dd2e6bf09d = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'get',
})

requestActionb7309958cc3279fb32db42dd2e6bf09d.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/ckfinder/connector',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.url = (options?: RouteQueryOptions) => {
    return requestActionb7309958cc3279fb32db42dd2e6bf09d.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09d.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
const requestActionb7309958cc3279fb32db42dd2e6bf09dForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/ckfinder/connector'
*/
requestActionb7309958cc3279fb32db42dd2e6bf09dForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestActionb7309958cc3279fb32db42dd2e6bf09d.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

requestActionb7309958cc3279fb32db42dd2e6bf09d.form = requestActionb7309958cc3279fb32db42dd2e6bf09dForm
/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
const requestAction6a7eb605c7f39027848833eec78d4406 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'get',
})

requestAction6a7eb605c7f39027848833eec78d4406.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/cms/manager-file/connect',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.url = (options?: RouteQueryOptions) => {
    return requestAction6a7eb605c7f39027848833eec78d4406.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
const requestAction6a7eb605c7f39027848833eec78d4406Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::requestAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
requestAction6a7eb605c7f39027848833eec78d4406Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: requestAction6a7eb605c7f39027848833eec78d4406.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

requestAction6a7eb605c7f39027848833eec78d4406.form = requestAction6a7eb605c7f39027848833eec78d4406Form

export const requestAction = {
    '/ckfinder/connector': requestActionb7309958cc3279fb32db42dd2e6bf09d,
    '/cms/manager-file/connect': requestAction6a7eb605c7f39027848833eec78d4406,
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
const browserActionf0d6e83f950e764699849166d0bc9fe1 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'get',
})

browserActionf0d6e83f950e764699849166d0bc9fe1.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/ckfinder/browser',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.url = (options?: RouteQueryOptions) => {
    return browserActionf0d6e83f950e764699849166d0bc9fe1.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
const browserActionf0d6e83f950e764699849166d0bc9fe1Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/ckfinder/browser'
*/
browserActionf0d6e83f950e764699849166d0bc9fe1Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionf0d6e83f950e764699849166d0bc9fe1.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

browserActionf0d6e83f950e764699849166d0bc9fe1.form = browserActionf0d6e83f950e764699849166d0bc9fe1Form
/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
const browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'get',
})

browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/cms/manager-file/duyet',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url = (options?: RouteQueryOptions) => {
    return browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
const browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browserAction
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba.form = browserActionb5a385e9ed733dd4b62f70fe2ba1e9baForm

export const browserAction = {
    '/ckfinder/browser': browserActionf0d6e83f950e764699849166d0bc9fe1,
    '/cms/manager-file/duyet': browserActionb5a385e9ed733dd4b62f70fe2ba1e9ba,
}

const CKFinderController = { requestAction, browserAction }

export default CKFinderController