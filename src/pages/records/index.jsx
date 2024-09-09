import Layout from "../../layout";
import {
  useDeleteFoundItemByIdQuery,
  useGetAllUserFoundItemsMutation,
} from "../../store/api/found";

export default function Records() {
  const { data: foundItems, isLoading: loadingFoundItems } =
    useGetAllUserFoundItemsMutation();
  // const [deleteFoundItem, { isLoading:loadingDeleteFoundItems}] =
  //   useDeleteFoundItemByIdQuery({});
  return (
    <Layout>
      <h1 className="mt-4">Records</h1>
    </Layout>
  );
}
