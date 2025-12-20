import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
export const index = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/banner/items/{banner_position}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
index.url = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner_position: args }
    }

    if (Array.isArray(args)) {
        args = {
            banner_position: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner_position: args.banner_position,
    }

    return index.definition.url
            .replace('{banner_position}', parsedArgs.banner_position.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
index.get = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
index.head = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
const indexForm = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
indexForm.get = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::index
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:21
* @route '/cms/banner/items/{banner_position}'
*/
indexForm.head = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
export const create = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/banner/items/create/{banner_position}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
create.url = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner_position: args }
    }

    if (Array.isArray(args)) {
        args = {
            banner_position: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        banner_position: args.banner_position,
    }

    return create.definition.url
            .replace('{banner_position}', parsedArgs.banner_position.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
create.get = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
create.head = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(args, options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
const createForm = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
createForm.get = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::create
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:31
* @route '/cms/banner/items/create/{banner_position}'
*/
createForm.head = (args: { banner_position: string | number } | [banner_position: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:40
* @route '/cms/banner/items/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/banner/items/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:40
* @route '/cms/banner/items/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:40
* @route '/cms/banner/items/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:40
* @route '/cms/banner/items/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::store
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:40
* @route '/cms/banner/items/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:56
* @route '/cms/banner/items/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/banner/items/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:56
* @route '/cms/banner/items/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:56
* @route '/cms/banner/items/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:56
* @route '/cms/banner/items/update'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::update
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:56
* @route '/cms/banner/items/update'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/banner/items/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::edit
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:47
* @route '/cms/banner/items/edit/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:63
* @route '/cms/banner/items/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/banner/items/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:63
* @route '/cms/banner/items/delete/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:63
* @route '/cms/banner/items/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:63
* @route '/cms/banner/items/delete/{id}'
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
* @see \Domains\DataStore\Http\Controllers\Cms\Banner\BannerItemController::deleteMethod
* @see domains/DataStore/Http/Controllers/Cms/Banner/BannerItemController.php:63
* @route '/cms/banner/items/delete/{id}'
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

const BannerItemController = { index, create, store, update, edit, deleteMethod, delete: deleteMethod }

export default BannerItemController