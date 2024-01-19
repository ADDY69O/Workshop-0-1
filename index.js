console.log("Working on master  --> 2")

//this is the new features func
function newFeatures(){

    console.log("within the master")
    console.log("at line 2")
    function working(){
        console.log("working fine")
    }
    working();
}

function main(){
    console.log("here is the new main Function")
}