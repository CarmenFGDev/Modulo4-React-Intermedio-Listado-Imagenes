import React from 'react';
import { DividerComponent } from './divider.component';
export interface Props {
 label: string;
 alignment: any;
 marginBottom: string;
 marginTop: string;
}
export const DividerContainer: React.FC<Props> = (props) => {
 
  return <DividerComponent {...props} />;
};