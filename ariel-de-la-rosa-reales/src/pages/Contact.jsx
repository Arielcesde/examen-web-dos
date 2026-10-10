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
    <section>
      <div className="section-header">
        <div>
          <span className="hero-tag">Librería Archivo</span>
          <h1 className="hero-title">Hablemos de libros</h1>
          <p className="hero-subtitle">¿Tienes una pregunta o una recomendación? Escríbenos.</p>
        </div>
      </div>

      <div className="contact-layout">
        <aside className="contact-card">
          <h2 className="section-title">¿En qué podemos ayudarte?</h2>
          <p className="hero-subtitle">
            Comparte tus preguntas, sugerencias o comentarios sobre nuestra colección.
          </p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-icon-box" aria-hidden="true">01</span>
              <div>
                <h3>Consultas</h3>
                <p className="card-author">Pregúntanos sobre los libros del catálogo.</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon-box" aria-hidden="true">02</span>
              <div>
                <h3>Sugerencias</h3>
                <p className="card-author">Cuéntanos qué títulos te gustaría encontrar.</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="contact-card">
          <h2 className="section-title">Formulario de contacto</h2>
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Nombre</label>
            <input
              className="form-control"
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Correo electrónico</label>
            <input
              className="form-control"
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">Asunto</label>
            <select
              className="form-control"
              id="contact-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="Consulta">Consulta</option>
              <option value="Sugerencia">Sugerencia</option>
              <option value="Reclamo">Reclamo</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">Mensaje</label>
            <textarea
              className="form-control"
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="btn btn-secondary" type="button" onClick={handleClear}>
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}