export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-5xl font-bold text-white">
          Contact Me
        </h2>

        <form className="space-y-6">
          <input
            placeholder="Nama"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-4 text-white"
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-4 text-white"
          />

          <textarea
            rows={6}
            placeholder="Pesan"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 p-4 text-white"
          />

          <button className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white">
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}