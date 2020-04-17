import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Наработки</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <Link to={'docs/doc1'}>Здесь</Link> я делюсь своими мыслями и документацией к моим работам, 
        которые систематизированы в моих{' '}
        <Link to="https://github.com/taksenov?tab=repositories">репозиториях гитхаба</Link>.
      </>   
    ),
  },
  {
    title: <>Блог</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        <Link to={'blog'}>В блоге</Link> я пишу мысли и идеи, которые настолько ничтожны, 
        что не заслуживают быть помещенными в серьезные разделы моей персональной страницы.
      </>
    ),
  },
  {
    title: <>Книги</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        <Link to={'docs/mdx'}>В этом разделе</Link> я пишу конспекты по прочитанным мной книгам. 
        Как правило я стараюсь уделять внимание фундаментальным и академическим 
        трудам из области информатики.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="@taksenov"
      description="Персональная страница программиста: Аксенова Тимофея taksenov@gmail.com">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames('hero__title', styles.heroTextColor)}>{siteConfig.title}</h1>
          <p className={classnames('hero__subtitle', styles.heroTextColor)}>{siteConfig.tagline}</p>

          <p className={styles.forOfferContacts}>
            Если Вы хотите пригласить меня на работу, в Вашу великолепнейшую компанию. 
            Прошу воспользоваться разделом <strong>Контакты</strong>, который расположен внизу страницы.
          </p>

          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Поехали!
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
