import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::index
* @see domains/Order/Http/Controllers/Cms/OrderController.php:24
* @route '/cms/don-hang'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::create
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/create'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export const export_excel = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

export_excel.definition = {
    methods: ["get","head"],
    url: '/cms/don-hang/export-excel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export_excel.url = (options?: RouteQueryOptions) => {
    return export_excel.definition.url + queryParams(options)
}

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export_excel.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: export_excel.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export_excel.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: export_excel.url(options),
    method: 'head',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
const export_excelForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: export_excel.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export_excelForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: export_excel.url(options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::export_excel
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/export-excel'
*/
export_excelForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: export_excel.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

export_excel.form = export_excelForm

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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::store
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::store
* @see domains/Order/Http/Controllers/Cms/OrderController.php:0
* @route '/cms/don-hang/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::update
* @see domains/Order/Http/Controllers/Cms/OrderController.php:92
* @route '/cms/don-hang/update'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::update
* @see domains/Order/Http/Controllers/Cms/OrderController.php:92
* @route '/cms/don-hang/update'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::edit
* @see domains/Order/Http/Controllers/Cms/OrderController.php:77
* @route '/cms/don-hang/edit/{id}'
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

/**
* @see \Domains\Order\Http\Controllers\Cms\OrderController::deleteMethod
* @see domains/Order/Http/Controllers/Cms/OrderController.php:120
* @route '/cms/don-hang/delete/{id}'
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
* @see \Domains\Order\Http\Controllers\Cms\OrderController::deleteMethod
* @see domains/Order/Http/Controllers/Cms/OrderController.php:120
* @route '/cms/don-hang/delete/{id}'
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

const order = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    export_excel: Object.assign(export_excel, export_excel),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
}

export default order