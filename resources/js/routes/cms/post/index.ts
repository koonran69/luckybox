import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/bai-viet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::index
* @see domains/Blog/Http/Controllers/Cms/PostController.php:22
* @route '/cms/bai-viet'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/bai-viet/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::create
* @see domains/Blog/Http/Controllers/Cms/PostController.php:29
* @route '/cms/bai-viet/create'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::store
* @see domains/Blog/Http/Controllers/Cms/PostController.php:40
* @route '/cms/bai-viet/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/bai-viet/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::store
* @see domains/Blog/Http/Controllers/Cms/PostController.php:40
* @route '/cms/bai-viet/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::store
* @see domains/Blog/Http/Controllers/Cms/PostController.php:40
* @route '/cms/bai-viet/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::store
* @see domains/Blog/Http/Controllers/Cms/PostController.php:40
* @route '/cms/bai-viet/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::store
* @see domains/Blog/Http/Controllers/Cms/PostController.php:40
* @route '/cms/bai-viet/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::update
* @see domains/Blog/Http/Controllers/Cms/PostController.php:80
* @route '/cms/bai-viet/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/bai-viet/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::update
* @see domains/Blog/Http/Controllers/Cms/PostController.php:80
* @route '/cms/bai-viet/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::update
* @see domains/Blog/Http/Controllers/Cms/PostController.php:80
* @route '/cms/bai-viet/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::update
* @see domains/Blog/Http/Controllers/Cms/PostController.php:80
* @route '/cms/bai-viet/update'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::update
* @see domains/Blog/Http/Controllers/Cms/PostController.php:80
* @route '/cms/bai-viet/update'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/bai-viet/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::edit
* @see domains/Blog/Http/Controllers/Cms/PostController.php:65
* @route '/cms/bai-viet/edit/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/PostController.php:105
* @route '/cms/bai-viet/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/bai-viet/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/PostController.php:105
* @route '/cms/bai-viet/delete/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/PostController.php:105
* @route '/cms/bai-viet/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\PostController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/PostController.php:105
* @route '/cms/bai-viet/delete/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\PostController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/PostController.php:105
* @route '/cms/bai-viet/delete/{id}'
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

const post = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default post