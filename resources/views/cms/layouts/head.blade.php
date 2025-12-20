<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="url-home" content="{{ url('/') }}">
<title>@yield('title', config('app.name'))</title>
<link rel="shortcut icon" type="image/x-icon" href="{{ asset(config('core.images.favicon')) }}" />
<!-- CSS files -->
<link href="{{ asset('/templates/simple/css/tabler.min.css') }}" rel="stylesheet"/>
<link href="{{ asset('/templates/simple/css/tabler-vendors.min.css') }}" rel="stylesheet"/>
<link href="{{ asset('/templates/simple/icons/tabler-icons.min.css') }}" rel="stylesheet"type="text/css">
<link href="{{ asset('/libs/jquery-toast-plugin/jquery.toast.min.css') }}" rel="stylesheet"type="text/css">
<link rel="stylesheet" href="{{ asset('/libs/select2/css/select2.min.css') }}">
<link rel="stylesheet" href="{{ asset('/libs/select2/css/select2-bootstrap-5-theme.min.css') }}">
<link href="{{ asset('/libs/parsley/style.css') }}" rel="stylesheet">

{{-- datatable latest --}}
{{-- <link href="{{ asset('public/core/libs/datatables/plugins/bootstrap5/css/dataTables.bootstrap5.css') }}" rel="stylesheet"/>
<link href="{{ asset('public/core/libs/datatables/plugins/buttons/css/buttons.bootstrap5.min.css') }}" rel="stylesheet"/>
<link href="{{ asset('public/core/libs/datatables/plugins/responsives/css/responsive.bootstrap5.min.css') }}" rel="stylesheet"/> --}}

@stack('libs-css')

<link href="{{ asset('/core/assets/css/init.css') }}" rel="stylesheet">
<link href="{{ asset('/cms/assets/css/main.css') }}" rel="stylesheet">

@stack('css')