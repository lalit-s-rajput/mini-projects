
document.addEventListener('DOMContentLoaded',function(){
    let starElement = document.querySelectorAll('.fa-star');
    let starContainer = document.getElementsByClassName('star-container');
    let isClicked = false;
    starElement.forEach((event,index)=>{
        console.log(index);
        event.onclick = function (arguments) {
            let currentStarLevel = index;
            console.log(currentStarLevel);
            isClicked = true;
            for(let i=0;i<currentStarLevel;i++){
                starElement[i].classList.add('toggle-star');
            }
            for(let i=currentStarLevel+1;i<starElement.length-1;i++){
                starElement[i].classList.remove('toggle-star');
            }
        }
        event.addEventListener('mouseover',function(event,index){
            console.log('hovered');
            isClicked = false;
            event.currentTarget.classList.add('toggle-star');
        });
    });

    function removeHoverEffect () {
        starElement.forEach((event,index)=>{
            event.classList.remove('toggle-star');
        });
    }
    starContainer[0].addEventListener('mouseleave',function(event){
        if(!isClicked){
            removeHoverEffect();
        }
    });
    starContainer[0].addEventListener('mouseenter',function(event){
        if(isClicked){
            removeHoverEffect();
            isClicked = false;
        }
    });
    starContainer[0].addEventListener('click',function(event){
        
    });
});
