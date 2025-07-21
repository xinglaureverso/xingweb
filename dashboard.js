// Dados simulados do usuário
const usuario = JSON.parse(localStorage.getItem("xingweb_usuario")) || { nome: "Visitante" };

// Dados de configurações
const config = {
  tema: localStorage.getItem("navegai_tema"),
  seguro: localStorage.getItem("navegai_seguro"),
  idioma: localStorage.getItem("navegai_idioma"),
  fonte: localStorage.getItem("navegai_fonte")
};

// Exibe nome do usuário
document.getElementById("info-usuario").innerHTML = `
  <p>👤 Usuário: <strong>${usuario.nome}</strong></p>
  <p>📧 Email: ${usuario.email || "não registrado"}</p>
`;

// Exibe configurações salvas
const listaConfig = document.getElementById("lista-config");
Object.entries(config).forEach(([chave, valor]) => {
  const li = document.createElement("li");
  li.textContent = `${chave}: ${valor || "padrão"}`;
  listaConfig.appendChild(li);
});

// Exibe sites criados (exemplo básico)
const listaSites = document.getElementById("lista-sites");
const sitesCriados = JSON.parse(localStorage.getItem("xingweb_sites")) || [];

sitesCriados.forEach((site, index) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${site.nome}</strong> — <a href="#" onclick="abrirSite(${index})">Visualizar</a>`;
  listaSites.appendChild(li);
});

function abrirSite(i) {
  const site = sitesCriados[i];
  const janela = window.open();
  janela.document.write(`<html><head><style>${site.css}</style></head><body>${site.html}<script>${site.js}<\/script></body></html>`);
}
