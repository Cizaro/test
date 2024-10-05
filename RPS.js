document.getElementById("btn").addEventListener("click", function() {
    const countdown = document.querySelectorAll(".countDown .number");
    countdown.forEach((number) => {
            
            number.classList.toggle("start-animation");//this alone there is a delay i will check it later 
         
    });
});




const choices=document.querySelectorAll(".box .choice")

    choices.forEach((choice)=>{
choice.addEventListener(
    "click",function(){
        choice.classList.toggle("picked");
    }
)



    });







