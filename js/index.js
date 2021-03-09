class Slider{
	constructor(){
		this.data = [
		    {
		          city: 'Rostov-on-Don LCD admiral',
		          area: '81 m2',
		          time: '3.5 months',
		          cost: 'Upon request',
		          img: 'img/image2.1.png'
		    },
		   {
		          city: 'Sochi Thieves',
		          area: '105 m2',
		          time: '4 months',
		          cost: 'Upon request',
		          img: 'img/image2.png'
		    },
		    {
		          city: 'Rostov-on-Don Patriotic',
		          area: '93 m2',
		          time: '3 months',
		          cost: 'Upon request',
		          img: 'img/image3.png'
		    }
	      ];
	      this.idx = 0;
	      this.left_arrow = document.getElementById("left");
	      this.right_arrow = document.getElementById("right");
	      this.cost = document.getElementById("cost");
	      this.city = document.getElementById("city");
	      this.area = document.getElementById("area");
	      this.time = document.getElementById("time");
	      this.points = [document.getElementById("first"), document.getElementById("second"), document.getElementById("third")];
	      this.points[0].classList.toggle("active");
	      this.slide = document.querySelectorAll("#slide");;
	      this.points[0].onclick = ()=>{
	      	for(let point of this.points){
	      	      point.classList.remove("active");
	      	} 
	      	  this.points[0].classList.toggle("active");
	 	  this.show(0, 0);
	      };
	        this.points[1].onclick = ()=>{
	      	for(let point of this.points){
	      	      point.classList.remove("active");
	      	}
		this.points[1].classList.toggle("active");
	      	this.show(1, 1);
	      };
	        this.points[2].onclick = ()=>{
	      	for(let point of this.points){
	      	      point.classList.remove("active");
	      	}
	      		      	  this.points[2].classList.toggle("active");
	      	  this.show(2, 2);
	      };
	       this.left_arrow.onclick = () => {
      	if (this.idx == 0){
      		this.show(0, this.data.length - 1);
      	} else {
      		this.show(this.idx, this.idx - 1);
      	}
      }
      this.right_arrow.onclick = () => {
      	if (this.idx == this.data.length - 1){
      		this.show(this.data.length - 1, 0);
      	} else {
      		this.show(this.idx, this.idx + 1);
      	}
      }
	      this.show(this.idx, this.idx);
   }   
      show(prev, curr){
      	this.points[prev].classList.toggle("active");
      	this.points[curr].classList.toggle("active");
      	this.idx = curr;
      	this.cost.textContent = this.data[this.idx].cost;
      	this.time.textContent = this.data[this.idx].time;
      	this.area.textContent = this.data[this.idx].area;
      	this.city.textContent = this.data[this.idx].city;
      	for (let slide of this.slide){
      		slide.setAttribute("src", this.data[this.idx].img);
      	}
      }
     
}
slider = new Slider();
console.log("started");
