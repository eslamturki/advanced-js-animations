import uselocoScroll from "../hooks/useLocoScroll";

export default function Home() {
  uselocoScroll(true);
  return (
    <div data-scroll-container className="scroll-container">
      <section data-scroll- data-scroll-section className="section">
        section1
      </section>
      <section data-scroll- data-scroll-section className="section">
        section2
      </section>
      <section data-scroll- data-scroll-section className="section">
        section3
      </section>
      <section data-scroll- data-scroll-section className="section">
        section4
      </section>
    </div>
  );
}
