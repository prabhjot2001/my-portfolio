import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize text-center mt-36 sm:mt-0">
      {children}
    </h2>
  );
}