import { TvShowService } from "../services/TvShowService";

export function useTvShow() {
  async function getTvShowList(tvShow: string) {
    const tvShowService = new TvShowService();
    return tvShowService.searchTvShow(tvShow);
  }

  return {
    getTvShowList,
  };
}
