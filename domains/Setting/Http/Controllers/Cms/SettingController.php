<?php

namespace Domains\Setting\Http\Controllers\Cms;

use Domains\Cms\Http\Controllers\Controller;
use Domains\Core\Enums\Setting\SettingGroup;
use Domains\Core\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function __construct(
        public Setting $model
    ) {}

    public function index($group)
    {
        $settings = $this->model->getBy(filter: [
            'group' => $group
        ], sort: ['id', 'asc']);

        $breadcrumb = $this->breadcrumb()->add(SettingGroup::tryFrom($group)?->description());

        return view('cms.settings.index', compact('settings', 'breadcrumb'))

        ->with('input_switch', $this->model->getInputSwitch($settings));
    }

    public function update(Request $request)
    {
        $data = $request->except('_token', '_method', 'submitter');

        if ($request->has('input_switch'))
        {
            $data['input_switch'] = json_decode($data['input_switch'], true);

            foreach ($data['input_switch'] as $value)
            {
                $data[$value] = isset($data[$value]);
            }

            unset($data['input_switch']);
        }

        $this->model->updateMultipleRecord($data);

        return utilities()->responseBack();
    }
}
