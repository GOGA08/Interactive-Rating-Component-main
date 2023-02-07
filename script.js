const numbers = document.querySelectorAll(".number");
const submit = document.querySelector(".btn");
const selected = document.getElementById("selectedrating");
const container = document.querySelector(".container");
const containerSelected = document.querySelector(
    ".container.container-selected"
    );

    let selectedNumber = null;

    numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        clearChecked();
        number.classList.toggle("checked");
        selectedNumber = +e.target.innerText;
        selected.innerText = `You selected ${selectedNumber} out of 5`;
        console.log(selectedNumber);
    });
    });

    function clearChecked() {
    numbers.forEach((number) => {
        number.classList.remove("checked");
    });
    }

    submit.addEventListener("click", () => {
    if (typeof selectedNumber === "number") {
        containerSelected.style.display = "flex";
        container.style.display = "none";
    }
});
