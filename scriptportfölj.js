function displayResult() {
    document.getElementById("myHeader").innerHTML = "Have a nice day!";
}
const months = 
["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober",
"November", "December"];
const d = new Date();
let month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month;