import React from "react";

export default function index() {
  return (
    <div className="flex gap-30">
      <article className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:scale-105 dark:bg-slate-800">
        <figure className="aspect-video overflow-hidden">
          <img
            src="/menina.avif"
            alt="Preview do componente Tailwind 4"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="p-6">
          <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 uppercase tracking-wide dark:bg-sky-900/30 dark:text-sky-400">
            Novidade v4.1
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 text-shadow-sm shadow-sky-200 dark:text-white">
            Design Reimaginado
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            O Tailwind CSS 4.1 introduz um motor de alta performance em Rust,
            configuração via CSS e novas utilidades de sombras e máscaras.
          </p>

          <footer className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Equipe Dev
              </span>
            </div>

            <a
              href="#"
              className="group flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
            >
              Ler mais
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </footer>
        </div>
      </article>
      <article className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:scale-105 dark:bg-slate-800">
        <figure className="aspect-video overflow-hidden">
          <img
            src="/gato.jpg"
            alt="Preview do componente Tailwind 4"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="p-6">
          <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 uppercase tracking-wide dark:bg-sky-900/30 dark:text-sky-400">
            Novidade v4.1
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 text-shadow-sm shadow-sky-200 dark:text-white">
            Design Reimaginado
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            O Tailwind CSS 4.1 introduz um motor de alta performance em Rust,
            configuração via CSS e novas utilidades de sombras e máscaras.
          </p>

          <footer className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Equipe Dev
              </span>
            </div>

            <a
              href="#"
              className="group flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
            >
              Ler mais
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </footer>
        </div>
      </article>
      <article className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:scale-105 dark:bg-slate-800">
        <figure className="aspect-video overflow-hidden">
          <img
            src="/quimera.jpg"
            alt="Preview do componente Tailwind 4"
            className="h-full w-full object-cover"
          />
        </figure>

        <div className="p-6">
          <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 uppercase tracking-wide dark:bg-sky-900/30 dark:text-sky-400">
            Novidade v4.1
          </span>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 text-shadow-sm shadow-sky-200 dark:text-white">
            Design Reimaginado
          </h3>

          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            O Tailwind CSS 4.1 introduz um motor de alta performance em Rust,
            configuração via CSS e novas utilidades de sombras e máscaras.
          </p>

          <footer className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500"></div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Equipe Dev
              </span>
            </div>

            <a
              href="#"
              className="group flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400"
            >
              Ler mais
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </footer>
        </div>
      </article>
    </div>
  );
}
