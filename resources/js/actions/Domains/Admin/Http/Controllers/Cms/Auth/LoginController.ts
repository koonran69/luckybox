import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:15
* @route '/cms/login'
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

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::handle
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:19
* @route '/cms/login'
*/
export const handle = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(options),
    method: 'post',
})

handle.definition = {
    methods: ["post"],
    url: '/cms/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::handle
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:19
* @route '/cms/login'
*/
handle.url = (options?: RouteQueryOptions) => {
    return handle.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::handle
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:19
* @route '/cms/login'
*/
handle.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handle.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::handle
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:19
* @route '/cms/login'
*/
const handleForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LoginController::handle
* @see domains/Admin/Http/Controllers/Cms/Auth/LoginController.php:19
* @route '/cms/login'
*/
handleForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handle.url(options),
    method: 'post',
})

handle.form = handleForm

const LoginController = { index, handle }

export default LoginController