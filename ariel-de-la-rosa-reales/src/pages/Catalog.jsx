import { useState } from 'react';
import { booksData } from '../data/booksData';
import { BookCard } from '../components/BookCard';

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...new Set(booksData.map(b => b.category))];

  const filteredBooks = booksData.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="page-section">
      <h1>Catálogo de Libros</h1>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Buscar por título o autor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <BookCard key={book.id} book={book} />)
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </section>
  );
}