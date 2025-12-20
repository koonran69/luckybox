import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/update'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::update
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/update'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see [unknown]:0
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
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::edit
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/edit/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see [unknown]:0
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
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::deleteMethod
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/delete/{id}'
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
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see [unknown]:0
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
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
syncHrv.url = (options?: RouteQueryOptions) => {
    return syncHrv.definition.url + queryParams(options)
}

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
syncHrv.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: syncHrv.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
const syncHrvForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncHrv.url(options),
    method: 'post',
})

/**
* @see \Domains\Product\Http\Controllers\Cms\ProductVariantController::syncHrv
* @see [unknown]:0
* @route '/cms/san-pham-bien-the/sync-hrv'
*/
syncHrvForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: syncHrv.url(options),
    method: 'post',
})

syncHrv.form = syncHrvForm

const ProductVariantController = { update, edit, deleteMethod, syncHrv, delete: deleteMethod }

export default ProductVariantController