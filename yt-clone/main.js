var arr=[
  {image:"thumbnails/thumbnail-1.webp",pp:"thumbnails/channel-1.jpeg",title:"Talking Tech and AI with Google CEO Sundar Pichai! ",creator:"Marques Brownlee",views:"3.4M views",time:"6 months ago",duration:"14:20"},
  {image:"thumbnails/thumbnail-2.webp",pp:"thumbnails/channel-2.jpeg",title:"Try Not To Laugh Challenge #9",creator:" Markiplier",views:"19M views",time:"4 years ago",duration:"8:22"},
  {image:"thumbnails/thumbnail-3.webp",pp:"thumbnails/channel-3.jpeg",title:"Crazy Tik Toks Taken Moments Before DISASTER",creator:"SSSniperWolf",views:"12M views",time:"1 year ago",duration:"9:13"},
  {image:"thumbnails/thumbnail-4.webp",pp:"thumbnails/channel-4.jpeg",title:"The Simplest Math Problem No One Can Solve - Collatz Conjecture ",creator:"Veritasium",views:"18M views",time:"4 months ago",duration:"11:17"},
  {image:"thumbnails/thumbnail-5.webp",pp:"thumbnails/channel-5.jpeg",title:"Kadane's Algorithm to Maximum Sum Subarray Problem ",creator:"CS Dojo",views:"519k views",time:"5 years ago",duration:"14:20"},
  {image:"thumbnails/thumbnail-6.webp",pp:"thumbnails/channel-6.jpeg",title:"Anything You Can Fit In The Circle I’ll Pay For ",creator:"MrBeast",views:"141M views",time:"1 years ago",duration:"19:59"},
 ]

function showcard(){
  var info="";
  arr.forEach(function(object) {
    info+=`<div class="video-preview">
    <div class="thumbnail-row">
    <img class="thumbnail" src="${object.image}">
    <div class="video-time">
    ${object.duration}
    </div>
  
    </div>
    <div class="video-info-grid">
      <div class="channel-picture">
      <img class="profile-picture" src="${object.pp}">
    </div>
    <div class="video-info">
    <p class="video-title">
      ${object.title} 
    </p>
    <p class="video-author">
    
    ${object.creator}
    </p>
    <p class="video-stats">
    ${object.views}  &#183; ${object.time}
    </p>
    </div>
    </div>
    </div>`;
  });
  
  document.querySelector(".video-grid").innerHTML=info;
}

showcard();
function searchVideo(){
  var input=document.querySelector(".search-bar")
  
  input.addEventListener("input",function(){
    const filteredarr=arr.filter(object=>
      object.title.trim().toLowerCase().startsWith(input.value.trim())||
      object.creator.trim().toLowerCase().startsWith(input.value.trim()));
    var show="";
    filteredarr.forEach(function(object){
      show+=`<div class="video-preview">
      <div class="thumbnail-row">
      <img class="thumbnail" src="${object.image}">
      <div class="video-time">
      ${object.duration}
      </div>
      
      </div>
      <div class="video-info-grid">
      <div class="channel-picture">
      <img class="profile-picture" src="${object.pp}">
      </div>
      <div class="video-info">
      <p class="video-title">
      ${object.title} 
      </p>
      <p class="video-author">
      
      ${object.creator}
      </p>
      <p class="video-stats">
      ${object.views}  &#183; ${object.time}
      </p>
      </div>
      </div>
      </div>`;
    });
    document.querySelector(".search-button").addEventListener("click",function(){
      if(input.value===""){
        document.querySelector(".spinner").style.display="block";
        document.querySelector(".video-grid").style.display = "none";
        setTimeout(() => {
          document.querySelector(".spinner").style.display="none";
          document.querySelector(".video-grid").style.display = "grid";
        }, 1000);
        
      }else{
        document.querySelector(".spinner").style.display="block";
        document.querySelector(".video-grid-2").style.display = "none";
        setTimeout(() => {
          document.querySelector(".spinner").style.display="none";
          document.querySelector(".video-grid-2").style.display = "grid";
          document.querySelector(".video-grid-2").innerHTML = show;
        }, 1000);
      }
    })
    
  })
  
  
  
  input.addEventListener("focus",function(){
    document.querySelector(".video-grid").style.display="none";
    document.querySelector(".video-grid-2").style.display="grid";
    if(input.value===""){
      document.querySelector(".video-grid-2").style.display = "none";
      
    }
    
  });
  
  input.addEventListener("blur",function(){
    if (input.value.trim() === "") {
      document.querySelector(".video-grid").style.display = "grid";
      document.querySelector(".video-grid-2").style.display = "none";
    }
    
  });
}
searchVideo();



