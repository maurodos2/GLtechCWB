
function saudacao() {
  alert("Obrigado por visitar o site da GLTECHCWB!");
}
function faleConosco() {
  const nome = prompt("Digite seu nome:");
  if (nome) {
    window.open(`https://wa.me/554130301240?text=Olá,%20meu%20nome%20é%20${nome}%20e%20gostaria%20de%20mais%20informações!`);
  }
}
fetch('assets/data/produtos.json')
  .then(res => res.json())
  .then(produtos => {
    const container = document.querySelector('.produtos-container');
    produtos.forEach(p => {
      const card = document.createElement('section');
      card.className = 'produto-card';
      card.innerHTML = `<img src="${p.imagem}" alt="${p.nome}"><h2>${p.nome}</h2><p>${p.descricao}</p><p><strong>${p.preco}</strong></p><a href="https://wa.me/554130301240?text=${p.whatsapp}" target="_blank"><button class="whatsapp">Quero este produto</button></a>`;
      container.appendChild(card);
    });
  });
