
function gotoLink(link){
    console.log(link.value)
    window.open(link.value)
  };

function displayResult() {
    document.getElementById("myHeader").innerHTML = "Glöm inte kolla mina andra projekt också:)";
}
window.onload = function() {
    setCurrentMonth();
}
function setCurrentMonth() {
    const months =
    ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti",
"September", "Oktober", "November", "December"];
const d = new Date();
let month =
months[d.getMonth()];
document.getElementById("demo").innerHTML = "Dagens månad: " + month;
}
