import { ReactNode } from 'react';
import { TypeIbg } from '../../shared';

export type EntityContainerProps = Partial<Omit<TypeIbg, 'modClass'>> & {
  children: ReactNode;
  nonRetreat?: boolean;
  modClassImage?: string;
};
