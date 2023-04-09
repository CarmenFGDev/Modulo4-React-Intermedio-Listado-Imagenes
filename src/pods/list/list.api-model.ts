export interface PictureInfoApi {
    id: string;
    picUrl: string;
    title: string;
    selected: boolean;
    age?: string;
}
export interface PetsApi {
    cats: PictureInfoApi[];
    dogs: PictureInfoApi[];
}


