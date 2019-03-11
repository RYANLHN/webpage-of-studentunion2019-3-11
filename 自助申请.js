window.onscroll=function shosdf(){
     
      var footer=document.getElementById('footer');
      if (document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight) {
        footer.className='footer2';
      }else if(document.documentElement.scrollTop+document.documentElement.clientHeight<document.documentElement.scrollHeight){
        footer.className='footer';
      }
     
}


function guiding() {
	alert('请遵守以下规定')// body...
}

function zhankai(){
var zuzhi=document.getElementById('input-zuzhi-1').value;
var neirong=document.getElementById('input-neirong-1').value;
var riqi=document.getElementById('input-riqi-1').value;
	if(zuzhi=='' || neirong=='' || riqi==''){
	alert('不能提交空白申请哦！')
}else{
	var map=document.getElementById('map');
	map.className='map-zhong-5';
	var shenqing=document.getElementById('shenqing');
	shenqing.className='map-zhong-6';
}
}



function haibaotijiao(){

var tips=document.getElementById('tips');
var location=tips.innerHTML;	
var zuzhi=document.getElementById('input-zuzhi-1').value;
var neirong=document.getElementById('input-neirong-1').value;
var riqi=document.getElementById('input-riqi-1').value;

if (tips.childNodes.length>3) {
	alert('一次只能选三个宣传栏哦！不要太心急！')
}else if (tips.childNodes.length<1) {
    alert('请选择您想申请的宿舍楼栋！')
}else if(zuzhi=='' || neirong=='' || riqi=='')
{alert('同学，您有信息漏填了哟！')}else{
	var map=document.getElementById('map');
	map.className='map-zhong-3';

    var shenqing=document.getElementById('shenqing');
	shenqing.className='map-zhong-7';

	var zuzhi=document.getElementById('input-zuzhi-1').value;
var fabu=document.getElementById('map-zhong-gonggao');
var shijian=document.getElementById('input-riqi-1').value;
var huizhi=fabu.childNodes.length;
	var newnode=document.createElement('div');
newnode.className='map-zhong-gonggao-1'
newnode.innerHTML='<div class="map-zhong-gonggao-1-logo">批条</div><div class="map-zhong-gonggao-1-text"><div class="map-zhong-gonggao-1-text1">'+'申请组织:'+zuzhi+'</div><div class="map-zhong-gonggao-1-text1">'+'申请地点：'+location+'</div><div class="map-zhong-gonggao-1-text1">'+'张贴时间：'+shijian+'</div><div class="map-zhong-gonggao-1-text2">'+huizhi+'</div></div>'

fabu.insertBefore( newnode,fabu.childNodes[0]);

}

}
 


function select(obj){
	obj.onclick=function(){
		var tips=document.getElementById('tips');
	    var ming=obj.getAttribute('id');
   if (obj.className=='sushe-box-select') {
      obj.className='sushe-box';
        var thisloudong=document.getElementById('0'+ming);
        tips.removeChild(thisloudong);
   }else{
   	obj.className='sushe-box-select';
   var loudong=document.createElement('span');
   loudong.id=('0'+ming);
   tips.appendChild(loudong);
   var name=ming.toString();
   loudong.innerHTML=(name.substring(5)+'栋、');
   
   }
	}
	
	
   
}


window.onload=function(){
	var sushe=document.getElementsByName('sushe');
for(var i=0;i<sushe.length;i++){
	select(sushe[i]);
	
}
}


function fantang(){
	alert('老铁，你还想贴饭堂里面？')
}