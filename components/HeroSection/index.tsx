import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';

const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Maximize skill,
                        minimize budget
                    </h2>
                    <p className={styles.description}>
                        Our modern courses across a range of in-demand skills will give you the knowledge you need to
                        live
                        the life you want.
                    </p>
                    <Button>
                        Get Started
                    </Button>
                </div>
                <picture>
                    <source type={'image/png'}
                            srcSet={'/img/image-hero-mobile.png, /img/image-hero-mobile@2x.png 2x'}
                    />
                    <source type={'image/webp'}
                            srcSet={'/img/image-hero-mobile.webp, /img/image-hero-mobile@2x.webp 2x'}
                    />

                    <img className={styles.image}
                         src={'/img/image-hero-mobile.png'}
                         alt={''}
                    />
                </picture>
            </Container>
        </section>
    );
};

export default HeroSection;
