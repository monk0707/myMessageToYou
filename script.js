let heart = document.querySelector(".heart");
let allCards = document.querySelectorAll(".card");
let wrapper = document.querySelector(".wrapper");
let myHeart = document.querySelector("#myHeart");
let initialHeading = document.querySelector(".initialHeading");



myHeart.addEventListener("click",(event)=>{
    // 1. remove everything dark from allCards and heart and wrapper.
    // 2. add heartAnimation class to heart.
    // 3. add cardAnimation2 to allCards.

    let name = prompt("What's your name?");
    name = name.toUpperCase();

    if(name!=="VAISHNAVI"&&name!="VAISHNAVI BANDEWAR"&&name!=="VAISHNAVIII"&&name!=="VAISHNAVIII BANDEWAR"){
        alert("Sorry,you can't fix it!!!");
        return;
    }


    console.log("clicked on heart successfully");

    initialHeading.classList.add('hideIt');

    heart.classList.remove('everythingDark');
    heart.classList.add('heartAnimation');
    wrapper.classList.remove('everythingDark');

    allCards.forEach((card)=>{
        card.classList.remove('everythingDark');
        card.classList.add('cardAnimation2');
    });

    console.log("coming out of the event listener successfully");

})