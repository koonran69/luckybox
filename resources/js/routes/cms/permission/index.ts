import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/permission',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::index
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:22
* @route '/cms/permission'
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
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/permission/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::create
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:29
* @route '/cms/permission/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::store
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:48
* @route '/cms/permission/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/permission/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::store
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:48
* @route '/cms/permission/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::store
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:48
* @route '/cms/permission/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::store
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:48
* @route '/cms/permission/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::store
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:48
* @route '/cms/permission/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::update
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:67
* @route '/cms/permission/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/permission/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::update
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:67
* @route '/cms/permission/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::update
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:67
* @route '/cms/permission/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::update
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:67
* @route '/cms/permission/update'
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
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::update
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:67
* @route '/cms/permission/update'
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

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/permission/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
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
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::edit
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:55
* @route '/cms/permission/edit/{id}'
*/
editForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:74
* @route '/cms/permission/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/permission/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:74
* @route '/cms/permission/delete/{id}'
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
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:74
* @route '/cms/permission/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:74
* @route '/cms/permission/delete/{id}'
*/
const deleteMethodForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Domains\Admin\Http\Controllers\Cms\Permission\PermissionController::deleteMethod
* @see domains/Admin/Http/Controllers/Cms/Permission/PermissionController.php:74
* @route '/cms/permission/delete/{id}'
*/
deleteMethodForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: deleteMethod.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

deleteMethod.form = deleteMethodForm

const permission = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default permission