@extends('cms.layouts.datatable')

@section('datatable')
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <button type="button" class="btn btn-primary open-modal-form" data-route="{{ route('cms.banner.item.create', $banner_position) }}">
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

@push('js')
    <script>
        $(document).on('change', 'select[name="type"]', function() {
            console.log($(this).val());
            if($(this).val() == '10')
            {
                $("#imageType").show();   
                $("#videoType").hide();
            }else {
                $("#imageType").hide();   
                $("#videoType").show();
            }
        })
    </script>
@endpush