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
                        <a href="#tabVariant" class="nav-link active" data-bs-toggle="tab" aria-selected="true"
                            role="tab">
                            <i class="ti ti-versions icon me-2"></i>
                            <span>@lang('Biến thể')</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div class="col-12 col-md-9">
                <div class="tab-content">
                    <div id="tabVariant" class="tab-pane active show">
                        @include('cms.products.forms.partials.tabs.edit.variants')
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
