document.addEventListener("DOMContentLoaded", function() {
let prg = document.getElementById("demo");
let originalText = prg.textContent;
let showingOriginal = true
window.cambiarParrafo = function() {
    if (showingOriginal){
        prg.innerHTML = "Parrafo Nuevo";
    } else {
        prg.innerHTML = originalText;
    }
    showingOriginal = !showingOriginal;
}
});