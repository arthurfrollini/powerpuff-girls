import { useEffect } from "react";
import { EpisodesContainer } from "./styles";

import { Show } from "../../infra/models/TvShow";
import { Episode } from "../Episode";
import { usePagination } from "../../hooks/usePagination";
import { Pagination } from "../Pagination";

interface EpisodesProps {
  episodes: Show[];
}

export function Episodes({ episodes }: EpisodesProps) {
  const { setItems, currentPage, currentItems, startIndex } = usePagination();

  useEffect(() => {
    setItems(episodes);
  }, [episodes, currentPage]);

  return (
    <>
      <EpisodesContainer>
        {currentItems?.map((item, index) => (
          <Episode
            key={item.id}
            name={item.name}
            episodeNumber={index + startIndex}
            id={String(item.id)}
          />
        ))}
      </EpisodesContainer>

      <Pagination />
    </>
  );
}
