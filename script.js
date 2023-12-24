const overlay = document.getElementById("overlay");
const basic = document.getElementById("basic");
const premium = document.getElementById("premium");
const enterprise = document.getElementById("enterprise");
const btnBasic = document.getElementById("btnBasic");
const btnPremium = document.getElementById("btnPremium");
const btnEnterprise = document.getElementById("btnEnterprise");
const planValue = document.getElementById("planValue");

function showModal() {
    overlay.style.display = "flex";
}

function closeModal() {
    overlay.style.display = "none";
}

function selectBasic() {
    basic.style.scale = "1.2";
    btnBasic.classList.add("btnSelected");
    btnPremium.classList.remove("btnSelected");
    btnEnterprise.classList.remove("btnSelected");
    planValue.value = "basic";
    premium.style.scale = "1";
    enterprise.style.scale = "1";
}

function selectPremium() {
    premium.style.scale = "1.2";
    btnPremium.classList.add("btnSelected");
    btnBasic.classList.remove("btnSelected");
    btnEnterprise.classList.remove("btnSelected");
    planValue.value = "premium";
    basic.style.scale = "1";
    enterprise.style.scale = "1";
}

function selectEnterprise() {
    enterprise.style.scale = "1.2";
    btnEnterprise.classList.add("btnSelected");
    btnBasic.classList.remove("btnSelected");
    btnPremium.classList.remove("btnSelected");
    planValue.value = "enterprise";
    basic.style.scale = "1";
    premium.style.scale = "1";
}

