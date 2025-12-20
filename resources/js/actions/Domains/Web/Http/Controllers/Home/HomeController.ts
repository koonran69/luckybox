import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::index
* @see domains/Web/Http/Controllers/Home/HomeController.php:49
* @route '/'
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
* @see \Domains\Web\Http\Controllers\Home\HomeController::submitFormParticipation
* @see domains/Web/Http/Controllers/Home/HomeController.php:28
* @route '/submit-form-participation'
*/
export const submitFormParticipation = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitFormParticipation.url(options),
    method: 'post',
})

submitFormParticipation.definition = {
    methods: ["post"],
    url: '/submit-form-participation',
} satisfies RouteDefinition<["post"]>

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::submitFormParticipation
* @see domains/Web/Http/Controllers/Home/HomeController.php:28
* @route '/submit-form-participation'
*/
submitFormParticipation.url = (options?: RouteQueryOptions) => {
    return submitFormParticipation.definition.url + queryParams(options)
}

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::submitFormParticipation
* @see domains/Web/Http/Controllers/Home/HomeController.php:28
* @route '/submit-form-participation'
*/
submitFormParticipation.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitFormParticipation.url(options),
    method: 'post',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::submitFormParticipation
* @see domains/Web/Http/Controllers/Home/HomeController.php:28
* @route '/submit-form-participation'
*/
const submitFormParticipationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitFormParticipation.url(options),
    method: 'post',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::submitFormParticipation
* @see domains/Web/Http/Controllers/Home/HomeController.php:28
* @route '/submit-form-participation'
*/
submitFormParticipationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitFormParticipation.url(options),
    method: 'post',
})

submitFormParticipation.form = submitFormParticipationForm

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
export const luckyBoxIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: luckyBoxIndex.url(options),
    method: 'get',
})

luckyBoxIndex.definition = {
    methods: ["get","head"],
    url: '/lucky-box',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
luckyBoxIndex.url = (options?: RouteQueryOptions) => {
    return luckyBoxIndex.definition.url + queryParams(options)
}

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
luckyBoxIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: luckyBoxIndex.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
luckyBoxIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: luckyBoxIndex.url(options),
    method: 'head',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
const luckyBoxIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: luckyBoxIndex.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
luckyBoxIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: luckyBoxIndex.url(options),
    method: 'get',
})

/**
* @see \Domains\Web\Http\Controllers\Home\HomeController::luckyBoxIndex
* @see domains/Web/Http/Controllers/Home/HomeController.php:21
* @route '/lucky-box'
*/
luckyBoxIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: luckyBoxIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

luckyBoxIndex.form = luckyBoxIndexForm

const HomeController = { index, submitFormParticipation, luckyBoxIndex }

export default HomeController