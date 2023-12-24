const overlay = document.getElementById("overlay");
const basic = document.querySelectorAll(".basic");
const premium = document.querySelectorAll(".premium");
const enterprise = document.querySelectorAll(".enterprise");
const btnBasic = document.querySelectorAll(".btnBasic");
const btnPremium = document.querySelectorAll(".btnPremium");
const btnEnterprise = document.querySelectorAll(".btnEnterprise");
const planValue = document.getElementById("planValue");
const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");
const billingValue = document.getElementById("billingValue");


function showModal() {
    overlay.style.display = "flex";
}

function closeModal() {
    overlay.style.display = "none";
}

function selectBasic() {
    for(let i = 0; i < basic.length; i++){
        basic[i].style.scale = "1.2";
        btnBasic[i].classList.add("btnSelected");
        btnPremium[i].classList.remove("btnSelected");
        btnEnterprise[i].classList.remove("btnSelected");
        planValue.value = "basic";
        premium[i].style.scale = "1";
        enterprise[i].style.scale = "1";;
    } 
}

function selectPremium() {
    for(let i = 0; i < basic.length; i++){
        premium[i].style.scale = "1.2";
        btnPremium[i].classList.add("btnSelected");
        btnBasic[i].classList.remove("btnSelected");
        btnEnterprise[i].classList.remove("btnSelected");
        planValue.value = "premium";
        basic[i].style.scale = "1";
        enterprise[i].style.scale = "1";
    }
}

function selectEnterprise() {
    for(let i = 0; i < basic.length; i++){
        enterprise[i].style.scale = "1.2";
        btnEnterprise[i].classList.add("btnSelected");
        btnBasic[i].classList.remove("btnSelected");
        btnPremium[i].classList.remove("btnSelected");
        planValue.value = "enterprise";
        basic[i].style.scale = "1";
        premium[i].style.scale = "1";
    }
}


function billingSwitch() {
    const planMonthly = document.getElementById("plansMonthly");
    const planYearly = document.getElementById("plansYearly");
    if(monthly.checked === true && yearly.checked === false){
        planMonthly.style.display = "flex";
        planYearly.style.display = "none";
        billingValue.value = "monthly";
    } else {
        planMonthly.style.display = "none";
        planYearly.style.display = "flex";
        billingValue.value = "yearly";
    }
}
billingSwitch();
monthly.addEventListener("change", billingSwitch);
yearly.addEventListener("change", billingSwitch);






