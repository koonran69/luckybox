import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::syncHrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
export const syncHrv = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

syncHrv.definition = {
    methods: ["post"],
    url: '/cms/danh-muc/sync-hrv',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::syncHrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
syncHrv.url = (options?: RouteQueryOptions) => {
    return syncHrv.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::syncHrv
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:59
* @route '/cms/danh-muc/sync-hrv'
*/
syncHrv.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

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
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::searchSelect
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
export const searchSelect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

searchSelect.definition = {
    methods: ["get","head"],
    url: '/cms/danh-muc/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::searchSelect
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
searchSelect.url = (options?: RouteQueryOptions) => {
    return searchSelect.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::searchSelect
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
searchSelect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\CategoryController::searchSelect
* @see domains/Product/Http/Controllers/Cms/CategoryController.php:0
* @route '/cms/danh-muc/search-select'
*/
searchSelect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchSelect.url(options),
    method: 'head',
})

const CategoryController = { index, create, syncHrv, store, update, edit, deleteMethod, searchSelect, delete: deleteMethod }

export default CategoryController