const cabecalhos = document.querySelectorAll(".accordion-header");
const itens = document.querySelectorAll(".accordion-item");

cabecalhos.forEach(function (cabecalho) {
  cabecalho.addEventListener("click", function () {
    const item = this.parentNode;

    const ativado = item.classList.contains("accordion-item--active");

    itens.forEach(function (item) {
      item.classList.remove("accordion-item--active");
      item.classList.add("accordion-item--closed");
    });

    if (!ativado) {
      item.classList.add("accordion-item--active");
      item.classList.remove("accordion-item--closed");
    }
  });
});
