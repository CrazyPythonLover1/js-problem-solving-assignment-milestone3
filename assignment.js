//=======================  conver  Feet To Mile =========================================//
function feetToMile(feet){
    if (feet>0){
        var mile = feet / 5280;
        mile = mile.toFixed(0);
        return mile +" Mile";
    }
    else{
        return " WARNING! Distance wouldn't be negative or zero."
    }  
}
var checkMile = feetToMile(42240);
console.log(checkMile);

//=============================   Making javascript  Wood Calculator =========================//
function woodCalculator(chair, table, bed){
    if ( chair > 0 && table > 0 && bed> 0){
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
var woodRequired  = woodCalculator(6,2,2);
console.log(woodRequired);

//=============================   making javascript brickcalculator  ============================//
function brickCalculator(floor){
    var brickForPerFeet = 1000;
    var PerFloor1to10 = brickForPerFeet * 15; // Brick for per floor (1 to 10)
    var perFloor11To20 = brickForPerFeet * 12; // Brick for per floor (11 to 20)
    var perFloor21toMore = brickForPerFeet *10; // Brick for per floor (21 to more)
    var totalBrick = 0;
    if(floor <=10){
        totalBrick = floor * PerFloor1to10;  // Total Brick under 10th floor
        return "Total Brick Number: " + totalBrick;  // showing total Brick 
    }
    else{
        totalBrick = 10 * PerFloor1to10;  // total count for 10th floor
    }
    if (floor <= 20) {
        floor = floor -10  //  remove the 10 floors from the input number
        var totalBrick11To20 = floor * perFloor11To20;  // Total Brick under 11th to 20th floor
        totalBrick = totalBrick + totalBrick11To20;   // add totalBrick under 11th to 20th floor with totalbrick
        return "Total Brick Number: " + totalBrick;    // showing total Brick 
    }
    else{
        totalBrick11To20 = 10 * perFloor11To20;  // total count for 11th to 20th floor
        totalBrick = totalBrick + totalBrick11To20;  // showing the total brick for 20th floor
    }
    if (floor > 20){
        floor = floor -20;  // remove the 20 floors from the input number
        var totalBrick21ToMore = floor * perFloor21toMore;  // Total Brick under 21 to more 
        totalBrick = totalBrick + totalBrick21ToMore;  // add total brick with all total brick
        return "Total Brick Number: " + totalBrick;  // showing the Total bricks of floor
    }
}
var countBrick = brickCalculator(30);
console.log(countBrick);


// ===============================  Find  tiny Friend With For Loop=====================//
function tinyFriend(friendList){
    var tinyName = friendList[0];
    for ( var i = 0; i< friendList.length; i++){
        var currentName = friendList[i];
        if(currentName.length<tinyName.length){
            tinyName = currentName;
        }
    }
    return "Tiny Friend Name: " + tinyName;
}
var friends = ["Md Harun", "Md Zakariya", "Md Ibrahim",'Rabeya','Ayesha','Imran'];
var getTinyName = tinyFriend(friends);
console.log(getTinyName);

// ===== BONUS BONUS BONUS BONUS === ANOTHER WAY Tiny Friend With While Loop ======= BONUS BONUS BONUS======//
function tinyFriend(name){
    var tinyName = name[0];
    var i = 0;
    while(i<name.length){
        var currentName = name[i];
        if(currentName.length < tinyName.length){
            tinyName = currentName;
        }
        i++;
    }
    return "Tiny Friend Name: " + tinyName;
}
var checkTinyName = tinyFriend(["Md Harun",  "Md Ibrahim",'Moss Rabeya','Moss Ayesha',]);
console.log(checkTinyName);

//====BONUS BONUS BONUS BONUS =======  Another way for Brick Calculator ====BONUS BONUS BONUS BONUS ===//
function brickCalculator(floor){
    var brickForPerFeet = 1000;
    var totalBrickNumber = 0;
    if (floor <= 10 ){
        var Floor1to10 = floor * 15 *brickForPerFeet;
        totalBrickNumber = totalBrickNumber + Floor1to10;
        return totalBrickNumber;
    }
    else if (floor <= 20 ){
        var Floor1to10 = brickForPerFeet * 15 * 10;
        floor = floor - 10;
        var Floor11to20 = brickForPerFeet * 12 * floor;
        totalBrickNumber = Floor1to10 + Floor11to20;
        return totalBrickNumber;
    }
    else if (floor > 20 ){
        var Floor1to10 = brickForPerFeet * 15 * 10;
        var Floor11to20 = brickForPerFeet * 12 * 10;
        floor = floor - 20;
        var Floor21ToMore = brickForPerFeet * 10 * floor;
        totalBrickNumber = Floor1to10 + Floor11to20 + Floor21ToMore;
        return totalBrickNumber;
    }
    else{
        return "WARNING! Floor wouldn't be negative number."
    }
}
var countBrick = brickCalculator(45);
console.log(countBrick);
