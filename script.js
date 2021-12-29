let croq = document.getElementsByClassName("cookie");

for (let i = 0; i < croq.length; i++) {
  croq[i].addEventListener("click", function () {
    if (this.src.indexOf("cookie-1") != -1) {
      this.src = "cookie-2.jpg";
    } else {
      this.remove();
    }
  });
}
