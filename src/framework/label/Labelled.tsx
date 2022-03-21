import React from 'react';
import clsx from 'clsx';
import classes from './Labelled.module.css';

interface LabelledProps extends React.ComponentPropsWithoutRef<'div'> {
    label: string;
    bold?: boolean;
}

function Labelled({ label, className, children, bold, ...rest }: LabelledProps) {
    return (
        <div className={classes.wrapper} {...rest}>
            <span className={clsx(className, classes.label, { [classes.bold]: bold })}>{label}</span>
            {children}
        </div>
    );
}

export default Labelled;