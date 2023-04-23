import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate from "@docusaurus/Translate";
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
            <h1 className="hero__title">
              <Translate id="pricing.title">
                The Power of Connection.
              </Translate>
            </h1>
            <p className="hero__subtitle">
              <Translate id="pricing.subtitle">
                Build a strong sense of community among your members and keep them engaged.
              </Translate>
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to={storeLink}>
            <Translate id="pricing.download button">
              Download App
            </Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="mailto:noah@daily-wod.app">
            <Translate id="pricing.contact button">
              Contact Us
            </Translate>
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
            <Translate id="pricing.alert">
              This page is only for boxes. All the features for individuals are free.
            </Translate>
          </div>
        </div>
      </div>
    </div>
  )
}

const purchaseForm = "https://online.forms.app/noah-lee/purchase-growth-license"
const purchaseFormKO = "https://online.forms.app/noah-lee/purchase-growth-license-ko"

function PriceModel() {
  const [storeLink, setStoreLink ] = React.useState(playStore);
  const {i18n} = useDocusaurusContext();


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
                    <Translate id="pricing.engage license">
                      For boxes new to Daily WOD. Easy to get up and running.
                    </Translate>
                  </p>
                  <h2>
                    <span>
                      <Translate id="pricing.free">
                        $0
                      </Translate>
                    </span> 
                    <span style={{fontSize: 16}}>
                      <Translate id="pricing.per month">
                        / mo
                      </Translate>
                    </span>
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
                  <Translate id="pricing.growth license">
                    For boxes that want to grow the community even more.
                  </Translate>
                </p>
                <h2>
                  <span>
                    <Translate id="pricing.six dollar">
                      $6
                    </Translate>
                  </span>
                  <span style={{fontSize: 16}}>
                    <Translate id="pricing.per member per month">
                      / 25 members / mo
                    </Translate>
                  </span>
                </h2>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--secondary button--block button--lg"
                  target='_blank'
                  to={i18n.currentLocale === "ko" ? purchaseFormKO : purchaseForm}
                >
                  <Translate id="pricing.purchase button">
                    Purchase
                  </Translate>
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
                <th style={{textAlign: "left", width: "40%"}}>
                  <Translate id="pricing.feature">
                    Feature
                  </Translate>
                </th>
                <th>Engage</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>
                    <Translate id="pricing.wod management feature">
                      WOD Management & Sharing
                    </Translate>
                  </b>
                </td>
                <td style={{textAlign: "center"}}>️✅</td>
                <td style={{textAlign: "center"}}>✅</td>
              </tr>
              <tr>
                <td>
                  <b>
                    <Translate id="pricing.tracking performance feature">
                      Tracking Performance
                    </Translate>
                  </b>
                </td>
                <td style={{textAlign: "center"}}>✅️</td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>
                  <b>
                    <Translate id="pricing.member management feature">
                      Member management
                    </Translate>
                  </b>
                </td>
                <td style={{textAlign: "center"}}>✅️</td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>
                  <b>
                    <Translate id="pricing.ad block feature">
                      AD Block
                    </Translate>
                  </b>
                </td>
                <td style={{textAlign: "center"}}></td>
                <td style={{textAlign: "center"}}>✅️</td>
              </tr>
              <tr>
                <td>
                  <b>
                    <Translate id="pricing.survey feature">
                      Survey new members for feedback
                    </Translate>
                  </b>
                </td>
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
