document.getElementById("form-login").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const feedback = document.getElementById("feedback-login");

  // Simulação temporária
  if (email === "admin@xingweb.com" && senha === "1234") {
    feedback.innerHTML = "<p>✅ Login bem-sucedido! Redirecionando...</p>";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // futuro painel do usuário
    }, 1500);
  } else {
    feedback.innerHTML = "<p>❌ Email ou senha incorretos!</p>";
  }
});
