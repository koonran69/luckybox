import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
export const connector = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connector.url(options),
    method: 'get',
})

connector.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/cms/manager-file/connect',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.url = (options?: RouteQueryOptions) => {
    return connector.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: connector.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: connector.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: connector.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: connector.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: connector.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connector.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: connector.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
const connectorForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connector.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: connector.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::connector
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:40
* @route '/cms/manager-file/connect'
*/
connectorForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connector.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

connector.form = connectorForm

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
export const browser = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browser.url(options),
    method: 'get',
})

browser.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/cms/manager-file/duyet',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.url = (options?: RouteQueryOptions) => {
    return browser.definition.url + queryParams(options)
}

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: browser.url(options),
    method: 'head',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: browser.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: browser.url(options),
    method: 'put',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: browser.url(options),
    method: 'patch',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: browser.url(options),
    method: 'delete',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browser.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: browser.url(options),
    method: 'options',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
const browserForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browser.url(options),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browser.url(options),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \CKSource\CKFinderBridge\Controller\CKFinderController::browser
* @see vendor/ckfinder/ckfinder-laravel-package/src/Controller/CKFinderController.php:56
* @route '/cms/manager-file/duyet'
*/
browserForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: browser.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'OPTIONS',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

browser.form = browserForm

const ckfinder = {
    connector: Object.assign(connector, connector),
    browser: Object.assign(browser, browser),
}

export default ckfinder