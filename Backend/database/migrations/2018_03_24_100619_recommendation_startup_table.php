<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RecommendationStartupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recommendation_startup', function (Blueprint $table) {
            $table->integer('recommendation_id')->unsigned();
            $table->integer('startup_id')->unsigned();
        });

        Schema::table('recommendation_startup', function (Blueprint $table) {
            $table->foreign('recommendation_id')->references('id')->on('startups')->onDelete('cascade');
            $table->foreign('startup_id')->references('id')->on('startups')->onDelete('cascade'); 
            
            $table->primary(['recommendation_id', 'startup_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recommendation_startup');
    }
}
