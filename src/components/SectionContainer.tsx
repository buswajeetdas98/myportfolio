import React from "react";

interface SectionContainerProps {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const SectionContainer = ({
  id,
  title,
  className = "",
  children,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`bg-black min-h-[600px] w-full py-16 px-4 md:px-8 lg:px-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#6f00ff]"></span>
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
