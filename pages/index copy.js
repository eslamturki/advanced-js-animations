import uselocoScroll from "../hooks/useLocoScroll";

export default function Home() {
  uselocoScroll(true);
  return (
    <div data-scroll-container className="scroll-container">
      <section data-scroll- data-scroll-section className="section">
        <h1 data-scroll data-scroll-speed="-5">
          Section 1
        </h1>
      </section>
      <section data-scroll- data-scroll-section className="section">
        <h1
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="horizontal"
        >
          {" "}
          Section 2
        </h1>
      </section>
      <section data-scroll- data-scroll-section className="section">
        <h1> Section 3</h1>
      </section>
      <section data-scroll- data-scroll-section className="section">
        <h1> Section 4</h1>
      </section>
    </div>
  );
}
