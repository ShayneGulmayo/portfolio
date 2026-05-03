import Header from "./components/Header";
import pfp from "./assets/pfp.png";

function App() {
  return (
    <>
      <main className="w-screen h-full bg-gradient-to-br from-[#382E31] via-[#382E31] to-[#EB638B]">
        <Header />
        <section id="home" className="flex flex-col lg:flex-row items-center justify-center p-10 gap-5">
          <div className="flex flex-col lg:basis-1/2 lg:pl-20 justify-center">
            <h2 className="text-[#EB638B] font-bold font-sans text-2xl lg:text-2xl">Hello! I'm Shayne Marie</h2>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:text-9xl">Full stack</h1>
            <h1 className="text-[#EB638B] font-bold font-sans text-6xl lg:items-start justify-center lg:text-9xl md:text-clip">Developer</h1>
          </div>
          <div className="lg:basis-1/2 justify-center items-center flex">
            <img src={pfp} alt="photo" className="bg-gradient-to-br from-[#EB638B] to-[#AC274F] rounded-full" />
          </div>
        </section>
        <section id="about" className="flex flex-col p-10" >
            <h1 className="text-[#EB638B] font-bold font-sans text-xl lg:items-start justify-center lg:text-5xl md:text-clip">About Me</h1>
        </section>
        <section id="experience" className="flex flex-row "></section>
        <section id="projects" className="flex flex-row "></section>
        <section id="contact" className="flex flex-row "></section>
      </main>
    </>
  );
}

export default App;
