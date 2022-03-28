import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useTvShow } from "../../infra/presenters/useTvShow";

import { Show } from "../../infra/models/TvShow";
import { removeTags } from "../../utils/utils";
import { Header } from "../../components/Header";

import { GoBackButton, ButtonWrapper } from "./styles";

interface ParamProps {
  id: string;
}

export function EpisodeDetails() {
  const params = useParams<ParamProps>();
  const { getEpisodeDetails } = useTvShow();
  const [episode, setEpisode] = useState<Show>({} as Show);

  const history = useHistory();

  useEffect(() => {
    async function fetchEpisodeDetailsData(episodeId: number) {
      const { data, err } = await getEpisodeDetails(episodeId);
      if (data && !err) {
        setEpisode(data);
      }
    }

    if (params.id) {
      fetchEpisodeDetailsData(Number(params.id));
    }

    return () => {
      setEpisode({} as Show);
    };
  }, []);

  return (
    <>
      <Header
        isHome={false}
        name={episode?.name}
        imageSource={episode.image?.medium}
        summary={episode?.summary && removeTags(episode.summary)}
      />

      <ButtonWrapper>
        <GoBackButton onClick={() => history.goBack()}>Voltar</GoBackButton>
      </ButtonWrapper>
    </>
  );
}
