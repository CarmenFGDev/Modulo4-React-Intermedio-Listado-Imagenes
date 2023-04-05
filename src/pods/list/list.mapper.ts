import * as vm from "./list.vm";
import * as api from "./list.api-model";

export const mapPictureInfoFromApiToVm = (
  pet: api.PictureInfoApi
): vm.PictureInfo => ({
  id: pet.id,
  picUrl: pet.picUrl,
  title: pet.title,
  selected: pet.selected
});

export const mapPicturesInfoFromApiToVm = (
  petCollection: api.PictureInfoApi[]
): vm.PictureInfo[] =>
  petCollection.map((pet) => mapPictureInfoFromApiToVm(pet));