// LinkList types

type Links = {
   name: string;
   url: string;
}

type File = {
   name: string;
   icon?: string;
   description?: string;
   links: Array<Links>;
}

export type LinkList = {
   list: Array<File>;
}

// PhotoAlbum types

type Photo = {
   url: string;
   title?: string;
   description?: string;
   inverted?: boolean;
   download_url?: string;
}
export type PhotoAlbum = {
   entries: Array<Photo>;
}
