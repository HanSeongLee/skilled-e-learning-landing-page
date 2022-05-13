import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Logo from '../Logo';
import Button from '../Button';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo />
                <Button variant={'secondary'}>
                    Get Started
                </Button>
            </Container>
        </header>
    );
};

export default Header;
