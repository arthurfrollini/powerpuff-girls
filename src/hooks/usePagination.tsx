import React, { createContext, ReactNode, useContext, useState } from "react";

import { Show } from "../infra/models/TvShow";

interface PaginationContextData {
  startIndex: number;
  pages: number;
  currentPage: number;
  setItems: React.Dispatch<React.SetStateAction<Show[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentItems: Show[];
}

interface PaginationProps {
  children: ReactNode;
}

export const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData
);

export function PaginationProvider({ children }: PaginationProps) {
  const [items, setItems] = useState<Show[]>([]);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const pages = Math.ceil(items.length / itemsPerPage);

  return (
    <PaginationContext.Provider
      value={{
        startIndex,
        pages,
        setItems,
        currentItems,
        setCurrentPage,
        currentPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export const usePagination = () => useContext(PaginationContext);
