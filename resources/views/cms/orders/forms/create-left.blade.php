<div class="col-12 col-md-9">
    <div class="card">
        <div class="row card-body">
            <div class="col-12 mb-3">
                <label class="form-label required">@lang('Tên bài giảng')</label>
                <x-input name="lecture_material[name]" :value="old('lecture_material.name')" :required="true"
                    :placeholder="__('Nhập tên bài giảng')" />
            </div>
            <div class="col-12">
                <h3 class="card-title">@lang('Danh sách bài học')</h3>
                <div class="row row-cards" id="listLesson">
                    @include('cms.lecture_materials.lessons.create', ['uniqid' => uniqid_real(6)])
                </div>
                <div class="mt-3 text-end">
                    <button type="button" id="addLesson" class="btn btn-sm btn-outline-primary" data-route="{{ route('cms.lecture_material.lesson.create') }}">
                        <i class="ti ti-plus me-1"></i>
                        @lang('Thêm bài học')
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>