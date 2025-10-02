import Image from "next/image";
import Link from "next/link";

function Card({ title, children, href, cta }: { title: string; children: React.ReactNode; href?: string; cta?: string }) {
  return (
    <div className="rounded-2xl shadow-lg bg-white/60 backdrop-blur p-6 flex flex-col gap-4 border border-navy/10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="text-base leading-relaxed">{children}</div>
      {href && cta && (
        <Link href={href} className="inline-block text-center rounded-2xl px-4 py-2 border border-navy hover:bg-navy hover:text-cream transition">
          {cta}
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 md:p-10">
      <div className="mb-8">
        <Image src="/v5.png" width={200} height={200} alt="Mete's Math Atelier logo" priority />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Mete&apos;s Math Atelier</h1>
      <p className="max-w-3xl text-center text-lg mb-10">
        I’m Mete, a postdoctoral researcher in mathematics at the University of Arizona. I help highly motivated students excel in
        mathematical olympiads, the Putnam exam, and university math—building rigorous foundations in calculus, analysis, linear algebra,
        differential equations, probability, and statistics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        <Card title="Tutoring" href="#contact" cta="Book a Session">
          Personalized one-on-one coaching for Olympiad training (AMC/AIME/USAMO/IMO), Putnam prep, and core theoretical courses.
          Sessions available online; custom study plans and problem sets included.
        </Card>

        <Card title="Resources" href="#resources" cta="Explore">
          Curated book lists, handouts, and practice problems to develop deep problem-solving skills and proof fluency.
        </Card>

        <Card title="YouTube Channel" href="https://www.youtube.com/@metesmathatelier" cta="Watch">
          Walkthroughs of Putnam problems and beautiful ideas from higher mathematics—short, focused, and rigorous.
        </Card>
      </div>

      <section id="resources" className="mt-16 max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-4">Suggested Books</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Olympiads:</strong> Engel — <em>Problem-Solving Strategies</em>; Titu Andreescu — <em>103 Problems</em> series.</li>
          <li><strong>Putnam:</strong> Kedlaya, Poonen, Vakil — <em>The William Lowell Putnam Mathematical Competition</em>.</li>
          <li><strong>Foundations:</strong> Axler — <em>Linear Algebra Done Right</em>; Rudin — <em>Principles of Mathematical Analysis</em>; 
            Abbott — <em>Understanding Analysis</em>; Durrett — <em>Probability: Theory and Examples</em>.</li>
        </ul>
      </section>

      <section id="contact" className="mt-16 max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Interested in tutoring or collaboration? Email me and tell me about your goals and timeline.</p>
        <a className="inline-block text-center rounded-2xl px-6 py-3 border border-navy hover:bg-navy hover:text-cream transition text-lg" href="mailto:your-email@example.com">
          Email Me
        </a>
        <p className="text-sm mt-3 opacity-80">Based in Tucson, AZ • Remote worldwide</p>
      </section>

      <footer className="mt-20 text-sm opacity-70">
        © {new Date().getFullYear()} Mete&apos;s Math Atelier.
      </footer>
    </main>
  );
}
