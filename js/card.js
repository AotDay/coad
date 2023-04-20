'use strict';


{
    let strick = Math.floor(Math.random() * 3);
    var card = document.getElementsByClassName("card");

    window.onload = function () {
        let elements = document.querySelectorAll("*");
        for(let i = 0; i < elements.length; i++){
            elements[i].onclick = myheadler;
        }
    };
    

    function myheadler(e){
        let card0 = document.getElementById("card0") ;
        let card1 = document.getElementById("card1") ;
        let card2 = document.getElementById("card2") ;
        let shuffle = document.getElementById("shuffle") ;

        if (e.target == shuffle){
            strick = Math.floor(Math.random() * 3);
            card0.textContent = "";
            card1.textContent = "";
            card2.textContent = "";
        }else if(
            (e.target == card0 && strick == 0) ||
            (e.target == card1 && strick == 1) ||
            (e.target == card2 && strick == 2)
        ){
            e.target.innerHTML = "<img src='img/atari.png' alt=''>";
        }else if(
            (e.target == card0) ||
            (e.target == card1) ||
            (e.target == card2) 
        ){
            e.target.innerHTML = "<img src='img/hazure.png' alt=''>";
        }
    }

    // function myheadler0(e){
    //     if (strick == 0){
    //         document.getElementById("card0").innerHTML = "<img src='img/atari.png' alt=''>";
    //     }
    // }
    // function myheadler1(e){
    //     if (strick == 1){
    //         document.getElementById("card1").innerHTML = "<img src='img/atari.png' alt=''>";
    //     }
    // }
    // function myheadler2(e){
    //     if (strick == 2){
    //         document.getElementById("card2").innerHTML = "<img src='img/atari.png' alt=''>";
    //     }
    // }

    // function shuffleevent(e){
    //     strick = Math.floor(Math.random() * 3);
    //     document.getElementById("card0").textContent = "";
    //     document.getElementById("card1").textContent = "";
    //     document.getElementById("card2").textContent = "";
    // }



}