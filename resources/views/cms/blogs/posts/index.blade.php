@extends('cms.layouts.datatable')

@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <a href="{{ route('cms.post.create') }}" class="btn btn-primary">
                <i class="ti ti-plus icon"></i>
                <span>@lang('Thêm')</span>
            </a>
        </div>
        <div class="card-body">
            <div class="table-responsive position-relative">
                @include('cms.common.datatables.toggle-column-datatable')
                {!! $dataTable->table(['class' => 'table table-bordered'], true) !!}
            </div>
        </div>
    </div>
@endsection
