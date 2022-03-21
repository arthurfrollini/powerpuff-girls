import { TvShowService } from "../services/TvShowService";

export function useTvShow() {
  async function getTvShowInfos(tvShow: string) {
    const tvShowService = new TvShowService();
    return tvShowService.searchTvShow(tvShow);
  }

  async function getEpisodesList(showId: number) {
    const tvShowService = new TvShowService();
    return tvShowService.getEpisodesList(showId);
  }

  async function getEpisodeDetails(episodeId: number) {
    const tvShowService = new TvShowService();
    return tvShowService.getEpisodeDetails(episodeId);
  }

  return {
    getTvShowInfos,
    getEpisodesList,
    getEpisodeDetails,
  };
}
