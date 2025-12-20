@extends('cms.layouts.datatable')

@section('datatable')
<x-core-form id="formMultiple" :action="route('cms.post_comment.update_multiple')" type="post" :validate="true">
    <div class="card">
        <div class="card-header justify-content-between">
            <h2 class="mb-0">@lang('Danh sách')</h2>
            <div class="select-action-multiple" style="display: none;">
                <div class="input-group pe-4">
                    <x-core-select name="action" :required="true">
                        @foreach ($status as $key => $value)
                            <x-core-select-option :value="$key" :title="$value" />
                        @endforeach
                            <x-core-select-option value="delete" :title="trans('Xóa')" />
                    </x-core-select>
                    <button type="submit" class="btn btn-outline-primary">@lang('Áp dụng')</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            
                <div class="table-responsive position-relative">
                    
                    @include('cms.common.datatables.toggle-column-datatable')
                    {!! $dataTable->table(['class' => 'table table-bordered'], true) !!}
                </div>
        </div>
    </div>
</x-core-form>
@endsection
