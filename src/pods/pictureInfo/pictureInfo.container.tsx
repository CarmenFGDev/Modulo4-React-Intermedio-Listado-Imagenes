import React from "react";
import { PictureInfo } from "../list/list.vm";
import { PictureInfoComponent } from "./pictureInfo.component";
interface Props {
  item: PictureInfo;
}
export const PictureInfoContainer: React.FC<Props> = (props) => {
  const { item } = props;
  return <PictureInfoComponent item={item} />;
};
