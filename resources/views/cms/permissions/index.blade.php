@extends('cms.layouts.datatable')

@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <button type="button" data-route="{{ route('cms.permission.create') }}" class="btn btn-primary open-modal-form">
                <i class="ti ti-plus icon"></i>
                <span>@lang('Thêm')</span>
            </button>
        </div>
        <div class="card-body">
            <div class="table-responsive position-relative">
                @include('cms.common.datatables.toggle-column-datatable')
                {{ $dataTable->table(['class' => 'table table-bordered'], true) }}
            </div>
        </div>
    </div>
@endsection
