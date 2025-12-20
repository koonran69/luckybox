<?php

namespace Domains\Core\Responses;

use Illuminate\Support\Facades\Response;

class ResponseMacros
{
    public static function register()
    {
        Response::macro('ajax', function (bool $error = false, string|null $msg = null, $data = null, $statusCode = 200) {
            return response()->json([
                'error' => $error,
                'msg' => $msg ?: ($error ? trans('notifyFail') : trans('notifySuccess')),
                'data' => $data
            ], $statusCode);
        });
    }
}