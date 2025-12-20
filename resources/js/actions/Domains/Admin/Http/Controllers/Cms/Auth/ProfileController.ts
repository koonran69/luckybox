import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::index
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:13
* @route '/cms/profile'
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
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:23
* @route '/cms/profile'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/profile',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:23
* @route '/cms/profile'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:23
* @route '/cms/profile'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:23
* @route '/cms/profile'
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
* @see \Domains\Admin\Http\Controllers\Cms\Auth\ProfileController::update
* @see domains/Admin/Http/Controllers/Cms/Auth/ProfileController.php:23
* @route '/cms/profile'
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

const ProfileController = { index, update }

export default ProfileController