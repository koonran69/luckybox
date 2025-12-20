import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:18
* @route '/cms/nguoi-dung'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:25
* @route '/cms/nguoi-dung/create'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:34
* @route '/cms/nguoi-dung/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/nguoi-dung/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:34
* @route '/cms/nguoi-dung/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:34
* @route '/cms/nguoi-dung/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:34
* @route '/cms/nguoi-dung/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:34
* @route '/cms/nguoi-dung/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:59
* @route '/cms/nguoi-dung/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/nguoi-dung/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:59
* @route '/cms/nguoi-dung/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:59
* @route '/cms/nguoi-dung/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:59
* @route '/cms/nguoi-dung/update'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:59
* @route '/cms/nguoi-dung/update'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:48
* @route '/cms/nguoi-dung/edit/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:78
* @route '/cms/nguoi-dung/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/nguoi-dung/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:78
* @route '/cms/nguoi-dung/delete/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:78
* @route '/cms/nguoi-dung/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:78
* @route '/cms/nguoi-dung/delete/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:78
* @route '/cms/nguoi-dung/delete/{id}'
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

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
export const search_select = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

search_select.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
search_select.url = (options?: RouteQueryOptions) => {
    return search_select.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
search_select.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
search_select.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search_select.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
const search_selectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
search_selectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::search_select
* @see domains/User/Http/Controllers/Cms/UserController.php:97
* @route '/cms/nguoi-dung/search-select'
*/
search_selectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search_select.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

search_select.form = search_selectForm

const user = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
    search_select: Object.assign(search_select, search_select),
}

export default user