import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
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