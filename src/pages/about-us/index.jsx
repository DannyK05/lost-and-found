import Layout from "../../layout";
import "./index.css";
import "../home/index.css";
import Maglens from "../../assets/images/mag-lens.svg";
import Maglensbg from "../../assets/images/mag-lensbg.svg";
import Msgbg from "../../assets/images/msg-bg.svg";
import Msg from "../../assets/images/msg.svg";
import Ownerbg from "../../assets/images/ownerbg.svg";
import Owner from "../../assets/images/owner.svg";
import People from "../../assets/images/people.webp";
import Arrow from "../../assets/images/arrow.svg";
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
          <div className="each-story-topdiv">
            <div className="each-story-div">
              <p className="story-title">I Lost an Item</p>
              <p className="story">
                Users can submit a form to report a lost item, providing key
                details and uploading images to help with its recovery. This
                feature ensures that important information is shared to improve
                the chances of reuniting with the lost item.
              </p>
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

            <div className="each-story-div" id="middle-story">
              <p className="story-title">I Found an Item </p>
              <p className="story">
                Users can report items they've found by describing the item and
                providing its location. This feature helps connect lost items
                with their rightful owners, making recovery easier and faster.
              </p>
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

            <div className="each-story-div">
              <p className="story-title">Search for Lost Item</p>
              <p className="story">
                A search bar allows users to look up lost or found items by
                entering keywords or applying filters. This makes it easy to
                find specific items reported on the platform.
              </p>
              <div className="arrow-div">
                <img
                  src={Arrow}
                  width={55}
                  height={55}
                  alt="arrow-icon"
                  id="story-arrrow"
                />
              </div>
            </div>
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
              <div className="each-how-div">
                <p className="how-tit">View the announcement</p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img
                      src={Maglensbg}
                      width={117}
                      height={123}
                      alt="megaphone-icon-bg"
                      className="how-iconbg"
                    />
                  </div>
                  <div className="how-icon-div">
                    <img
                      src={Maglens}
                      width={41}
                      height={37}
                      alt="megaphone-icon"
                      className="how-icon"
                    />
                  </div>
                </div>
                <p className="how-details">
                  if you've lost and found an item, check out lost and found
                  items ads
                </p>
              </div>

              <div className="each-how-div" id="middle-how">
                <p className="how-tit">Create an annoucement</p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img
                      src={Msgbg}
                      width={117}
                      height={123}
                      alt="message-icon-bg"
                      className="how-iconbg"
                    />
                  </div>
                  <div className="how-icon-div">
                    <img
                      src={Msg}
                      width={41}
                      height={37}
                      alt="message-icon"
                      className="how-icon"
                    />
                  </div>
                </div>
                <p className="how-details">
                  Create an announcement about a found or lost item and list it
                  on the site{" "}
                </p>
              </div>

              <div className="each-how-div">
                <p className="how-tit">Help unite owners with their stuffs</p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img
                      src={Ownerbg}
                      width={117}
                      height={123}
                      alt="owner-bg"
                      className="how-iconbg"
                    />
                  </div>
                  <div className="how-icon-div">
                    <img
                      src={Owner}
                      width={41}
                      height={37}
                      alt="owner"
                      className="how-icon"
                    />
                  </div>
                </div>
                <p className="how-details">
                  Contact the school's lost and found, to drop off or collect a
                  misplaced item
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="axa">Our team</div>
          <div className="oxo">
            <ul className="flex py-2 md:p-2 lg:p-2 items-center flex-wrap space-x-5 space-y-4 ">
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Adejuwon Simisola
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-lg lg:text-xl md:text-xl ">
                Votu-Sakpere Jesse
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-lg lg:text-xl md:text-xl">
                Alao Daniel
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Ijinleifeoluwa Daniel Fadare
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Emmanuel Victor
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Ojo Oluwatobi Daniel
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Adesiyan Ebunoluwa Sharon
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-lg lg:text-xl md:text-xl">
                Ibikunle David Sinmisoluwa
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Ajadi Aishat Omobolanle
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Badmos Maryam
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Abubakar Temitope
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Abioye Oluwatomisin Covenant
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-lg lg:text-xl md:text-xl">
                Olasoji Favour
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-xl lg:text-2xl md:text-2xl">
                Akintola William
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Olubanjo Oluwakolade Daniel
              </li>
              <li className="w-[41%] lg:w-[23%] md:w-[23%] text-md lg:text-lg md:text-lg">
                Abubakar Temitope Modupeoluwa
              </li>
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
