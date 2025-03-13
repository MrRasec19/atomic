const btnVerMas = document.querySelector("#btnVerMas");
const btnVerMenos = document.querySelector("#btnVerMenos");

btnVerMas.addEventListener("click", () => {
    const valueContent = document.querySelector("#value-content");

    valueContent.classList.remove("overflow-hidden");
    valueContent.classList.remove("h-75");

    btnVerMenos.classList.remove("d-none")
    btnVerMas.classList.add("d-none")
});

btnVerMenos.addEventListener("click", () => {
    const valueContent = document.querySelector("#value-content");

    valueContent.classList.add("overflow-hidden");
    valueContent.classList.add("h-75");

    btnVerMas.classList.remove("d-none")
    btnVerMenos.classList.add("d-none")
});