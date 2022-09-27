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
    console.log("Minus");
  } else if (event.target.className == "fa-solid fa-plus") {
    console.log("Plus");
  } else if (event.target.className == "remove-product") {
    console.log("Remove");
  } else {
    console.log("Other click");
  }
});
