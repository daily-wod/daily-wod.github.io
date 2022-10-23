import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import ProductMockup from '@site/static/img/product_mockup.png'
import AppleStoreBadge from '@site/static/img/apple_store_badge.svg'
import styles from "./index.module.css"

function Main() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("row")}>
        <div className={clsx("col", "hero", styles.heroHeight)}>
          <div className={clsx("container")}>
            <h1 className={clsx("hero__title")}>Daily WOD</h1>
            <p className={clsx("hero__subtitle")}>Record your everyday achievement</p>
            <p >
              Daily Ward provides an easy and intuitive feature to record your WOD. 
              Now, let's track how much I have grown up through the record.
            </p>
            <div>
              <a href="#"><AppleStoreBadge /></a>
            </div>
          </div>
        </div>
        <div className={clsx("col", "hero", styles.heroHeight)}>
          <img src={ProductMockup}/>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Record your WOD`}
      description="Record your everyday achievement.">
      <main>
        <Main />
      </main>
    </Layout>
  );
}
