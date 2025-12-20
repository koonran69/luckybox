import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/don-hang',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/don-hang/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::exportExcel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export const exportExcel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

exportExcel.definition = {
    methods: ["get","head"],
    url: '/cms/don-hang/export-excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::exportExcel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
exportExcel.url = (options?: RouteQueryOptions) => {
    return exportExcel.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::exportExcel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
exportExcel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: exportExcel.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::exportExcel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
exportExcel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: exportExcel.url(options),
    method: 'head',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::store
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/don-hang/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::store
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::store
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::update
* @see domains/Order/Http/Controllers/Cms/OrderController.php:92
* @route '/cms/don-hang/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/don-hang/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::update
* @see domains/Order/Http/Controllers/Cms/OrderController.php:92
* @route '/cms/don-hang/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::update
* @see domains/Order/Http/Controllers/Cms/OrderController.php:92
* @route '/cms/don-hang/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/don-hang/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::deleteMethod
* @see domains/Order/Http/Controllers/Cms/OrderController.php:120
* @route '/cms/don-hang/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/don-hang/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::deleteMethod
* @see domains/Order/Http/Controllers/Cms/OrderController.php:120
* @route '/cms/don-hang/delete/{id}'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::deleteMethod
* @see domains/Order/Http/Controllers/Cms/OrderController.php:120
* @route '/cms/don-hang/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const OrderController = { index, create, exportExcel, store, update, edit, deleteMethod, delete: deleteMethod }

export default OrderController