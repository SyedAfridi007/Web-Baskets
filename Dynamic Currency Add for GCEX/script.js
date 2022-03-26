let currency = [
  {
    currencyName: "usd",
    currencyBuy: 80,
    currencySell: 83,
  },
  {
    currencyName: "pound",
    currencyBuy: 120,
    currencySell: 122,
  },
  {
    currencyName: "euro",
    currencyBuy: 65,
    currencySell: 68,
  },
];

let input = document.querySelector(".input");
let buyInput = document.querySelector(".binput");
let sellInput = document.querySelector(".sinput");

let form = document.querySelector("form");

let operationForm = document.querySelector(".operationForm");
let amount = document.querySelector(".amount");

let buySelect = document.querySelector("#buySelect");
let sellSelect = document.querySelector("#sellSelect");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let newCurrency = input.value;
  let newCurrencyBuyPrice = Number(buyInput.value);
  let newCurrencySellPrice = Number(sellInput.value);

  currency.push({
    currencyName: newCurrency.trim().toLowerCase(),
    currencyBuy: newCurrencyBuyPrice,
    currencySell: newCurrencySellPrice
  });
  console.log(currency);

  let buyOption = document.createElement("option");
  buyOption.innerText = input.value;
  buyOption.value = newCurrency.trim().toLowerCase();
  buySelect.appendChild(buyOption);

  let sellOption = document.createElement("option");
  sellOption.innerText = input.value;
  sellOption.value = newCurrency.trim().toLowerCase();
  sellSelect.appendChild(sellOption);

  input.value = " ";
  buyInput.value = " ";
  sellInput.value = " ";

});

operationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let purchaseAmount = amount.value;
  let buyCurrency = buySelect.value;
  let sellCurrency = sellSelect.value;

  //console.log(buyCurrency);

  let buyCurAmount = "";
  let sellCurAmount = "";

  for (let i = 0; i < currency.length; i++) {
    //console.log(currency[i]);

    if (buyCurrency == currency[i].currencyName) {
      buyCurAmount = currency[i].currencyBuy;
      //console.log(buyCurAmount);
    }

    if (sellCurrency == currency[i].currencyName) {
      sellCurAmount = currency[i].currencySell;
      //console.log(sellCurAmount);
    }
  }
  let buyAmount = buyCurAmount * amount.value;
  let totalAmount = (buyAmount / sellCurAmount).toFixed(2);

  console.log(
    `You Purchase ${purchaseAmount + buyCurrency} with Exchange ${
      totalAmount + sellCurrency
    }`
  );
});
