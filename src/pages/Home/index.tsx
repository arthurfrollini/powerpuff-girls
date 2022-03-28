import { useEffect, useState } from "react";

import { Container, Title } from "./styles";

import { useTvShow } from "../../infra/presenters/useTvShow";
import { Show, TvShow } from "../../infra/models/TvShow";

import { Header } from "../../components/Header";
import { removeTags } from "../../utils/utils";
import { Episodes } from "../../components/Episodes";

export function Home() {
  const { getTvShowInfos, getEpisodesList } = useTvShow();

  const [powerPuffGirlsInfos, setPowerPuffGirlsInfos] = useState<TvShow[]>([]);
  const [powerPuffGirlsEpisodes, setPowerPuffGirlsEpisodes] = useState<Show[]>(
    []
  );

  useEffect(() => {
    async function fetchTvShowData() {
      const { data, err } = await getTvShowInfos("powerpuff");

      if (data && !err) {
        setPowerPuffGirlsInfos(data);
      }
    }

    if (powerPuffGirlsInfos.length === 0) {
      fetchTvShowData();
    }
  }, []);

  useEffect(() => {
    async function fetchTvShowEpisodes(showId: number) {
      const { data, err } = await getEpisodesList(showId);

      if (data && !err) {
        setPowerPuffGirlsEpisodes(data);
      }
    }

    if (powerPuffGirlsInfos[2]?.show?.id) {
      fetchTvShowEpisodes(powerPuffGirlsInfos[2].show.id);
    }
  }, [powerPuffGirlsInfos]);

  return (
    <Container>
      {powerPuffGirlsInfos.length > 0 && (
        <Header
          isHome
          name={powerPuffGirlsInfos[2].show.name}
          imageSource={powerPuffGirlsInfos[2].show.image.medium}
          summary={removeTags(powerPuffGirlsInfos[2].show.summary)}
        />
      )}

      <Title>Lista de episódios:</Title>

      <Episodes episodes={powerPuffGirlsEpisodes} />
    </Container>
  );
}
