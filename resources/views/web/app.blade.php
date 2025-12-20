<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="icon" href="{{ asset(utilities()->getSetting('site_favicon')) }}" sizes="any">
        <link rel="icon" href="{{ asset(utilities()->getSetting('site_favicon')) }}" type="image/svg+xml">
        <link rel="apple-touch-icon" href="{{ asset(utilities()->getSetting('site_favicon')) }}">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        
        @vite(['resources/js/app.ts', "resources/js/pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="">
        @inertia
    </body>
</html>