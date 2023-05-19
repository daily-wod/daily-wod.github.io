import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import HeaderBackgroundImage from "@site/static/img/header-background-image.png"
import AppStoreBadge from "@site/static/img/app-store-badge.png"
import PlayStoreBadge from "@site/static/img/play-store-badge.png"
import AppStoreColorBadge from "@site/static/img/app-store-color-badge.png"
import PlayStoreColorBadge from "@site/static/img/play-store-color-badge.png"
import WhiteboardImage from "@site/static/img/whiteboard.png"
import HomeImage from "@site/static/img/home.png"
import LeaderboardImage from "@site/static/img/leaderboard.png"
import OneRepMaxImage from "@site/static/img/one-rep-max.png"
import BadgeSquatsImage from "@site/static/img/badges/squats.png"
import BadgeCleansImage from "@site/static/img/badges/cleans.png"
import BadgeDeadliftsImage from "@site/static/img/badges/deadlifts.png"
import BadgePressesImage from "@site/static/img/badges/presses.png"
import BadgeJerksImage from "@site/static/img/badges/jerks.png"
import BadgeOlympicLiftsImage from "@site/static/img/badges/olympic-lifts.png"
import BadgeSnatchesImage from "@site/static/img/badges/snatches.png"
import BadgeOtherImage from "@site/static/img/badges/other.png"
import styles from "./index.module.css";

function Main() {
  return (
    <div >
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <div
      className={clsx(styles.headerDiv)}
      style={{
        backgroundImage: `url("${HeaderBackgroundImage}")`,
      }}
    >
      <div className="container">
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
            Daily WOD provides easy to use and intuitive features to log WOD.
          </Translate>
          <br />
          <Translate
            id="index.description part2"
            description="The second detail description for the App."
          >
            Now, let's track how much I have grown up through logging.
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
    </div>
  )
}

function Content() {
  return (
    <div >
      <div >
        <div className={clsx("container", styles.container, styles.contentDiv)}>
          <div className={clsx("row")}>
            <div className={clsx("col", "col--6")}>
              <p className={clsx(styles.textCategory)}>
                <Translate id="index.wod content badge">
                  WOD
                </Translate>
              </p>
              <h2 className={clsx(styles.textWODTitle)}>
                <span className={clsx(styles.textLightColor)}>
                  <Translate id="index.wod content title part1">
                    What is tomorrow's WOD?
                  </Translate>
                </span>
                <br />
                <span className={clsx(styles.textPreLine)}>
                  <Translate id="index.wod content title part2">
                    {"Easiest way \nto share a new WOD"}
                  </Translate>
                </span>
              </h2>
              <img src={WhiteboardImage} alt="Whiteboard"/>
            </div>
            <div className={clsx("col", "col--5", "col--offset-1" )}>
              <img src={HomeImage} alt="Home Image" />
              <p>
                <Translate id="index.wod content description">
                  Relase a WOD and let members know instantly. 
                  Give members something to look forward to.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(styles.contentBackgroundColor, )}>
        <div className={clsx("container", styles.container, styles.contentDiv)}>
          <div className={clsx("row")}>
            <div className={clsx("col", "col--6")}>
              <p className={clsx(styles.textCategory)}>
                <Translate id="index.leaderboard content badge">
                  Leaderboard
                </Translate>
              </p>
              <h2 className={clsx(styles.textLeaderboardTitle, styles.textPreLine)}>
                <Translate id="index.leaderboard content title part1">
                  Share records with other members
                </Translate>
              </h2>
              <h2 className={clsx(styles.textLightColor, styles.textPreLine)}>
                <Translate id="index.leaderboard content title part2">
                  Logging keeps me motivated and gives me a sense of accomplishment.
                </Translate>
              </h2>
            </div>
            <div className={clsx("col", "col--5", "col--offset-1")}>
              <img src={LeaderboardImage} alt="Leaderboard" />
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className={clsx("container", styles.container, styles.contentDiv)}>
          <div className={clsx("row")}>
            <div className={clsx("col", "col--6")}>
              <p className={clsx(styles.textCategory)}>
                <Translate id="index. content badge">
                  1RM
                </Translate>
              </p>
              <h2 className={clsx(styles.text1RMTitle, styles.textPreLine)}>
                <Translate id="index.1rm content title">
                  Logging growth with 1RM
                </Translate>
              </h2>
              <div className={clsx(styles.content1RMBadgeDiv)}>
                <img src={BadgeSquatsImage} alt="squats" className={clsx(styles.imgBadge)}/>
                <img src={BadgeCleansImage} alt="cleans" className={clsx(styles.imgBadge)}/>
                <img src={BadgeDeadliftsImage} alt="deadlifts" className={clsx(styles.imgBadge)}/>
                <img src={BadgePressesImage} alt="presses" className={clsx(styles.imgBadge)}/>
                <img src={BadgeJerksImage} alt="jerks" className={clsx(styles.imgBadge)}/>
                <img src={BadgeOlympicLiftsImage} alt="olympic lifts" className={clsx(styles.imgBadge)}/>
                <img src={BadgeSnatchesImage} alt="snatches" className={clsx(styles.imgBadge)}/>
                <img src={BadgeOtherImage} alt="other" className={clsx(styles.imgBadge)}/>
              </div>
            </div>
            <div className={clsx("col", "col--5", "col--offset-1")}>
              <img src={OneRepMaxImage} alt="1RM" />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

function Footer() {
  return (
    <div className={clsx(styles.footerDiv, styles.contentBackgroundColor)}>
      <div className="container">
        <h2>
          <Translate id="index.footer title">
            Are you ready to record a WOD?
          </Translate>
        </h2>
        <p className={clsx(styles.footerDescription)}>
          <Translate id="index.footer description">
            Download the app now for iOS or Android.
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
              src={AppStoreColorBadge}
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
              src={PlayStoreColorBadge}
            />
          </a>
        </div>
      </div>
    </div>
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
          <meta property="og:image" content={HomeImage}></meta>
        </Head>
        <Main />
      </main>
    </Layout>
  );
}
