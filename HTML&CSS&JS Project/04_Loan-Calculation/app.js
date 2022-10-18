const select = document.querySelector(".form-select");
const termTime = document.querySelector("#term");
const sum = document.querySelector("#sum");
const calculateBtn = document.querySelector(".btn-success");

let interestType = 0;
let installment = 0;

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (select.value === "Housing Loan") {
    interestType = 1.29;
  } else if (select.value === "Consumer Loan") {
    interestType = 1.99;
  } else if (select.valur === "Vehicle Loan") {
    interestType = 1.79;
  }
  if (!select.value || !termTime.value || !sum.value) {
    alert("Please fill in the mandatory (*) fields");
  }
  const interest = interestType / 100;
  installment =
    (sum.value * (interest * (1 + interest) ** termTime.value)) /
    ((1 + interest) ** termTime.value - 1);

  showResult();
});

const showResult = () => {
  const result = document.querySelector(".Results");
  result.innerHTML = `
    <h2 class="mt-3 text-success">Loan Details<h2>
    <table class="table table-bordered border-success  mt-4">
     <tbody>
      <tr>
        <th>Loan Amonut</th>
        <td>${sum.value} ₺</td>
        <th>Kredi Tipi</th>
        <td>${select.value}</td>
      </tr>
      <tr>
        <th>Term Time</th>
        <td>${termTime.value}</td>
        <th>Interest Rate</th>
        <td>${interestType}</td>
      </tr>
      <tr>
        <th>Total amount</th>
        <td>${(installment * termTime.value).toFixed(2)} ₺</td>
        <th>Installment Amount</th>
        <td>${installment.toFixed(2)} ₺</td>
      </tr>
    </tbody>
  
  </table>
  
    `;
  console.log(installment);
  console.log(termTime.value);
};
