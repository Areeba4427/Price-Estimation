function slider_change(){

    for(let i = 1 ;i<9;i++){
        if(this.id == "range"+i){
            // console.log(this.id);
            document.getElementById("value"+i).value = this.value; 
        }
    }
    
}

function value_change()
{
    console.log("In val change function");

    for(let i = 1 ;i<9;i++){
        var slide = document.getElementById("range"+i);
        if(this.id == "value"+i){
            console.log("triggered elem found!");
            slide.value = this.value; 
         if(this.value > slide.max){
            this.value = slide.max;
            slide.value = slide.max;
         }  
           
        }
    }
     
}
document.getElementById("range1").addEventListener("input" , slider_change);
document.getElementById("range2").addEventListener("input" , slider_change);
document.getElementById("range3").addEventListener("input" , slider_change);
document.getElementById("range4").addEventListener("input" , slider_change);
document.getElementById("range5").addEventListener("input" , slider_change);
document.getElementById("range6").addEventListener("input" , slider_change);
document.getElementById("range7").addEventListener("input" , slider_change);
document.getElementById("range8").addEventListener("input" , slider_change);


document.getElementById("value1").addEventListener("change" , value_change);
document.getElementById("value2").addEventListener("change" , value_change);
document.getElementById("value3").addEventListener("change" , value_change);
document.getElementById("value4").addEventListener("change" , value_change);
document.getElementById("value5").addEventListener("change" , value_change);
document.getElementById("value6").addEventListener("change" , value_change);
document.getElementById("value7").addEventListener("change" , value_change);
document.getElementById("value8").addEventListener("change" , value_change);
