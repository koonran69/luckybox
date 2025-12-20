@php
    $rating = $rating ?? 5;
    $unique = utilities()->uniqidReal(3);
@endphp

<div class="star-wrapper">
    @for ($i = 1; $i <= 5; $i++)
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="star-fill{{$unique . $i}}">
                    <stop offset="{{ utilities()->calcStartPercent($rating, $i) }}%" stop-color="#F29324"></stop>
                    <stop offset="{{ utilities()->calcStartPercent($rating, $i) }}%" stop-color="#e0e0e0"></stop>
                </linearGradient>
            </defs>
            <path d="M12.5 0.780273L15.3064 9.41756H24.3882L17.0409 14.7557L19.8473 23.393L12.5 18.0548L5.15268 23.393L7.95911 14.7557L0.611794 9.41756H9.69357L12.5 0.780273Z" fill="url(#star-fill{{$unique . $i}})"/>
        </svg>
    @endfor
</div>