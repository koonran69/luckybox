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
                                    <div class="text-secondary">@lang('Tổng người dùng')</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card card-sm">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <span class="bg-primary text-white avatar">
                                        <i class="ti ti-shopping-cart"></i>
                                    </span>
                                </div>
                                <div class="col">
                                    <div class="font-weight-medium fs-1">{{ $total_order }}</div>
                                    <div class="text-secondary">@lang('Tổng Đơn hàng')</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="card card-sm">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-auto">
                                    <span class="bg-primary text-white avatar">
                                        <i class="ti ti-package"></i>
                                    </span>
                                </div>
                                <div class="col">
                                    <div class="font-weight-medium fs-1">{{ $total_product }}</div>
                                    <div class="text-secondary">@lang('Tổng sản phẩm')</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card mt-3">
                        <div class="card-header">@lang('Biểu đồ doanh số đơn hàng 7 ngày qua')</div>
                        <div class="card-body">
                            <div class="" id="chartOrder" style="height: 500px"></div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card mt-3">
                        <div class="card-header">@lang('Biểu đồ SL đơn hàng 7 ngày qua')</div>
                        <div class="card-body">
                            <div class="" id="chartCountOrder" style="height: 500px"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@include('cms.charts.column')
@include('cms.charts.scripts')

@push('js')
<x-core-input type="hidden" name="chart_order" :value="$order_chart" />
<x-core-input type="hidden" name="chart_count_order" :value="$order_count_chart" />
<script>
    amchartColumn("chartOrder", $("input[name='chart_order']").val(), 'date', 'total');
    amchartColumn("chartCountOrder", $("input[name='chart_count_order']").val(), 'date', 'total');
</script>
@endpush