<?php

namespace Tests\Feature;

use App\Models\Bord;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class BordTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    use RefreshDatabase;

       public function setUp(): void
    {
        parent::setUp();
        $user = User::factory()->create(['id' => 1]);
        $bords = Bord::factory()->count(10)->for($user)->create();
        // dd($bords);
    }
    public function test_5_items_in_one_page()
    {

        // json
        $response = $this->getJson('/api/v1/users/1/bords');
        
        $response->dump();
        // $response->assertStatus(200);
        $response->assertJson(
            fn (AssertableJson $json) =>
            $json->has('data',5)->etc()
        );
    }
    
}
