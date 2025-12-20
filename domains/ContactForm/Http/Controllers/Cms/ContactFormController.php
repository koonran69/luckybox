<?php

namespace Domains\ContactForm\Http\Controllers\Cms;

use Domains\Cms\Http\Controllers\Controller;
use Domains\ContactForm\DataTables\ContactFormDataTable;
use Domains\ContactForm\Enums\ContactFormStatus;
use Domains\ContactForm\Models\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{

    public function __construct(
        public ContactForm $model
    ) {
        
    }

    public function index(ContactFormDataTable $datatable)
    {
        return $datatable->render('cms.contactforms.index', [
            'status' => ContactFormStatus::asSelectArray(),
            'breadcrumb' => $this->breadcrumb()->addByRouteName(__('Liên hệ'))
        ]);
    }

    public function edit($id)
    {
        $data = $this->model->findOrFail($id);

        return view('cms.contactforms.modals.edit', [
            'data' => $data,
            'status' => ContactFormStatus::asSelectArray(),
        ]);
    }

    public function update(Request $request)
    {
        $this->model->findOrFail($request->input('id'))
        ->update([
            'status' => $request->enum('status', ContactFormStatus::class)
        ]);

        return utilities()->responseAjax();
    }

    public function updateMultiple(Request $request)
    {
        $query = $this->model->makeQuery([['id', 'in', $request->array('ids')]]);
        
        if($request->input('action') == 'delete')
        {
            $query->delete();

        }else if($request->enum('action', ContactFormStatus::class)) {

            $query->update(['status' => $request->enum('action', ContactFormStatus::class)]);
        }
        
        return utilities()->responseBack();
    }

    public function delete($id)
    {
        try {
            $this->model->findOrFail($id)->delete($id);

            if (request()->ajax()) {
                return utilities()->responseAjax();
            }

            return utilities()->toRoute('cms.contactform.index');

        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
