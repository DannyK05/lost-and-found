import Layout from "../../layout";
import "./index.css";
export default function AboutUsPage() {
  return (
    <>
      <Layout>
        <h1>About Us</h1>
        <section>
          <div class="axa">Purpose</div>
          <div class="oxo">
            The "Lost&Found Hub" is a web application created to assist students
            and staff of Obafemi Awolowo University in finding lost and found
            items on campus. The platform enables users to report lost or found
            items, search for found items, and reconnect with their belongings
            quickly and efficiently. Our goal is to reduce the frustration of
            losing valuable items and ensure that lost belongings are returned
            to their rightful owners as soon as possible.
          </div>
        </section>
        <section>
          <div class="axa">How it Works</div>
          <div class="oxo">
            The platform is managed by the University's security personnel, who
            are responsible for uploading reports of found items. Users can
            search the platform to check if their lost belongings ave been found
            and listed by security. This secure and efficient system ensures
            that lost items are quickly identified and returned to their
            rightful owners.
          </div>
        </section>
        <section>
          <div class="axa">Our team</div>
          <div class="oxo">
            <ul>
              <li>Adejuwon Simisola</li>
              <li>Votu-Sakpere Jesse</li>
              <li>Alao Daniel</li>
              <li>Ijinleifeoluwa Daniel Fadare</li>
              <li>Emmanuel Victor</li>
              <li>Ojo Oluwatobi Daniel</li>
              <li>Adesiyan Ebunoluwa</li>
              <li>Ibikunle David Sinmisoluwa</li>
              <li>Ajadi Aishat Omobolanle</li>
              <li>Badmos Maryam</li>
              <li>Abubakar Temitope</li>
              <li>Abioye Oluwatomisin Covenant</li>
              <li>Olasoji Favour</li>
              <li>Akintola William</li>
              <li>Olubanjo Oluwakolade</li>
            </ul>
          </div>
        </section>
        <section class="footerContainer">
          <div class="footerNav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Report Lost Items</a>
              </li>
              <li>
                <a href="">View Items</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <div class="footerBottom">
            <p>2024&copy; Lost&FoundHub.com. All rights reserved.</p>
          </div>
        </section>
      </Layout>
    </>
  );
}
