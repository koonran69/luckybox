<aside class="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu"
            aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <h1 class="navbar-brand navbar-brand-autodark">
            <a href="{{ route('cms.dashboard') }}">
                <img src="{{ asset($logo) }}" width="100px" height="auto" alt="Logo site" class="navbar-brand-image">
            </a>
        </h1>
        <div class="navbar-nav flex-row d-lg-none">
            @include('cms.layouts.partials.account')
        </div>
        <div class="navbar-collapse collapse" id="sidebar-menu" style="">
            <ul class="navbar-nav pt-lg-3">
                @foreach ($menu as $item)
                    @php
                        $subCount = count($item->sub);
                    @endphp
                    @if($item->isShow())
                        <li @class(['nav-item', 'dropdown' => $subCount > 0])>
                            <a @class([
                                'nav-link', 'dropdown-toggle' => $subCount > 0
                            ])
                                href="{{ $item->getUrl() }}" 
                                @if($subCount) 
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="false" 
                                    role="button" 
                                    aria-expanded="false"
                                @endif
                            >
                                <span class="nav-link-icon d-md-none d-lg-inline-block">
                                    {!! $item->icon !!}
                                </span>
                                <span class="nav-link-title">@lang($item->title)</span>
                            </a>
                            @if ($subCount)
                                <div class="dropdown-menu">
                                    <div class="dropdown-menu-columns">
                                        <div class="dropdown-menu-column">
                                            @foreach ($item->sub as $sub)
                                                @if($item->isShow())
                                                    <a class="dropdown-item" href="{{ $sub->getUrl() }}">
                                                        <span class="nav-link-icon d-md-none d-lg-inline-block">
                                                            {!! $sub->icon !!}
                                                        </span>
                                                        <span class="nav-link-title">@lang($sub->title)</span>
                                                    </a>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                </div>
                            @endif
                        </li>
                    @endif
                @endforeach
            </ul>
        </div>
    </div>
</aside>

