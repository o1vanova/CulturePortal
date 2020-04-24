import Media from './media';
import Place from './place';
import Work from './work';
import TimeLine from './timeline';

type Author = {
  id: number;
  name: string;
  cityBirth: string;
  imgSrc: string;
  timeLife: string;
  description: string;
  works: Work[];
  images?: Media[] | null;
  video?: Media | null;
  places?: Place[] | null;
  timeLines?: TimeLine[] | null;
};

export default Author;
