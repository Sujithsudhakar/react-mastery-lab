import type { NavLinkRenderProps } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';

const linkClassName = ({ isActive }: NavLinkRenderProps) =>
  [
    'rounded-full border px-4 py-2 text-sm font-medium tracking-wide transition',
    'border-sky-100/15 bg-white/5 text-slate-200 hover:-translate-y-0.5 hover:border-sky-200/40',
    isActive
      ? 'border-transparent bg-gradient-to-r from-sky-300 to-blue-500 text-slate-950'
      : '',
  ].join(' ');

function AppLayout() {
  return (
    <div className="mx-auto w-[min(960px,calc(100%-2rem))] py-8 md:py-12">
      <header className="rounded-[28px] border border-sky-100/10 bg-slate-900/90 p-6 shadow-panel md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/80">
          React Mastery Lab
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
          Build your React skills one component at a time.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          This starter project includes basic routing so you can drop new
          exercises and pages in as you grow the app.
        </p>
        <nav className="mt-8 flex flex-wrap gap-3">
          <NavLink to="/home" end className={linkClassName}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClassName}>
            About
          </NavLink>
          <NavLink to="/contact-us" className={linkClassName}>
            Contact US
          </NavLink>
        </nav>
      </header>

      <main className="mt-6 rounded-[28px] border border-sky-100/10 bg-slate-900/95 p-6 shadow-panel md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
