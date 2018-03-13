console.log('Loaded!');

var ele=document.getElementById('testing');
ele.innerHTML='HI BALA';
var img=document.getElementById('madi');
var marginLeft=0;
function marginRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick=function(){
  var inter=setInterval(marginRight,100);
};

