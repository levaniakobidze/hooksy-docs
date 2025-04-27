import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightweight & Easy to Use',
    Svg: require('@site/static/img/section-one.png').default,
    description: (
      <>
        Hooksy is built to be as lightweight and fast as possible. No setup hassle — install and start using essential React hooks immediately.
      </>
    ),
  },
  {
    title: 'Focus on Your Code',
    Svg: require('@site/static/img/section-two.png').default,
    description: (
      <>
       Stop rewriting the same hooks over and over. Hooksy gives you powerful, ready-made hooks so you can focus on building real features, not boilerplate.
      </>
    ),
  },
  {
    title: 'Powered by Pure React',
    Svg: require('@site/static/img/section-three.png').default,
    description: (
      <>
      Built with modern React standards. Hooksy hooks are compatible with any React project — from simple apps to large-scale applications.
      </>
    ),
  },
];

function Feature({Svg, title, description, idx}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={`${styles.featureSvg} png-${idx}`}
          src={Svg}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md cont">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
