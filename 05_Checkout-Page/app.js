const taxRate = 0.18; //* Kdv oranı
const shippingPrice = 15; //* Kargo ücreti
const shippingFreePrice = 400; //* Ücretsiz kargo için sepet fiyatı

//! Local Storage
localStorage.setItem("taxRate", taxRate);
localStorage.setItem("shippingPrice", shippingPrice);
localStorage.setItem("shippingFreePrice", shippingFreePrice);

//! Sessions Storage (Sayfalar arası aktarım için)
sessionStorage.setItem("taxRate", taxRate);
sessionStorage.setItem("shippingPrice", shippingPrice);
sessionStorage.setItem("shippingFreePrice", shippingFreePrice);

const productsDiv = document.querySelector(".products");

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (
        confirm(
          `${
            event.target.parentElement.parentElement.querySelector("h2")
              .innerText
          } will be removed?`
        )
      ) {
        event.target.parentElement.parentElement.parentElement.remove();
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;
  } else if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    alert(
      `${
        event.target.parentElement.parentElement.querySelector("h2").innerText
      } product has been removed!`
    );
  } else {
    // console.log("Other click");
  }
});
