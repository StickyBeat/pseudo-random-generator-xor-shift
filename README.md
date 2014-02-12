pseudo-random-generator-xor-shift
=================================

A class for generating pseudo-random numbers. The plan is to port this simple code to as many programming languages as possible with identical output.

The logic is based on the Wikipedia article about XOR Shift found here: http://en.wikipedia.org/wiki/Xorshift

The article states (as of february 2014) that "This algorithm has a maximal period of 2<sup>128</sup> − 1 and passes the diehard tests.". Sounds good, eh?

Usage
-----

All code below is in JavaScript. Other languages should work very similarly.

Start by creating an instance of the class, optionally passing a seed. Not passing a seed will use the seed 88675123 (not a random seed).

	generator = new RandomGenerator( 12345 );

Then call the random() method on the instance. This will return a positive integer that can be quite large (in the range of zero to 0x7fffffff), so you will typically want to use the modulus (%) or binary and (&) operator to narrow it down to the wanted range. Using a binary and should be a little faster, but will only work with "power of 2" ranges.

	value = generator.random() % 100; // an integer in the range of 0 - 99.

	value = generator.random() & 255; // an integer in the range of 0 - 255. 

If you want to set or reset the seed on a previously created instance, you can do so with the setSeed() method:

	generator.setSeed( 12345 );

Languages so far
----------------

- JavaScript
- PHP
