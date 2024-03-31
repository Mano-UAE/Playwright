//variable scoping   - global ,function ,block
let gender="female" ; //global
function printGender() {
    if(gender.startsWith("male")){
        console.log('Maddy');
    }
    else{
    console.log("Amyra");
    }
}
printGender();