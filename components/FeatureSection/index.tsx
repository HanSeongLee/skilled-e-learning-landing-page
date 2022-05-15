import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import FeatureContainer from '../../containers/FeatureContainer';

const FeatureSection: React.FC = () => {
    return (
        <section className={styles.featureSection}>
            <Container className={styles.container}>
                <div className={styles.checkoutCard}>
                    <h2 className={styles.title}>
                        Check out our most popular courses!
                    </h2>
                </div>
                <FeatureContainer />
            </Container>
        </section>
    );
};

export default FeatureSection;
