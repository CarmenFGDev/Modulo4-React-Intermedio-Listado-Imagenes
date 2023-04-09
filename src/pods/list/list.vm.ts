export interface PictureInfo {
 id: string;
 picUrl: string;
 title: string;
 selected: boolean;
 age?: string;
}
export interface Pets {
    cats: PictureInfo[];
    dogs: PictureInfo[];
}

