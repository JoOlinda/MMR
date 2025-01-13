// Seleciona o elemento <nav> onde o botão será inserido
const navElement = document.querySelector('nav');

// Cria o botão para alternar o tema
const toggleThemeButton = document.createElement('button');
document.body.appendChild(toggleThemeButton);

// Ícones SVG para claro e escuro
const sunIcon = '☀️'; // Ícone de sol
const moonIcon = '🌙'; // Ícone de lua

// Recupera a preferência do tema do usuário
const userPreferredTheme = localStorage.getItem('theme');

// Aplica o tema salvo e define o ícone inicial
if (userPreferredTheme === 'dark') {
  document.body.classList.add('dark-theme');
  toggleThemeButton.innerHTML = sunIcon; // Mostra o ícone de sol no tema escuro
} else {
  toggleThemeButton.innerHTML = moonIcon; // Mostra o ícone de lua no tema claro
}

// Alterna entre os temas claro e escuro
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  // Atualiza o ícone com base no tema atual
  if (document.body.classList.contains('dark-theme')) {
    toggleThemeButton.innerHTML = sunIcon;
    localStorage.setItem('theme', 'dark');
  } else {
    toggleThemeButton.innerHTML = moonIcon;
    localStorage.setItem('theme', 'light');
  }
});

// Adiciona o botão ao <nav>
navElement.appendChild(toggleThemeButton);
