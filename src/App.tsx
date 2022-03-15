import { useEffect, useState } from "react";

import { useTvShow } from "./infra/presenters/useTvShow";

interface IImage {
  medium: string;
}
interface IShow {
  name: string;
  summary: string;
  image: IImage;
}
interface ITeste {
  show: IShow;
}

function App() {
  const [json, setJson] = useState("");
  const [teste, setTeste] = useState<ITeste[]>([]);
  const { getTvShowList } = useTvShow();

  async function fetchTvShowData() {
    const { data } = await getTvShowList("powerpuff");

    setJson(JSON.stringify(data[0], null, 2));

    setTeste(data);
  }

  useEffect(() => {
    fetchTvShowData();
  }, []);

  return (
    <div className="App">
      <pre>{json}</pre>
      <h1>{teste[0]?.show?.name}</h1>

      <img src={teste[0]?.show.image.medium} alt="ppg" />
      <p>
        {teste[0]?.show?.summary
          .replace("<p>", "")
          .replace("<b>", "")
          .replace("</p>", "")
          .replace("</b>", "")}
      </p>
    </div>
  );
}

export default App;
