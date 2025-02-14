import ChatButton from "./chatbutton";

export default function Pricing() {
  return (
    <section
      className="flex h-screen flex-col items-center justify-center px-10 text-center"
      id="pricing"
    >
      <h1
        className="mb-3 text-5xl font-bold"
        data-aos="fade-down"
        data-aos-once="true"
        data-aos-delay="300"
      >
        This is all free BTW 💸
      </h1>
      <p className="mb-5 text-xl text-text-secondary">
        So you don&apos;t have an excuse not to <br className="md:hidden" /> try
        it out 🙅‍♂️
      </p>
      <ChatButton />
    </section>
  );
}
