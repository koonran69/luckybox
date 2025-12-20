import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::index
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:16
* @route '/cms/settings/index/{group}'
*/
export const index = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/settings/index/{group}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::index
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:16
* @route '/cms/settings/index/{group}'
*/
index.url = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { group: args }
    }

    if (Array.isArray(args)) {
        args = {
            group: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        group: args.group,
    }

    return index.definition.url
            .replace('{group}', parsedArgs.group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::index
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:16
* @route '/cms/settings/index/{group}'
*/
index.get = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::index
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:16
* @route '/cms/settings/index/{group}'
*/
index.head = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::update
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:29
* @route '/cms/settings/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/settings/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::update
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:29
* @route '/cms/settings/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\Setting\Http\Controllers\Cms\SettingController::update
* @see domains/Setting/Http/Controllers/Cms/SettingController.php:29
* @route '/cms/settings/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const setting = {
    index: Object.assign(index, index),
    update: Object.assign(update, update),
}

export default setting