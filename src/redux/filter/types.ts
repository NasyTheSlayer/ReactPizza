export enum SortPropertyEnum {
  RATING_DESK = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESK = 'title',
  TITLE_ASC = '-title',
  PRICE_DESK = '-price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}