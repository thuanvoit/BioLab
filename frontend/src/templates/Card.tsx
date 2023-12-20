import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <>
      <div className="w-fit rounded-lg border border-gray-700 bg-gray-800 p-4 shadow drop-shadow">
        {children}
      </div>
    </>
  );
};
