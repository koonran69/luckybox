import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/phan-thuong',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::index
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:21
* @route '/cms/phan-thuong'
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
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::inlineUpdate
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:28
* @route '/cms/phan-thuong/reward/{reward}/inline-update'
*/
export const inlineUpdate = (args: { reward: string | number } | [reward: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: inlineUpdate.url(args, options),
    method: 'put',
})

inlineUpdate.definition = {
    methods: ["put"],
    url: '/cms/phan-thuong/reward/{reward}/inline-update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::inlineUpdate
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:28
* @route '/cms/phan-thuong/reward/{reward}/inline-update'
*/
inlineUpdate.url = (args: { reward: string | number } | [reward: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { reward: args }
    }

    if (Array.isArray(args)) {
        args = {
            reward: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        reward: args.reward,
    }

    return inlineUpdate.definition.url
            .replace('{reward}', parsedArgs.reward.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::inlineUpdate
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:28
* @route '/cms/phan-thuong/reward/{reward}/inline-update'
*/
inlineUpdate.put = (args: { reward: string | number } | [reward: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: inlineUpdate.url(args, options),
    method: 'put',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::inlineUpdate
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:28
* @route '/cms/phan-thuong/reward/{reward}/inline-update'
*/
const inlineUpdateForm = (args: { reward: string | number } | [reward: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: inlineUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Domains\Reward\Http\Controllers\Cms\RewardController::inlineUpdate
* @see domains/Reward/Http/Controllers/Cms/RewardController.php:28
* @route '/cms/phan-thuong/reward/{reward}/inline-update'
*/
inlineUpdateForm.put = (args: { reward: string | number } | [reward: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: inlineUpdate.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

inlineUpdate.form = inlineUpdateForm

const reward = {
    index: Object.assign(index, index),
    inlineUpdate: Object.assign(inlineUpdate, inlineUpdate),
}

export default reward