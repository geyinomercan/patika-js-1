let username = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${username}`

function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let d = date.getDay();

    if(d == 1){
        d ="Pazartesi"
    }
    else if(d == 2){
        d ="Salı"
    }
    else if(d == 3){
        d ="Çarşamba"
    }
    else if(d == 4){
        d ="Perşembe"
    }
    else if(d == 5){
        d ="Cuma"
    }
    else if(d == 6){
        d ="Cumartesi"
    }
    else if(d == 7){
        d ="Pazar"
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${h}:${m}:${s + " " + d}`;

    // let time = h + ":" + m + ":" + s + " " + d;
    // document.getElementById("myClock").innerHTML = time;
  }
setTimeout(showTime, 1000);
  