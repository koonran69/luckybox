<!doctype html>
<html lang="{{ str_replace('-', '_', app()->getLocale()) }}">

<head>
    @include('cms.layouts.head')
</head>

<body class="layout-fluid">
    <div class="page">
        <x-cms-sidebar-left />
        @include('cms.layouts.sidebar-top')
        <div class="page-wrapper">
            @section('breadcrumb')
                @include('cms.layouts.partials.breadcrumb')
            @show
            @yield('content')

            @include('cms.layouts.footer')

            @include('cms.layouts.modal.modal-logout')

            @include('cms.layouts.modal.modal-delete')
            
            @include('cms.layouts.modal.modal-ajax-delete')

            @include('cms.layouts.modal.modal-ajax-confirm-update')
            
        </div>
    </div>
    @include('cms.layouts.scripts')
    <x-core-alert />
</body>

</html>
