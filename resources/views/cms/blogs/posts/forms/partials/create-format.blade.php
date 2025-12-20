@php
    $keyOnline = utilities()->getValueCourseFormmat('Online');
    $keyOffline = utilities()->getValueCourseFormmat('Offline');
    $keyVideo = utilities()->getValueCourseFormmat('Video');
@endphp

<div class="card course-config">
    <div class="card-header">@lang('Hình thức khóa học')</div>
    <div class="card-body p-0">
        <div class="row g-0">
            <div class="col-12 col-md-3 border-end">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item" role="presentation">
                        <a href="#formatOnline" class="nav-link active" data-bs-toggle="tab" aria-selected="true"
                        role="tab">
                            <i class="ti ti-network icon me-2 icon-"></i>
                            <span>@lang('Online')</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#formatOffline" class="nav-link" data-bs-toggle="tab" aria-selected="true"
                        role="tab">
                            <i class="ti ti-network-off icon me-2 icon-"></i>
                            <span>@lang('Offline')</span>
                        </a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a href="#formatVideo" class="nav-link" data-bs-toggle="tab" aria-selected="true"
                        role="tab">
                            <i class="ti ti-movie icon me-2 icon-"></i>
                            <span>@lang('Video')</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-9">
                <div class="tab-content">
                    <div id="formatOnline" class="tab-pane active show p-3">
                        <div class="mb-3">
                            <x-input-checkbox name="course_format[{{ $keyOnline }}][is_enable]" value="1" :label="trans('Bật')" />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOnline }}][price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
                            </div>
                        </div>
                    </div>
                    <div id="formatOffline" class="tab-pane p-3">
                        <div class="mb-3">
                            <x-input-checkbox name="course_format[{{ $keyOffline }}][is_enable]" value="1" :label="trans('Bật')" />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOffline }}][price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Địa chỉ')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOffline }}][address_offline]" :placeholder="trans('165 D5, P. 15, Bình Thạnh')" />
                            </div>
                        </div>
                    </div>
                    <div id="formatVideo" class="tab-pane show p-3">
                        <div class="mb-3">
                            <x-input-checkbox name="course_format[{{ $keyVideo }}][is_enable]" value="1" :label="trans('Bật')" />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyVideo }}][price]" class="inp-number-format" :placeholder="trans('VD: 20,000')" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Bài giảng')</label>
                            <div class="col">
                                <x-select name="course_format[{{ $keyVideo }}][lecture_material_id]" class="select2-bs5-ajax-many" data-url="{{ route('cms.lecture_material.select2') }}"></x-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>