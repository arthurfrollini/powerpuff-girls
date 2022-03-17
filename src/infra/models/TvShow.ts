/* eslint-disable @typescript-eslint/naming-convention */
interface Image {
  medium: string;
}

export interface Show {
  id: number;
  name: string;
  summary: string;
  image: Image;
}

export type TvShow = {
  show: Show;
};
