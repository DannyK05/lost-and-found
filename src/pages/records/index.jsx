import Layout from "../../layout";
import {
  useDeleteFoundItemByIdMutation,
  useGetAllUserFoundItemsMutation,
} from "../../store/api/found";
import { useDeleteLostItemByIdMutation } from "../../store/api/lost";

export default function Records() {
  const { data: foundItems, isLoading: loadingFoundItems } =
    useGetAllUserFoundItemsMutation();
  const { data: lostItems, isLoading: loadingLostItems } =
    useGetAllUserFoundItemsMutation();
  const [deleteFoundItem, { isLoading: loadingDeleteFoundItems }] =
    useDeleteFoundItemByIdMutation({});
  const [deleteLostItem, { isLoading: loadingDeleteLostItems }] =
    useDeleteLostItemByIdMutation({});
  return (
    <Layout>
      <h1 className="mt-4">Records</h1>
    </Layout>
  );
}
