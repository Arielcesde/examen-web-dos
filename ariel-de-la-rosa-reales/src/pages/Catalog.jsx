import { useState } from 'react';
import { booksData } from '../data/booksData';
import { BookCard } from '../components/BookCard';

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(booksData.map(book => book.categoria))];

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.autor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || book.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section>
      <div className="section-header">
        <div>
          <span className="hero-tag">Librería Archivo</span>
          <h1 className="hero-title">Catálogo de libros</h1>
          <p className="hero-subtitle">Encuentra tu próxima lectura por título, autor o categoría.</p>
        </div>
      </div>
      <div className="filter-toolbar">
        <div className="search-group">
          <span className="search-icon-pos" aria-hidden="true">⌕</span>
          <input
            className="search-input"
            type="search"
            aria-label="Buscar libros por título o autor"
            placeholder="Buscar por título o autor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <label className="form-label" htmlFor="category-filter">Categoría</label>
        <select
          id="category-filter"
          className="select-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="cards-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p role="status">No se encontraron libros con esos filtros.</p>
        )}
      </div>
    </section>
  );
}