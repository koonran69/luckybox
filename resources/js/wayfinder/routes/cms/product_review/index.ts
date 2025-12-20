import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::index
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:20
* @route '/cms/danh-gia'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/danh-gia',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::index
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:20
* @route '/cms/danh-gia'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::index
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:20
* @route '/cms/danh-gia'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::index
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:20
* @route '/cms/danh-gia'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::edit
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:30
* @route '/cms/danh-gia/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/danh-gia/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::edit
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:30
* @route '/cms/danh-gia/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::edit
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:30
* @route '/cms/danh-gia/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::edit
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:30
* @route '/cms/danh-gia/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:39
* @route '/cms/danh-gia/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/danh-gia/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:39
* @route '/cms/danh-gia/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:39
* @route '/cms/danh-gia/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update_multiple
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:46
* @route '/cms/danh-gia/update-multiple'
*/
export const update_multiple = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_multiple.url(options),
    method: 'post',
})

update_multiple.definition = {
    methods: ["post"],
    url: '/cms/danh-gia/update-multiple',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update_multiple
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:46
* @route '/cms/danh-gia/update-multiple'
*/
update_multiple.url = (options?: RouteQueryOptions) => {
    return update_multiple.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::update_multiple
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:46
* @route '/cms/danh-gia/update-multiple'
*/
update_multiple.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_multiple.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:62
* @route '/cms/danh-gia/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/danh-gia/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:62
* @route '/cms/danh-gia/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductReviewController::deleteMethod
* @see domains/Product/Http/Controllers/Cms/ProductReviewController.php:62
* @route '/cms/danh-gia/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const product_review = {
    index: Object.assign(index, index),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    update_multiple: Object.assign(update_multiple, update_multiple),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default product_review