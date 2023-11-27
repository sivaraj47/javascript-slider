const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn');
const imgList = ["5","6","7","8"]

let index=0;

btns.forEach((button)=>{
  button.addEventListener('click',()=>{
     if(button.classList.contains('btn-left')){
       index--;
       
      if(index<0){
        index = imgList.length-1;
      }
      container.style.background=`url("img/${imgList[index]}.jpeg") center/cover  no-repeat`  
       setTimeout(container, 2000);
     }
    else{
       index++;
      if(index===imgList.length){
        index = 0;
      }
      container.style.background=`url("img/${imgList[index]}.jpeg") center/cover  no-repeat`      
    }
  });
});

