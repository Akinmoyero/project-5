
const readline = require("readline-sync");




function carSpeed (speed) {
    const speedLimit = 70; // it ensures that the speed limit 70 
    const perKm = 5;
    

if (speed <=speedLimit){
    console.log ("OK")
}else{
    const demeritPoint= Math.floor ((speed - speedLimit)/perKm);// it to calacule the demeritPoint
    if (demeritPoint >12){
        console.log("license suspended");
    }else{console.log(`point: ${demeritPoint}`)}
}
}
const speed = parseFloat(readline.question("enter speeed: "));   
const grade =carSpeed(speed);
