<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="vi">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width"/>
    <title>{{ __('Tham gia Minigame thành công') }}</title>

    <style type="text/css">
        body, table, td, a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f4f6f8;
            color: #333;
        }

        .container {
            width: 100%;
            max-width: 680px;
            margin: 28px auto;
        }

        .card {
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .card-header {
            padding: 0;
            text-align: center;
        }

        .card-header .banner {
            width: 100%;
            display: block;
        }

        .card-header .header-content {
        }

        .card-header .header-content img {
            margin-bottom: 6px;
            max-width: 150px;
            width: 100%;
            height: auto;
        }

        .card-header .header-content h1 img, span img {
            max-width: 25px;
            width: 100%;
            height: auto;
        }

        .card-header .header-content h1 {
            color: #ef6323;
            font-size: 22px;
            margin: 0;
        }


        .card-body {
            padding: 26px;
        }

        p {
            margin: 0 0 14px;
            font-size: 15px;
            line-height: 1.6;
            color: #444;
        }

        .success-box {
            background: #f0fbf8;
            border-left: 4px solid #2D7C89;
            padding: 14px 16px;
            border-radius: 8px;
            margin: 16px 0;
            font-size: 15px;
        }

        .play-count {
            font-size: 18px;
            font-weight: 700;
            color: #2D7C89;
            margin-top: 8px;
        }

        .btn {
            display: inline-block;
            padding: 14px 26px;
            border-radius: 10px;
            text-decoration: none;
            background: rgba(229, 106, 58, 0.95);
            color: #fff !important;
            text-transform: uppercase;
            font-weight: 800;
            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .meta {
            font-size: 13px;
            color: #666;
            margin-top: 18px;
        }

        .footer {
            background: #fafafa;
            padding: 16px 20px;
            text-align: center;
            font-size: 13px;
            color: #888;
            border-top: 1px solid #eee;
        }

        @media only screen and (max-width: 520px) {
            .card-body {
                padding: 20px;
            }
        }
    </style>
</head>

<body>
<table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
        <td align="center">
            <div class="container">
                <div class="card">

                    <!-- Header -->
                    <div class="card-header">

                        <!-- Banner -->
                        <img
                                src="{{asset('assets/images/banner-final.png')}}"
                                alt="Minigame Banner"
                                class="banner"
                        >

                        <!-- Logo + Title -->
                        <div class="header-content">
                            <a target="_blank" href="{{ url('/') }}">
                                <img src="{{asset('assets/images/logo.png')}}" alt="Minigame">
                            </a>
                            <h1>🎉 Chúc mừng bạn đã nhận được phần thưởng Minigame!</h1>
                        </div>

                    </div>

                    <!-- Body -->
                    <div class="card-body">
                        <div class="info" style="margin-bottom: 1rem">
                            <p style="margin: 0">Thông tin tham gia:</p>
                            @if(!empty($contact['fullname']))
                                <p style="margin: 0">Họ và Tên: {{$contact['fullname']}}</p>
                            @endif
                            @if(!empty($contact['email']))
                                <p style="margin: 0">Email: {{$contact['email']}}</p>
                            @endif
                            @if(!empty($contact['phone']))
                                <p style="margin: 0">Số điện thoại: {{$contact['phone']}}</p>
                            @endif
                        </div>
                        <div class="reward-modal-body">
                            <img src="{{asset($reward['image'])}}" class="reward-image"/>
                            <p class="reward-title">
                                Chúc mừng bạn đã trúng
                            </p>
                            <p class="reward-name">{{ $reward['name'] }}</p>
                            <div class="reward-desc">
                                @switch($reward['code'])
                                    @case('SECOND_PRIZE_CAMERA')
                                    @case('THIRD_PRIZE_MIBAND')
                                    @case('CONSOLATION_PILLOW')
                                        <p> 📞 <strong>BTC Bamozo</strong> sẽ liên hệ qua số điện thoại đã đăng ký để  <strong>xác nhận và hướng dẫn nhận quà</strong>. </p>
                                        <p style="margin-bottom:0;"> <span>⏰</span> <strong>Thời gian liên hệ và trao quà dự kiến:</strong><br> Trong vòng <strong> 7 ngày làm việc</strong> kể từ khi kết thúc minigame. </p>
                                        @break
                                    @case('FIRST_PRIZE_GOLD')
                                        <p> <span>⏰</span> <strong>Thời gian quay số:</strong> 28/02 </p>
                                        <p style="margin-bottom:0;"> <span>📣</span> Công bố trực tiếp tại <strong>Fanpage chính thức của Bamozo</strong>.<br> Người trúng giải sẽ được BTC liên hệ trực tiếp trong vòng <strong>07 ngày làm việc</strong> để xác nhận và trao thưởng </p>
                                        @break
                                @endswitch
                            </div>
                        </div>
                        <div class="reward-modal-footer" style="margin-bottom: 1rem;">
                            <a class="btn btn-orange-theme flex-fill text-uppercase" target="_blank" href="https://bamozo.vn/">ĐÃ HIỂU & GHÉ THĂM BAMOZO</a>
                        </div>

                        <p style="color:#666;"> Thời gian trúng thưởng:{{ $sent_at->timezone('Asia/Ho_Chi_Minh')->format('d/m/Y H:i') }} </p>

                        <p> Một lần nữa xin chúc mừng bạn <span>🎉</span><br> Chúc bạn luôn may mắn và có thật nhiều niềm vui cùng Minigame! </p>

                        <p> Trân trọng,<br> <strong>{{ config('app.name') }}</strong></p>
                    </div>

                    <!-- Footer -->
                    <div class="footer">
                        © {{ date('Y') }} {{ config('app.name') }} — All rights reserved.<br>
                        Hỗ trợ: <a href="mailto:support@ktechsupport@gmail.com">support@ktechsupport@gmail.com</a>
                    </div>

                </div>
            </div>
        </td>
    </tr>
</table>
</body>
</html>
