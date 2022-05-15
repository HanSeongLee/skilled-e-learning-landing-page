import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    icon: string;
    title: string;
    description: string;
    href: string;
};

const FeatureCard: React.FC<IProps> = ({
                                           icon, title, description, href,
                                           className, ...props
                                       }) => {
    return (
        <div className={cn(styles.featureCard, className)}
             {...props}
        >
            <img className={styles.icon}
                 src={icon}
                 alt={''}
            />
            <div className={styles.title}>
                {title}
            </div>
            <p className={styles.description}>
                {description}
            </p>
            <a className={styles.link}
               href={href}
            >
                Get Started
            </a>
        </div>
    );
};

export default FeatureCard;
