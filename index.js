var g=document.querySelector("#b3");

var linkedin=document.querySelector("#b2");

var g1=document.querySelector(".seventh");

var ballon=document.querySelector("#ba");

var arow=document.querySelector(".eight");

var arowm=document.querySelector(".nine");

var arowl=document.querySelector(".sixth");

var arow2=document.querySelector(".one");

var arowm3=document.querySelector(".ten");

g.addEventListener("mouseover",function(){
    this.style.backgroundColor="red";
});

g.addEventListener("mouseout",function(){
    this.style.backgroundColor="black";
});



linkedin.addEventListener("mouseover",function(){
       this.style.backgroundColor="blue";
       
    
});

linkedin.addEventListener("mouseout",function(){
    this.style.backgroundColor="black";
});


g1.addEventListener("mouseover",function(){
    
    ballon.style.top ="150px";
    ballon.style.color="red";
    

    
});
g1.addEventListener("mouseout",function(){
    
    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    ballon.style.color="white";
    
   

 });



arow2.addEventListener("mouseover",function(){
    
    ballon.style.top ="150px";
    ballon.style.color="red";
    
});

arow2.addEventListener("mouseout",function(){
    
    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    ballon.style.color="white";
    


 
});



arow.addEventListener("mouseover",function(){
    
    ballon.style.padding ="20px";
    ballon.style.color="red";
    
 

    
});
arow.addEventListener("mouseout",function(){
    
    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    ballon.style.padding="0%";
    ballon.style.color="white";
    
  
 
});



arowm.addEventListener("mouseover",function(){
    
    ballon.style.right ="1px";
    ballon.style.color="red";
    
    
});



arowm.addEventListener("mouseout",function(){
    
    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    ballon.style.color="white";
    
  
    
});



arowm3.addEventListener("mouseover",function(){
    
    ballon.style.right ="1px";
    ballon.style.color="red";
    
    
});



arowm3.addEventListener("mouseout",function(){
    
    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    ballon.style.color="white";
    


    
});





arowl.addEventListener("mouseover",function(){
    
    ballon.style.top ="70%";
    ballon.style.right ="90%";
   
    

    
});

arowl.addEventListener("mouseout",function(){
    
   


    ballon.style.position ="absolute";
    ballon.style.top ="50%";
    ballon.style.right ="80%";
    
    
    
});




ballon.addEventListener("mouseover",function(){
    
    ballon.style.top="70%";
    
});

ballon.addEventListener("click",function(){
   ballon.classList.add('burst');
});



for(i=0 ; i< (".x".length) ; i++)
{
    var a = document.querySelectorAll(".x")[i];
    a.addEventListener("mouseover",my);
    a.addEventListener("mouseout",my1);

}

function my(){
    ballon.style.color="red"; 
    
}
function my1(){
    ballon.style.color="white"; 
    
}
 ballon.addEventListener("mouseover",function(){
    ballon.style.color="red";
    
 });

 
 ballon.addEventListener("mouseout",function(){
    ballon.style.color="white";
   
 });

 