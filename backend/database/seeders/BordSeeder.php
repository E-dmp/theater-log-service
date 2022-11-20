<?php

namespace Database\Seeders;

use App\Models\Bord;
use App\Models\User;
use Illuminate\Database\Seeder;

class BordSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
           // 作成する`TaskCard`が属する`User`を事前に作成
    $user = User::factory()->create();

    // 'User'に属するデータを10件生成
    Bord::factory()->count(1)->for($user)->create();
    }
}
