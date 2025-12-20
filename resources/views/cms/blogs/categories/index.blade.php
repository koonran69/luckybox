@extends('cms.layouts.datatable')
@push('css')
    {{-- <style>
        body::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
    </style> --}}
@endpush
@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <button type="button" href="{{ route('cms.post_category.create') }}" class="btn btn-primary open-modal-form" data-route="{{ route('cms.post_category.create') }}">
                <i class="ti ti-plus icon"></i>
                <span>@lang('Thêm')</span>
            </button>
        </div>
        <div class="card-body">
            <div class="table-responsive position-relative">
                @include('cms.common.datatables.toggle-column-datatable')
                {!! $dataTable->table(['class' => 'table table-bordered'], true) !!}
            </div>
        </div>
    </div>
@endsection

@push('libs-js')
    @include('ckfinder::setup')
@endpush