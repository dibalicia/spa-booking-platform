import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-24">
        <p className="font-body text-ivory/60">
          Homepage content goes here.
        </p>
      </main>
    </div>
  );
}