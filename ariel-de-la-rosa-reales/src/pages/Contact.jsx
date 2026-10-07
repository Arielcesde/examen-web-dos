import { useState } from 'react';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleClear = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="page-section">
      <h1>Formulario de Contacto</h1>
      <div className="form-container">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Asunto:</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Seleccione una opción</option>
            <option value="Consulta">Consulta</option>
            <option value="Sugerencia">Sugerencia</option>
            <option value="Reclamo">Reclamo</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleClear}>
          Limpiar Campos
        </button>
      </div>
    </section>
  );
}