let choseCurr = document.getElementById("currency");
let exCurr = document.getElementById("ex-currency");
let setAmount = document.getElementById("amount");
setAmount.value = 1;
let exRate = document.getElementById("rate");
let exBut = document.getElementById("ex-btn");
exBut.addEventListener("click", () => {
  let firstchose = choseCurr.value;
  let secondchose = exCurr.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${firstchose}`)
  .then(response => response.json())
  .then(data => {
    rate = data.rates[secondchose];
    exRate.innerText = `${setAmount.value} ${firstchose} = ${rate*setAmount.value} ${secondchose}`;
  })
  .catch(error => console.error(error));
})
let resetBut = document.getElementById("reset-btn");
resetBut.addEventListener("click", () => {
  choseCurr.value = "USD";
  exCurr.value = "BDT";
  setAmount.value = "";
  exRate.innerText = "";
});









//   let choseCurr = document.getElementById("currency");
// let exCurr = document.getElementById("ex-currency");
// let setAmount = document.getElementById("amount");
// let exRate = document.getElementById("rate");

// let exBut = document.getElementById("ex-btn");
// exBut.addEventListener("click", () => {
//   let firstchose = choseCurr.value;
//   let secondchose = exCurr.value;

//   let myHeaders = new Headers();
//   myHeaders.append("apikey", "WLfVbvY8BqjFG65Mn4UR4d8nhBk6SFqI");
//   let requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
//   };
//   fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${secondchose}&from=${firstchose}&amount=${setAmount.value}`, requestOptions)
//     .then(response => response.json())
//     .then(result =>{
//       exRate.innerText=`${setAmount.value} ${firstchose} = ${(result.result)} ${secondchose}`
//     })
//     .catch(error => console.log('error', error));
// });

// let resetBut = document.getElementById("reset-btn");
// resetBut.addEventListener("click", () => {
//   choseCurr.value = "USD";
//   exCurr.value = "BDT";
//   setAmount.value = "";
//   exRate.innerText = "";
// });
