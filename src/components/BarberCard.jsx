const BarbeiroCard = ({ nome, especialidades, telefone, foto }) => {
  const mensagem = encodeURIComponent(`Olá ${nome}, gostaria de agendar um horário.`);
  const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagem}`;

  return (
    <div style={{
      background: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2>{nome}</h2>
      <p><strong>Especialidades:</strong> {especialidades}</p>
      <img src={foto} alt={nome} 
      style={{width: '150px', height: '150px', borderRadius: '20px', marginBottom: '10px'}}/>
      <br />
      <a
        href={linkWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#',
          color: 'white',
          padding: '10px 15px',
          textDecoration: 'none',
          borderRadius: '5px'

        }}
        className="btn-two"
      >
        Agendar pelo WhatsApp
      </a>
    </div>
  );
};

export default BarbeiroCard;