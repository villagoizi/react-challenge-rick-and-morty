import { gql } from "@apollo/client";

export default class GenerateDinamicQueries {
  private query: string;
  constructor(
    private entity: string = "characters",
    private search: string = "",
    private filterField: string = "name",
    private pageNumber: number = 1
  ) {
    this.query = `query getDinamicQueries`;
    this.entity = entity;
    this.search = search;
    this.filterField = filterField;
    this.pageNumber = pageNumber;
  }

  handle() {
    this.selectEntityAndFilterSchema();
    this.selectQuerySchema();
    this.handlePagination();
    this.selectResults();
    return gql`
      ${this.query}
    `;
  }
  makeVariables() {
    return {
      filter: {
        [this.filterField]: this.search,
      },
      page: this.pageNumber,
    };
  }

  private selectEntityAndFilterSchema() {
    switch (this.entity) {
      case "characters":
        this.query = `${this.query} ($page: Int, $filter: FilterCharacter)`;
        break;
      case "locations":
        this.query = `${this.query} ($page: Int, $filter: FilterLocation)`;
        break;
      case "episodes":
        this.query = `${this.query} ($page: Int, $filter: FilterEpisode)`;
        break;
      default:
        this.query = `${this.query} ($page: Int, $filter: FilterCharacter)`;
        break;
    }
  }
  private selectQuerySchema() {
    this.query = `${this.query}{
          ${this.entity}(page: $page, filter: $filter)`;
  }
  private handlePagination() {
    this.query = `${this.query} {
        info{
          next
          prev
          pages
          count
        }
        `;
  }
  private selectResults() {
    switch (this.entity) {
      case "characters":
        this.query += `
              results {
                 id
                 name
                 image
              }
          }
      }
          `;
        break;
      case "locations":
        this.query += `
              results {
                  id
                  name
                  dimension
              }
          }
      }
           `;
        break;

      case "episodes":
        this.query += `
              results {
                  id
                  name
                  episode
              }
           }
          }
           `;
        break;
      default:
        this.query += `
              results {
                     id
                     name
                     image
                  }
              }
          }
              `;
        break;
    }
  }
}
