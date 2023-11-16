//Text Change(SET ALARM -> <-PARTY TIME!)
//variable declare
const Textchange=document.getElementById("textchange");
//mouseover
Textchange.addEventListener("mouseover",function(){
Textchange.innerText="Party time!"
})
//mouseout
Textchange.addEventListener("mouseout",function(){
    Textchange.innerText="Set Alarm"
})

//
function clock(){
    let date=new Date();
    let hrs=date.getHours();
    let minutes=date.getMinutes();
    let secs=date.getSeconds();
    console.log(hrs,minutes,secs);
    //conversion of 24hrs format to 12hrs format
    if(hrs>12){
        hrs=hrs-12;
        console.log(hrs);
    }
//to display the time
 let hours=document.getElementById("hours");
 hours.innerText=hrs;
 let mins=document.getElementById("mins");
 mins.innerText=minutes;
 let seconds=document.getElementById("secs");
seconds.innerText=secs;
}

//running clock
setInterval(( )=>{
    clock()
},1000)
//to change Meridian-(AM-PM)
let date=new Date();
    let hrs=date.getHours();
    if(hrs>=12){
        let meridian=document.getElementById("meridian");
        meridian.innerText="PM";
    }
    else{
       // let meridian=document.getElementById("meridian");
        meridian.innerText="AM"
    }

//Greetings according to the Real-Time
let Greetings=document.getElementById("greet")
 if(hrs>=12 && hrs<=16){
    Greetings.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP"
}
else if(hrs>=16 && hrs<=19){
    Greetings.innerText="GOOD EVENING !!"
}
else if(hrs>=20 && hrs<=24){
    Greetings.innerText="GOOD NIGHT !! "
}

//ADDEventListener-clicking-setalarm
Textchange.addEventListener("click",function(){
    let wakeup=document.getElementById("wakeup")
    if(wakeup.value==hrs){
    document.getElementById("changetextonclick").innerHTML="GRAB SOME HEALTHY BREAKFAST !!!"
    document.getElementById("changeimgonclick").innerHTML=`<img src="Component 30 – 1.svg" height="auto">`;
}
let selectedtime=document.getElementsByClassName("selectedtime")
selectedtime[0].innerHTML=wakeup.options[wakeup.selectedIndex].text;


let lunch=document.getElementById("lunch")
if(lunch.value==hrs){
    document.getElementById("changetextonclick").innerText="LET'S HAVE SOME LUNCH"
    document.getElementById("changeimgonclick").innerHTML=`<img src="Component 31 – 1.svg">`;

}
selectedtime[1].innerHTML=lunch.options[lunch.selectedIndex].text;


let nap=document.getElementById("nap")
if(nap.value==hrs){
    document.getElementById("changetextonclick").innerText="STOP YAWNING, GET SOME TEA.. ITS'S JUST EVENING!"
    document.getElementById("changeimgonclick").innerHTML=`<img src="lunch_image.png">`;
}
selectedtime[2].innerHTML=nap.options[nap.selectedIndex].text;


let night=document.getElementById("night")
if(night.value==hrs){
    document.getElementById("changetextonclick").innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById("changeimgonclick").innerHTML=`<img src="Component 32 – 1.svg">`;
}
selectedtime[3].innerHTML=night.options[night.selectedIndex].text;

})

