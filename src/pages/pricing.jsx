import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './pricing.module.css';

const appStore = "https://apps.apple.com/us/app/daily-wod/6444047196?platform=iphone"
const playStore = "https://play.google.com/store/apps/details?id=app.daily_wod.release&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"

export default function Pricing() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Pricing"
      description={siteConfig.description}>
      <EnterpriseHeader />
      <Alert />
      <PriceModel />
      <FeatureTable />
    </Layout>
  );
}

function EnterpriseHeader() {
  const [storeLink, setStoreLink ] = React.useState(playStore);

  React.useEffect(() => {
    if (
      navigator.platform.indexOf("Mac") === 0 ||
      navigator.platform === "iPhone"
    ) {
      setStoreLink(appStore);
    }
  }, [])

  return (
    <header className={clsx('hero',  styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">More Than Just Workouts!</h1>
            <p className="hero__subtitle">Build a strong sense of community among your members and keep them engaged.</p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to={storeLink}>
            Download App
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="mailto:noah@daily-wod.app">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

function Alert() {
  return (
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <div className="alert alert--success" role="alert">
            <strong>This page is only for gyms. All the features for individuals are free.</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceModel() {
  const [storeLink, setStoreLink ] = React.useState(playStore);

  React.useEffect(() => {
    if (
      navigator.platform.indexOf("Mac") === 0 ||
      navigator.platform === "iPhone"
    ) {
      setStoreLink(appStore);
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col col--3 col--offset-3 margin-bottom--md">
          <div >
            <div className="card">
                <div className="card__header">
                  <h2>Engage</h2>
                </div>
                <div className="card__body">
                  <p>
                    For gyms new to Daily WOD. Easy to get up and running.
                  </p>
                  <h2>
                    <span>$0</span> 
                    <span style={{fontSize: 16}}> / mo</span>
                  </h2>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--secondary button--block button--lg"
                    to={storeLink}
                  >
                    Download App
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <div className="col col--3 ">
          <div >
            <div className="card">
              <div className="card__header">
                <h2>Growth</h2>
              </div>
              <div className="card__body">
                <p>
                  For gyms that want to grow the community even more.
                </p>
                <h2>
                  <span>$6</span>
                  <span style={{fontSize: 16}}> / 25 members / mo</span></h2>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--secondary button--block button--lg"
                  to=""
                >
                  Purchase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureTable({}) {
  return (
    <div className="container margin-vert--xl">
      <div className="row">
        <div className="col col--6 col--offset-3">
          <table style={{width: "100%", display: "table"}}>
            <thead>
              <tr>
                <th style={{textAlign: "left", width: "40%"}}>Feature</th>
                <th>Engage</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WOD Management & Sharing</td>
                <td style={{textAlign: "center"}}>️✅</td>
                <td style={{textAlign: "center"}}>✅</td>
              </tr>
              <tr>
                <td>Tracking Performance</td>
                <td style={{textAlign: "center"}}>✅️</td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>Member management</td>
                <td style={{textAlign: "center"}}>✅️</td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>AD Block</td>
                <td style={{textAlign: "center"}}></td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>Survey new members for feedback</td>
                <td style={{textAlign: "center"}}></td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
