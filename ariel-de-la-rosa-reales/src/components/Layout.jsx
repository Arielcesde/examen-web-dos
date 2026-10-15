import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}



