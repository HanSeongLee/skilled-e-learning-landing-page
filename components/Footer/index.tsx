import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';

const Footer: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo light />

                <Button className={styles.button}
                        variant={'secondary'}
                >
                    Get Started
                </Button>
            </Container>
        </footer>
    );
};

export default Footer;
