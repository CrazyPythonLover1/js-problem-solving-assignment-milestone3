// feetToMile >>>>>>>>>>>>>
// woodCalculator >>>>>>>>>
// brickCalculator
// tinyFriend

// conver  Feet To Mile 
function feetToMile(feet){
    if (feet>0){
        var mile = feet / 5280;
        mile = mile.toFixed(0);
        return mile +" mile";
    }
    else{
        return " WARNING! Distance wouldn't be negative or zero."
    }  
}
var checkMile = feetToMile(42240);
console.log(checkMile);

// Making javascript  Wood Calculator 
function woodCalculator(chair, table, bed){
    if ( chair> -1 && table > -1 && bed>-1){
        chair = chair * 1;
        table = table * 3;
        bed   = bed   * 5;
        var totalWood = chair + table + bed;
        return totalWood + " cubic feet";
    }
    else{
        return "WARNING! The number of Chair, Table or bed wouldn't be negative number."
    }
}
var woodRequired  = woodCalculator(6,1,1);
console.log(woodRequired);

// making javascript brickcalculator 

function brickCalculator(floor){
    var brickForPerFeet = 10;
    var PerFloor = brickForPerFeet * 15;
    var perFloor11To20 = brickForPerFeet *12;
    var perFloor21toMore = brickForPerFeet *10;
    var totalBrick = 0;
    if(floor <=10){
        totalBrick = floor * PerFloor;
        return totalBrick;
    }
    else{
        totalBrick = 10 * PerFloor;
    }
    if (floor <= 20) {
        floor = floor -10
        var totalBrick11To20 = floor * perFloor11To20;
        totalBrick = totalBrick + totalBrick11To20;
        return totalBrick;
    }
    else{
        totalBrick11To20 = 10 * perFloor11To20;
        totalBrick = totalBrick + totalBrick11To20;
    }
    if (floor > 20){
        floor = floor -20;
        var totalBrick21ToMore = floor * perFloor21toMore;
        totalBrick = totalBrick + totalBrick21ToMore;
        return totalBrick;
    }
}
var countBrick = brickCalculator(19);
console.log(countBrick);


// Find  tiny Friend With For Loop

function tinyFriend(friendList){
    var tinyName = friendList[0];
    for ( var i = 0; i< friendList.length; i++){
        var currentName = friendList[i];
        if(currentName.length<tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}
var friends = ["Md Harun", "Md Zakariya", "Md Ibrahim",'Rabeya','Ayesha','Imran'];
var getTinyName = tinyFriend(friends);
console.log(getTinyName);
