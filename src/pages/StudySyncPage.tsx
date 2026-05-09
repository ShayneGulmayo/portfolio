import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import StudySyncSet from "../assets/studysync_set.jpg";
import StudySyncChat from "../assets/studysync_chat.jpg";
import StudySyncAi from "../assets/studysync_ai.jpg";

function StudySyncPage() {
  const featureShowcase = [
    {
      title: "Flashcard and Quiz Sets",
      image: StudySyncSet,
      alt: "StudySync flashcard and quiz set interface",
      description:
        "This view highlights StudySync's organized decks and quiz sets, where learners can quickly switch between memorization mode and practice mode. The streamlined layout keeps cards, question flow, and progress easy to track in one place.",
    },
    {
      title: "Collaborative Chat Rooms",
      image: StudySyncChat,
      alt: "StudySync real-time chat room for collaborative studying",
      description:
        "Study rooms allow students to discuss concepts, ask follow-up questions, and share study resources in real time. It turns solo review into collaborative learning and keeps group momentum active during sessions.",
    },
    {
      title: "AI-Powered Study Generation",
      image: StudySyncAi,
      alt: "StudySync AI feature generating flashcards and quiz questions",
      description:
        "Using Google Gemini API integration, StudySync can generate flashcards and quiz questions from user-provided content. This reduces manual set creation time and helps learners start reviewing immediately.",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-linear-to-br from-[#382E31] via-[#382E31] to-[#EB638B] p-8 lg:p-16">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
          <h1 className="text-[#EB638B] font-bold font-sans text-3xl lg:text-5xl italic">
            StudySync - Flashcards & Practice Quizzes
          </h1>
          <Button
            component={Link}
            to="/"
            variant="outline"
            color="#FFD9DA"
            className="border-[#FFD9DA] text-[#FFD9DA] hover:bg-[#FFD9DA] hover:text-[#191516] w-fit"
          >
            Back to Home
          </Button>
        </div>

        <p className="text-[#FFD9DA] font-sans text-lg lg:text-xl mb-10 max-w-4xl">
          A modern, interactive learning platform that combines spaced-repetition flashcards, practice quizzes, real-time collaboration, and AI-assisted set generation.
        </p>

        <div className="flex flex-col gap-8">
          {featureShowcase.map((feature, index) => (
            <article
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#191516] rounded-2xl shadow-lg shadow-black/40 p-6 lg:p-10 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="flex flex-col justify-center gap-4">
                <h2 className="text-[#EB638B] font-bold font-sans text-2xl lg:text-3xl">
                  {feature.title}
                </h2>
                <p className="text-[#FFD9DA] font-sans text-md lg:text-lg">
                  {feature.description}
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-[#FFD9DA]/25 bg-[#2B2426]">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-full object-cover min-h-[14rem] lg:min-h-[20rem]"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 bg-[#191516] rounded-2xl shadow-lg shadow-black/40 p-6 lg:p-10">
          <h2 className="text-[#EB638B] font-bold font-sans text-2xl mb-4">
            Tech Stack
          </h2>
          <ul className="text-[#FFD9DA] font-sans text-md lg:text-lg flex flex-col gap-2 list-disc list-inside">
            <li>Platform / IDE: Android (Android Studio)</li>
            <li>Database / Backend: Firebase</li>
            <li>AI Integration: Google Gemini API</li>
          </ul>
        </div>

        <div className="mt-6">
          <Button
            component="a"
            href="https://github.com/ShayneGulmayo/StudySync-Flashcard-and-Quiz"
            target="_blank"
            rel="noopener noreferrer"
            variant="filled"
            color="#EB638B"
            className="hover:opacity-90"
          >
            View StudySync on GitHub
          </Button>
        </div>
      </section>
    </main>
  );
}

export default StudySyncPage;
