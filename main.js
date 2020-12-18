// HTML dan kerakli elementlarni tanlab olish
let elBreadSelect = document.querySelector(".order__choose-bread-select");
let elSizeList = document.querySelector(".order__choose-size-list");
let elMixList = document.querySelector(".order__choose-mix-list");
let elDetailsList = document.querySelector(".order__choose-details-list");
let elOrderForm = document.querySelector(".order__form");
//NAtijalarni hisoblagandan keyin uni joylash uchun bosh matnlar
let elBreadSelectResult = document.querySelector(".bread-select-result");
let elSizeResult = document.querySelector(".size-result");
let elMixResult = document.querySelector(".mix-result");
let elDetailsResult = document.querySelector(".details-result");
//Bu malumotlar keyinchalik beckenddan keladi
let breadList = ["yupqa", "qalin", "bolka"];
let sizeList = [20, 25, 30];
let mixList = ["Pomidor", "Kurka goshti", "zaytun"];
let detailsList = ["Achchiq", "Sosiskali"];
//User tanlagan pitsa turlari
let clientMixList = [];
let clientDetailsList = [];

elBreadSelect.addEventListener("change", (e) => {
  elBreadSelectResult.textContent = "";
  elBreadSelectResult.setAttribute("class", "order__result-wrapper-result");
  elBreadSelectResult.textContent = elBreadSelect.value;
});

for (const bread of breadList) {
  let newBread = document.createElement("option");
  newBread.setAttribute("value", bread);
  newBread.setAttribute("class", "order__choose-bread-select-option");
  newBread.textContent = bread;
  elBreadSelect.appendChild(newBread);
}

for (const size of sizeList) {
  // element yaratish sizeni berish uchun
  let newSizeLabel = document.createElement("label");
  let newSizeInput = document.createElement("input");
  let newSizeSpan = document.createElement("span");
  // razberni textcontentiga berish
  newSizeSpan.textContent = size;
  // elementlarga class qoshib chiqish
  newSizeSpan.classList.add("order__choose-size-text");
  newSizeLabel.classList.add("order__choose-size-label");
  newSizeInput.classList.add("order__choose-size-input", "visually-hidden");

  //labelga input va spanni qoshish
  newSizeLabel.appendChild(newSizeInput);
  newSizeLabel.appendChild(newSizeSpan);

  //labelni htmldagi otasiga qoshib qoyish
  elSizeList.appendChild(newSizeLabel);

  //inputni atributlarini ozgartirish
  newSizeInput.setAttribute("type", "radio");
  newSizeInput.setAttribute("name", "size");

  //input ozgarishiga quloq solish
  newSizeInput.addEventListener("change", (e) => {
    elSizeResult.textContent = size;
  });

  //spanning width va heightlarini jsdan turib ozgartirish
  newSizeSpan.style.width = `${size * 3.5}px`;
  newSizeSpan.style.height = `${size * 3.5}px`;
}

// MIX section

for (const mix of mixList) {
  // element yaratish mixlani berish uchun
  let newMixLabel = document.createElement("label");
  let newMixInput = document.createElement("input");
  let newMixSpan = document.createElement("span");
  let newMixInputClone = document.createElement("span");

  // razberni textcontentiga berish
  newMixSpan.textContent = mix;

  // elementlarga class qoshib chiqish
  newMixSpan.classList.add("order__choose-mix-text");
  newMixLabel.classList.add("order__choose-mix-label");
  newMixInput.classList.add("order__choose-mix-input", "visually-hidden");
  newMixInputClone.classList.add("order__choose-mix-clone");

  //inputni atributlarini ozgartirish
  newMixInput.setAttribute("type", "checkbox");
  newMixInput.setAttribute("name", "check");

  //labelga input va spanni qoshish
  newMixLabel.appendChild(newMixInput);
  newMixLabel.appendChild(newMixInputClone);
  newMixLabel.appendChild(newMixSpan);
  console.log(newMixLabel);
  elMixList.appendChild(newMixLabel);

  newMixInput.addEventListener("change", (e) => {
    elMixResult.textContent = "";
    if (!newMixInput.checked) {
      let indexMix = clientMixList.indexOf(mix);
      clientMixList.splice(indexMix, 1);
    } else {
      clientMixList.push(mix);
    }
    for (const cml of clientMixList) {
      let mixResultText = document.createElement("li");
      mixResultText;
      mixResultText.setAttribute("class", "mix-result__item");
      mixResultText.textContent = cml;
      elMixResult.appendChild(mixResultText);
    }
  });
}
for (const detail of detailsList) {
  // element yaratish mixlani berish uchun
  let newDetailLabel = document.createElement("label");
  let newDetailInput = document.createElement("input");
  let newDetailSpan = document.createElement("span");
  let newDetailInputClone = document.createElement("span");

  // razberni textcontentiga berish
  newDetailSpan.textContent = detail;

  // elementlarga class qoshib chiqish
  newDetailSpan.classList.add("order__choose-detail-text");
  newDetailLabel.classList.add("order__choose-detail-label");
  newDetailInput.classList.add("order__choose-detail-input", "visually-hidden");
  newDetailInputClone.classList.add("order__choose-detail-clone");

  //inputni atributlarini ozgartirish
  newDetailInput.setAttribute("type", "checkbox");
  newDetailInput.setAttribute("name", "check");

  //labelga input va spanni qoshish
  newDetailLabel.appendChild(newDetailInput);
  newDetailLabel.appendChild(newDetailInputClone);
  newDetailLabel.appendChild(newDetailSpan);
  elDetailsList.appendChild(newDetailLabel);

  newDetailInput.addEventListener("change", (e) => {
    elDetailsResult.textContent = "";
    if (!newDetailInput.checked) {
      let indexDetail = clientDetailsList.indexOf(detail);
      clientDetailsList.splice(indexDetail, 1);
    } else {
      clientDetailsList.push(detail);
    }
    for (const cdl of clientDetailsList) {
      let detailResultText = document.createElement("li");
      detailResultText.setAttribute("class", "details-result__item");
      detailResultText.textContent = cdl;
      elDetailsResult.appendChild(detailResultText);
    }
  });
}
elOrderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sizning buyurtmangiz qabul qilindi😃");
});
