import Layout from "../../components/layout";

import { ItemsListed } from "./components/ItemsListed";
import { ItemsMatch } from "./components/ItemsMatch";

export default function Records() {
  return (
    <Layout>
      <div className="px-2">
        <h1 className="orbitron mt-4 mb-10 text-center text-lg text-lost-blue font-semibold lg:text-xl">
          Records
        </h1>
        <ItemsListed />
        <ItemsMatch />
      </div>
    </Layout>
  );
}
