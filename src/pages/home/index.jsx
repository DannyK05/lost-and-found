import Layout from "../../layout";
import "./index.css";
import Arrow from "../../assets/images/arrow.svg";
import Bell from "../../assets/images/bell.webp";
import MagnifyingGlass from "../../assets/images/magnifying-glass.png";
import Megaphone from "../../assets/images/megaphone.webp";
import People from "../../assets/images/people.webp";
import Statistics from "../../assets/images/statistics.webp";
import Maglens from "../../assets/images/mag-lens.svg";
import Maglensbg from "../../assets/images/mag-lensbg.svg";
import Msgbg from "../../assets/images/msg-bg.svg";
import Msg from "../../assets/images/msg.svg";
import Ownerbg from "../../assets/images/ownerbg.svg";
import Owner from "../../assets/images/owner.svg";

export default function HomePage() {
  return (
    <>
      <Layout>
        <section className="top-part">
          <div id="detailed-info">
            <div id="info">
              <div id="title-div">
                <p id="bold-title">
                  Lost<span id="qtn">&</span>Found Hub
                </p>
              </div>
              <div id="details-div">
                <p id="details">
                  Our website is designed to make it easier and faster to
                  <br />
                  <span> reconnect lost items with their rightful owners.</span>
                </p>
              </div>
            </div>

            <div className="outer">
              <div className="each">
                <div className="img-div">
                  <img
                    src={Megaphone}
                    alt="A picture of a megaphone representing report an item"
                    className="img"
                  />
                </div>
                <p className="e-text">Report an Item</p>
              </div>

              <div className="each">
                <div className="img-div">
                  <img
                    src={MagnifyingGlass}
                    alt="A picture of a megaphone representing report an item"
                    className="img"
                  />
                </div>
                <p className="e-text">Found Item</p>
              </div>

              <div className="each">
                <div className="img-div">
                  <img
                    src={Bell}
                    alt="A picture of a megaphone representing report an item"
                    className="img"
                  />
                </div>
                <p className="e-text">Notify owner</p>
              </div>

              <div className="each">
                <div className="img-div">
                  <img
                    src={Statistics}
                    alt="A picture of a megaphone representing report an item"
                    className="img"
                  />
                </div>
                <p className="e-text">Manage Reports</p>
              </div>
            </div>
          </div>

          <div className="stat-container">
            <div className="stat">
              <div className="e-stat">
                <p className="num">100+</p>
                <p className="u-num">
                  Items that were found using this <br /> <span>service</span>{" "}
                </p>
              </div>

              <div className="e-stat">
                <p className="num">150+</p>
                <p className="u-num">
                  New ads on the site <br /> <span>every day</span>{" "}
                </p>
              </div>

              <div className="e-stat">
                <p className="num">110+</p>
                <p className="u-num">
                  Items that were returned <br /> <span>to the owners</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

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
              found on the items. <br />{" "}
              <span>
                Browse our database of over 1,000 listings to find your missing
                belongings.
              </span>
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
                  Our website streamlines the process of reuniting <br />
                  lost belongings with their concerned owners. With a
                  user-friendly platform, <br />
                  owners can quickly provide essential details about their{" "}
                  <br />
                  missing items
                </p>
              </div>

              <div className="people-pics-div">
                <img src={People} alt="" id="people-pics" />
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
                <img src={Arrow} alt="" id="story-arrrow" />
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
                <img src={Arrow} alt="" id="story-arrrow" />
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
                <img src={Arrow} alt="" id="story-arrrow" />
              </div>
            </div>
          </div>
        </section>

        <section className="ahtd">
          <div className="about-how-tit-div">
            <div className="line" id="line-r">
              {" "}
            </div>
            <p className="about-how-tit">​How It Works</p>
            <div className="line" id="line-l">
              {" "}
            </div>
          </div>

          <div className="how-topdiv">
            <div className="each-top-div">
              <div className="each-how-div">
                <p className="how-tit">
                  View the{" "}
                  <span>
                    announcement <br />{" "}
                  </span>
                </p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img src={Maglensbg} alt="" className="how-iconbg" />
                  </div>
                  <div className="how-icon-div">
                    <img src={Maglens} alt="" className="how-icon" />
                  </div>
                </div>
                <p className="how-details">
                  if you've lost and found an item, <br />{" "}
                  <span>
                    check out lost and found items
                    <br />
                  </span>{" "}
                  <span>ads</span>{" "}
                </p>
              </div>

              <div className="each-how-div" id="middle-how">
                <p className="how-tit">
                  Create an{" "}
                  <span>
                    annoucement <br />
                  </span>{" "}
                </p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img src={Msgbg} alt="" className="how-iconbg" />
                  </div>
                  <div className="how-icon-div">
                    <img src={Msg} alt="" className="how-icon" />
                  </div>
                </div>
                <p className="how-details">
                  Create an announcement about <br />{" "}
                  <span>
                    a found or lost item and list
                    <br />
                  </span>{" "}
                  <span>it on the site</span>{" "}
                </p>
              </div>

              <div className="each-how-div">
                <p className="how-tit">
                  Help unite owners with{" "}
                  <span>
                    their missing stuffs <br />
                  </span>{" "}
                </p>
                <div className="how-icon-topdiv">
                  <div className="how-iconbg-div">
                    <img src={Ownerbg} alt="" className="how-iconbg" />
                  </div>
                  <div className="how-icon-div">
                    <img src={Owner} alt="" className="how-icon" />
                  </div>
                </div>
                <p className="how-details">
                  Contact the school's lost and <br />{" "}
                  <span>
                    {" "}
                    found, to drop off or collect
                    <br /> a misplaced item
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="register-topdiv pb-4">
          <div className="register-div w-3/5">
            <div className="qtnn-div">
              <p className="qtnn">
                Did you know 1 in 3 personal items goes missing at some point?
                Our campus Lost and Found system helps boost your chances of
                recovering valuable belongings and reuniting them with their
                owners.{" "}
              </p>
            </div>
            <div className="button-div">
              <button id="button">Register Your Item</button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
