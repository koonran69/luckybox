<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
<meta name="X-TOKEN" content="{{ csrf_token() }}">
<title>@yield('title', 'Admin')</title>
<link rel="shortcut icon" type="image/x-icon" href="{{ asset(config('core.images.favicon')) }}" />
<!-- CSS files -->
<link href="{{ asset('/templates/simple/css/tabler.min.css') }}" rel="stylesheet"/>
<link href="{{ asset('/libs/jquery-toast-plugin/jquery.toast.min.css') }}" rel="stylesheet" type="text/css">
<link href="{{ asset('/libs/parsley/style.css') }}" rel="stylesheet">

@stack('libs-css')
@stack('css')
