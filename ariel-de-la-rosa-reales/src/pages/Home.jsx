import { booksData } from '../data/booksData';

export function Home() {
  const totalBooks = booksData.length;
  const availableBooks = booksData.filter(b => b.available).length;

  return (
    <section className="page-section">
      <h1>Bienvenido a Librería Archivo</h1>
      <p>Explora nuestra gran variedad de obras literarias.</p>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total de Libros</h3>
          <p>{totalBooks}</p>
        </div>
        <div className="metric-card">
          <h3>Disponibles</h3>
          <p>{availableBooks}</p>
        </div>
      </div>
    </section>
  );
}