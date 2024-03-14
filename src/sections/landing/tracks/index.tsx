import styles from './style.module.scss';

const Tracks = () => {
  return (
    <div className={styles.tracks}>
      <h2>Choose your track!</h2>
      <div className={styles.tracksContainer}>
        <div className={styles.track}>
          <img src="/tracks/lost-at-sea.svg" alt="White Square" />
          <div className={styles.trackDescription}>
            <h3>01. Lost at Sea</h3>
            <p>
              All pirates need to find their way back to shore! In this track, you will develop a
              solution to a navigational task. Projects in this track could involve, but are not
              limited to: transportation, accessibility, routing, etc. Your journey may even lead
              you to uncharted territory!
            </p>
          </div>
        </div>
        <div className={styles.track}>
          <img src="/tracks/marks-the-spot.svg" alt="Marks the Spot" />

          <div className={styles.trackDescription}>
            <h3>02. X Marks the Spot</h3>
            <p>
              Guard your pirate&apos;s treasure by creating a project focused on security! This
              could be anything from defending against cyber attacks to detecting new
              vulnerabilities. Keep your eyes peeled or someone might end up walking the plank!
            </p>
          </div>
        </div>
        <div className={styles.track}>
          <img src="/tracks/all-hands-on-deck.svg" alt="All Hands on Deck" />

          <div className={styles.trackDescription}>
            <h3>03. All Hands on Deck</h3>
            <p>
              Your crew needs all the help they can get! This track focuses on solving prominent
              social issues in our world. Projects could involve, but are not limited to:
              healthcare, poverty, world hunger, social justice, etc. The world is your oyster!
            </p>
          </div>
        </div>
        <div className={styles.track}>
          <img src="/tracks/captains-classroom.svg" alt="Captain's Classroom" />

          <div className={styles.trackDescription}>
            <h3>04. Captain&apos;s Classroom</h3>
            <p>
              Every swashbuckling pirate needs to learn the ropes. This track focuses on developing
              projects that enhance educational experiences and help guide the new age of treasure
              hunters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
