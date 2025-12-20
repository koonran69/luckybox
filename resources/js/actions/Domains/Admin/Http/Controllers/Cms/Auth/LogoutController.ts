import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::logout
* @see domains/Admin/Http/Controllers/Cms/Auth/LogoutController.php:13
* @route '/cms/logout'
*/
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/cms/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::logout
* @see domains/Admin/Http/Controllers/Cms/Auth/LogoutController.php:13
* @route '/cms/logout'
*/
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::logout
* @see domains/Admin/Http/Controllers/Cms/Auth/LogoutController.php:13
* @route '/cms/logout'
*/
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::logout
* @see domains/Admin/Http/Controllers/Cms/Auth/LogoutController.php:13
* @route '/cms/logout'
*/
const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\LogoutController::logout
* @see domains/Admin/Http/Controllers/Cms/Auth/LogoutController.php:13
* @route '/cms/logout'
*/
logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: logout.url(options),
    method: 'post',
})

logout.form = logoutForm

const LogoutController = { logout }

export default LogoutController