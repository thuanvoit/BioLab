import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Container: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="min-h-[30rem] w-fit min-w-[25rem] rounded-lg border border-gray-600 bg-slate-700 p-4 py-5 text-white shadow drop-shadow">
      {children}
    </div>
  );
};
