// feetToMile >>>>>>>>>>>>>
// woodCalculator >>>>>>>>>
// brickCalculator
// tinyFriend

// conver  Feet To Mile 
function feetToMile(feet){
    if (feet>0){
        var mile = feet / 5280;
        mile = mile.toFixed(0);
        return mile;
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

