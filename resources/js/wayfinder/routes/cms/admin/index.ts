import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::index
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:25
* @route '/cms/admin'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::index
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:25
* @route '/cms/admin'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::index
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:25
* @route '/cms/admin'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::index
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:25
* @route '/cms/admin'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::create
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:32
* @route '/cms/admin/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/admin/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::create
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:32
* @route '/cms/admin/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::create
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:32
* @route '/cms/admin/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::create
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:32
* @route '/cms/admin/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::store
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:44
* @route '/cms/admin/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/admin/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::store
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:44
* @route '/cms/admin/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::store
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:44
* @route '/cms/admin/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::update
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:85
* @route '/cms/admin/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/admin/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::update
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:85
* @route '/cms/admin/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::update
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:85
* @route '/cms/admin/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::edit
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:68
* @route '/cms/admin/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/admin/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::edit
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:68
* @route '/cms/admin/edit/{id}'
*/
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::edit
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:68
* @route '/cms/admin/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::edit
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:68
* @route '/cms/admin/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:110
* @route '/cms/admin/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/admin/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:110
* @route '/cms/admin/delete/{id}'
*/
deleteMethod.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return deleteMethod.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Admin\AdminController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Admin/AdminController.php:110
* @route '/cms/admin/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const admin = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default admin