import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
// TODO: 이미지에서 패딩을 제거
import ProductMockup from "@site/static/img/product-mockup.png";
import AppleStoreBadge from "@site/static/img/apple_store_badge.svg";
import HeaderBackgroundImage from "@site/static/img/header-background-image.png"
import AppStoreBadge from "@site/static/img/app-store-badge.png"
import PlayStoreBadge from "@site/static/img/play-store-badge.png"
import Calendar from "@site/static/img/calendar.png"
import styles from "./index.module.css";

function Main() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("row")}>
        <div className={clsx("col", "hero", styles.heroHeight)}>
          <div className={clsx("container")}>
            <h1 className={clsx("hero__title")}>
              <Translate id="index.title" description="The title of the App.">
                Daily WOD
              </Translate>
            </h1>
            <p className={clsx("hero__subtitle")}>
              <Translate
                id="index.subtitle"
                description="The promotion description for the App."
              >
                Record your everyday achievement
              </Translate>
            </p>
            <p>
              <Translate
                id="index.description"
                description="The detail description for the App."
              >
                Daily WOD provides easy and intuitive features to record your
                WOD. Now, let's track how much I have grown up through the
                record.
              </Translate>
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

function MainNext() {
  return (
    <div >
      <Header />
      <HeaderImage />
      <Content />
    </div>
  )
}

function Header() {
  return (
    <div
      className={clsx(styles.headerDiv)}
      style={{
        backgroundImage: `url("${HeaderBackgroundImage}")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={clsx("hero__title")}>
        <Translate id="index.title" description="The title of the App.">
          CrossFit record, Daily WOD
        </Translate>
      </h1>
      <p className={clsx(styles.headerDescription)}>
        <Translate
          id="index.description part1"
          description="The first detail description for the App."
        >
          Daily WOD provides easy to use and intuitive features to record your
          WOD.
        </Translate>
        <br />
        <Translate
          id="index.description part2"
          description="The second detail description for the App."
        >
          Now, let's track how much I have grown up through the
          record.
        </Translate>
      </p>
      <div>
        {/* 앱 스토어 */}
        <a
          href="https://apps.apple.com/us/app/daily-wod/6444047196?platform=iphone"
          target="_blank"
          alt="App Store Icon"
        >
          <img
            className={clsx(styles.storeBadge)}
            alt="Get it on App Store"
            src={AppStoreBadge}
          />
        </a>
        {/* 플레이 스토어 */}
        <a
          href="https://play.google.com/store/apps/details?id=app.daily_wod.release&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
          target="_blank"
          alt="Play Store Icon"
        >
          <img
            className={clsx(styles.storeBadge)}
            alt="Get it on Google Play"
            src={PlayStoreBadge}
          />
        </a>
      </div>
    </div>
  )
}

function HeaderImage() {
  return (
    <div className={clsx(styles.headerImageDiv)}>
      <img src={ProductMockup} className={clsx(styles.headerImage)} />
    </div>
  )
}

function Content() {
  return (
    <div >
      <div className={clsx("row", styles.contentBackgroundColor)}>
        <div className={clsx("col", "col--3", "col--offset-3", styles.contentDiv)}>
          <h2>
            <Translate id="index.usability content title part1">
              Easy to use and convenient
            </Translate>
            <br />
            <Translate id="index.usability content title part2">
              Record WOD
            </Translate>
          </h2>
          <p>
            <Translate id="index.usability content description part1">
              Helps you can record your WOD
            </Translate>
            <br />
            <Translate id="index.usability content description part2">
              easily and conveniently.
            </Translate>
          </p>
        </div>
        <div className={clsx("col", styles.contentDiv)}>
          {/* TODO: 이미지 추가 */}
        </div>
      </div>
      <div className={clsx("row")}>
        <div className={clsx("col", "col--3", "col--offset-3", styles.contentDiv)}>
          <img src={Calendar} alt="Calendar" />
        </div>
        <div className={clsx("col", styles.contentDiv)}>
          <h2>
            <Translate id="index.calendar content title part1">
              Check your workout
            </Translate>
            <br />
            <Translate id="index.calendar content title part2">
              at a glance
            </Translate>
          </h2>
          <p>
            <Translate id="index.calendar content description part1">
              Provides an intuitive UI so that
            </Translate>
            <br />
            <Translate id="index.calendar content description part2">
              you can check your records at a glance.
            </Translate>
          </p>
        </div>
      </div>
      <div className={clsx("row", styles.contentBackgroundColor)}>
        <div className={clsx("col", "col--3", "col--offset-3", styles.contentDiv)}>
          <h2>
            <Translate id="index.similarity content title part1">
              Compare to
            </Translate>
            <br />
            <Translate id="index.similarity content title part2">
              previous record
            </Translate>
          </h2>
          <p>
            <Translate id="index.similarity content description part1">
              Automatically finds similar WODs
            </Translate>
            <br />
            <Translate id="index.similarity content description part2">
              when you record a WOD.
            </Translate>
          </p>
        </div>
        <div className={clsx("col")}>
          {/* TODO: 이미지 추가 */}
        </div>
      </div>
    </div >
  )
}

export default function Home() {
  return (
    <Layout
      title={`Record your WOD`}
      description="Record your everyday achievement."
    >
      <main>
        <Head>
          <meta property="og:image" content={ProductMockup}></meta>
        </Head>
        <MainNext />
      </main>
    </Layout>
  );
}
