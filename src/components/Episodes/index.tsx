import { useEffect, useState } from "react";
import { EpisodesContainer, PageButtonsContainer, PageButton } from "./styles";

import { Show } from "../../infra/models/TvShow";
import { Episode } from "../Episode";

interface EpisodesProps {
  episodes: Show[];
}

export function Episodes({ episodes }: EpisodesProps) {
  const [items, setItems] = useState<Show[]>([]);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const pages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setItems(episodes);
  }, [episodes, currentPage]);

  return (
    <>
      <EpisodesContainer>
        {currentItems.map((item, index) => (
          <Episode
            key={item.id}
            name={item.name}
            episodeNumber={index + startIndex}
            id={String(item.id)}
          />
        ))}
      </EpisodesContainer>
      <PageButtonsContainer>
        {Array.from(Array(pages), (_, index) => {
          return (
            <PageButton
              key={index}
              style={
                index === currentPage
                  ? { backgroundColor: "#F27BA4" }
                  : { backgroundColor: "#84B5EB" }
              }
              value={index}
              onClick={(event: any) =>
                setCurrentPage(Number(event.target.value))
              }
            >
              {index + 1}
            </PageButton>
          );
        })}
      </PageButtonsContainer>
    </>
  );
}
