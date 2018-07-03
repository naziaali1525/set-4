let userSpeed;
let speedLimit = 60;

function checkSpeeding() {
    userSpeed = document.querySelector("input").value;

    if (userSpeed > speedLimit) {
        result = "overspeeding";

    }else {
        result= "not";

    }
    alert(result);
}