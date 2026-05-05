import Header from "./components/Header";
import pfp from "./assets/pfp.png";
import Card from "./components/Card";

function App() {
  const aboutCards = [
    {
      title: "Skills",
      content: (
        <p className="text-[#FFD9DA] font-sans text-xl lg:text-2xl">
          JavaScript, Typescript, ReactJS/TS, C#, .NET, SQL, Android Studio,
          Git, Firebase, Figma, Ibis Paint X, Canva, Krita, and more!
        </p>
      ),
    },
    {
      title: "Experience",
      content: (
        <p className="text-[#FFD9DA] font font-sans text-xl lg:text-2xl">
          Front-end and back-end development intern at{" "}
          <a
            href="https://simplevia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EB638B] hover:underline"
          >
            Simplevia Technologies, Inc.
          </a>
        </p>
      ),
    },
    {
      title: "Education",
      content: (
        <p className="text-[#FFD9DA] font font-sans text-xl lg:text-2xl">
          BS Information Technology at New Era University
        </p>
      ),
    },
  ];

  return (
    <>
      <main className="w-full h-full bg-linear-to-br from-[#382E31] via-[#382E31] to-[#EB638B]">
        <Header />
        <section
          id="home"
          className="flex flex-col lg:h-screen lg:flex-row items-center justify-center p-10 gap-5 my-20"
        >
          <div className="flex flex-col lg:basis-1/2 lg:pl-20 justify-center">
            <h2 className="text-[#FFD9DA] font-bold font-sans text-2xl lg:text-2xl  ">
              Hello! I'm Shayne Marie
            </h2>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:text-9xl">
              Full stack
            </h1>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:items-start justify-center lg:text-9xl md:text-clip">
              Developer
            </h1>
          </div>
          <div className="lg:basis-1/2 justify-center items-center flex mt-10 min-w-64 max-w-lg">
            <img
              src={pfp}
              alt="photo"
              className="bg-linear-to-br from-[#EB638B] to-[#AC274F] rounded-full"
            />
          </div>
        </section>
        <section
          id="about"
          className="flex flex-col lg:h-screen p-20 justify-center gap-10 w-full"
        >
          <div className="flex flex-col lg:flex-row gap-y-5 items-center pt-20">
            <h1 className="text-[#EB638B] font-bold font-sans italic text-4xl lg:text-5xl basis-1/4">
              ABOUT ME
            </h1>
            <div className="border-y-5 border-[#FFD9DA] flex rounded-lg px-5 basis-3/4"></div>
          </div>
          <div className="flex flex-col w-full h-full gap-10">
            <div className="flex flex-col lg:flex-row">
              <p className="text-[#FFD9DA] font-sans text-xl basis-full lg:basis-1/2 pb-10">
                I'm a passionate full-stack developer with experience in
                creating dynamic and responsive web applications.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10">
              {aboutCards.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  content={card.content}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="flex flex-row lg:h-screen"></section>
        <footer id="contact" className="flex flex-row lg:h-screen">
          <div className="flex flex-col w-full gap-10 p-20 bg-[#191516]">
            <p className="text-[#EB638B] font-bold font-sans italic text-4xl lg:text-5xl basis-1/4">
              Contact Me!
            </p>
            <p className="text-[#FFD9DA] font font-sans text-md lg:text-lg">
              Send me an email at{" "}
              <a
                href="mailto:gulmayoshayne@gmail.com"
                className="text-[#EB638B] hover:underline"
              >
                gulmayoshayne@gmail.com
              </a>
            </p>
            <div className="flex flex-col lg:flex-row">

            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
