
import Hero from './components/Hero';
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-grid-pattern fixed inset-0">
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
