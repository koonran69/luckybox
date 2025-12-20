<div class="card course-config">
    <div class="card-header align-items-center justify-content-between">
        <div class="col-auto">
            @lang('Dữ liệu sản phẩm')
        </div>
    </div>

    <div class="card-body p-0">
        <div class="row g-0">
            <div class="col-12 col-md-3 border-end">
                <ul id="navDataP" class="nav nav-pills flex-column">
                    <li class="nav-item" role="presentation" data-type="10">
                        <a href="#tabGeneral" class="nav-link active" data-bs-toggle="tab" aria-selected="true"
                            role="tab">
                            <i class="ti ti-home icon me-2"></i>
                            <span>@lang('Tổng quan')</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabInfo" class="nav-link" data-bs-toggle="tab" aria-selected="true"
                            role="tab">
                            <i class="ti ti-info-square-rounded icon me-2"></i>
                            <span>@lang('Thông tin')</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#tabSpecification" class="nav-link" data-bs-toggle="tab" aria-selected="true" role="tab">
                            <i class="ti ti-ruler-measure-2 icon me-2"></i>
                            <span>@lang('Thông số Kỹ thuật')</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-9">
                <div class="tab-content">
                    <div id="tabGeneral" class="tab-pane active show p-3">
                        @include('cms.products.forms.partials.tabs.create.general')
                    </div>
                    <div id="tabInfo" class="tab-pane p-3">
                        @include('cms.products.forms.partials.tabs.create.info')
                    </div>
                    <div id="tabSpecification" class="tab-pane p-3">
                        @include('cms.products.forms.partials.tabs.create.specification')
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
