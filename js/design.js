function founderNewTab() {
    window.open(
      "index15.html", "_self");
    
    
}

function founderhiThere() {
    alert('thank you for your opinio');
  }
  function founderhideandshow1() {
    var x = document.getElementById("libe");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.width = '100%'
    } else {
      x.style.display = "none";
    }
  }
  function founderhideandshow2() {
    var x = document.getElementById("wrem");
    if (x.style.display === "none") {
      x.style.display = "flex";
      x.style.width = '100%'
    } else {
      x.style.display = "none";
    }
  }
  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  