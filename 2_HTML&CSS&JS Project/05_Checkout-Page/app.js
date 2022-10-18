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
      calculateProductPrice(event.target);
      calculateCartPrice();
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
        calculateCartPrice(event.target);
      }
    }
  } else if (event.target.className == "fa-solid fa-plus") {
    event.target.parentElement.querySelector(".quantity").innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    alert(
      `${
        event.target.parentElement.parentElement.querySelector("h2").innerText
      } product has been removed!`
    );
    calculateCartPrice();
  } else {
    // console.log("Other click");
  }
});

const calculateProductPrice = (clickedBtn) => {
  const productInfoDiv = clickedBtn.parentElement.parentElement;
  const price = productInfoDiv.querySelector(".product-info strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};
const calculateCartPrice = () => {
  const productTotalPricesDiv = document.querySelectorAll(
    ".product-line-price"
  );
  let subtotal = 0;
  productTotalPricesDiv.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const shippingPrice = parseFloat(
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0
  );
  console.log(shippingPrice);
  document.querySelector("#cart-subtotal").lastElementChild.innerText =
    subtotal.toFixed(2);
  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);
  document.querySelector("#cart-shipping").children[1].innerText =
    shippingPrice.toFixed(2);
  document.querySelector("#cart-total").lastElementChild.innerText = (
    subtotal +
    taxPrice +
    shippingPrice
  ).toFixed(2);
};
