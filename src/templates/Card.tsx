import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="w-fit rounded-lg border border-gray-200 bg-white p-4 shadow drop-shadow dark:border-gray-700 dark:bg-gray-800">
        {children}
      </div>
    </>
  );
};
