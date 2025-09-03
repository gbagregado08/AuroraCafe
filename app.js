
async function loadMenu(){
  const res = await fetch('data.json');
  const items = await res.json();
  const grid = document.getElementById('menu');
  grid.innerHTML = items.map(i => `
    <article class="card"><h3>${i.name}</h3>
    <p>${i.desc}</p><strong>$${i.price.toFixed(2)}</strong></article>`).join('');
}
document.addEventListener('DOMContentLoaded', loadMenu);
