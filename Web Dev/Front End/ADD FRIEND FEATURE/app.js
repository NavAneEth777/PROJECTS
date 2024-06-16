let istatus = document.querySelector("h5");

let addFriend = document.querySelector("#add");
let removeFriend = document.querySelector("#remove");

let token = 0; //stranger

addFriend.addEventListener("click", function() {
    if (token == 0) {
        istatus.innerHTML = "Friends :)";
        istatus.style.color = "green";
        token = 1;
    } else {
        istatus.innerHTML = "She and You are already Friends :)";
        istatus.style.color = "green";
    }
})

removeFriend.addEventListener("click", function() {
    if (token == 0) {
        istatus.innerHTML = "She is not a friend to remove";
    } else {
        istatus.innerHTML = "Removed Successfully";
        istatus.style.color = "red";
        token = 0;
    }
}) 
