function collapseElements(id){ 

    let element = document.getElementById(id);
    let elementStyle = window.getComputedStyle(element);
    let elementDisplay = elementStyle.getPropertyValue('display');

   if(elementDisplay == "none"){

        document.getElementById(id).style.display = "block";

     } else{

       document.getElementById(id).style.display = "none";

   }   

}
