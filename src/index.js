"use strict";

const state = {
    temp: 70,
    city: "San Francisco",
};

const displayTempContainer = document.querySelector("#displayTemp");
const cityInput = document.getElementById("cityInput");
const cityDisplay = document.getElementById("displayCity");

const displayTemp = () => {
    displayTempContainer.textContent = `${state.temp} °F`;
};

const increaseTemp = () => {
    state.temp += 1;
    displayTemp();
    changeSetting();
};

const decreaseTemp = () => {
    state.temp -= 1;
    displayTemp();
    changeSetting();
};

const changeSetting = () => {
    if (state.temp >= 80) {
        landscape.className = "hot";
        displayTempContainer.className = "red";
    }

    if (state.temp >= 70 && state.temp < 80) {
        landscape.className = "warm";
        displayTempContainer.className = "orange";
    }

    if (state.temp >= 60 && state.temp < 70) {
        landscape.className = "cool";
        displayTempContainer.className = "yellow";
    }

    if (state.temp >= 50 && state.temp < 60) {
        landscape.className = "chilly";
        displayTempContainer.className = "green";
    }

    if (state.temp <= 49) {
        landscape.className = "cold";
        displayTempContainer.className = "teal";
    }
}

const changeCity = () => {
    state.city = cityInput.value;
    cityDisplay.textContent = state.city;
};

const resetCity = () => {
    cityInput.value = '';
    state.city = "San Francisco";
    cityDisplay.textContent = state.city;
};

const registerEventHandlers = () => {
    const increaseButton = document.querySelector("#increaseTemp");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#decreaseTemp");
    decreaseButton.addEventListener("click", decreaseTemp);

    cityInput.addEventListener("input", changeCity);

    const resetCityButton = document.getElementById("resetCity");
    resetCityButton.addEventListener("click", resetCity);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
