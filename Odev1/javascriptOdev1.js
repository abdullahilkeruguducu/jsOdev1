let userName = prompt("İsim bilgisi giriniz.");
let myName = document.getElementById("myName");
let textinfo = document.getElementById("textinfo");
let warning = "Kullanici bilgisi bulunamadi !"
if (userName.length > 0) {
    myName.innerHTML = `${userName}`
    document.getElementById("myName").style.color = "#E67E22"

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];


    function showTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let d = days[today.getDay()];
        let info = document.querySelector("#myClock")
        info.innerHTML = `${h}:${m}:${s} ${d}`
    }
} else{
    textinfo.innerHTML= `${warning}`
}


setInterval(showTime, 1000);

showTime();

let text1 = document.querySelector(".text1").style.color = "#E67E22"
document.querySelector(".text1").style.fontSize = "35px"
document.querySelector(".text1").style.fontFamily = "Lucida Sans"