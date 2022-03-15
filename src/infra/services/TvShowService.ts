import api from "./api";

export class TvShowService {
  async searchTvShow(tvShow: string) {
    try {
      const { data } = await api.get(`/search/shows?q=${tvShow}`);

      return {
        data,
      };
    } catch (err) {
      return {
        err,
      };
    }
  }
}
