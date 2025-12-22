import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatus
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
export const actionStatus = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: actionStatus.url(args, options),
    method: 'put',
})

actionStatus.definition = {
    methods: ["put"],
    url: '/cms/nguoi-dung/reward/action-status/{rewardHistory}',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatus
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatus.url = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return actionStatus.definition.url
            .replace('{rewardHistory}', parsedArgs.rewardHistory.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatus
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatus.put = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: actionStatus.url(args, options),
    method: 'put',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatus
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
const actionStatusForm = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: actionStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Domains\User\Http\Controllers\Cms\UserController::actionStatus
* @see domains/User/Http/Controllers/Cms/UserController.php:112
* @route '/cms/nguoi-dung/reward/action-status/{rewardHistory}'
*/
actionStatusForm.put = (args: { rewardHistory: number | { id: number } } | [rewardHistory: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: actionStatus.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

actionStatus.form = actionStatusForm

const reward = {
    actionStatus: Object.assign(actionStatus, actionStatus),
}

export default reward