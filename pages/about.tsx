import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import TechIcons from "../components/TechIcons/TechIcons";
import Transition from "../components/Transition/Transition";
import { Tech } from "../lib/tech";
import { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>rezonmain | about</title>
      </Head>
      <Transition>
        <section id="text-container" className="max-w-2xl flex flex-col gap-10">
          <article>
            <Sub>about me</Sub>
            <Text>
              <>
                hi, my name is Alejandro Díaz (aka{" "}
                <span className="glitched dark:text-glitched-dark">
                  rezonmain
                </span>
                ) I&apos;m a <b>software engineer</b> located in tijuana 🇲🇽, I
                make all kinds of web apps.
                <Pbr />I have a technical degree in <b>electronics</b> and a
                bachelor degree in <b>bioengineering</b>, but have dedicated the
                last 6 years learning (and working in) everything web
                development.
              </>
            </Text>
          </article>
          <article>
            <Sub>work xp</Sub>
            <ul className="list-disc">
              <li className="ml-8">
                <Text>
                  React developer @{" "}
                  <TextLink href="https://www.arkusnexus.com/">
                    ArkusNexus
                  </TextLink>{" "}
                  🤓
                </Text>
              </li>
              <li className="ml-8">
                <Text>
                  Engineer @{" "}
                  <TextLink href="https://drata.com/">Drata</TextLink> 😎
                </Text>
              </li>
            </ul>
          </article>
          <article>
            <Sub>stack</Sub>
            <Text>
              <>
                <strong>Typescript</strong> is my main language, and I know{" "}
                <strong>React</strong> like the back of my hand but I&apos;ve
                built web apps using the most popular JS libraries and
                frameworks, I love tech and I love trying out the newest and
                latest tools out there, just for fun.
              </>
            </Text>
            {/* All icons */}
            <br />
            <Sub>tech i&apos;ve worked with</Sub>
            <TechIcons techs={Object.values(Tech)} />
          </article>
        </section>
      </Transition>
    </>
  );
};

export const Sub = ({
  children,
  id,
}: {
  children: string | JSX.Element;
  id?: string;
}) => {
  return (
    <h2 id={id ? id : "sub-title"} className="text-3xl mb-5">
      {children}
    </h2>
  );
};

export const Text = ({ children }: { children: ReactNode }) => {
  return <p className="text-xl font-extralight">{children}</p>;
};

export const TextLink = ({
  children,
  href,
}: {
  children: string | JSX.Element;
  href: string;
}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="text-blue-500 hover:underline"
      href={href}
    >
      {children}
    </a>
  );
};

const Pbr = () => (
  <>
    <br></br>
    <br></br>
  </>
);

// Opt-in shared layout
About.getLayout = function getLayout(page: ReactElement) {
  return <ContentLayout>{page}</ContentLayout>;
};

export default About;
