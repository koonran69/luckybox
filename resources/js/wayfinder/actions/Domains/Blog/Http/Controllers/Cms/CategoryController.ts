import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::index
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:20
* @route '/cms/chuyen-muc-bai-viet'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/chuyen-muc-bai-viet',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::index
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:20
* @route '/cms/chuyen-muc-bai-viet'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::index
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:20
* @route '/cms/chuyen-muc-bai-viet'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::index
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:20
* @route '/cms/chuyen-muc-bai-viet'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::create
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:27
* @route '/cms/chuyen-muc-bai-viet/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/chuyen-muc-bai-viet/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::create
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:27
* @route '/cms/chuyen-muc-bai-viet/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::create
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:27
* @route '/cms/chuyen-muc-bai-viet/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::create
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:27
* @route '/cms/chuyen-muc-bai-viet/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::store
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:32
* @route '/cms/chuyen-muc-bai-viet/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/chuyen-muc-bai-viet/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::store
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:32
* @route '/cms/chuyen-muc-bai-viet/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::store
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:32
* @route '/cms/chuyen-muc-bai-viet/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::update
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:48
* @route '/cms/chuyen-muc-bai-viet/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/chuyen-muc-bai-viet/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::update
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:48
* @route '/cms/chuyen-muc-bai-viet/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::update
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:48
* @route '/cms/chuyen-muc-bai-viet/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::edit
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:39
* @route '/cms/chuyen-muc-bai-viet/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/chuyen-muc-bai-viet/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::edit
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:39
* @route '/cms/chuyen-muc-bai-viet/edit/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::edit
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:39
* @route '/cms/chuyen-muc-bai-viet/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::edit
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:39
* @route '/cms/chuyen-muc-bai-viet/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:55
* @route '/cms/chuyen-muc-bai-viet/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/chuyen-muc-bai-viet/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:55
* @route '/cms/chuyen-muc-bai-viet/delete/{id}'
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
* @see \Domains\Blog\Http\Controllers\Cms\CategoryController::deleteMethod
* @see domains/Blog/Http/Controllers/Cms/CategoryController.php:55
* @route '/cms/chuyen-muc-bai-viet/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const CategoryController = { index, create, store, update, edit, deleteMethod, delete: deleteMethod }

export default CategoryController