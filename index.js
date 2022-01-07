function load() {
    alert("Loading weather report....")
}

var cookies = document.querySelector('.cookies');
function accept() {
    cookies.remove()
}

function changeTemp() {
    let tempType = document.getElementById("celciusFahrenheit").value;
    let tempH = document.querySelectorAll(".high");
    let tempL = document.querySelectorAll(".low");
    // console.log(tempType)
    // console.log(tempH)
    // console.log(tempL)
    tempH.forEach(function (h) {
        console.log(h)
        if(tempType === "f") {
            h.innerHTML = (parseInt(h.innerHTML) * 9 / 5) + 32;
        } else if (tempType === "c") {
            location.reload();
        }

    });
    tempL.forEach(function (l) {

        if(tempType === "f") {
            l.innerHTML = (parseInt(l.innerHTML) * 9 / 5) + 32;
        } else if (tempType === "c") {
            location.reload();
        }

    });
}