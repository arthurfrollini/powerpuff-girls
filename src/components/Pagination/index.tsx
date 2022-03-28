import { usePagination } from "../../hooks/usePagination";

import { PageButtonsContainer, PageButton } from "./styles";

export function Pagination() {
  const { pages, currentPage, setCurrentPage } = usePagination();

  return (
    <PageButtonsContainer data-testid="pagination">
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
            onClick={(event: any) => setCurrentPage(Number(event.target.value))}
          >
            {index + 1}
          </PageButton>
        );
      })}
    </PageButtonsContainer>
  );
}
