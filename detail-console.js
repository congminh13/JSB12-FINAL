document.addEventListener("DOMContentLoaded", function () {
    const pElements = document.querySelectorAll(".d-text p");
  
    pElements.forEach(function (p) {
      p.addEventListener("click", function () {
        const tempInput = document.createElement("input");
        tempInput.value = p.textContent;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      });
    });
  });
  