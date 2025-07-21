const resultadosSimulados = [
  {
    titulo: "youtube",
    url: "https://www.youtube.com/",
    descricao: "o site mais famoso para ver videos"
  },
  {
    titulo: "discord",
    url: "https://www.discord.com/app",
    descricao: "o site mais famoso para conversas"
  }
];

document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const query = document.getElementById("query").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtrados = resultadosSimulados.filter(item =>
    item.titulo.toLowerCase().includes(query) || item.descricao.toLowerCase().includes(query)
  );

  if (filtrados.length === 0) {
    resultsDiv.innerHTML = "<p>Nenhum resultado encontrado.</p>";
  } else {
    filtrados.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `<h3><a href="${item.url}" target="_blank">${item.titulo}</a></h3><p>${item.descricao}</p>`;
      resultsDiv.appendChild(div);
    });
  }
});
const btnMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu-lateral");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-aberto");
});
