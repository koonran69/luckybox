import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:25
* @route '/cms/san-pham-bien-the/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/san-pham-bien-the/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:25
* @route '/cms/san-pham-bien-the/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:25
* @route '/cms/san-pham-bien-the/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:18
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/san-pham-bien-the/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:18
* @route '/cms/san-pham-bien-the/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:18
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:18
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/san-pham-bien-the/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
export const syncHrv = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

syncHrv.definition = {
    methods: ["post"],
    url: '/cms/san-pham-bien-the/sync-hrv',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
syncHrv.url = (options?: RouteQueryOptions) => {
    return syncHrv.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see domains/Product/Http/Controllers/Cms/ProductVariantController.php:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
syncHrv.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

const ProductVariantController = { update, edit, deleteMethod, syncHrv, delete: deleteMethod }

export default ProductVariantController