


// function clock(){
//     let hour=document.querySelector("#hour");
// let minute=document.querySelector("#minute");
// let second=document.querySelector("#Second");

//     d= new Date();
//     h=d.getHours();
//     m=d.getMinutes();
//     s=d.getSeconds();

//    let hour_Rotation=30*h + m/2;
//    let minute_Rotation=6*m;
//    let seconf_Rotation=6*s;

// hour.style.transform=`rotate(${hour_Rotation}deg)`;
// minute.style.transform=`rotate(${minute_Rotation}deg)`;
// second.style.transform=`rotate(${seconf_Rotation}deg)`;
// }


// setInterval(clock,1000)











function setTime() {
    let hour=document.querySelector("#hour")
    let minute=document.querySelector("#minute")
    let second=document.querySelector("#Second")
    
    let D = new Date();
    let h=D.getHours();
    let m=D.getMinutes();
    let s=D.getSeconds();
    
    hourRotate=30*h + m/2;
    minutRotate= 6 * m;
    secRotate=  6 * s ;
    hour.style.transform=`rotate(${hourRotate}deg)`
    minute.style.transform=`rotate(${minutRotate}deg)`
    second.style.transform=`rotate(${secRotate}deg)`
}

setInterval(setTime,1000) ;

// msg()



















