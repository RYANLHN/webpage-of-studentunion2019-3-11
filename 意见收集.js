window.onscroll=function shosdf(){
     
      var footer=document.getElementById('footer');
      if (document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight) {
        footer.className='footer2';
      }else if(document.documentElement.scrollTop+document.documentElement.clientHeight<document.documentElement.scrollHeight){
        footer.className='footer';
      }
     
}



function cha(){
  
  var fabuzhong=document.getElementById('fabu-zhong');
    var newnode=document.createElement('div');
    var wenti=document.getElementById('wenti').value;
    var banfa=document.getElementById('banfa').value;
    var xiaoqu=document.getElementById('xiaoqu').value;

    if (wenti=='') {
      alert('发现的问题一定要填写哦！')
    }else{

      var yijian=document.getElementById('yijian');
  yijian.className='yijian1';
  
      newnode.className='fabu-zhong-1';
  var  newnodeuser=document.createElement('div');
  newnodeuser.className='fabu-zhong-1-user';
  var  newnodetext=document.createElement('div');
  newnodetext.className='fabu-zhong-1-text';
  newnodetext.innerHTML='<div>'+'发现问题：'+'<br>'+'<div class="fabu-zhong-1-text-wen">'+wenti+'</div>'+'</div><div>'+'<div class="fabu-zhong-1-text-wen">'+banfa+'</div></div>'+'<div class="fabu-zhong-1-text-xq">'+'--来自'+xiaoqu+'<div>';
  var  newnodepic=document.createElement('div');
  newnodepic.className='fabu-zhong-1-pic';
  var  newnodezan=document.createElement('div');
  newnodezan.className='fabu-zhong-2';
  newnodezan.innerHTML='<div class="fabu-zhong-2-text"><span>有</span><span>0</span><span>人跟随</span></div><a name="zan" class="fabu-zhong-2-button1" onclick="zan(this)">赞</a><a  class="fabu-zhong-2-button2" onclick="del(this)">删除</a>'
  newnode.appendChild(newnodeuser);
  newnode.appendChild(newnodetext);
  newnode.appendChild(newnodepic);
  newnode.appendChild(newnodezan);
  fabuzhong.insertBefore(newnode,fabuzhong.childNodes[0]);
    }
  
}

function del(obj){
  obj.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode)
}


function zan(obj){

  var dzs=obj.previousSibling.childNodes;
  var x=parseInt(dzs[1].innerHTML);
     if(obj.innerHTML.match('不')){
    obj.innerHTML='赞';
    x--;
  }
  else{
    obj.innerHTML='不赞';
    x++;  
  }
  dzs[1].innerHTML=x;
  }
 







  

