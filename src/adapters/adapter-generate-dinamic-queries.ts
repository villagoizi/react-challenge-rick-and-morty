import GenerateDinamicQueries from "../utils/generateDinamicQueries";

export const makeGenerateDinamicQueries = (
  entity: string,
  search: string,
  filterField: string,
  page: number
) => new GenerateDinamicQueries(entity, search, filterField, page);
