const OUT_DEST = localStorage.getItem("output_destination");
document.getElementById("destination").value = OUT_DEST;
const TDATE1 = localStorage.getItem("output_date1");
document.getElementById("label-date1").textContent = TDATE1;
const TDATE2 = localStorage.getItem("output_date2");
document.getElementById("label-date2").textContent = TDATE2;
const TDATE3 = localStorage.getItem("output_date3");
document.getElementById("label-date3").textContent = TDATE3;

const PRICE_3D = localStorage.getItem("output_3d_price");
const PRICE_2D = localStorage.getItem("output_2d_price");
const RADIO_3D = document.querySelector("#three-days");
const RADIO_2D = document.querySelector("#two-days");
const TOUR_AMOUNT = document.querySelector("#amount");
const labelDate1 = document.getElementById('date-1');
const labelDate2 = document.getElementById('date-2');
const labelDate3 = document.getElementById('date-3');
const fromDate = document.getElementById('from-date');
const toDate = document.getElementById('to-date');

RADIO_3D.addEventListener('change', function(){
    TOUR_AMOUNT.value = PRICE_3D;
    if (labelDate1.checked){
        const date = new Date(TDATE1);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    } else if (labelDate2.checked){
        const date = new Date(TDATE2);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    } else if (labelDate3.checked){
        const date = new Date(TDATE3);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    }
});
RADIO_2D.addEventListener('change', function(){
    TOUR_AMOUNT.value = PRICE_2D;
    if (labelDate1.checked){
        const date = new Date(TDATE1);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    } else if (labelDate2.checked){
        const date = new Date(TDATE2);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    } else if (labelDate3.checked){
        const date = new Date(TDATE3);
        fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    }
});

labelDate1.addEventListener('change', function() {
    const date = new Date(TDATE1);
    fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
    if (RADIO_3D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    } else if (RADIO_2D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    } else {
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    }
});

labelDate2.addEventListener('change', function() {
    const date = new Date(TDATE2);
    fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
    if (RADIO_3D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    } else if (RADIO_2D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    } else {
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    }
});

labelDate3.addEventListener('change', function() {
    const date = new Date(TDATE3);
    fromDate.value = new Date(date.setDate(date.getDate() + 1)).toISOString().slice(0, 10);
    if (RADIO_3D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    } else if (RADIO_2D.checked){
        toDate.value = new Date(date.setDate(date.getDate() + 2)).toISOString().slice(0, 10);
    } else {
        toDate.value = new Date(date.setDate(date.getDate() + 3)).toISOString().slice(0, 10);
    }
});

const inclusions = localStorage.getItem("output_inclusions");
const inclusionList = document.getElementById("inclusion-ul");
if (inclusions) {
    const inclusionsArray = JSON.parse(inclusions);

    for (let i = 0; i < inclusionsArray.length; i++) {
        const li = document.createElement("li");
        li.textContent = inclusionsArray[i];
        inclusionList.appendChild(li);
    }
}