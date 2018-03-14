<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Http\FormRequest;

class CreateStartup extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth::user(['role_id' => 1]))
        {
            return true;
        }
        
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //user
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',

            //adress
            'line1' => 'required|string',
            'city' => 'required|string',
            'ZIP' => 'required|numeric|digits_between:3,9',
            'country' => 'required|string',

            //startup
            'name' => 'required|string',
            'description' => 'required',
            'website' => 'required|url',
            'employees' => 'required|numeric',
            'start' => 'required|date|after:2015-01-01',
        ];
    }

    public function messages() 
    {
        return [
            //voor custom tekst
        ];
    }
}
