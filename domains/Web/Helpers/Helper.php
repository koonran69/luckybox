<?php

use Domains\Users\Models\User;
use Illuminate\Support\Facades\Auth;

if (! function_exists('get_auth_user')) {
    function get_auth_user(): User|null
    {
        return Auth::user();
    }
}

if (!function_exists('randomLuckyMessage')) {
    function randomLuckyMessage(): string
    {
        $messages = [
            'Chúc bạn tiền vào cửa trước, tiền lẻn cửa sau, hai cái gặp nhau chui vào két sắt',
            'Chúc bạn gấm vóc lụa là, tay cầm tiền tỉ được làm đại gia',
            'Chúc bạn năm mới đa lộc, đa tài, đa phú quý. Đắc thời, đắc thắng, đắc nhân tâm',
            'Chúc bạn vạn sự như ý, tỉ sự như mơ, triệu điều bất ngờ, không chờ cũng đến',
            'Chúc bạn tiền vào như nước triều dâng, tiêu hoài không cạn, càng xài càng tăng',
            'Chúc bạn một năm mới hạnh phúc, khum “chằm Zn”, âu lo. Đầu năm phát tài, cuối năm tài vẫn phát',
            'Chúc bạn bầu trời sức khỏe, biển cả tình thương, đại dương tình bạn, sự nghiệp sáng ngời, gia đình thịnh vượng',
            'Chúc bạn vui vẻ như Chim Sẻ, khỏe mạnh như Đại Bàng, giàu sang như chim Phụng, làm lụng như chim Sâu, sống lâu như Đà Điểu',
            'Chúc bạn tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin',
            'Chúc bạn và gia đình luôn thuận hòa, song thân đắc thọ, tỷ sự như mơ, vạn sự như ý',
            'Chúc bạn năm mới công thành danh toại, trẻ mãi không già, tấn tài, tấn lộc, phúc lộc trường tồn',
            'Năm mới chúc bạn sức khỏe đầy đủ, gạo đầy lu, muối đầy hũ, tiền đầy túi, tình đầy tim, xăng đầy bình, và vàng đầy tủ!',
        ];

        return $messages[array_rand($messages)];
    }
}