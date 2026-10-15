import { booksData } from '../data/booksData';

export function Home() {
  const totalBooks = booksData.length;
  const featuredBooks = booksData.filter(book => book.destacado).length;

  return (
    <section>
      <div className="hero-banner">
        <span className="hero-tag">Librería Archivo</span>
        <h1 className="hero-title">Ideas que inspiran, libros que perduran.</h1>
        <p className="hero-subtitle">
          Explora una colección dedicada al diseño, la arquitectura y la cultura visual.
        </p>
      </div>

      <div className="section-header">
        <h2 className="section-title">Nuestra colección</h2>
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper" aria-hidden="true">L</div>
          <div className="stat-content">
            <span className="stat-number">{totalBooks}</span>
            <span className="stat-label">Libros en el catálogo</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrapper" aria-hidden="true">★</div>
          <div className="stat-content">
            <span className="stat-number">{featuredBooks}</span>
            <span className="stat-label">Libros destacados</span>
          </div>
        </div>
      </div>
    </section>
  );
}