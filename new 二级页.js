function show(obj){
           obj.onclick=function(){
               var i=obj.getAttribute('id');
               var erjiye=document.getElementsByName('erjiye');
               var bankuai=document.getElementsByName('bankuai');
               bankuai[i].className='caidan-zhong-select';
               erjiye[i].className='show';
                for(var j=0;j<erjiye.length;j++){  
                   if(j!=i){erjiye[j].className='hide';
                       bankuai[j].className='caidan-zhong-1';
                   } 
                   
               } 
           }
       } 



function sshow(obj){
           obj.onclick=function(){
               var i=parseInt(obj.getAttribute('id'));
               var r=parseInt(obj.parentNode.getAttribute('id'))
               var aa=String('neirong'+r)
               var bb=String('biaoti'+r)
               var neirong=document.getElementsByName(aa);
               var biaoti=document.getElementsByName(bb);
               biaoti[i].className='actived';
               neirong[i].className='show';
                for(var j=0;j<neirong.length;j++){  
                   if(j!=i){neirong[j].className='hide';
                        biaoti[j].className='';
                   } 
                   
               } 
           }
       } 

window.onload=function(){
           var allbankuai=document.getElementById('allbankuai');
           for(var i=0;i<allbankuai.childNodes.length;i++){
               show(allbankuai.childNodes[i]);
           }
           for(var w=1;w<10;w++){
            var dd=String(w+'title')
            var title=document.getElementById(dd);
           for(var i=0;i<title.childNodes.length;i++){
               sshow(title.childNodes[i]);
           }
            
           }
         }