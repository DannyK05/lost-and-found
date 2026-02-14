import "./index.css";
import "../home/index.css";

import Layout from "../../components/layout";

import People from "../../assets/images/people.webp";
import Arrow from "../../assets/images/arrow.svg";

import { howItWorksSteps, stories, teamMembers } from "./data";

export default function AboutUsPage() {
  return (
    <>
      <Layout>
        <section className="abt-laf">
          <div className="about-how-tit-div">
            <div className="line" id="line-l">
              {" "}
            </div>
            <p className="about-how-tit">About Lost&Found Hub</p>
            <div className="line" id="line-r">
              {" "}
            </div>
          </div>

          <div id="ab-dit">
            <p id="ab">
              We help reunite lost items with their owners by utilizing details
              found on the items. Browse our database of over 1,000 listings to
              find your missing belongings.
            </p>
          </div>
        </section>

        <section className="web-info-topdiv">
          <div className="web-info-div">
            <div id="bold-div">
              <p id="bold">We simplify the search for lost stuffs</p>
            </div>

            <div className="info-pic-div">
              <div className="bold-info-div">
                <p id="bold-info">
                  Our website streamlines the process of reuniting lost
                  belongings with their concerned owners. With a user-friendly
                  platform, owners can quickly provide essential details about
                  their missing items
                </p>
              </div>

              <div className="people-pics-div">
                <img
                  src={People}
                  alt="people illustration"
                  id="people-pics"
                  width={273}
                  height={175}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="story-topdiv">
          <div className="each-story-topdiv gap-2">
            {stories.map((story, index) => (
              <div
                key={story.title}
                className={`each-story-div ${
                  index === 1 ? "middle-story" : ""
                }`}
              >
                <p className="story-title">{story.title}</p>
                <p className="story">{story.description}</p>

                <div className="arrow-div">
                  <img
                    src={Arrow}
                    width={55}
                    height={55}
                    alt="arrow"
                    id="story-arrrow"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="ahtd">
          <div className="about-how-tit-div">
            <div className="line" id="line-r">
              {" "}
            </div>
            <p className="about-how-tit">How It Works</p>
            <div className="line" id="line-l">
              {" "}
            </div>
          </div>

          <div className="how-topdiv">
            <div className="each-top-div">
              {howItWorksSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`each-how-div ${index === 1 ? "middle-how" : ""}`}
                >
                  <p className="how-tit">{step.title}</p>

                  <div className="how-icon-topdiv">
                    <div className="how-iconbg-div">
                      <img
                        src={step.iconBg}
                        width={117}
                        height={123}
                        alt={`${step.alt}-bg`}
                        className="how-iconbg"
                      />
                    </div>

                    <div className="how-icon-div">
                      <img
                        src={step.icon}
                        width={41}
                        height={37}
                        alt={step.alt}
                        className="how-icon"
                      />
                    </div>
                  </div>

                  <p className="how-details">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="axa">Our team</div>
          <div className="oxo">
            <ul className="grid grid-cols-2 gap-2 p-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <li key={member} className="text-sm lg:text-2xl md:text-2xl">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="footerContainer">
          <div className="footerBottom">
            <p>2024&copy; Lost&FoundHub.com. All rights reserved.</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
