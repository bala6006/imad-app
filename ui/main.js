/**console.log('Loaded!');

var ele=document.getElementById('testing');
ele.innerHTML='HI BALA';
var img=document.getElementById('madi');
var marginL=0;
var left=0;
function marginLeft()
{
    left=left+10;
    img.style.marginLeft=left+"px";
}
function marginRight()
{
    marginL=marginL+10;
    img.style.marginRight=marginL + 'px';
    img.onclick=function(){
      var interone=setInterval(marginLeft,100);  
    };
}
img.onclick=function(){
  var inter=setInterval(marginRight,100);
};**/

var button=document.getElementById('counter'); 
//var counter=0;

button.onclick=function(){
    //alert('onclick');
    //create request object
    var request=new XMLHttpRequest();
    //alert(request);
    //get response to store var
    
    request.onreadystatechange=function()
    {
       // alert('function');
       // if(request.readystate==XMLHttpRequest.DONE)
        //{
            //alert('before enter');
            if(request.status==200)
            {
        var counter=request.responseText;
       // alert('processing : '+counter);
        var span=document.getElementById("one");
        span.innerHTML=counter.toString();
        }
       // }
    };
    //MAKE REQUEST
    //alert('before make');
    request.open('GET','http://gbala6006.imad.hasura-app.io/counter',true);
    request.send(null);
    //alert('after make');
   
   
   // counter=counter+1;
    //var span=document.getElementById("one");
    //span.innerHTML=counter.toString();
  
};

var inp=document.getElementById("name");
//alert('inp');
var nam=inp.value;
//alert(nam);
var sut=document.getElementById("sub");
//alert(sub);
sut.onclick=function(){
    //alert('before');
    var names=['name1','name2','name3','name4'];
    var list="";
   // alert('before for');
    //alert(names.length);
   for(var i=0;i<names.length;i++){
      // alert('inside for');
    list+='<li>'+names[i]+'<li>';
   }
   var lis=document.getElementById("listname");
   lis.innerHTML=list;
};

