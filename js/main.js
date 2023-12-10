document.addEventListener("DOMContentLoaded", function()
{
    var huidigeDatum = new Date();
    var dag = huidigeDatum.getDate();
    var maand = huidigeDatum.getMonth() + 1;
    var jaar = huidigeDatum.getFullYear();

    var datumString = dag + ' - ' + maand + ' - ' + jaar;
    document.getElementById('datum').innerText = datumString;
});

function naarAnderePagina() {
    window.location.href = "index.html";
    console.log("knop geklikt");
}