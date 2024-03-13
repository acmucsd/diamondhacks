'use client';

import styles from './page.module.scss';
import Image from 'next/image';
import Arrow from '../../public/arrow.svg';
import BackgroundGraphic from './components/BackgroundGraphic';
import Link from 'next/link';

export default function Home() {
  const dummy = () => {};

  return (
    <main className={styles.main}>
      <div className={styles.landing}>
        <div className={styles.cta}>
          <h1>DiamondHacks</h1>
          <p>Spring 2024 | UC San Diego</p>
          <div className={styles.buttonsContainer}>
            <Link className={styles.applyNow} href="https://acmurl.com/diamondhacks-preregister" target="_blank" rel="noopener noreferrer">
                Apply now
                <Image src={Arrow} alt="Apply now"/>
            </Link>
            <div className={styles.buttonDivider}></div>
          </div>
        </div>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.welcome}>
          <div className={styles.welcomeMessage}>
            <h2>Welcome to DiamondHacks!</h2>
            <p>
              Our mission at DiamondHacks is to bring together hackers from diverse backgrounds to develop
              innovative solutions to real world problems. All experience levels are welcome.
            </p>
          </div>
          <div className={styles.diamondsContainer}>
            <div className={styles.diamond}>
              <Image src="/white-square-pink-border.svg" fill={true} alt="White Square" />
              <p className={styles.studentCount}>2000+</p>
              <p className={styles.diamondText}>students</p>
            </div>
            <div className={styles.diamond}>
              <Image src="/white-square-purple-border.svg" fill={true} alt="White Square" />
              <p className={styles.eventCount}>150+</p>
              <p className={styles.diamondText}>annual events</p>
            </div>
            <div className={styles.diamond}>
            <Image src="/white-square-green-border.svg" fill={true} alt="White Square" />
            <p className={styles.prizes}>$5,000</p>
              <p className={styles.diamondText}>in prizes</p>
            </div>
          </div>
        </div>

        <div className={styles.tracks}>
          <h2>Choose your track!</h2>
          <div className={styles.tracksContainer}>
            <div className={styles.track}>
              <img src="/lost-at-sea.svg" alt="White Square" />
              <h3>01. Lost at Sea</h3>
              <p>
                All pirates need to find their way back to shore! In this track, you will develop a solution
                to a navigational task. Projects in this track could involve, but are not limited to:
                transportation, accessibility, routing, etc. Your journey may even lead you to uncharted territory!
              </p>
            </div>
            <div className={styles.track}>
              <img src="/marks-the-spot.svg" alt="Marks the Spot" />
              <h3>02. X Marks the Spot</h3>
              <p>
                Guard your pirate&apos;s treasure by creating a project focused on security! This could be
                anything from defending against cyber attacks to detecting new vulnerabilities. Keep your
                eyes peeled or someone might end up walking the plank!
              </p>
            </div>
            <div className={styles.track}>
              <img src="/all-hands-on-deck.svg" alt="All Hands on Deck" />
              <h3>03. All Hands on Deck</h3>
              <p>
                Your crew needs all the help they can get! This track focuses on solving prominent social 
                issues in our world. Projects could involve, but are not limited to: healthcare, poverty, 
                world hunger, social justice, etc. The world is your oyster!
              </p>
            </div>
            <div className={styles.track}>
              <img src="/captains-classroom.svg" alt="Captain's Classroom" />
              <h3>04. Captain&apos;s Classroom</h3>
              <p>
                Every swashbuckling pirate needs to learn the ropes. This track focuses on developing
                projects that enhance educational experiences and help guide the new age of treasure hunters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
