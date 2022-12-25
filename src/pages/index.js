import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import ProductMockup from "@site/static/img/product-mockup.png";
import HeaderBackgroundImage from "@site/static/img/header-background-image.png"
import AppStoreBadge from "@site/static/img/app-store-badge.png"
import PlayStoreBadge from "@site/static/img/play-store-badge.png"
import CalendarImage from "@site/static/img/calendar.png"
import UsabilityImage from "@site/static/img/usability.png"
import SimilarityImage from "@site/static/img/similarity.png"
import styles from "./index.module.css";

function Main() {
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
        <div className={clsx("col", "col--2", "col--offset-3", styles.contentUsabilityTextDiv)}>
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
        <div className={clsx("col", styles.contentUsabilityImageDiv)}>
          <img src={UsabilityImage} alt="Usability" height={500} />
        </div>
      </div>
      <div className={clsx("row")}>
        <div className={clsx("col", "col--3", "col--offset-4", styles.contentCalendarImageDiv)}>
          <img src={CalendarImage} alt="Calendar" />
        </div>
        <div className={clsx("col", styles.contentCalendarTextDiv)}>
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
        <div className={clsx("col", "col--2", "col--offset-3", styles.contentSimilarityTextDiv)}>
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
        <div className={clsx("col", styles.contentSimilarityImageDiv)}>
          <img src={SimilarityImage} alt="Usability" height={500} />
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
        <Main />
      </main>
    </Layout>
  );
}
