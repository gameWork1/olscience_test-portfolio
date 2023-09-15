// var button = document.getElementsByClassName(".b-more-github");
// button.onclick = button_click();
function button_click(event){
    alert("Ещё не работает")
}
let switchMode = document.getElementById("switch_btn")
switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "style.css") {
        theme.href = "style_dark.css";
    } else {
        theme.href = "style.css";
    }
}
function showHideBtn(event){
    let btns = document.querySelectorAll("#hidden");
    btns.forEach(btn => {
        
        if(btn.classList.contains("hidden")){
            btn.classList.remove("hidden");
        }else{
            btn.classList.add("hidden");
        }
    });
}