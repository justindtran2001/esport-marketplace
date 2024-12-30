export enum Category {
  COMMON = "Common",
  RARE = "Rare",
  EPIC = "Epic",
}

export type Character = {
  id: string;
  image: Image;
  category: Category;
  name: string;
  price: number;
  author: Author;
};

export type Author = {
  id: string;
  name: string;
  profilePic: Image;
};

export type Image = {
  ariaLabel: string;
  src: string;
};
