import Header from "./components/Header";
import pfp from "./assets/pfp.png";

function App() {
  return (
    <>
      <main className="w-full h-full bg-gradient-to-br from-[#382E31] via-[#382E31] to-[#EB638B]">
        <Header />
        <section
          id="home"
          className="flex flex-col lg:flex-row items-center justify-center p-10 gap-5 mb-20"
        >
          <div className="flex flex-col lg:basis-1/2 lg:pl-20 justify-center">
            <h2 className="text-[#EB638B] font-bold font-sans text-2xl lg:text-2xl">
              Hello! I'm Shayne Marie
            </h2>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:text-9xl">
              Full stack
            </h1>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:items-start justify-center lg:text-9xl md:text-clip">
              Developer
            </h1>
          </div>
          <div className="lg:basis-1/2 justify-center items-center flex">
            <img
              src={pfp}
              alt="photo"
              className="bg-gradient-to-br from-[#EB638B] to-[#AC274F] rounded-full"
            />
          </div>
        </section>
        <section
          id="about"
          className="flex flex-col p-20 justify-center gap-10 w-full"
        >
          <div className="flex flex-col lg:flex-row gap-5 items-center">
            <h1 className="text-[#EB638B] font-bold font-sans italic text-4xl lg:text-5xl basis-1/4">
              ABOUT ME
            </h1>
            <div className="border-y-5 border-[#382E31] flex rounded-lg px-5 basis-3/4"></div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white font-sans text-xl mb-20">
              I'm a passionate full-stack developer with experience in creating
              dynamic and responsive web applications.
            </p>
            <div className="flex flex-col lg:flex-row w-full h-auto gap-5 p-10">
              <div className="flex flex-col gap-3 basis-1/3">
                <p className="text-[#EB638B] font-bold font-sans text-3xl lg:text-5xl">
                  Skills
                </p>
                <p className="text-white font font-sans text-xl lg:text-2xl">
                  JavaScript, Typescript, ReactJS/TS, C#, .NET, SQL, Android
                  Studio, Git, Firebase, Figma, Ibis Paint X, Canva, Krita, and
                  more!
                </p>
              </div>
              <div className="flex flex-col gap-3 basis-1/3">
                <p className="text-[#EB638B] font-bold font-sans text-3xl lg:text-5xl">
                  Experience
                </p>
                <p className="text-white font font-sans text-xl lg:text-2xl">
                  Front-end and back-end development intern at Simplevia Technologies, Inc.
                </p>
              </div>
              <div className="flex flex-col gap-3 basis-1/3">
                <p className="text-[#EB638B] font-bold font-sans text-3xl lg:text-5xl">
                  Education
                </p>
                <p className="text-white font font-sans text-xl lg:text-2xl">
                  BS Information Technology at New Era University
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="flex flex-row "></section>
        <section id="contact" className="flex flex-row "></section>
      </main>
    </>
  );
}

export default App;
