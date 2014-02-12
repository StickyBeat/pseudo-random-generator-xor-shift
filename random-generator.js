
function RandomGenerator( seed ){

	this.x = 123456789;
	this.y = 362436069;
	this.z = 521288629;
	this.w = seed || 88675123;

	this.random = function(){

		var t = ( this.x ^ (this.x << 11) ) & 0x7fffffff;
		
		this.x = this.y;
		this.y = this.z;
		this.z = this.w;
		
		this.w = ( this.w ^ (this.w >> 19) ^ ( t ^ ( t >> 8 )) );
		
		return this.w;
	};

	this.setSeed = function( seed ){
		this.w = seed;
	};
}
