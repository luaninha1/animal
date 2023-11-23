import React, { useState } from 'react';
import './App.css';

function App() {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [animaisCadastrados, setAnimaisCadastrados] = useState([]);
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('Perdido');
  const [urlFoto, setUrlFoto] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');

  const handlePesquisa = (event) => {
    event.preventDefault();
    const resultadoPesquisa = animaisCadastrados.filter(animal =>
      animal.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
    setAnimaisCadastrados(resultadoPesquisa);
  };

  const handleCadastro = (event) => {
    event.preventDefault();
    const novoAnimal = { nome, tipo, urlFoto, raca, local };
    setAnimaisCadastrados([...animaisCadastrados, novoAnimal]);
    setNome('');
    setTipo('Perdido');
    setUrlFoto('');
    setRaca('');
    setLocal('');
  };

  const handleRemover = (index) => {
    const novosAnimais = [...animaisCadastrados];
    novosAnimais.splice(index, 1);
    setAnimaisCadastrados(novosAnimais);
  };

  return (
    <div className="App">
      <h1>Bem-Vindo ao Site de Procura de Animais!</h1>

      {/* Formulário de Pesquisa */}
      <form onSubmit={handlePesquisa}>
        <input
          type="text"
          value={termoPesquisa}
          onChange={(event) => setTermoPesquisa(event.target.value)}
          placeholder="Pesquisar por nome..."
        />
        <button type="submit">Pesquisar</button>
      </form>

      {/* Formulário de Cadastro */}
      <form onSubmit={handleCadastro}>
        <h2>Cadastrar Novo Animal</h2>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Nome"
            required
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo:</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
            required
          >
            <option value="Perdido">Perdido</option>
            <option value="Encontrado">Encontrado</option>
          </select>
        </div>
        <div>
          <label htmlFor="urlFoto">URL da Foto:</label>
          <input
            type="text"
            id="urlFoto"
            value={urlFoto}
            onChange={(event) => setUrlFoto(event.target.value)}
            placeholder="URL da Foto"
            required
          />
        </div>
        <div>
          <label htmlFor="raca">Raça:</label>
          <input
            type="text"
            id="raca"
            value={raca}
            onChange={(event) => setRaca(event.target.value)}
            placeholder="Raça"
            required
          />
        </div>
        <div>
          <label htmlFor="local">Local:</label>
          <input
            type="text"
            id="local"
            value={local}
            onChange={(event) => setLocal(event.target.value)}
            placeholder="Local"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>

      {/* Lista de Animais Cadastrados */}
      <div>
        <h3>Animais Cadastrados:</h3>
        <ul>
          {animaisCadastrados.map((animal, index) => (
            <li key={index}>
              <img src={animal.urlFoto} alt={animal.nome} style={{ width: '100px', height: 'auto' }} />
              {animal.nome} - {animal.tipo} - {animal.raca} - {animal.local}
              <button onClick={() => handleRemover(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
