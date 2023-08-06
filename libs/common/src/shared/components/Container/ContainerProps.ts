import { ReactNode } from 'react'
import { TypeIbg } from '../../types'

export type ContainerProps = Partial<Omit<TypeIbg, 'modClass'>> & {
    children: ReactNode;
    nonRetreat?: boolean;
    modClassImage?: string;
};
