import Layout from "../../layout";
import ItemsListed from "./components/ItemsListed";

export default function Records() {
  return (
    <Layout>
      <h1 className="text-center text-lg text-[#010066] mt-4">Records</h1>
      <ItemsListed />
    </Layout>
  );
}
