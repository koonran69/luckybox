<?php

namespace Domains\Admin\Observers;

use Domains\Admin\Models\Admin;
use Domains\Core\Enums\DefaultStatus;
use Domains\Core\Enums\Gender;

class AdminObserver
{
    public function creating(Admin $admin)
    {
        $admin->username = $admin->email;
        $admin->avatar = 'assets/images/avatar-user.png';
        $admin->status = DefaultStatus::Published;
        $admin->gender = Gender::Male;
    }

    /**
     * Handle the Admin "created" event.
     */
    public function created(Admin $admin): void
    {
        //
    }

    /**
     * Handle the Admin "updated" event.
     */
    public function updated(Admin $admin): void
    {
        //
    }

    /**
     * Handle the Admin "deleted" event.
     */
    public function deleted(Admin $admin): void
    {
        //
    }

    /**
     * Handle the Admin "restored" event.
     */
    public function restored(Admin $admin): void
    {
        //
    }

    /**
     * Handle the Admin "force deleted" event.
     */
    public function forceDeleted(Admin $admin): void
    {
        //
    }
}
