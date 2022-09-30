"use strict";

const state = {
    temp: 70,
};

const increaseTemp = () => {
    const displayTempContainer = document.querySelector("#displayTemp");
    state.temp += 1;

    displayTempContainer.textContent = `${state.temp} °F`;
};

const decreaseTemp = () => {
    const displayTempContainer = document.querySelector("#displayTemp");
    state.temp -= 1;

    displayTempContainer.textContent = `${state.temp} °F`;
};

const registerEventHandlers = () => {
    const increaseButton = document.querySelector("#increaseTemp");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#decreaseTemp");
    decreaseButton.addEventListener("click", decreaseTemp);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);
