import Head from "next/head";
import { useState } from "react";
import ProjectCard from "../components/card";
import Contribution from "../components/contribution";
import { basePath } from "../next.config";

export default function Home() {
  const [selected, setSelected] = useState<{
    title: string;
    beneficiary: string;
  } | null>(null);
  const [contributionModalIsVisible, setContributionModalAsVisible] =
    useState(false);

  const showModal = (title: string, beneficiary: string) => {
    setSelected({ title, beneficiary });
    setContributionModalAsVisible(true);
  };

  const hideModal = () => {
    setSelected(null);
    setContributionModalAsVisible(false);
  };

  const onContributionClick = (title: string, beneficiary: string) => {
    showModal(title, beneficiary);
  };

  return (
    <>
      <Head>
        <title>Iftiin-Crowd</title>
        <meta
          name="description"
          content="P2P Crowdfunding Campaigns"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero is-medium is-primary">
        <div className="hero-body">
          <h1 className="title">Iftiin-Crowd</h1>
          <p className="subtitle">
          P2P Crowdfunding Campaigns
          </p>
        </div>
      </section>
      <section className="section">
        <h1 className="title">Latest projects</h1>
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <ProjectCard
                title="🎸 New guitar"
                description="want to become a rockstar"
                imageSrc={`${basePath}/images/project.jpg`}
                author="alice"
                beneficiary="00143801cbe7007c4ce139ef7a48f492f239f700c315"
                onContributionClick={onContributionClick}
              />
            </div>
            <div className="column is-3">
              <ProjectCard
                title="💸 My Project"
                description="plx need money"
                author="tiero"
                beneficiary="00143801cbe7007c4ce139ef7a48f492f239f700c315"
                imageSrc={`${basePath}/images/project.jpg`}
                onContributionClick={onContributionClick}
              />
            </div>
            <div className="column is-3">
              <ProjectCard
                title="🚗 New car"
                description="plx need new car"
                imageSrc={`${basePath}/images/car.jpg`}
                author="tiero"
                beneficiary="00143801cbe7007c4ce139ef7a48f492f239f700c315"
                onContributionClick={onContributionClick}
              />
            </div>
            <div className="column is-3">
              <ProjectCard
                title="🚀 To the moon"
                description="I want to go to the moon"
                imageSrc={`${basePath}/images/moon.jpg`}
                author="bob"
                beneficiary="00143801cbe7007c4ce139ef7a48f492f239f700c315"
                onContributionClick={onContributionClick}
              />
            </div>
          </div>
        </div>
      </section>
      {contributionModalIsVisible && selected ? (
        <Contribution
          title={selected.title}
          beneficiary={selected.beneficiary}
          onCancel={hideModal}
        />
      ) : null}
    </>
  );
}
