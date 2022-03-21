import { TvShow } from "../models/TvShow";
import api from "./api";

export class TvShowService {
  async searchTvShow(tvShow: string) {
    try {
      const { data } = await api.get<TvShow[]>(`/search/shows?q=${tvShow}`);

      return {
        data,
      };
    } catch (err) {
      return {
        err,
      };
    }
  }

  async getEpisodesList(showId: number) {
    try {
      const { data } = await api.get(`/shows/${showId}/episodes`);

      return {
        data,
      };
    } catch (err) {
      return {
        err,
      };
    }
  }

  async getEpisodeDetails(episodeId: number) {
    try {
      const { data } = await api.get(`/episodes/${episodeId}`);

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
