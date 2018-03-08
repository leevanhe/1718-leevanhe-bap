<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('description', 1000);
            $table->dateTime('start');
            $table->dateTime('end');

            $table->unsignedInteger('adresses_id');
            $table->unsignedInteger('startup_id');
            $table->timestamps();

            $table->foreign('adresses_id')->references('id')->on('adresses');
            $table->foreign('startup_id')->references('id')->on('startups');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
