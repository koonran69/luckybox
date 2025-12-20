@accessroute('cms.admin.edit')
    <a href="{{ route('cms.admin.edit', $id) }}">{{ $fullname }}</a>
@elseaccessroute
    <span>{{ $fullname }}</span>
@endaccessroute
