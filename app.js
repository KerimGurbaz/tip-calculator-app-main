let container =document.querySelector(".container");






container.addEventListener("click", (e)=>{




    if(e.target.classList.contains("five")){
        
 
        let bill = document.querySelector(".number-input").value;

        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /document.querySelector(".people").value;

        document.querySelector(".total").innerText = (bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));
        

    }
    else if(e.target.classList.contains("ten")){
        console.log("ten");
        let bill = document.querySelector(".number-input").value;

        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /(document.querySelector(".people").value)

        document.querySelector(".total").innerText = (bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));



    }
    else if(e.target.classList.contains("fifteen")){
        let bill = document.querySelector(".number-input").value;
        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /(document.querySelector(".people").value)
        console.log("fifteen");

        document.querySelector(".total").innerText = (bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));
    }
    else if(e.target.classList.contains("twenty-five")){
        let bill = document.querySelector(".number-input").value;
        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /(document.querySelector(".people").value)
        console.log("twenty-five");

        document.querySelector(".total").innerText = Number(bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));


    }
    else if(e.target.classList.contains("fifty")){
        let bill = document.querySelector(".number-input").value;
        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /(document.querySelector(".people").value)
        console.log("fifty");
        document.querySelector(".total").innerText = (bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));

    }
    else if(e.target.classList.contains("custom")){

        document.querySelector(".custom").style.display ="none"
        let bill = document.querySelector(".number-input").value;
        document.querySelector(".tip").innerText = (bill * e.target.innerText /100) /(document.querySelector(".people").value)
        console.log("custom");

        document.querySelector(".total").innerText = (bill / document.querySelector(".people").value + Number(document.querySelector(".tip").innerText));

    }

    else if(e.target.classList.contains("res")){
        console.log("reserlfhvfkn");

    }
});


