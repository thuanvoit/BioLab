import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Container: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="w-fit p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-700 dark:border-gray-600 drop-shadow">
        {children}
      </div>
    </>
  );
};
