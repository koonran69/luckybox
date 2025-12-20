<?php

namespace Domains\DataStore\Enums;

use Domains\Core\Supports\Enum;

enum BannerPosition: int
{
    use Enum;

    case HomeBanner = 10;

    case HomeVideo = 20;

    case HomeBanner2 = 30;
    
    case HomeBanner3 = 40;

    case HomeBanner4 = 50;

    case HomeReview = 60;

    case HomeReview2 = 70;

    case BannerProductCat = 80;
    
    case BannerContact = 90;
    
    case BannerProductDetail = 100;

    case BannerBlog = 110;

    case BannerStory = 120;

    case StoryLogo = 130;

    case StoryDesc = 140;
}