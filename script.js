var vm = new Vue({
	el: "#app",
	data: {
		D: 0,
		a: 1,
		b: 1,
		txt: 0,
		num: 0,
		num2: 0
		
		
	}
	
	});

	vm.$watch(function(){return [this.a,this.b];}, function(){
		
		this.D=this.a*this.a-4*this.b;
		var strin="x^2+("+this.a+")*x+("+this.b+")";



		functionPlot({
		target: "#plot",
		data: [{
			fn:strin
		}],
		grid:true
		});


		if(this.D<0){
			this.txt="Решений нет!";
		}
		if(this.D==0){
			this.txt="x= "+-this.a/2;
		}
		if(this.D>0){

			this.num=-(this.a-Math.sqrt(this.b))/2;
			this.num2=-(this.a+Math.sqrt(this.b))/2;
			this.txt="x1= "+this.num+"   "+"x2= "+this.num2;
		}
	});
	
