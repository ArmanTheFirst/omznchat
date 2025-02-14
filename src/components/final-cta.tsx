import ChatButton from "./chatbutton";

export default function FinalCTA() {
  return (
    <section className="px-5 text-center">
      <h1
        className="my-5 text-4xl font-bold leading-tight"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="400"
      >
        🚫 Stop Missing Out - Experience the Future <br /> of Chat Today. 🚀
      </h1>
      <p className="mb-5 pb-2 text-xl text-text-secondary">
        AI-enhanced conversations, seamless interactions,{" "}
        <br className="md:hidden" /> and next-level engagement—all in one place.
      </p>
      <ChatButton />
    </section>
  );
}
