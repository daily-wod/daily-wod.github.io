import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import ProductMockup from "@site/static/img/product_mockup.png";
import AppleStoreBadge from "@site/static/img/apple_store_badge.svg";
import styles from "./index.module.css";

function Main() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("row")}>
        <div className={clsx("col", "hero", styles.heroHeight)}>
          <div className={clsx("container")}>
            <h1 className={clsx("hero__title")}>
              <Translate id="index.title">Daily WOD</Translate>
            </h1>
            <p className={clsx("hero__subtitle")}>
              <Translate id="index.subtitle">
                Record your everyday achievement
              </Translate>
            </p>
            <p>
              <Translate id="index.description"></Translate>
              Daily WOD provides easy and intuitive features to record your WOD.
              Now, let's track how much I have grown up through the record.
            </p>
            <div>
              {/* 앱 스토어 */}
              <a
                href="https://apps.apple.com/us/app/daily-wod/6444047196?platform=iphone"
                target="_blank"
                alt={translate({
                  message: "App Store Icon",
                })}
              >
                <AppleStoreBadge />
              </a>
              {/* 플레이 스토어 */}
              <a
                href="https://play.google.com/store/apps/details?id=app.daily_wod.release&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                target="_blank"
                alt={translate({
                  message: "Play Store Icon",
                })}
              >
                <img
                  className={clsx(styles.playStoreBadge)}
                  alt="Get it on Google Play"
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={clsx("col", "hero", styles.heroHeight)}>
          <img src={ProductMockup} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Record your WOD`}
      description="Record your everyday achievement."
    >
      <main>
        <Main />
      </main>
    </Layout>
  );
}
