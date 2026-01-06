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
                        <x-input type="hidden" name="course_format[{{ $keyOnline }}][id]" :value="$format_online->id" />
                        <div class="mb-3">
                            <x-core-input-checkbox :checked="$format_online->is_enable" name="course_format[{{ $keyOnline }}][is_enable]" value="1" :label="trans('Bật')" />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOnline }}][price]" 
                                    class="inp-number-format" 
                                    :value="$format_online->price ? number_format($format_online->price) : null" 
                                    :placeholder="trans('VD: 20,000')" 
                                />
                            </div>
                        </div>
                    </div>

                    <div id="formatOffline" class="tab-pane p-3">
                        <x-input type="hidden" name="course_format[{{ $keyOffline }}][id]" 
                            :value="$format_offline->id" 
                        />
                        <div class="mb-3">
                            <x-core-input-checkbox :checked="$format_offline->is_enable"
                                name="course_format[{{ $keyOffline }}][is_enable]" 
                                value="1" 
                                :label="trans('Bật')" 
                            />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOffline }}][price]" 
                                    class="inp-number-format" 
                                    :value="$format_offline->price ? number_format($format_offline->price) : null" 
                                    :placeholder="trans('VD: 20,000')" 
                                />
                            </div>
                        </div>
                        
                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Địa chỉ')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyOffline }}][address_offline]" 
                                    :value="$format_offline->address_offline"
                                    :placeholder="trans('165 D5, P. 15, Bình Thạnh')" 
                                />
                            </div>
                        </div>
                    </div>

                    <div id="formatVideo" class="tab-pane show p-3">
                        <x-input type="hidden" name="course_format[{{ $keyVideo }}][id]" 
                            :value="$format_video->id" 
                        />
                        <div class="mb-3">
                            <x-core-input-checkbox :checked="$format_video->is_enable"
                                name="course_format[{{ $keyVideo }}][is_enable]" 
                                value="1" 
                                :label="trans('Bật')" 
                            />
                        </div>

                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Học phí')</label>
                            <div class="col">
                                <x-input name="course_format[{{ $keyVideo }}][price]" 
                                    class="inp-number-format" 
                                    :value="$format_video->price ? number_format($format_video->price) : null" 
                                    :placeholder="trans('VD: 20,000')" 
                                />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label class="col-4 col-form-label">@lang('Bài giảng')</label>
                            <div class="col">
                                <x-select name="course_format[{{ $keyVideo }}][lecture_material_id]" 
                                    class="select2-bs5-ajax-many" 
                                    data-url="{{ route('cms.lecture_material.select2') }}"
                                >
                                    @if ($format_video)
                                        <x-core-select-option :selected="$format_video->lecture_material_id" :value="$format_video->lecture_material_id" :title="$format_video->lectureMaterial->name" />
                                    @endif
                                </x-select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>