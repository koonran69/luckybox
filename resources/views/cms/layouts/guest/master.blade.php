<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('cms.layouts.guest.head')
</head>
<body class="border-top-wide d-flex flex-column">

    @yield('content')
    
    @include('cms.layouts.guest.footer')
    @include('cms.layouts.guest.scripts')
    <x-core-alert />

</body>
</html>