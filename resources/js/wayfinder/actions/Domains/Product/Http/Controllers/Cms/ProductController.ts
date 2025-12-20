import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::index
* @see domains/Product/Http/Controllers/Cms/ProductController.php:31
* @route '/cms/san-pham'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/san-pham',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::index
* @see domains/Product/Http/Controllers/Cms/ProductController.php:31
* @route '/cms/san-pham'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::index
* @see domains/Product/Http/Controllers/Cms/ProductController.php:31
* @route '/cms/san-pham'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::index
* @see domains/Product/Http/Controllers/Cms/ProductController.php:31
* @route '/cms/san-pham'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::create
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/san-pham/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::create
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::create
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::create
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::store
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/san-pham/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::store
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::store
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::update
* @see domains/Product/Http/Controllers/Cms/ProductController.php:54
* @route '/cms/san-pham/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/san-pham/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::update
* @see domains/Product/Http/Controllers/Cms/ProductController.php:54
* @route '/cms/san-pham/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::update
* @see domains/Product/Http/Controllers/Cms/ProductController.php:54
* @route '/cms/san-pham/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::edit
* @see domains/Product/Http/Controllers/Cms/ProductController.php:38
* @route '/cms/san-pham/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/san-pham/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::edit
* @see domains/Product/Http/Controllers/Cms/ProductController.php:38
* @route '/cms/san-pham/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductController::edit
* @see domains/Product/Http/Controllers/Cms/ProductController.php:38
* @route '/cms/san-pham/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::edit
* @see domains/Product/Http/Controllers/Cms/ProductController.php:38
* @route '/cms/san-pham/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductController.php:75
* @route '/cms/san-pham/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/san-pham/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductController.php:75
* @route '/cms/san-pham/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductController.php:75
* @route '/cms/san-pham/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::searchSelect
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/search-select'
*/
export const searchSelect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

searchSelect.definition = {
    methods: ["get","head"],
    url: '/cms/san-pham/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::searchSelect
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/search-select'
*/
searchSelect.url = (options?: RouteQueryOptions) => {
    return searchSelect.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::searchSelect
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/search-select'
*/
searchSelect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::searchSelect
* @see domains/Product/Http/Controllers/Cms/ProductController.php:0
* @route '/cms/san-pham/search-select'
*/
searchSelect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchSelect.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductController.php:61
* @route '/cms/san-pham/sync-hrv'
*/
export const syncHrv = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

syncHrv.definition = {
    methods: ["post"],
    url: '/cms/san-pham/sync-hrv',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductController.php:61
* @route '/cms/san-pham/sync-hrv'
*/
syncHrv.url = (options?: RouteQueryOptions) => {
    return syncHrv.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductController.php:61
* @route '/cms/san-pham/sync-hrv'
*/
syncHrv.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

const ProductController = { index, create, store, update, edit, deleteMethod, searchSelect, syncHrv, delete: deleteMethod }

export default ProductController