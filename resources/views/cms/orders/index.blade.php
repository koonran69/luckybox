@extends('cms.layouts.datatable')

@section('datatable')
<div class="card">
    <div class="card-header justify-content-between">
        <h2 class="mb-0">@lang('Danh sách')</h2>
        <div class="d-flex gap-1">
            {{-- <x-core-form :action="route('cms.order.import_excel')" type="put" enctype="multipart/form-data">
                <x-input id="fileImport" type="file" name="file" class="d-none" onchange="this.form.submit()" />
                <button type="button" class="btn btn-info import-excel">
                    <i class="ti ti-file-spreadsheet icon"></i>
                    @lang('Nhập excel')
                </button>
            </x-core-form> --}}
            {{-- <a href="{{ route('cms.order.export_excel') }}" class="btn btn-primary">
                <i class="ti ti-file-spreadsheet icon"></i>
                @lang('Xuất excel')
            </a> --}}
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive position-relative">
            
            @include('cms.common.datatables.toggle-column-datatable')
            {!! $dataTable->table(['class' => 'table table-bordered'], true) !!}
        </div>
    </div>
</div>
@endsection


@push('js')
<script>
    $(document).ready(function() {
        $('.import-excel').click(function() {
            $("#fileImport").click();
        });
    })
</script>
@endpush