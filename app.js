let container =document.querySelector(".container");






container.addEventListener("click", (e)=>{


    if(e.target.classList.contains("five")){
 
        let bill = document.querySelector(".number-input").value;
        document.querySelector(".tip").innerText = bill * e.target.innerText
  
    }
    else if(e.target.classList.contains("ten")){
        console.log("ten");

    }
    else if(e.target.classList.contains("fifteen")){
        console.log("fifteen");

    }
    else if(e.target.classList.contains("twenty-five")){
        console.log("twenty-five");

    }
    else if(e.target.classList.contains("fifty")){
        console.log("fifty");

    }
    else if(e.target.classList.contains("custom")){
        console.log("custom");

    }
    else{
        console.log("other")

    }



});
