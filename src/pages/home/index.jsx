import Layout from "../../layout";
import "./index.css"
import Arrow from "../../assets/images/arrow.svg"
import Bell from "../../assets/images/bell.webp"
import MagnifyingGlass from "../../assets/images/magnifying-glass.png"
import Megaphone from "../../assets/images/megaphone.webp"
import People from "../../assets/images/people.webp"
import Statistics from "../../assets/images/statistics.webp"
import Maglens from "../../assets/images/mag-lensbg.svg"


export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="top-part">
          <div id="detailed-info">
            <div id="info">
              <div id="title-div"><p id="bold-title">Lost<span id="qtn">&</span>Found Hub</p></div>
              <div id="details-div">
                <p id="details">
                  Our website is dedicated to simplifying the
                  process of reuniting lost <br/>
                  <span>items with their
                  worried owners.</span>
                </p>
              </div>
              
            </div>
            <div className="outer">
              <div className="each">
                <div className="img-div"><img src={Megaphone} alt="A picture of a megaphone representing report an item" className="img"/></div>
                <p className="e-text">Report an Item</p>
              </div>

              
              <div className="each">
                <div className="img-div"><img src={MagnifyingGlass} alt="A picture of a megaphone representing report an item" className="img"/></div>
                <p className="e-text">Found Item</p>
              </div>

              
              <div className="each">
                <div className="img-div"><img src={Bell} alt="A picture of a megaphone representing report an item" className="img"/></div>
                <p className="e-text">Notify owner</p>
              </div>

              
              <div className="each">
                <div className="img-div"><img src={Statistics} alt="A picture of a megaphone representing report an item" className="img"/></div>
                <p className="e-text">Manage Reports</p>
              </div>
              
            </div>
          
          </div>
        
          <div className="stat-container">
            <div className="stat">
              <div className="e-stat">
                <p className="num">100+</p>
                <p className="u-num">Items that were found using this <br/> <span>service</span> </p>
              </div>
        
              <div className="e-stat">
                <p className="num">150+</p>
                <p className="u-num">New ads on the site <br/> <span>every day</span> </p>
              </div>
        
              <div className="e-stat">
                <p className="num">110+</p>
                <p className="u-num">Items that were returned <br/> <span>to the owners</span> </p>
              </div>
            </div>
          </div>
        
        </div>
      
        <div className="about-tit-div">
          <div className="line" id="line-l"> </div>
          <p className="about-tit">About Lost&Found Hub</p>
          <div className="line" id="line-r"> </div>
        </div>

        <div id="ab-dit">
          <p id="ab">We help reunite missing stuffs to owner by using an information on the stuff.
            Search out <br/> <span>database for more than 1000 stuffs to find your lost items</span>
        </p>
        </div>

        <div className="web-info-topdiv">
          <div className="web-info-div">
            <div id="bold-div">
              <p id="bold">We simplify the search for lost stuffs</p>
            </div>
      
            <div className="info-pic-div">
              <div className="bold-info-div">
                <p id="bold-info">
                  Our website, LOST&FOUND Hub is dedicated to simplifying the process of reuniting <br/> 
                  lost items with their worried owners. By providing a user-friendly platform, <br/>
                  we make it effortless for owners to fill in essential information about their <br/>
                  missing furry friends
                </p>
              </div>
              
              <div className="people-pics-div">
                <img src={People} alt="" id="people-pics"/>
              </div>
            </div>
          </div>
        </div>

        <div className="story-topdiv">
          <div className="each-story-topdiv">
            <div className="each-story-div">
              <p className="story-title">I Lost an Item</p>
              <p className="story">
                Allows users to submit a form to report an <br/> 
                <span>item they have lost. This feature lets users <br/></span>
                <span>provide details and upload images of the <br/></span>
                <span>lost item to facilitate its recovery.</span>
              </p>
              <div className="arrow-div"><img src={Arrow} alt="" id="story-arrrow"/></div>
            </div>
            
            <div className="each-story-div">
              <p className="story-title">I Lost an Item</p>
              <p className="story">
                Allows users to submit a form to report an <br/> 
                <span>item they have lost. This feature lets users <br/></span>
                <span>provide details and upload images of the <br/></span>
                <span>lost item to facilitate its recovery.</span>
              </p>
              <div className="arrow-div"><img src={Arrow} alt="" id="story-arrrow"/></div>
            </div>
            
            <div className="each-story-div">
              <p className="story-title">I Lost an Item</p>
              <p className="story">
                Allows users to submit a form to report an <br/> 
                <span>item they have lost. This feature lets users <br/></span>
                <span>provide details and upload images of the <br/></span>
                <span>lost item to facilitate its recovery.</span>
              </p>
              <div className="arrow-div"><img src={Arrow} alt="" id="story-arrrow"/></div>
            </div>
          </div>
        </div>

        .<div className="about-how-tit-div">
          <div className="line" id="line-r"> </div>
          <p className="about-how-tit">​How It Works</p>
          <div className="line" id="line-l"> </div>
        </div>

        <div className="how-top-div">
          <div className="each-how-div">
            <p className="how-tit">View the announcement</p>
            <div className="how-icon-div"><img src={Maglens} alt="" className="how-icon"/></div>
            <p className="how-details">if you've lost and found an item, check out lost and found items ads</p>
          </div>

          
          <div className="each-how-div">
            <p className="how-tit">View the announcement</p>
            <div className="how-icon-div"><img src={Maglens} alt="" className="how-icon"/></div>
            <p className="how-details">if you've lost and found an item, check out lost and found items ads</p>
          </div>

          <div className="each-how-div">
            <p className="how-tit">View the announcement</p>
            <div className="how-icon-div"><img src={Maglens} alt="" className="how-icon"/></div>
            <p className="how-details">if you've lost and found an item, check out lost and found items ads</p>
          </div>

        </div>


      </Layout>
    </>
  );
}
