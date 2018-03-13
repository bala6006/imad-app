console.log('Loaded!');

var ele=document.getElementById('testing');
ele.innerHTML='HI BALA';
var img=document.getElementById('madi');

function moveR()
{
    var left=left+10;
    img.style.marginLeft=left+"px";
}
img.onclick=function(){
  var inter=setInterval(moveR,100);
};

