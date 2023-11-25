export interface Song {
  id: string;
  userId?: string;
  author?: string;
  title: string;
  song: string;
  image: string;
  icon: string;
  video?: string;
  numberOfLikes?: object[];
}
