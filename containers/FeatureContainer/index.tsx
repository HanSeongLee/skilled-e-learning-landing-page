import React from 'react';
import FeatureCard from '../../components/FeatureCard';

const features = [
    {
        icon: '/icons/icon-animation.svg',
        title: 'Animation',
        description: 'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
        href: '#animation',
    },
    {
        icon: '/icons/icon-design.svg',
        title: 'Design',
        description: 'Create beautiful, usable interfaces to help shape the future of how the web looks.',
        href: '#design',
    },
    {
        icon: '/icons/icon-photography.svg',
        title: 'Photography',
        description: 'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
        href: '#photography',
    },
    {
        icon: '/icons/icon-crypto.svg',
        title: 'Crypto',
        description: 'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
        href: '#crypto',
    },
    {
        icon: '/icons/icon-business.svg',
        title: 'Business',
        description: 'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
        href: '#business',
    },
];

const FeatureContainer: React.FC = () => {
    return (
        <>
            {features?.map((props, index) => (
                <FeatureCard key={index}
                             {...props}
                />
            ))}
        </>
    );
};

export default FeatureContainer;

