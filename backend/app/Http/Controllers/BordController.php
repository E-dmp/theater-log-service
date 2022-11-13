<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBordRequest;
use App\Http\Requests\UpdateBordRequest;
use App\Models\Bord;
use App\Models\User;

class BordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        return Bord::where('user_id', $user->id)->paginate(20);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBordRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBordRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Bord  $bord
     * @return \Illuminate\Http\Response
     */
    public function show(Bord $bord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBordRequest  $request
     * @param  \App\Models\Bord  $bord
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBordRequest $request, Bord $bord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bord  $bord
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bord $bord)
    {
        //
    }
}
