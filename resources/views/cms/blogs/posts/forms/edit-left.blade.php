<div class="col-12 col-md-9">
    <div class="mb-3">
        <label class="form-label required">@lang('Tiêu đề')</label>
        <x-core-input name="post[title]" :value="$post->title" :required="true" :placeholder="__('Nhập Tiêu đề')" />
    </div>

    <div class="mb-3">
        <label class="form-label required">@lang('Mô tả')</label>
        <textarea name="post[content]" class="visually-hidden ckeditor">{!! $post->content !!}</textarea>
    </div>

    <div class="mb-3">
        <label class="form-label">@lang('Mô tả ngắn')</label>
        <textarea name="post[excerpt]" class="form-control" rows="10">{!! $post->excerpt !!}</textarea>
    </div>
    
    <div class="mb-3">
        <label class="form-label">@lang('Meta SEO')</label>
        <textarea name="post[meta_seo]" class="form-control" rows="10">{!! $post->meta_seo !!}</textarea>
    </div>
</div>
