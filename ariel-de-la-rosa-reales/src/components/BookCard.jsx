const categoryBadgeClasses = {
  Arquitectura: 'badge-arquitectura',
  'Diseño Industrial': 'badge-industrial',
  'Diseño Gráfico': 'badge-grafico',
  Estética: 'badge-estetica',
  Tipografía: 'badge-tipografia',
};

export function BookCard({ book }) {
  const categoryBadgeClass = categoryBadgeClasses[book.categoria] || 'badge-neutral';

  return (
    <article className="book-card">
      <div className="card-top">
        <div className="card-icon-container" aria-hidden="true">
          {book.categoria.slice(0, 1)}
        </div>
        {book.destacado && <span className="card-rating-badge">★ Destacado</span>}
      </div>
      <h2 className="card-title">{book.titulo}</h2>
      <p className="card-author">{book.autor}</p>
      <p className="card-summary">{book.resumen}</p>
      <div className="card-details-box">
        <span>{book.anio}</span>
        <span>{book.paginas} páginas</span>
      </div>
      <div className="card-footer">
        <span className={`badge ${categoryBadgeClass}`}>{book.categoria}</span>
        <span className="card-meta">{book.calificacion.toFixed(1)} / 5</span>
      </div>
    </article>
  );
}