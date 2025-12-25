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

        .card-header .header-content a img {
            margin-bottom: 6px;
            max-width: 150px;
            width: 100%;
            height: auto;
        }

        span img{
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
        <td>
            <div class="container">
                <div class="card">

                    <!-- Header -->
                    <div class="card-header"  align="center">

                        <!-- Banner -->
                        <img
                                src="{{asset('assets/images/banner-final.png')}}"
                                alt="Minigame Banner"
                                class="banner"
                                width="680"
                                style="width:100%;max-width:680px;display:block;border:0;"
                        >

                        <!-- Logo + Title -->
                        <div class="header-content">
                            <a target="_blank" href="{{ url('/') }}">
                                <img src="{{asset('assets/images/logo.png')}}" alt="Minigame" width="150"
                                     style="width:100%;max-width:150px;height:auto;display:block;margin:0 auto;">
                            </a>
                            <h1>Chúc mừng bạn đã trúng thưởng minigame từ Bamozo!</h1>
                        </div>

                    </div>

                    <!-- Body -->
                    <div class="card-body">
                        <p style="margin: 0">Chúc mừng bạn <span style="font-size:18px;">🎉</span></p>
                        @if($reward['code'] == 'FIRST_PRIZE_GOLD')
                            <p style="margin: 0">Bạn đã <strong>trúng thưởng cơ hội quay thưởng 2 chỉ vàng</strong> trong minigame "Mở vali - Nhận quà liền tay" từ Bamozo!</p>
                            <p style="margin: 0"><span style="font-size:18px;">📌</span><strong> Thông tin trao thưởng:</strong></p>
                            <p style="margin: 0">- Thời gian quay số: 28/02/2026</p>
                            <p style="margin: 0">- Kết quả được công bố trực tiếp trên Fanpage của Bamozo: <a target="_blank" href="https://www.facebook.com/bamozo/">https://www.facebook.com/bamozo/</a></p>
                            <p style="margin: 0">- <strong>BTC sẽ liên hệ trực tiếp tới người trúng thưởng trong vòng 7 ngày làm việc</strong> để xác nhận thông tin và hướng dẫn trao thưởng.</p>
                        @else
                            <p style="margin: 0">Bạn đã <strong>trúng thưởng minigame "Mở vali - Nhận quà liền tay" từ Bamozo!</strong></p>
                            <p style="margin: 0"><span style="font-size:18px;">🎁</span><strong>Phần quà của bạn:</strong></p>
                            <p style="margin: 0" class="reward-name"><strong>{{ $reward['name'] }}</strong></p>
                            <p style="margin: 0"><span style="font-size:18px;">🎁</span><strong>Thông tin trao thưởng:</strong></p>
                            <p style="margin: 0"><strong>BTC sẽ liên hệ trực tiếp tới bạn trong vòng 7 ngày làm việc</strong> để xác nhận thông tin và hướng dẫn trao thưởng.</p>
                        @endif
                        <p style="margin: 0">Vui lòng để ý điện thoại hoặc email trong thời gian này nhé.</p>
                        <p style="margin: 0">Hy vọng món quà này sẽ mang đến cho bạn thêm niềm vui và đồng hành cùng bạn trong những hành trình sắp tới <span style="font-size:18px;">💛</span></p>
                        <p style="margin: 0"><span style="font-size:18px;">👉</span>Follow ngay Fanpage để cập nhật những chương trình mới nhất của Bamozo nha: <a target="_blank" href="https://www.facebook.com/bamozo/">https://www.facebook.com/bamozo/</a></p>
                        <p style="margin: 0">--------------------------------</p>
                        <p style="margin: 0">Bamozo - Hành trang của mọi chuyến đi</p>
                        <p style="margin: 0"><span style="font-size:18px;">☎️ </span> Hotline đặt hàng: 0967.937.669 - 0988.715.698</p>
                        <p style="margin: 0"><span style="font-size:18px;">☎️ </span> CSKH: 1800 9426</p>
                    </div>

                    <!-- Footer -->
                    <div class="footer" align="center">
                        © Bản quyền thuộc về K - Solutions
                    </div>

                </div>
            </div>
        </td>
    </tr>
</table>
</body>
</html>
