'use client';
import classes from './Container.module.scss';
import {ContainerProps} from "./ContainerProps";
import {Ibg} from '../../UI';

export function Container({
                              children,
                              nonRetreat,
                              src,
                              alt,
                              modClassImage,
                          }: ContainerProps) {

    const allClasses = [classes.container];

    !nonRetreat && allClasses.push(classes.retreat);

    return (
        <div className={allClasses.join(' ')}>
            {children}
            {src || alt ? (
                <Ibg
                    src={src!}
                    alt={alt!}
                    modClass={`${classes.ibg} ${modClassImage}`}
                />
            ) : null}
        </div>
    );
}
