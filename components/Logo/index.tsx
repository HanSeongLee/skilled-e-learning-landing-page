import React, {AnchorHTMLAttributes} from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import cn from 'classnames';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    light?: boolean;
};

const Logo: React.FC<IProps> = ({ light, className, ...props }) => {
    return (
        <Link href={'/'}>
            <a className={cn(styles.logo, className)}
               {...props}
            >
                <h1>
                    <img src={light ? '/logo-light.svg' : '/logo-dark.svg'}
                         alt={'skilled'}
                    />
                </h1>
            </a>
        </Link>
    );
};

export default Logo;
