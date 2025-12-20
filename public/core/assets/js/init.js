var token = jQuery('meta[name="csrf-token"]').attr('content');
var urlHome = jQuery('meta[name="url-home"]').attr('content');
var currency = jQuery('meta[name="currency"]').attr('content');
var positionCurrency = jQuery('meta[name="position_currency"]').attr('content');

function generateUID(prefix = '') {
    return prefix + Math.floor(Math.random() * 26) + Date.now();
}

function input_format_number(value) {
    value = value.replace(/\D/g, '');

    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}


function msgSuccess(text)
{
    $.toast({
        heading: window.__trans('success'),
        text: text,
        position: 'top-right',
        icon: 'success',
        hideAfter: 5000
    });
}

function msgError(text)
{
    $.toast({
        heading: window.__trans('fail'),
        text: text,
        position: 'top-right',
        icon: 'error',
        hideAfter: 10000
    });
}

function msgWarning(text)
{
    $.toast({
        heading: window.__trans('warning'),
        text: text,
        position: 'top-right',
        icon: 'warning',
        hideAfter: 10000
    });
}

function handleAjaxError(errors) {
    console.log(errors);
    if (errors.status == 416 || errors.status == 422) {
        $.map(errors.responseJSON.errors, function(value) {
            value.forEach(element => {
                msgError(element);
            })
        })
    } else {
        if(errors.responseJSON.error == true)
        {
            msgError(errors.responseJSON.msg);
        }else if(errors.status == 500)
        {
            msgError(errors.responseJSON.message ? errors.responseJSON.message : (errors.statusText ? errors.statusText : errors.responseText));
        }else {
            msgError(errors.responseJSON.message ? errors.responseJSON.message : errors.responseJSON.msg);
        }
    }
}

function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Dùng Clipboard API nếu trình duyệt hỗ trợ
        navigator.clipboard.writeText(text).then(() => {
            msgSuccess(window.__trans('copySuccess'));
        }).catch(err => {
            console.error('Lỗi khi copy:', err);
        });
    } else {
        // Dùng phương pháp cũ nếu Clipboard API không hỗ trợ
        var input = $('<textarea>').val(text).appendTo('body').select();
        try {
            document.execCommand('copy');
            msgSuccess(window.__trans('copySuccess'));
        } catch (err) {
            console.error('Lỗi khi copy:', err);
        }
        input.remove();
    }
}

$(document).on("submit", "form.block-double-click", function(){
    addOverlayLoading(this);
});

$(document).on('click', '.copy-text', function() {
    var text = $(this).data('text');
    copyText(text);
});

$(document).on('keyup', '.inp-number-format', function() {
    var value = $(this).val();
    $(this).val(input_format_number(value));
})

$(document).ready(function () {

    $(".toggle-password").click(function() {
        
        var inp = $(this).siblings('input');

        if(inp.attr('type') == 'text')
        {
            inp.attr('type', 'password');
        }else {
            inp.attr('type', 'text');
        }

        $(this).toggleClass('show');
    });
    
    select2LoadDataMany();
});