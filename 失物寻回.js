
function contacte(obj){
obj.onclick=function(){
	var number=obj.childNodes[5].innerHTML;
	alert('联系：'+number);
}
}

function ss(){
	var fabu=document.getElementsByClassName('shiwu-zhong-3-02-fabu');
	for(var j=0;j<fabu.length;j++){
		contacte(fabu[j]);
	}
}



function fabu(){
	var fabu=document.getElementById('shiwu-zhong-2');
if (fabu.className=='shiwu-zhong-2') {
	fabu.className='shiwu-zhong-20';
}else{
	fabu.className='shiwu-zhong-2';
}
}

function tijiao(){
	var date=document.getElementById('fabu-date').value;
	var loca=document.getElementById('fabu-location').value;
	var locade=document.getElementById('fabu-location-detail').value;
	var kind=document.getElementById('fabu-kind').value;
	var detail=document.getElementById('fabu-detail').value;
	var zhuangtai=document.getElementById('fabu-zhuangtai').value;
	var number=document.getElementById('contact').value;
	var re=/\d{11}/g;
   if (date=='') {date='不知道什么时候'}
   	if (locade=='') {locade='不知道什么地方'}

 if (detail=='') {
 	alert('起码要填写物品长什么样哦！')
 }else if(re.test(number)==false){alert('请输入正确的联系电话！')}
 else{
 	var newnode=document.createElement('div');
	newnode.className='shiwu-zhong-3-02-fabu';
	var newnode1=document.createElement('div');
	newnode1.className='fabu-gonggao-1';
	newnode1.innerHTML=date+'，';
	var newnode2=document.createElement('div');
	newnode2.className='fabu-gonggao-2';
	newnode2.innerHTML='在'+loca+'的'+locade+'，';
	var newnode3=document.createElement('div');
	newnode3.className='fabu-gonggao-3';
	newnode3.innerHTML=zhuangtai;
	var newnode4=document.createElement('div');
	newnode4.className='fabu-gonggao-4';
	newnode4.innerHTML='样式为'+detail;
	var newnode5=document.createElement('div');
	newnode5.className='fabu-gonggao-5';
	newnode5.innerHTML='的'+kind;
	var newnode6=document.createElement('div');
	newnode6.className='fabu-gonggao-6';
	newnode6.innerHTML=number;

	newnode.appendChild(newnode1);
	newnode.appendChild(newnode2);
	newnode.appendChild(newnode3);
	newnode.appendChild(newnode4);
	newnode.appendChild(newnode5);
	newnode.appendChild(newnode6);

	var fabu=document.getElementById('shiwu-zhong-3-02');
	fabu.insertBefore(newnode,fabu.childNodes[0]);

	ss();



 }
	
}


function jiansuo(){
	var location=document.getElementById('fabu-location-1').value;
	var kind=document.getElementById('fabu-kind-1').value;
	var zhuangtai=document.getElementById('fabu-zhuangtai-1').value;
	var fabu=document.getElementById('shiwu-zhong-3-02');
    if (location=='所有') {var slo='的'}else{var slo=location};
    if (kind=='所有') {var sk='的'}else{var sk=kind};
    if (zhuangtai=='所有') {var sz='的'}else{var sz=zhuangtai};
 
	for (var i = 0; i <fabu.childNodes.length; i++) {
		fabu.childNodes[i].className='shiwu-zhong-3-02-fabu' ;
         if (fabu.childNodes[i].innerHTML.search(slo)==-1||fabu.childNodes[i].innerHTML.search(sk)==-1||fabu.childNodes[i].innerHTML.search(sz)==-1) {
			fabu.childNodes[i].className='shiwu-zhong-3-02-fabu1'
		 }     
		
      	
      	
      
	}
      
}



