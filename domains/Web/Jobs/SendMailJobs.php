<?php

namespace Domains\Web\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendMailJobs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $template;
    public $data;
    public $title;
    public function __construct($template, $data = [],$title)
    {
        $data['url_web'] = get_url_host();

        $this->template = $template;
        $this->data = $data;
        $this->title = $title;
    }
    public function handle()
    {
        $template = $this->template;
        $data = $this->data;
        $title = $this->title;
        $templateMail = 'mails.mail-' . $template;
        $emailTo = $data['contact']['email'];

        Mail::send($templateMail, $data, function ($msg) use ($data, $title, $emailTo) {
            $msg->from(env('MAIL_FROM_ADDRESS', 'no-reply@gmail.com'), env('MAIL_FROM_NAME', 'Bamozo'));

            $msg->to($emailTo)->subject($title);
        });
    }
}
