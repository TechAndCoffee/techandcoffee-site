// LinkList types

interface Links {
   name: string;
   url: string;
}

interface File {
   name: string;
   icon?: string;
   description?: string;
   links: Array<Links>;
}

export interface LinkList {
   list: Array<File>;
}

// PhotoAlbum types

interface Photo {
   url: string;
   title?: string;
   description?: string;
   inverted?: boolean;
   download_url?: string;
}
export interface PhotoAlbum {
   entries: Array<Photo>;
}
