
function changeColor() {
    const color = event.srcElement.value;
    const imgBox = document.querySelector("#imgSrc > img");
    if (color === "purple") {
        imgBox.src = "assets/images/purpleWatch.png";
    } else if (color === "blue") {
        imgBox.src = "assets/images/blueWatch.png";
    } else if (color === "black") {
        imgBox.src = "assets/images/blackWatch.png";
    } else if (color === "red") {
        imgBox.src = "assets/images/redWatch.png";
    } else if (color === "pink") {
        imgBox.src = "assets/images/pinkWatch.png";
    }
}
function changeContent() {
    const buttonClick = event.srcElement.innerHTML;
    const content = document.getElementsByClassName("content")[0];
    const contentHeart = document.getElementById("heartBox");
    let fullHour = getDate();
    let interval;
    contentHeart.style.visibility = "hidden";
    content.style.visibility = "hidden";
    content.innerText = "";
    if (buttonClick === "Timer") {
        content.style.visibility = "visible";
        fullHour = getDate();
        content.innerText = fullHour;
        interval = setInterval(() => {
            fullHour = getDate();
            content.innerText = fullHour;
        }, 1000);
    } else if (buttonClick === "Heart Rate") {
        clearInterval(interval);
        contentHeart.style.visibility = "visible";
        const textHeart = document.getElementById("textHeart");
        textHeart.innerText = 73;
    }
}
function getDate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    let fullHour;
    if (minutes < 10) {
        fullHour = hours + ":0" + minutes + ":" + seconds;
    }else if (seconds < 10) {
        fullHour = hours + ":" + minutes + ":0" + seconds;
    }
    if (minutes < 10 && seconds < 10 ) {
        fullHour = hours + ":0" + minutes + ":0" + seconds;
    }
    if (minutes < 10 && seconds < 10 && hours < 10) {
        fullHour = "0" + hours + ":0" + minutes + ":0" + seconds;
    }
    if (minutes >= 10 && seconds >= 10 && hours >= 10) {
        fullHour = hours + ":" + minutes + ":" + seconds;
    }
    return fullHour;
}