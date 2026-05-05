import { menuItems } from "../data/menuItems";
import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState, useEffect } from "react";

function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (link: string) => (e: React.MouseEvent) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    close();
  };

  const items = menuItems.map((item) => {
    const sectionId = item.link.substring(1);
    const isActive = activeSection === sectionId;
    return (
      <a
        key={item.label}
        href={item.link}
        onClick={handleClick(item.link)}
        className={`font-bold font-sans p-2 rounded-sm transition-colors ${
          isActive
            ? "text-[#EB638B] bg-[#382e31]"
            : "text-[#AC274F] hover:bg-[#382e31]"
        }`}
      >
        {item.label}
      </a>
    );
  });

  return (
    <header className="sticky top-0 z-50">
      <div className="flex h-full lg:flex-row flex-col w-full bg-[#191516] p-5 items-center">
        <h1 className="lg:flex hidden basis-sm text-[#EB638B] font-bold text-2xl mx-10 italic">Shayne Marie</h1>
        <div id="menu-items" className="hidden lg:flex lg:flex-row flex-col justify-center items-center gap-10">
          {items}
        </div>
        <div className="w-full flex flex-row lg:hidden">
          <Burger
            lineSize={3}
            opened={opened}
            onClick={toggle}
            size="md"
            color="#AC274F"
            hiddenFrom="lg"
          />
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        size="75%"
        padding="md"
        title={<div className="text-[#EB638B] font-bold italic">Shayne Marie</div>}
        zIndex={1000000}
        styles={{
          header: { backgroundColor: "#191516" },
          content: { backgroundColor: "#191516" },
        }}
      >
        <div className="flex flex-col gap-4">{items}</div>
      </Drawer>
    </header>
  );
}

export default Header;
