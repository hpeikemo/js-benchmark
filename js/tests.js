var BM = Benchmark;

var ITERATIONS = 1000000;

var entireSuite = BM.create("Entire testsuite");

BM.run(entireSuite)

BM.doOnce("Descending for loop",function() {
	var i = ITERATIONS;
	while(i--) {
	}
});

BM.doOnce("Descending while loop",function() {
	for (var i = ITERATIONS - 1; i >= 0; i--){
	}
});

BM.doRepeated(" Empty repeated test ", ITERATIONS, function(){
	
	var n = 0;
	
})

BM.doRepeated(" PI divided by two ", ITERATIONS, function(){
		
		var n = Math.PI / 2;
	
});

BM.doRepeated(" PI multiplied 0.5 ", ITERATIONS, function(){
	
		var n = Math.PI * 0.5;
	
});


BM.end(entireSuite);

BM.reportAndResetAll();

