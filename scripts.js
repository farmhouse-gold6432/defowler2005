function main() {
    var elements = document.getElementsByClassName('themeable');
    var savedTheme = localStorage.getItem('theme') || 'light';
    for (var i = 0; i < elements.length; i++) elements[i].classList.toggle('dark-theme', savedTheme === 'dark');
    eruda.init();
    hljs.highlightAll();
};

function toggleTheme() {
    var elements = document.getElementsByClassName('themeable');
    for (var i = 0; i < elements.length; i++) elements[i].classList.toggle('dark-theme');
    var isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
};

function showScriptAPI () {
    document.getElementById("scriptAPI").style.display = "block";
    document.getElementById("jsonUI").style.display = "none";
}
function showJSONUI () {
    document.getElementById("scriptAPI").style.display = "none";
    document.getElementById("jsonUI").style.display = "block";
}
