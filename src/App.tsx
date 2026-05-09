import Header from "./components/Header";
import pfp from "./assets/pfp.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github-sign.png";
import Card from "./components/Card";
import { Button } from "@mantine/core";
import StudySyncSet from "./assets/studysync_set.jpg";
import { Link } from "react-router-dom";

function App() {
  const featuredProject = {
    title: "StudySync",
    description:
      "StudySync is an Android-based learning app with a chat room and AI integration to serve as a learning aid for students and learners.",
    githubUrl: "https://github.com/ShayneGulmayo/StudySync-Flashcard-and-Quiz",
    projectUrl: "/projects/studysync",
    imageUrl: StudySyncSet,
  };

  const aboutCards = [
    {
      title: "Skills",
      content: (
        <p className="text-[#FFD9DA] font-sans text-md lg:text-lg">
          JavaScript, Typescript, ReactJS/TS, C#, .NET, SQL, Android Studio,
          Git, Firebase, Figma, Ibis Paint X, Canva, Krita, and more!
        </p>
      ),
    },
    {
      title: "Experience",
      content: (
        <p className="text-[#FFD9DA] font font-sans text-md lg:text-lg">
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
        <p className="text-[#FFD9DA] font font-sans text-md lg:text-lg">
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
            <h1 className="text-[#EB638B] text-shadow-xs text-shadow-[#FFD9DA] font-bold font-sans italic text-4xl lg:text-5xl basis-1/4">
              ABOUT ME
            </h1>
            <div className="border-y-5 shadow-sm shadow-black border-[#FFD9DA] flex rounded-lg px-5 basis-3/4"></div>
          </div>
          <div className="flex flex-col w-full h-full gap-10">
            <div className="flex flex-col lg:flex-row">
              <p className="text-[#FFD9DA] font-sans text-xl basis-full lg:basis-1/2 pb-10">
                I'm a passionate full-stack developer with experience in
                creating dynamic web applications and android app development. I have strong skills in UI/UX design. I also do digital drawing as a hobby.
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
        <section id="projects" className="flex flex-col w-full lg:min-h-screen p-20">
          <div className="flex flex-col lg:flex-row-reverse gap-y-5 gap-x-5 items-center pt-20">
            <h1 className="text-[#EB638B] text-shadow-sm text-shadow-black justify-end font-bold font-sans italic text-4xl lg:text-5xl basis-1/4">
              PROJECTS
            </h1>
            <div className="border-y-5 shadow-sm shadow-black border-[#FFD9DA] flex rounded-lg px-5 basis-3/4"></div>
          </div>
          <div className="flex flex-col lg:flex-row mt-20 items-stretch shadow-gray-800 shadow-lg rounded-2xl overflow-hidden min-h-[32rem]">
            <div className="bg-[#191516] p-10 lg:basis-1/2 flex flex-col justify-center gap-6">
              <p className="text-[#EB638B] font-semibold font-sans text-2xl lg:text-3xl">
                {featuredProject.title}
              </p>
              <p className="text-[#FFD9DA] font-sans text-md lg:text-xl">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  component={Link}
                  to={featuredProject.projectUrl}
                  variant="filled"
                  color="#EB638B"
                  className="hover:opacity-90"
                >
                  View Project
                </Button>
                <Button
                  component="a"
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  color="#EB638B"
                  className="border-[#EB638B] hover:bg-[#EB638B] hover:text-[#191516]"
                >
                  View GitHub
                </Button>
              </div>
            </div>
            <div className="bg-linear-to-br from-[#EB638B] to-[#FFD9DA] p-8 lg:basis-1/2 flex items-center justify-center">
              <img
                src={featuredProject.imageUrl}
                alt={`${featuredProject.title} preview`}
                className="w-full max-w-md rounded-xl bg-white/30 p-4"
              />
            </div>
          </div>
        </section>
        <footer id="contact" className="flex flex-row lg:h-screen">
          <div className="flex flex-col w-full gap-10 p-20 bg-[#191516]">
            <p className="text-[#EB638B] font-bold font-sans italic text-4xl lg:pt-20 lg:text-5xl">
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
            <div className="flex gap-5 flex-row">
              <a
                href="https://www.linkedin.com/in/shayne-gulmayo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EB638B] hover:underline"
              >
                <img src={linkedin} alt="LinkedIn" className="w-20 h-20" />
              </a>
              <a
                href="https://github.com/ShayneGulmayo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EB638B] hover:underline"
              >
                <img src={github} alt="GitHub" className="w-20 h-20 ml-4" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
