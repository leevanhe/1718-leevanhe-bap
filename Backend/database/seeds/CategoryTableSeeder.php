<?php

use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert(array(
            array('name'=>'Wholesale and retail'),
            array('name'=>'Education'),
            array('name'=>'Business services'),
            array('name'=>'Social services'),
            array('name'=>'Construction'),
            array('name'=>'Transport, logistics and mail'),
            array('name'=>'Public administrations'),
            array('name'=>'Metal'),
            array('name'=>'healthcare'),
            array('name'=>'Catering and tourism'),
            array('name'=>'Employment agencies and job placement services'),
            array('name'=>'Drinks, food and tabak'),
            array('name'=>'Chemistry, rubber and plastics'),
            array('name'=>'Primary sector'),
            array('name'=>'Financial services'),
            array('name'=>'Informatics, media and telecom'),
            array('name'=>'Service and to people'),
            array('name'=>'Relaxation, culture and sport'),
            array('name'=>'Textiles, clothing and footwear'),
            array('name'=>'Energy, water and waste disposal'),
            array('name'=>'Graphic industry, paper and cardboard'),
            array('name'=>'Wood and furniture industry'),
            array('name'=>'Manufacture of building materials'),
            array('name'=>'Other services'),
            array('name'=>'Other industry'),
        ));
    }
}
