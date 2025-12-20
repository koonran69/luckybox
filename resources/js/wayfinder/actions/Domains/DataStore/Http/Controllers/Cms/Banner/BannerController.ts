import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
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

const BannerController = { index, create, store, update, edit, deleteMethod, delete: deleteMethod }

export default BannerController