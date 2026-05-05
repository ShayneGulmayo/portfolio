import type { ReactNode } from "react";

type CardProps = {
  title: string;
  content: ReactNode;
};

function Card({ title, content }: CardProps) {
  return (
    <div className="flex flex-col gap-3 basis-1/3 bg-[#191516] p-5 rounded-lg min-h-64">
      <p className="text-[#EB638B] font-bold font-sans text-3xl lg:text-5xl">
        {title}
      </p>
      {content}
    </div>
  );
}

export default Card;
