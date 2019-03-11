function show(obj){
           obj.onclick=function(){
               var i=obj.getAttribute('id');
               var neirong=document.getElementsByName('neirong');
               var biaoti=document.getElementsByName('biaoti');
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
           var title=document.getElementById('title');
           for(var i=0;i<title.childNodes.length;i++){
               show(title.childNodes[i]);
           }
         }