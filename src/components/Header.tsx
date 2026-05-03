import { menuItems } from "../data/menuItems";
import { Burger, Drawer} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const handleClick = (link: string) => (e: React.MouseEvent) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(link);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = menuItems.map((item) => (
    <a
      key={item.label}
      href={item.link}
      onClick={handleClick(item.link)}
      className="text-[#AC274F] font-bold font-sans hover:bg-[#382e31] p-2 rounded-sm"
    >
      {item.label}
    </a>
  ));

  return (
    <header>
      <div className="flex h-full lg:flex-row flex-col items-center justify-center w-full bg-[#191516] p-10 ">
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
        size="100%"
        padding="md"
        title={<div className='text-[#AC274F] font-bold'>MENU</div>}
        zIndex={1000000}
      >
        <div className="flex flex-col gap-4">{items}</div>
      </Drawer>
    </header>
  );
}

export default Header;
