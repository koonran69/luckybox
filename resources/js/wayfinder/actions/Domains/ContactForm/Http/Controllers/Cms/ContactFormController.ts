import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::index
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:20
* @route '/cms/contact-form'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/cms/contact-form',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::index
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:20
* @route '/cms/contact-form'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::index
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:20
* @route '/cms/contact-form'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::index
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:20
* @route '/cms/contact-form'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::create
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/cms/contact-form/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::create
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::create
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::create
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::store
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/store'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/cms/contact-form/store',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::store
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/store'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::store
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:0
* @route '/cms/contact-form/store'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::edit
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:28
* @route '/cms/contact-form/edit/{id}'
*/
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/cms/contact-form/edit/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::edit
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:28
* @route '/cms/contact-form/edit/{id}'
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
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::edit
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:28
* @route '/cms/contact-form/edit/{id}'
*/
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::edit
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:28
* @route '/cms/contact-form/edit/{id}'
*/
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::update
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:38
* @route '/cms/contact-form/update'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/cms/contact-form/update',
} satisfies RouteDefinition<["put"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::update
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:38
* @route '/cms/contact-form/update'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::update
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:38
* @route '/cms/contact-form/update'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::updateMultiple
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:48
* @route '/cms/contact-form/update-multiple'
*/
export const updateMultiple = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMultiple.url(options),
    method: 'post',
})

updateMultiple.definition = {
    methods: ["post"],
    url: '/cms/contact-form/update-multiple',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::updateMultiple
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:48
* @route '/cms/contact-form/update-multiple'
*/
updateMultiple.url = (options?: RouteQueryOptions) => {
    return updateMultiple.definition.url + queryParams(options)
}

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::updateMultiple
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:48
* @route '/cms/contact-form/update-multiple'
*/
updateMultiple.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateMultiple.url(options),
    method: 'post',
})

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::deleteMethod
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:64
* @route '/cms/contact-form/delete/{id}'
*/
export const deleteMethod = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

deleteMethod.definition = {
    methods: ["delete"],
    url: '/cms/contact-form/delete/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::deleteMethod
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:64
* @route '/cms/contact-form/delete/{id}'
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
* @see \Domains\ContactForm\Http\Controllers\Cms\ContactFormController::deleteMethod
* @see domains/ContactForm/Http/Controllers/Cms/ContactFormController.php:64
* @route '/cms/contact-form/delete/{id}'
*/
deleteMethod.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: deleteMethod.url(args, options),
    method: 'delete',
})

const ContactFormController = { index, create, store, edit, update, updateMultiple, deleteMethod, delete: deleteMethod }

export default ContactFormController