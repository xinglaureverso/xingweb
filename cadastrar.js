document.getElementById("form-criar").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const feedback = document.getElementById("feedback-criar");

  // Simulação: salvar no localStorage
  const usuario = { nome, email, senha };
  localStorage.setItem("xingweb_usuario", JSON.stringify(usuario));

  feedback.innerHTML = `<p>✅ Conta criada com sucesso, ${nome}!</p>`;
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
