import React, { useRef } from "react";
import cx from "classnames";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/About.module.css";
import { Title } from "@/components/title";
import { AdminProfile } from "@/components/admin-profile";
import { Address, multicall, readContract } from "@wagmi/core";
import { MOONPAGE_PROFILES_ADDRESS_DEV } from "@/constants";
import ABI from "../abis/MoonpageProfiles.json";
import { loop } from "@/utils/ loop";
import { ADMIN_ADDRESSES } from "@/constants";
import { Abi } from "abitype";
import { Call } from "@/components/slider/slider.types";
import { Profile } from "@/hooks/use-profile/use-profile.types";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import { Card } from "@/components/card";

const call = {
  address: MOONPAGE_PROFILES_ADDRESS_DEV as Address,
  abi: ABI,
  functionName: "profiles",
};

let contracts: Call[] = [];
loop(ADMIN_ADDRESSES.length, (i: number) => {
  // @ts-ignore
  contracts.push({ ...call, args: [ADMIN_ADDRESSES[i] as Address] });
});

export async function getServerSideProps(context: any) {
  let data = await multicall({ contracts });
  // @ts-ignore
  data = data?.map((x, idx) => ({ ...x, address: ADMIN_ADDRESSES[idx] }));

  return {
    props: { profiles: data },
  };
}

const Home = ({ profiles }: any) => {
  return (
    <div className={cx(styles.about, inter.variable)}>
      <div className={cx(styles.first, styles.block, styles.withMarquee)}>
        <div className={cx(styles.card, styles.logoWrapper)}>
          <Image
            src={"Logo.svg"}
            height={200}
            width={200}
            alt={"TheRetreat Logo"}
            priority
          />
          <span className={styles.text}>The one retreat you need.</span>
        </div>
      </div>
      <div className={cx(styles.second, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={styles.aboutTitle}>
            What is TheRetreat?
          </Title>
          <span className={styles.text}>
            A high-end space sanatorial retreat program to upgrade your inner
            self. 3 months in a space capsule rotating around planet earth.
          </span>
          <p className={styles.nextLaunchInfo}> Next Launch: 1st June.</p>
        </div>
      </div>
      <div className={cx(styles.third, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={cx(styles.aboutTitle, styles.vision)}>
            How does it work?
          </Title>
          <p className={cx(styles.nextLaunchInfo, styles.centerAlign)}>
            {" "}
            Next Launch: 1st June.
          </p>
          <div className={styles.cardWrapper}>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                1.
              </Title>
              <span className={styles.cardText}>
                Our independent algorithm handpicks the 20 participants for the
                upcoming retreat 3 months in advance and notifies them.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                2.
              </Title>
              <span className={styles.cardText}>
                We facilitate 4 retreats a year with a maximum capacity of 20
                patients per retreat. Apply today by filling out this form,
                because spots are in high demand! See the pricing list here or
                join the lottery.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                3.
              </Title>
              <span className={styles.cardText}>
                Once you get picked, you will be notified and invited to our
                screening, where you will set a personal goal for the retreat. A
                healing curriculum will be generated for you.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                4.
              </Title>
              <span className={styles.cardText}>
                Off you go to space for three months, following the curriculum,
                accompanied by our high profile scientist. The SoulScape space
                capsule rotates around planet earth.
              </span>
            </Card>
          </div>
        </div>
      </div>
      <div className={cx(styles.fourth, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={cx(styles.aboutTitle, styles.vision)}>
            Vision
          </Title>
          <span className={styles.text}>
            This is Sadghuru2001, your AI CEO of TheRetreat. Our vision is to
            weave a sanctuary of tranquility in space where one can untangle
            from the cacophony of modern life and bask in the serenity of
            self-discovery, connection, and renewal. Because you must make
            yourself fantastic in order to do fantastic things. This is our firm
            belief since 2023 and the reason we are market leader eversince.
            Join our Space SoulScape Retreat program to heal and upgrade your
            inner self.
          </span>
        </div>
      </div>
      <div className={cx(styles.fifth, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={cx(styles.aboutTitle, styles.vision)}>
            Cut the BS, what is this, really?
          </Title>
          <p className={cx(styles.nextLaunchInfo, styles.centerAlign)}>
            {" "}
            NFT Launch: 1st June.
          </p>
          <div className={styles.cardWrapper}>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                1.
              </Title>
              <span className={styles.cardText}>
                We have set up the story frame for you and roughly drafted 10
                characters.
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
                rarer that the other. You can only write with an NFT once. If
                you want to continue writing, you have to mint another NFT.
              </span>
            </Card>
            <Card>
              <Title size={3} className={styles.cardTitle}>
                4.
              </Title>
              <span className={styles.cardText}>
                The story is being written collectively, you contribute to the
                piece of literature with the NFT.
              </span>
            </Card>
          </div>
        </div>
      </div>
      <div className={cx(styles.sixth, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={styles.aboutTitle}>
            About us
          </Title>
          <span className={styles.text}>
            We are Creative Writing students from the University of Hildesheim
            experimenting with literary NFTs in collaboration with{" "}
            <a
              href="https://moonpage.io"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Moonpage
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
