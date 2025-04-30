export interface Contributor {
  id: number;
  user_id: number;
  story_id: number;
  user?: {
    id: number;
    username: string;
  };
}

export interface Story {
  user_id: any;
  id: number;
  title: string;
  content: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  contributors?: Contributor[];
}
