'use client';

import { useState } from 'react';

const ENDPOINT = 'https://formspree.io/f/mjgevzna';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
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
          phone: data.phone,
          email: data.email,
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
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="cf-name">
          Ad Soyad
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          placeholder="Adınız"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="cf-phone">
          Telefon <span className="text-slate-400">(isteğe bağlı)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          placeholder="Telefon numaranız"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="cf-email">
          E-posta
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          placeholder="siz@ornek.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="cf-message">
          Mesaj
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="Mesajınız"
          className={inputClass}
        />
      </div>

      {/* Honeypot (Formspree) – hidden from users */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {/* Distinguishes tr2uk.com enquiries */}
      <input type="hidden" name="source" value="tr2uk.com" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
      </button>

      {status === 'success' && (
        <p className="text-sm font-medium text-primary" role="status">
          Mesajınız gönderildi, teşekkürler.
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
