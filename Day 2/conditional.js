const { log } = require("console");

//If else if
let browserName="chrome"
function getBrowser(){
    if(browserName === "Chrome"){
        console.log("Supported browser");
    }
    else if (browserName === "firefox"){
        console.log("Supported browser");
    }
    else if (browserName === "safari"){
        console.log("Supported browser");
    }
    else{
        console.log("UnSupported browser");
    }
}
getBrowser();

//switch case :
let testType ='sanity'
function runTests(){
    switch(testType){
        case 'smoke':
            console.log('smoke');
            break;
        case 'regression':
            console.log('regression');
            break;
        case 'sanity':
                console.log('sanity');
                break;
        default:
            console.log('default test');
            break;
       }
}
runTests();
