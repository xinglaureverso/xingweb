document.getElementById("form-config").addEventListener("submit", function(e) {
  e.preventDefault();

  const tema = document.getElementById("tema").value;
  const seguro = document.getElementById("seguro").value;
  const idioma = document.getElementById("idioma").value;
  const fonte = document.getElementById("fonte").value;

  localStorage.setItem("navegai_tema", tema);
  localStorage.setItem("navegai_seguro", seguro);
  localStorage.setItem("navegai_idioma", idioma);
  localStorage.setItem("navegai_fonte", fonte);

  document.getElementById("feedback-config").innerHTML = "<p>✅ Configurações salvas com sucesso!</p>";
});
