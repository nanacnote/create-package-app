export type TNews =
  | {
      newsToday: string[];
      newsWeek: string[];
      newsMonth: string[];
    }
  | undefined;

/**
 * Function to get new items
 * @function
 * @returns object
 */
export const _getNews = (param: "HOSPITALS" | "UNIVERSITIES") => {
  switch (param) {
    case "HOSPITALS":
      return {
        newsToday: ["hospitals news item 1", "hospitals news item 2"],
        newsWeek: ["hospitals news item 1", "hospitals news item 2"],
        newsMonth: ["hospitals news item 1", "hospitals news item 2"],
      };
    case "UNIVERSITIES":
      return {
        newsToday: ["university news item 1", "university news item 2"],
        newsWeek: ["university news item 1", "university news item 2"],
        newsMonth: ["university news item 1", "university news item 2"],
      };
    default:
      break;
  }
};
