import clsx from 'clsx';
import classes from './Button.module.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    appearance?: 'secondary' | 'primary';
}

function Button({ className, appearance = 'primary', ...rest }: ButtonProps) {
    const rootClassName = clsx(className, classes.root, appearance && classes[appearance], {
        [classes.disabled]: rest.disabled,
    });

    return <button className={rootClassName} {...rest} />;
}

export default Button;