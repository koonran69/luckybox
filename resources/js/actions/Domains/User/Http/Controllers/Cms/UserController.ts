import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::index
* @see domains/User/Http/Controllers/Cms/UserController.php:20
* @route '/cms/nguoi-dung'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::create
* @see domains/User/Http/Controllers/Cms/UserController.php:27
* @route '/cms/nguoi-dung/create'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:36
* @route '/cms/nguoi-dung/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/nguoi-dung/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:36
* @route '/cms/nguoi-dung/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:36
* @route '/cms/nguoi-dung/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:36
* @route '/cms/nguoi-dung/store'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::store
* @see domains/User/Http/Controllers/Cms/UserController.php:36
* @route '/cms/nguoi-dung/store'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:61
* @route '/cms/nguoi-dung/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/nguoi-dung/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:61
* @route '/cms/nguoi-dung/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:61
* @route '/cms/nguoi-dung/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:61
* @route '/cms/nguoi-dung/update'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::update
* @see domains/User/Http/Controllers/Cms/UserController.php:61
* @route '/cms/nguoi-dung/update'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
*/
const editForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
*/
editForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::edit
* @see domains/User/Http/Controllers/Cms/UserController.php:50
* @route '/cms/nguoi-dung/edit/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:80
* @route '/cms/nguoi-dung/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/nguoi-dung/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:80
* @route '/cms/nguoi-dung/delete/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:80
* @route '/cms/nguoi-dung/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:80
* @route '/cms/nguoi-dung/delete/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::deleteMethod
* @see domains/User/Http/Controllers/Cms/UserController.php:80
* @route '/cms/nguoi-dung/delete/{id}'
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
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
export const searchSelect = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

searchSelect.definition = {
    methods: ["get","head"],
    url: '/cms/nguoi-dung/search-select',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
searchSelect.url = (options?: RouteQueryOptions) => {
    return searchSelect.definition.url + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
searchSelect.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: searchSelect.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
searchSelect.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: searchSelect.url(options),
    method: 'head',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
const searchSelectForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchSelect.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
searchSelectForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchSelect.url(options),
    method: 'get',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::searchSelect
* @see domains/User/Http/Controllers/Cms/UserController.php:99
* @route '/cms/nguoi-dung/search-select'
*/
searchSelectForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: searchSelect.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

searchSelect.form = searchSelectForm

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatusReward
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
export const actionStatusReward = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: actionStatusReward.url(args, options),
    method: 'put',
})

actionStatusReward.definition = {
    methods: ["put"],
    url: '/cms/nguoi-dung/reward/action-status/{rewardHistory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatusReward
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatusReward.url = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { rewardHistory: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { rewardHistory: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            rewardHistory: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        rewardHistory: typeof args.rewardHistory === 'object'
        ? args.rewardHistory.id
        : args.rewardHistory,
    }

    return actionStatusReward.definition.url
            .replace('{rewardHistory}', parsedArgs.rewardHistory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatusReward
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatusReward.put = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: actionStatusReward.url(args, options),
    method: 'put',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatusReward
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
const actionStatusRewardForm = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: actionStatusReward.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatusReward
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatusRewardForm.put = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: actionStatusReward.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

actionStatusReward.form = actionStatusRewardForm

const UserController = { index, create, store, update, edit, deleteMethod, searchSelect, actionStatusReward, delete: deleteMethod }

export default UserController