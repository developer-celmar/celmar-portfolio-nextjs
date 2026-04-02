export function ContactForm() {
  return (
    <form className="card p-6" action="/api/contact" method="post">
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-950"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-950"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-slate-950"
            placeholder="Tell me about your inquiry"
            required
          />
        </div>
        <button type="submit" className="btn-primary w-full sm:w-fit">
          Send message
        </button>
      </div>
    </form>
  );
}
