@extends('cms.layouts.master')

@push('css')
<style>
    svg {
        width: 100%;
    }
</style>
@endpush

@section('content')
    <div class="page-body">
        <div class="container-xl">
            <div class="row row-cards">
                <div class="col-sm-6 col-lg-4">
                    <div class="card card-sm">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <span class="bg-primary text-white avatar">
                                        <i class="ti ti-user"></i>
                                    </span>
                                </div>
                                <div class="col">
                                    <div class="font-weight-medium fs-1">{{ $total_user }}</div>
                                    <div class="text-secondary">@lang('Tổng người đã tham gia')</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

            </div>
        </div>
    </div>
@endsection

@push('js')

@endpush