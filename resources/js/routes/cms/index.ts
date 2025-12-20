import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import ckfinder from './ckfinder'
import admin from './admin'
import login from './login'
import profile from './profile'
import password from './password'
import post from './post'
import post_category from './post_category'
import post_comment from './post_comment'
import contactform from './contactform'
import banner from './banner'
import order from './order'
import role from './role'
import permission from './permission'
import product_variant from './product_variant'
import product from './product'
import product_category from './product_category'
import product_review from './product_review'
import setting from './setting'
import user from './user'
import voucher from './voucher'
/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/cms/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url(options),
    method: 'get',
})

/**
* @see \Domains\Dashboard\Http\Controllers\Cms\DashboardController::dashboard
* @see domains/Dashboard/Http/Controllers/Cms/DashboardController.php:18
* @route '/cms/dashboard'
*/
dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: dashboard.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

dashboard.form = dashboardForm

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

const cms = {
    dashboard: Object.assign(dashboard, dashboard),
    ckfinder: Object.assign(ckfinder, ckfinder),
    admin: Object.assign(admin, admin),
    login: Object.assign(login, login),
    profile: Object.assign(profile, profile),
    password: Object.assign(password, password),
    logout: Object.assign(logout, logout),
    post: Object.assign(post, post),
    post_category: Object.assign(post_category, post_category),
    post_comment: Object.assign(post_comment, post_comment),
    contactform: Object.assign(contactform, contactform),
    banner: Object.assign(banner, banner),
    order: Object.assign(order, order),
    role: Object.assign(role, role),
    permission: Object.assign(permission, permission),
    product_variant: Object.assign(product_variant, product_variant),
    product: Object.assign(product, product),
    product_category: Object.assign(product_category, product_category),
    product_review: Object.assign(product_review, product_review),
    setting: Object.assign(setting, setting),
    user: Object.assign(user, user),
    voucher: Object.assign(voucher, voucher),
}

export default cms