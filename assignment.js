// feetToMile
// woodCalculator
// brickCalculator
// tinyFriend


function feetToMile(feet){
    if (feet>0){
        var mile = feet / 5280;
        mile = mile.toFixed(9);
        return mile;
    }
    else{
        return " WARNING! Distance wouldn't be negative or zero."
    }
    
}
var checkMile = feetToMile(30000);
console.log(checkMile);