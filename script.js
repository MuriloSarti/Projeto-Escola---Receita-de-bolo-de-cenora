// script.js — Bolo de Cenoura com Cobertura de Chocolate

document.addEventListener("DOMContentLoaded", function () {
  const btn      = document.getElementById("btnBomApetite");
  const overlay  = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  // Abre o modal ao clicar no botão
  btn.addEventListener("click", function () {
    overlay.classList.add("active");
  });

  // Fecha ao clicar no botão "Fechar"
  closeBtn.addEventListener("click", function () {
    overlay.classList.remove("active");
  });

  // Fecha ao clicar fora do modal (no overlay escuro)
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });

  // Fecha com a tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
  });
});
