'use client';

import { useState } from 'react';

const ENDPOINT = 'https://formspree.io/f/mjgevzna';

type Status = 'idle' | 'sending' | 'success' | 'error';

// Reusable lead form. `source` distinguishes which page the enquiry came from
// (e.g. "fire-safety", "food-hygiene").
export default function LeadForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          business: data.business,
          message: data.message,
          _gotcha: data._gotcha,
          source: data.source,
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-accent focus:outline-none';

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="lf-name">
          Ad Soyad
        </label>
        <input id="lf-name" name="name" type="text" required placeholder="Adınız" className={inputClass} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="lf-email">
          E-posta
        </label>
        <input id="lf-email" name="email" type="email" required placeholder="siz@ornek.com" className={inputClass} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="lf-phone">
          Telefon <span className="text-slate-400">(isteğe bağlı)</span>
        </label>
        <input id="lf-phone" name="phone" type="tel" placeholder="Telefon numaranız" className={inputClass} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="lf-business">
          İşletme türü
        </label>
        <input id="lf-business" name="business" type="text" required placeholder="Örn. restoran, ofis, perakende" className={inputClass} />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="lf-message">
          Mesaj
        </label>
        <textarea id="lf-message" name="message" required rows={4} placeholder="Talebiniz" className={inputClass} />
      </div>

      {/* Honeypot (Formspree) – hidden from users */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {/* Lead source (per page) */}
      <input type="hidden" name="source" value={source} />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
      </button>

      {status === 'success' && (
        <p className="text-sm font-medium text-primary" role="status">
          Talebiniz alındı, teşekkürler.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm font-medium text-red-600" role="alert">
          Gönderilemedi, lütfen tekrar deneyin.
        </p>
      )}
    </form>
  );
}
