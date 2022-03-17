import { useEffect, useState } from "react";

import { Episodes } from "./components/Episodes";
import { Header } from "./components/Header";
import { TvShow, Show } from "./infra/models/TvShow";
import { useTvShow } from "./infra/presenters/useTvShow";
import { removeTags } from "./utils/utils";

function App() {
  const { getTvShowInfos, getEpisodesList } = useTvShow();

  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(items.length / itemsPerPage);

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
        setItems(data);
      }
    }

    if (powerPuffGirlsInfos[1]?.show?.id) {
      fetchTvShowEpisodes(powerPuffGirlsInfos[1].show.id);
    }
  }, [powerPuffGirlsInfos]);

  return (
    <div className="App">
      <div>{pages}</div>

      {powerPuffGirlsInfos.length > 0 && (
        <Header
          name={powerPuffGirlsInfos[1].show.name}
          imageSource={powerPuffGirlsInfos[1].show.image.medium}
          summary={removeTags(powerPuffGirlsInfos[1].show.summary)}
        />
      )}

      <Episodes episodes={powerPuffGirlsEpisodes} />
    </div>
  );
}

export default App;
