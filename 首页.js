function sousuo() {
	var ssinput=document.getElementById('sousuo-input').innerHTML;
	// body...
}

window.onload=function () {
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var tplz=document.getElementById('tplz-zhong-1')
    var animated=false;



	function an(offset){
    animated=true;
	var newoffset=parseInt(tplz.style.top)+ offset
	var time=1000;
	var interval=20;
	var speed=offset/(time/interval);

	function go(){
		if ((speed<0 && parseInt(tplz.style.top)>newoffset) || (speed>0 && parseInt(tplz.style.top)<newoffset)) {
			tplz.style.top=parseInt(tplz.style.top)+speed+'px';
			setTimeout(go, interval);
		}
		else{
			animated=false;
			tplz.style.top=newoffset +'px';
		 if (newoffset<-915) {tplz.style.top=-305+'px'}
		 	else if(newoffset>-305){tplz.style.top=-915+'px'}

		}
	}
		go(); 
	}

    function play(){
    	timer=setInterval(function(){next.onclick();},5000);
    }
    
    function stop(){
    	clearInterval(timer);
    }

	next.onclick=function(){
      if (!animated) { an(-305)};
	}
	prev.onclick=function(){
      if (!animated) { an(305)};
	}// body...

	tplz.onmouseout =play;
	tplz.onmouseover=stop;
	play();
}


