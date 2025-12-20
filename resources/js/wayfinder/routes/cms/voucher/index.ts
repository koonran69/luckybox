import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::index
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:23
* @route '/cms/vouchers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/vouchers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::index
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:23
* @route '/cms/vouchers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::index
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:23
* @route '/cms/vouchers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::index
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:23
* @route '/cms/vouchers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::create
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:30
* @route '/cms/vouchers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/vouchers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::create
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:30
* @route '/cms/vouchers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::create
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:30
* @route '/cms/vouchers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::create
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:30
* @route '/cms/vouchers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::store
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:39
* @route '/cms/vouchers/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/vouchers/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::store
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:39
* @route '/cms/vouchers/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::store
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:39
* @route '/cms/vouchers/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::update
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:60
* @route '/cms/vouchers/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/vouchers/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::update
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:60
* @route '/cms/vouchers/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::update
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:60
* @route '/cms/vouchers/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::edit
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:46
* @route '/cms/vouchers/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/vouchers/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::edit
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:46
* @route '/cms/vouchers/edit/{id}'
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
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::edit
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:46
* @route '/cms/vouchers/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::edit
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:46
* @route '/cms/vouchers/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::deleteMethod
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:67
* @route '/cms/vouchers/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/vouchers/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::deleteMethod
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:67
* @route '/cms/vouchers/delete/{id}'
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
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::deleteMethod
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:67
* @route '/cms/vouchers/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::search_select
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:0
* @route '/cms/vouchers/search-select'
*/
export const search_select = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

search_select.definition = {
    methods: ["get","head"],
    url: '/cms/vouchers/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::search_select
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:0
* @route '/cms/vouchers/search-select'
*/
search_select.url = (options?: RouteQueryOptions) => {
    return search_select.definition.url + queryParams(options)
}

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::search_select
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:0
* @route '/cms/vouchers/search-select'
*/
search_select.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search_select.url(options),
    method: 'get',
})

/**
* @see \Domains\Voucher\Http\Controllers\Cms\VoucherController::search_select
* @see domains/Voucher/Http/Controllers/Cms/VoucherController.php:0
* @route '/cms/vouchers/search-select'
*/
search_select.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search_select.url(options),
    method: 'head',
})

const voucher = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    edit: Object.assign(edit, edit),
    delete: Object.assign(deleteMethod, deleteMethod),
    search_select: Object.assign(search_select, search_select),
}

export default voucher