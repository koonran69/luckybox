import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/danh-muc',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::index
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:24
* @route '/cms/danh-muc'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/danh-muc/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::create
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/create'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::sync_hrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
export const sync_hrv = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync_hrv.url(options),
    method: 'post',
})

sync_hrv.definition = {
    methods: ["post"],
    url: '/cms/danh-muc/sync-hrv',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::sync_hrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
sync_hrv.url = (options?: RouteQueryOptions) => {
    return sync_hrv.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::sync_hrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
sync_hrv.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sync_hrv.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::sync_hrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
const sync_hrvForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync_hrv.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::sync_hrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
sync_hrvForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: sync_hrv.url(options),
    method: 'post',
})

sync_hrv.form = sync_hrvForm

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::store
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/danh-muc/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::store
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::store
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::store
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::store
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::update
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:40
* @route '/cms/danh-muc/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/danh-muc/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::update
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:40
* @route '/cms/danh-muc/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::update
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:40
* @route '/cms/danh-muc/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::update
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:40
* @route '/cms/danh-muc/update'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::update
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:40
* @route '/cms/danh-muc/update'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/danh-muc/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::edit
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:31
* @route '/cms/danh-muc/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:47
* @route '/cms/danh-muc/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/danh-muc/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:47
* @route '/cms/danh-muc/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:47
* @route '/cms/danh-muc/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:47
* @route '/cms/danh-muc/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:47
* @route '/cms/danh-muc/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
export const search_select = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

search_select.definition = {
    methods: ["get","head"],
    url: '/cms/danh-muc/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
search_select.url = (options?: RouteQueryOptions) => {
    return search_select.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
search_select.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
search_select.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search_select.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
const search_selectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
search_selectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::search_select
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
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

const product_category = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    sync_hrv: Object.assign(sync_hrv, sync_hrv),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
    search_select: Object.assign(search_select, search_select),
}

export default product_category