import "./index.css";
import { Link } from "react-router-dom";

import Layout from "../../components/layout";

import { actions, stats } from "./data";

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
                  reconnect lost items with their rightful owners.
                </p>
              </div>
            </div>

            <div className="outer">
              {actions.map((action) => (
                <div key={action.title} className="each">
                  <div className="img-div">
                    <Link to={action.to}>
                      <img
                        src={action.icon}
                        alt={action.alt}
                        className="img"
                        width={82}
                        height={82}
                      />
                    </Link>
                  </div>

                  <p className="e-text">{action.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="stat-container">
            <div className="stat">
              {stats.map((stat) => (
                <div key={stat.value} className="e-stat">
                  <p className="num">{stat.value}</p>
                  <p className="u-num">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="register-topdiv pb-4">
          <div className="register-div">
            <div className="qtnn-div">
              <p className="qtnn">
                Did you know 1 in 3 personal items goes missing at some point?
              </p>
            </div>

            <div className="button-div">
              <button id="button">
                <Link to={"/lost-items"}> Your Item</Link>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
