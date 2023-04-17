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

const About = ({ profiles }: any) => {
  return (
    <div className={styles.about}>
      <div className={cx(styles.first, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={styles.aboutTitle}>
            The Classroom
          </Title>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </span>
        </div>
      </div>
      <div className={cx(styles.second, styles.block)}>
        <div className={styles.card}>
          <Title size={1} className={styles.aboutTitle}>
            How it works
          </Title>
        </div>
      </div>
      <div className={cx(styles.third, styles.block)}>
        <Title size={1} className={styles.aboutTitle}>
          Written and Build By
        </Title>
        <div className={styles.profiles}>
          {profiles?.map((profile: Profile, idx: number) => (
            <AdminProfile key={idx} profile={profile as Profile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
