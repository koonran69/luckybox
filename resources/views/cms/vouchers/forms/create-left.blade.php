<div class="col-12 col-md-9">
    <div class="card mb-3">
        <div class="row card-body">

            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label class="form-label required">@lang('Tiêu đề'):</label>
                    <x-core-input name="title" :value="old('title')" :required="true" :placeholder="__('Tiêu đề')" />
                </div>
            </div>
            <!-- Code -->

            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label class="form-label required">@lang('Code'):</label>
                    <x-core-input name="code" :value="old('code')" :required="true" :placeholder="__('GIAM10%, FLASHSALE...')" />
                </div>
            </div>

            <!-- usage_limit -->
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label class="form-label required">@lang('Giới hạn số lựợng'):</label>
                    <x-core-input-number name="usage_limit" :value="old('usage_limit')" :required="true" :placeholder="__('100, 200...')" />
                </div>
            </div>

            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Giá trị đơn hàng tối thiểu'):</label>
                    <x-core-input name="min_order_total" class="inp-number-format" :value="old('min_order_total')" :required="true" :placeholder="__('Giá trị đơn hàng tối thiểu')" />
                </div>
            </div>

            <!-- Type -->
            <div class="col-12 col-md-6">
                <div class="mb-3">
                    <label class="form-label required">@lang('Loại'):</label>
                    <x-core-select name="type" :required="true">
                        @foreach ($types as $key => $value)
                            <x-core-select-option :value="$key" :title="$value" />
                        @endforeach
                    </x-core-select>

                </div>
            </div>

            <!-- Value -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Giá trị'):</label>
                    <x-core-input-number name="value" :value="old('value')" :required="true" :placeholder="__('Giá trị')" />
                </div>
            </div>

            <div id="maxDiscountValue" class="col-12">
                <div class="mb-3">
                    <label class="form-label">@lang('Giảm tối đa'):</label>
                    <x-core-input name="max_discount_value" class="inp-number-format" :value="old('max_discount_value')" :placeholder="__('Giảm tối đa')" />
                </div>
            </div>

            <!-- Start Date -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Ngày bắt đầu'):</label>
                    <x-core-input type="date" name="start_at" :value="old('start_at')" :required="true" />
                </div>
            </div>

            <!-- End Date -->
            <div class="col-md-6 col-12">
                <div class="mb-3">
                    <label class="form-label required">@lang('Ngày kết thúc'):</label>
                    <x-core-input type="date" name="end_at" :value="old('end_at')" :required="true" />
                </div>
            </div>

            <div class="col-12">
                <div class="mb-3">
                    <label class="form-label">@lang('Điều kiện áp dụng giảm giá')</label>
                    <textarea name="description" class="visually-hidden ckeditor">{{ old('description') }}</textarea>
                </div>
            </div>
        </div>
    </div>
</div>
