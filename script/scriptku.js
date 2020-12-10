const controls=document.querySelector(".controls");
const container=document.querySelector(".thumbnail-container");
const allBox=container.children;
const containerWidth=container.offsetWidth;
const margin=30;
 var items=0;
 var totalItems=0;
 var jumpSlideWidth=0;

responsive=[
{breakPoint:{width:0,item:1}},
{breakPoint:{width:600,item:2}},  
{breakPoint:{width:1000,item:5}} 
]

function load(){
   for(let i=0; i<responsive.length;i++){
     if(window.innerWidth>responsive[i].breakPoint.width){
       items=responsive[i].breakPoint.item
     }
   }
   start();
}

function start(){
  var totalItemsWidth=0
 for(let i=0;i<allBox.length;i++){
   allBox[i].style.width=(containerWidth/items)-margin + "px";
   allBox[i].style.margin=(margin/2)+ "px";
      totalItemsWidth+=containerWidth/items;
      totalItems++;
 }

 container.style.width=totalItemsWidth + "px";

  const allSlides=Math.ceil(totalItems/items);
   const ul=document.createElement("ul");
      for(let i=1;i<=allSlides;i++){
        const li=document.createElement("li");
             li.id=i;
             li.innerHTML=i;
             li.setAttribute("onclick","controlSlides(this)");
             ul.appendChild(li);
             if(i==1){
               li.className="active";
             }
      }
      controls.appendChild(ul);
}

function controlSlides(ele){
     const ul=controls.children;
    const li=ul[0].children
      
     
     var active;

     for(let i=0;i<li.length;i++){
       if(li[i].className=="active"){
         active=i;
         
         li[i].className="";
       }
     }
     
     ele.className="active";

     var numb=(ele.id-1)-active;
        jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
     container.style.marginLeft=-jumpSlideWidth + "px";
}

window.onload=load();

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () =>{
  if(window.pageYOffset>100){
    toTop.classList.add("active");
  } else{
    toTop.classList.remove("active");
  }

} )