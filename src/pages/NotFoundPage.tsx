import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white md:text-3xl">
        Page not found
      </h2>
      <p className="text-base leading-7 text-slate-300">
        The page you are looking for does not exist yet.
      </p>
      <Link
        className="inline-flex rounded-full border border-sky-300/30 px-4 py-2 text-sm font-medium text-sky-300 transition hover:-translate-y-0.5 hover:border-sky-200/60 hover:text-sky-200"
        to="/"
      >
        Go back home
      </Link>
    </section>
  );
}

export default NotFoundPage;
