function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
includeHTML();
function category() {
  if (second.classList.contains("hidden")) {
    second.classList.remove("hidden");
  } else {
    second.classList.add("hidden");
  }
}
function openModal() {
  document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
  second.classList.remove("hidden");
}
function closeModal() {
  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
  second.innerHTML = "";
  second.classList.add("hidden");
}
function changeImage(ele) {
  document.getElementById("images__product__detail").src = ele.src;
}
function increaseOrDecreaseNumber(type) {
  var number = document.getElementById("number__product");
  number = Number(number.value);
  if (type === -1)
    if (number === 1) {
    } else {
      number--;
    }
  else {
    number++;
  }
  document.getElementById("number__product").value = number;
}
function onChangePrice(ele) {
  document.getElementById("price").innerHTML =
    ele.value.toLocaleString("vi-VN");
}
function openModalLeft() {
  if (document.getElementById("modal__left").classList.contains("hidden")) {
    document.getElementById("modal__left").classList.remove("hidden");
    document.getElementById("toggel__modal__left").classList.add("hidden");
  } else {
    document.getElementById("modal__left").classList.add("hidden");
    document.getElementById("toggel__modal__left").classList.remove("hidden");
  }
}
