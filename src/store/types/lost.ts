import { TApiResponse, TLostItemResponse } from "./constant";

export type TRegisterLostItemsDto = {
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

export type TGetAllLostItemsResponse = TApiResponse<{
  allLostItemData: TLostItemResponse[];
}>;
export type TGetAllUserLostItemsResponse = TApiResponse<{
  lostItems: TLostItemResponse[];
}>;
