// Função para buscar significado da palavra
async function searchWord() {
  const input = document.getElementById('search-input').value;
  const apiUrl = `https://api.dicionario-aberto.net/word/${input}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Exibir significado no elemento 'search-result'
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    data.forEach(entry => {
      const word = entry.word;
      const definition = entry.xml;

      const wordElement = document.createElement('h3');
      wordElement.textContent = word;

      const definitionElement = document.createElement('p');
      definitionElement.innerHTML = definition;

      searchResult.appendChild(wordElement);
      searchResult.appendChild(definitionElement);
    });
  } catch (error) {
    console.error('Erro ao buscar palavra:', error);
  }
}

// Event listener para o formulário de busca
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', e => {
  e.preventDefault();
  searchWord();
});
