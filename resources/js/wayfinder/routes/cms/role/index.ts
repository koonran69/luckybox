import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::index
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:27
* @route '/cms/role'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/role',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::index
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:27
* @route '/cms/role'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::index
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:27
* @route '/cms/role'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::index
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:27
* @route '/cms/role'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::create
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:34
* @route '/cms/role/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/role/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::create
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:34
* @route '/cms/role/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::create
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:34
* @route '/cms/role/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::create
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:34
* @route '/cms/role/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::store
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:43
* @route '/cms/role/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/role/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::store
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:43
* @route '/cms/role/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::store
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:43
* @route '/cms/role/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::update
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:88
* @route '/cms/role/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/role/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::update
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:88
* @route '/cms/role/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::update
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:88
* @route '/cms/role/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::edit
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:71
* @route '/cms/role/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/role/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::edit
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:71
* @route '/cms/role/edit/{id}'
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
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::edit
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:71
* @route '/cms/role/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::edit
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:71
* @route '/cms/role/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:112
* @route '/cms/role/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/role/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:112
* @route '/cms/role/delete/{id}'
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
* @see \Domains\Admin\Http\Controllers\Cms\Role\RoleController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Role/RoleController.php:112
* @route '/cms/role/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const role = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default role