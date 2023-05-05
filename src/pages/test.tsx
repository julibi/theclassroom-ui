import React from "react";
import { Card } from "@/components/card";
import { Title } from "@/components/title";
import cx from "classnames";
import Image from "next/image";
import styles from "../styles/Test.module.css";
import { inter } from "@/utils/fonts";
import { Button } from "@/components/button";
import { Folder } from "@/components/folder";
import Marquee from "react-fast-marquee";
const Test = () => {
  return (
    <div className={cx(styles.background, inter.className)}>
      <div className={cx(styles.foreground, inter.className)}>
        <div className={styles.section}>
          <div className={styles.control}>
            <div className={styles.redCircle}></div>
            <div className={styles.titleWrapper}>
              <Title
                size={1}
                className={cx(
                  styles.title,
                  styles.skewingAnimation,
                  styles.asianTitle
                )}
              >
                退却
              </Title>
              <div className={styles.westernTitle}>
                <Title size={1} className={styles.title}>
                  THE RETREAT
                </Title>
                <Title size={4} className={styles.subtitle}>
                  The one retreat you need.
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.textInfo}>
            <div className={styles.titlesWrapper}>
              <Title size={1} className={styles.title}>
                Self-discovery, healing and renewal.
              </Title>
              <Title size={4} className={styles.subtitle}>
                "Because you must make yourself fantastic in order to do
                fantastic things." – SadGhuru2001
              </Title>
            </div>
            <Button className={styles.joinButton}>Yes, please</Button>
          </div>
          <div className={styles.statsInfo}>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                93%
              </Title>
              <Title size={4} className={styles.subtitle}>
                beings suffering mentally
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                120
              </Title>
              <Title size={4} className={styles.subtitle}>
                yearly patients
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                125
              </Title>
              <Title size={4} className={styles.subtitle}>
                yearly healed patients
              </Title>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.orbitContainer}>
            <div className={styles.innerOrbit}>
              <div className={styles.innerOrbitCirlces}></div>
            </div>
            <div className={styles.outerOrbit}>
              <div className={styles.outerOrbitCirlces}></div>
            </div>
          </div>
          <div className={styles.titleWrapper}>
            <Title size={1} className={styles.title}>
              What is The Retreat?
            </Title>
            <br />
            <Title size={3} className={styles.subtitle}>
              A high-end space sanatorial retreat program to upgrade your inner
              self. 3 months in a space capsule rotating around planet earth.
              Next Launch: 1st June.
            </Title>
          </div>
        </div>
        <div className={cx(styles.section, styles.explanationSection)}>
          <Title size={1} className={cx(styles.title, styles.explanationTitle)}>
            How does it work?
          </Title>

          <div className={styles.howitworks}>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                1.
              </Title>
              <span className={styles.cardText}>
                We facilitate 4 retreats a year with a small group of selected
                patients.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                2.
              </Title>
              <span className={styles.cardText}>
                You can apply by upgrading to our platinum tier to secure a spot
                in our lottery.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                3.
              </Title>
              <span className={styles.cardText}>
                Our independent algorithm handpicks the 20 participants for the
                upcoming retreat.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                4.
              </Title>
              <span className={styles.cardText}>
                If you get picked, you will be invited to our screening, where
                you will set a personal goal for the retreat. A healing
                curriculum will be generated.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                5.
              </Title>
              <span className={styles.cardText}>
                Off you go to space for 3 months, following the curriculum,
                accompanied by our high profile scientist.
              </span>
            </Card>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.titleWrapper}>
            <Title size={1} className={styles.title}>
              Our Vision
            </Title>
            <br />
            <Title size={3} className={styles.subtitle}>
              This is SadGhuru2001, your AI CEO of TheRetreat. Our vision is to
              weave a sanctuary of tranquility in space where one can untangle
              from the cacophony of modern life and bask in the serenity of
              self-discovery, connection, and renewal. Because you must make
              yourself fantastic in order to do fantastic things. This is our
              firm belief since 2023 and the reason we are market leader
              eversince. Join our Space SoulScape Retreat program to heal and
              upgrade your inner self.
            </Title>
          </div>
          <div className={styles.guruImageWrapper}>
            <div className={styles.redFilter} />
            <div className={styles.glitchLayers}>
              <div className={styles.glitchLayer}></div>
              <div className={styles.glitchLayer}></div>
              <div className={styles.glitchLayer}></div>
              <div className={styles.glitchLayer}></div>
            </div>
            <Image
              height={300}
              width={300}
              src="/characters/guru.jpeg"
              alt={`Placeholder Image`}
              priority
              className={styles.guruImage}
            />
          </div>
        </div>
        <div className={cx(styles.section, styles.explanationSection)}>
          <Title size={1} className={cx(styles.title, styles.explanationTitle)}>
            Patients Reviews
          </Title>
          {/* <div className={styles.folders}> */}
          <Marquee>
            <Folder
              key={5}
              name={"Test"}
              id={5}
              birthDate={"05 Juli 2023"}
              birthPlace={"Hamburg"}
              checkIn={"Lottery"}
              text={"blablablablabla"}
            />
            <Folder
              key={5}
              name={"Test"}
              id={5}
              birthDate={"05 Juli 2023"}
              birthPlace={"Hamburg"}
              checkIn={"Lottery"}
              text={"blablablablabla"}
            />
            <Folder
              key={5}
              name={"Test"}
              id={5}
              birthDate={"05 Juli 2023"}
              birthPlace={"Hamburg"}
              checkIn={"Lottery"}
              text={"blablablablabla"}
            />
            <Folder
              key={5}
              name={"Test"}
              id={5}
              birthDate={"05 Juli 2023"}
              birthPlace={"Hamburg"}
              checkIn={"Lottery"}
              text={"blablablablabla"}
            />
            {/* </div> */}
          </Marquee>
        </div>
        <div className={cx(styles.section, styles.explanationSection)}>
          <Title size={1} className={styles.title}>
            What is this really?
          </Title>
          <div className={styles.howitworks}>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                1.
              </Title>
              <span className={styles.cardText}>
                We have set up this story frame for you and roughly drafted 10
                characters. They are patients participating in TheRetreat.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                2.
              </Title>
              <span className={styles.cardText}>
                You mint to write. Mint a TheRetreat NFT here or on Moonpage.
                With that NFT you can continue writing the story from the
                perspective of a character.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                3.
              </Title>
              <span className={styles.cardText}>
                Which character of the 10 it is, depends on the NFT you minted.
                No traits and rarity scores, meaning no NFT or character is
                rarer than another. You can write with an NFT once. If you want
                to continue writing, you have to mint another.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                4.
              </Title>
              <span className={styles.cardText}>
                The story grows through collective contribution. Your text
                becomes part of literary NFT art.
              </span>
            </Card>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.titleWrapper}>
            <Title size={1} className={styles.title}>
              About us
            </Title>
            <br />
            <Title size={3} className={styles.subtitle}>
              We are Creative Writing students from the University of Hildesheim
              experimenting with literary NFTs in collaboration with Moonpage.
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
