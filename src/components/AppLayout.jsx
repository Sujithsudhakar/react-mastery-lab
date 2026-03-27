import { NavLink, Outlet } from 'react-router-dom';

const linkClassName = ({ isActive }) =>
  isActive ? 'nav-link nav-link-active' : 'nav-link';

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React Mastery Lab</p>
        <h1>Build your React skills one component at a time.</h1>
        <p className="hero-copy">
          This starter project includes basic routing so you can drop new
          exercises and pages in as you grow the app.
        </p>
        <nav className="nav">
          <NavLink to="/" end className={linkClassName}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClassName}>
            About
          </NavLink>
        </nav>
      </header>

      <main className="page-panel">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
