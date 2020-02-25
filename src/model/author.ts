import Media from './media';
import Place from './place';
import Work from './work';
import TimeLine from './timeline';

type Author = {
  id: number;
  name: string;
  imgSrc: string;
  timeLife: string;
  description: string;
  works: Work[];
  images?: Media[] | null;
  videos?: Media[] | null;
  places?: Place[] | null;
  timeLines?: TimeLine[] | null;
};

export default Author;
