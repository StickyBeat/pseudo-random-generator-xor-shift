<?php

include'random-generator.class.php';

header('Content-Type: text/plain');

$seed = 12345;
$generator = new RandomGenerator( $seed );

echo "seed : $seed\n";

for( $n=0; $n<100; $n++ ){

	$value = $generator->random() % 100;

	echo "$n : $value\n";
}

?>