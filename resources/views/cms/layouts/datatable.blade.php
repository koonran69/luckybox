@extends('cms.layouts.master')

@push('libs-css')
    {{-- datatable oldlest --}}
    <link rel="stylesheet" href="{{ asset('/libs/datatables/plugins/bs5/css/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/libs/datatables/plugins/buttons/css/buttons.bootstrap5.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/libs/datatables/plugins/responsive/css/responsive.bootstrap5.min.css') }}">
@endpush

@push('css')
    <style>
        html, body, .page {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none;  /* IE và Edge cũ */
            overflow: auto;
        }

        html::-webkit-scrollbar, body::-webkit-scrollbar, .page::-webkit-scrollbar {
            display: none;
        }
    </style>
@endpush

@section('content')
    <div class="page-body">
        <div class="container-xl">
            @yield('datatable')
        </div>
    </div>
@endsection

@push('libs-js')
    {{-- datatable --}}
    <script src="{{ asset('/libs/datatables/jquery.dataTables.min.js') }}"></script>

    <script src="{{ asset('/libs/datatables/plugins/bs5/js/dataTables.bootstrap5.min.js') }}"></script>

    <script src="{{ asset('/libs/datatables/plugins/buttons/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('/libs/datatables/plugins/buttons/js/buttons.bootstrap5.min.js') }}"></script>

    <script src="{{ asset('/libs/datatables/plugins/responsive/js/responsive.dataTables.min.js') }}"></script>
    <script src="{{ asset('/libs/datatables/plugins/responsive/js/responsive.bootstrap5.min.js') }}"></script>
@endpush

@push('js')

    <script type="text/javascript" src="{{ asset('/cms/assets/js/datatable.js') }}"></script>

    {{ $dataTable->scripts() }}

    {{-- @include('cms.common.datatables.scripts.datatable-search-month-year') --}}

    @include('cms.common.datatables.scripts.toggle-column', [
        'id_table' => $dataTable->getTableAttribute('id'),
    ])
@endpush
