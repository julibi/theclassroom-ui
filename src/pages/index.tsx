import React, { useRef } from "react";
import cx from "classnames";
import styles from "../styles/Home.module.css";
import { Title } from "@/components/title";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { RotatingEmblem } from "@/components/rotating-emblem/rotating-emblem";
import Marquee from "react-fast-marquee";
import { Folder } from "@/components/folder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = () => (
  <div className={styles.starRating}>
    <FontAwesomeIcon icon={faStar} size="xs" className={styles.star} />
    <FontAwesomeIcon icon={faStar} size="xs" className={styles.star} />
    <FontAwesomeIcon icon={faStar} size="xs" className={styles.star} />
    <FontAwesomeIcon icon={faStar} size="xs" className={styles.star} />
    <FontAwesomeIcon icon={faStar} size="xs" className={styles.star} />
  </div>
);

const Home = () => {
  return (
    <div className={inter.className}>
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
                  styles.asianTitle,
                  styles.firstTitle
                )}
              >
                退却
              </Title>
              <div className={styles.westernTitle}>
                <Title size={1} className={cx(styles.title, styles.firstTitle)}>
                  THE RETREAT
                </Title>
                <Title size={3} className={styles.subtitle}>
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
              <Title size={3} className={styles.subtitle}>
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
              <Title size={3} className={styles.subtitle}>
                beings suffering mentally
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                120
              </Title>
              <Title size={3} className={styles.subtitle}>
                yearly patients
              </Title>
            </div>
            <div className={styles.stat}>
              <Title size={1} className={styles.statPercentage}>
                125
              </Title>
              <Title size={3} className={styles.subtitle}>
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
          <Title size={1} className={styles.title}>
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
            <RotatingEmblem txt="trusted*space*retreat*" />
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
          <Title size={1} className={cx(styles.title, styles.reviewsTitle)}>
            Patients Reviews
          </Title>
          <Marquee>
            <Folder className={styles.reviewFolder}>
              <div className={styles.customerReview}>
                <Title size={3}>Geno Feno</Title>
                <br />
                <span>
                  Two great decisions I've made in my life. Doing TheRetreat and
                  getting a divorce. I bought my new husband a platinum ticket.
                </span>
                <StarRating />
              </div>
            </Folder>
            <Folder className={styles.reviewFolder}>
              <div className={styles.customerReview}>
                <Title size={3}>M. K.</Title>
                <br />
                <span>
                  I was suffering from severe burnout. And this retreat helped
                  me find my balance. SadGhuru was right: you must be fantastic
                  in order to do fantastic things!
                </span>
                <StarRating />
              </div>
            </Folder>
            <Folder className={styles.reviewFolder}>
              <div className={styles.customerReview}>
                <Title size={3}>Annie Hwang</Title>
                <br />
                <span>
                  Speaking for a friend, since I personally do not have any
                  mental issues. Highly recommended! No surprise this space
                  retreat is market leader.
                </span>
                <StarRating />
              </div>
            </Folder>
            <Folder className={styles.reviewFolder}>
              <div className={styles.customerReview}>
                <Title size={3}>0x9ad7...f1351</Title>
                <br />
                <span>
                  Erstaunlich! Ich war multi-morbid und nun heiler als je zuvor.
                </span>
                <StarRating />
              </div>
            </Folder>
          </Marquee>
        </div>
        <div className={cx(styles.section, styles.explanationSection)}>
          <Title size={1} className={styles.title}>
            Ok, what is this, really?
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

export default Home;
