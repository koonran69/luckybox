import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::change
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
export const change = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

change.definition = {
    methods: ["get","head"],
    url: '/cms/password',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::change
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
change.url = (options?: RouteQueryOptions) => {
    return change.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::change
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
change.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: change.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ChangePasswordController::change
* @see domains/Admin/Http/Controllers/Cms/Auth/ChangePasswordController.php:13
* @route '/cms/password'
*/
change.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: change.url(options),
    method: 'head',
})

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

const password = {
    change: Object.assign(change, change),
    update: Object.assign(update, update),
}

export default password