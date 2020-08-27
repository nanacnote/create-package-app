/**
 * create-package-app
 * v1.0.0
 * CC0-1.0
 * by Owusu K
 * contributors 
 * Typescript ready scaffolding for writing and publishing npm packages. It comes packaged with an automated fully functional documentation website to allow you to focus on your package
 * https://github.com/nanacnote/create-package-app#readme
 */

/**
 * Function to get new items
 *
 * @internal
 * @function
 * @returns object
 */
var _getNews = function (param) {
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
    }
};

var _Directory = /** @class */ (function () {
    /**
     * Main class object for findOut library
     * @class
     * @param options determines how to interact with the API
     */
    function _Directory(options) {
        var _a, _b, _c;
        this._options = options;
        this._news = _getNews(this._options.category);
        this.newsToday = (_a = this._news) === null || _a === void 0 ? void 0 : _a.newsToday;
        this.newsWeek = (_b = this._news) === null || _b === void 0 ? void 0 : _b.newsWeek;
        this.newsMonth = (_c = this._news) === null || _c === void 0 ? void 0 : _c.newsMonth;
    }
    /**
     * gets number of selected category item in a region
     * @public
     * @method
     * @returns number
     */
    _Directory.prototype.numberIn = function (param) {
        var _a, _b;
        if (((_a = this._options) === null || _a === void 0 ? void 0 : _a.category) === "HOSPITALS") {
            switch (param) {
                case "ENGLAND":
                    return 100;
                case "WALES":
                    return 35;
                case "SCOTLAND":
                    return 75;
                case "NORTHEN IRELAND":
                    return 50;
            }
        }
        if (((_b = this._options) === null || _b === void 0 ? void 0 : _b.category) === "UNIVERSITIES") {
            switch (param) {
                case "ENGLAND":
                    return 98;
                case "WALES":
                    return 10;
                case "SCOTLAND":
                    return 43;
                case "NORTHEN IRELAND":
                    return 27;
            }
        }
    };
    return _Directory;
}());

var hospitals = new _Directory({ category: "HOSPITALS" });
var universities = new _Directory({ category: "UNIVERSITIES" });

export { hospitals, universities };
