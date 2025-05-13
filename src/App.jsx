
import './App.css'
import BarbeiroCard from './components/BarberCard';


const barbeiros = [
  
{ nome: 'Maria', especialidades: 'Degradê e Pinturas', telefone: '987654321',foto:'../public/images/Maria.jpg' },
  { nome: 'Pedro', especialidades: 'Cortes Sociais', telefone: '555555555',foto:'../public/images/Pedro.jpg' },
  { nome: 'Ana', especialidades: 'Cabelo Feminino', telefone: '999999999',foto:'../public/images/Ana.jpg' },
];
function App() {
  return (
    <div className="App">

      {/* Cabeçalho ou menu fixo */}
      <header className="header">
        <h1>Barbearia Top Style</h1>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#barbeiros">Barbeiros</a>
        </nav>
      </header>

      {/* Seção Sobre */}
      <section id="sobre" className="section">
        <h2>Sobre Nós</h2>
        <p>Somos uma barbearia dedicada à elegância, estilo e bom atendimento.</p>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="section">
        <h2>Serviços</h2>
        <ul>
          <li>✂️ Corte Masculino</li>
          <li>🧔 Barba desenhada</li>
          <li>💈 Degradê</li>
          <li>🪒 Navalhado</li>
        </ul>
      </section>

      {/* Seção Barbeiros */}
      <section id="barbeiros" className="section">
        <h2>Nossos Barbeiros</h2>
        <div className="barbeiros-container">
          {barbeiros.map((barbeiro) => (
            <BarbeiroCard
              key={barbeiro.nome}
              nome={barbeiro.nome}
              especialidades={barbeiro.especialidades}
              telefone={barbeiro.telefone}
              foto={barbeiro.foto}
            />
          ))}
          {/* Adicione mais barbeiros aqui */}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Barbearia Top Style - Todos os direitos reservados</p>
        <p>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer">
            Ver no Google Maps
          </a>
        </p>
      </footer>

    </div>
  );
}


export default App;