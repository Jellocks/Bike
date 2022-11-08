document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".add_1-button"),
        div = document.querySelector(".wrapper"),
        input = document.querySelector(".add_1-input");

    button.addEventListener("click", function () {

        let txt = input.value.trim();

        if (txt) {

            let [a, ...b] = txt;

            txt = a.toUpperCase() + b.join("").toLowerCase();

            div.insertAdjacentHTML("beforeend", `<p class="wrapper_text">${txt}</p>`);

        };

        input.value = "";

    })

})
