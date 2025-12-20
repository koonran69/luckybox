@extends('cms.layouts.datatable')

@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <x-core-form :action="route('cms.product.sync_hrv')" type="post" onsubmit="return confirm('Bạn có chắc chắn muốn đồng bộ?');">
                
                <button type="submit" class="btn btn-primary" name="submitter" value="ptocat">
                    <i class="ti ti-refresh icon"></i>
                    <span>@lang('Đồng bộ Danh mục')</span>
                </button>
                
                <button type="submit" class="btn btn-primary" name="submitter" value="product">
                    <i class="ti ti-refresh icon"></i>
                    <span>@lang('Đồng bộ')</span>
                </button>
            </x-core-form>
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