import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import item from './item'
/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/banner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:18
* @route '/cms/banner'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/banner/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/create'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/banner/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/banner/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/update'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/update'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/banner/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/edit/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/banner/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/delete/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/delete/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerController.php:0
* @route '/cms/banner/delete/{id}'
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

const banner = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
    item: Object.assign(item, item),
}

export default banner