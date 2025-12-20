import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
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
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:20
* @route '/cms/password'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:20
* @route '/cms/password'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:20
* @route '/cms/password'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:20
* @route '/cms/password'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:20
* @route '/cms/password'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const ChangePasswordController = { index, update }

export default ChangePasswordController