let slider = document.querySelectorAll("#slider img");
time = 3000

index = 0
image = slider.length;


function show(){
   
    slider[index].classList.remove('selected')

    index++

    if(index >= image){
        index = 0
    }
    
    slider[index].classList.add("selected")
   

}

setInterval(show, time)
