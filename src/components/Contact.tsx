const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textPink font-semibold flex items-center tracking-wide">
        04. Get In Touch
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Let's Connect!</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Feel free to reach out to me for any questions, or opportunities (or even just to say hi). Let's get to know each other!
      </p>

      <a href="mailto:safira2517@gmail.com">
        <button className="w-40 h-14 border border-textPink mt-6 font-titleFont text-sm text-textPink tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
