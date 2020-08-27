/**
 *  Parameters type declarations
 *
 *  @internal
 */
export declare type TNews = {
    newsToday: string[];
    newsWeek: string[];
    newsMonth: string[];
} | undefined;
/**
 * Function to get new items
 *
 * @internal
 * @function
 * @returns object
 */
export declare const _getNews: (param: "HOSPITALS" | "UNIVERSITIES") => {
    newsToday: string[];
    newsWeek: string[];
    newsMonth: string[];
} | undefined;
