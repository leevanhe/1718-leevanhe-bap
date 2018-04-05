<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConnectionStartupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('connection_startup', function (Blueprint $table) {
            $table->integer('connection_id')->unsigned();
            $table->integer('startup_id')->unsigned();
        });

        Schema::table('connection_startup', function (Blueprint $table) {
            $table->foreign('connection_id')->references('id')->on('startups')->onDelete('cascade');
            $table->foreign('startup_id')->references('id')->on('startups')->onDelete('cascade'); 
            
            $table->primary(['connection_id', 'startup_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('connection_startup');
    }
}
