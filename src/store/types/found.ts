import { TApiResponse, TFoundItemResponse } from "./constant";

export type TRegisterFoundItemsDto = {
  title: string;
  category: string;
  description: string;
  foundAt: string;
  foundDate: string;
  uniqueIdentifier: string;
  itemBrand: string;
  image: string;
  color: string;
};

export type TGetAllFoundItemsResponse = TApiResponse<{
  allFoundItemData: TFoundItemResponse[];
}>;
export type TGetAllUserFoundItemsResponse = TApiResponse<{
  foundItems: TFoundItemResponse[];
}>;
