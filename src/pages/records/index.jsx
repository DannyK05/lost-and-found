import Layout from "../../layout";
import ItemsListed from "./components/ItemsListed";
import ItemsMatch from "./components/ItemsMatch";

export default function Records() {
  return (
    <Layout>
      <div className="px-2">
        <h1 className="text-center text-lg text-[#010066] mt-4">Records</h1>
        <ItemsListed />
        <ItemsMatch />
      </div>
    </Layout>
  );
}
