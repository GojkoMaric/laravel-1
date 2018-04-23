<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller
{
    public function index(){
        return view('index');
    }

    public function getTodos() {
        return Todo::all();
    }

    public function postTodo(Request $request){
        $todo = Todo::create([
            'text' => $request['text'],
            'priority' => $request['priority'],
            'done' => $request['done']
        ]);
        return $todo;
    }

    public function destroyTodo($id){
        $destroyTodo = Todo::destroy($id);
        return Todo::all();
    }

    public function updateTodo(Request $request, $id){
        $todo = Todo::findOrFail($id);
        $todo->update([
            'text' => $request['text'],
            'priority' => $request['priority'],
            'done' => $request['done']
        ]);
        return Todo::all();
    }

}
