import type { ReactNode } from 'react';

export function Page({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
  );
}

export function PageHeader({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h1>
      {intro ? (
        <p className="mt-3 max-w-2xl text-lg text-slate-600">{intro}</p>
      ) : null}
    </div>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      {children ? <div className="mt-2 text-slate-600">{children}</div> : null}
    </div>
  );
}

// Visible placeholder box for images/screenshots not yet supplied.
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-md border-2 border-dashed border-slate-300 bg-slate-50 text-sm text-slate-400">
      {label}
    </div>
  );
}

export function Field({
  label,
  name,
  type = 'text',
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-700">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-full rounded-md border border-slate-300 px-3 py-2"
        />
      )}
    </label>
  );
}

// Static, backend-less form wrapper (no submission wired up yet).
export function StaticForm({
  submitLabel,
  children,
}: {
  submitLabel: string;
  children: ReactNode;
}) {
  return (
    <form className="mt-6 max-w-xl space-y-4" action="#" method="post">
      {children}
      <button
        type="submit"
        className="rounded-md bg-primary px-5 py-2 font-medium text-white hover:opacity-90"
      >
        {submitLabel}
      </button>
    </form>
  );
}
