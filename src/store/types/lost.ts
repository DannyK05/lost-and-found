import { TApiResponse } from "./constant";

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

export type TRegisterLostItemsResponse = TApiResponse<{}>;
