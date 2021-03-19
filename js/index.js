"use strict";
const locationArr = [
    new Locations("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/stcharles.jpg", new Date(Date.now() - 12000000000)),
    new Locations("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/zoo.jpg", new Date(Date.now() - 10000000000)),
    new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/lemonleaf.jpg", new Date(Date.now() - 11000000000), "+43(1)5812308", "Thai", new URL("http://www.lemonleaf.at")),
    new Restaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "img/sixta.jpg", new Date(Date.now() - 70000000000), "+43 1 58 528 56 l +43 1 58 528 56", "Austrian", new URL("http://www.sixta-restaurant.at/")),
    new Events("Kris Kristofferson", "Vienna", "1150", `Wiener Stadthalle, Halle F, Roland Rainer Platz 1`, "img/kristofferson.jpg", new Date(Date.now() - 95000000000), new Date(2021, 11, 15, 20, 0), 58.50),
    new Events("Lenny Kravitz", "Vienna", "1150", `Wiener Stadthalle, Halle D, Roland Rainer Platz 1`, "img/kravitz.jpg", new Date(Date.now() - 30000000000), new Date(2029, 12, 9, 19, 30), 47.80)
];
let currentPageFilter = "";
createContent(locationArr);
registerElements();
function createContent(data) {
    let generatedContent = '';
    data.forEach(location => generatedContent += location.display());
    document.querySelector(`[data-meta="entry"]`).innerHTML = generatedContent;
}
function registerElements() {
    document.querySelectorAll(`[data-meta="filter"]`).forEach(ele => ele.addEventListener("click", function () { filterContent(this.dataset.assoc || ""); }));
    document.querySelectorAll(`[data-meta="sort"]`).forEach(ele => ele.addEventListener("click", function () { sortContent(this.dataset.assoc || ""); }));
}
function filterContent(filter) {
    currentPageFilter = filter;
    if (!currentPageFilter)
        createContent(locationArr);
    else
        createContent(locationArr.filter(ele => ele.constructor.name.toLowerCase() === currentPageFilter));
}
function sortContent(prop) {
    if (prop === "title")
        locationArr.sort((a, b) => a[prop].localeCompare(b[prop]));
    else if (prop === "date")
        locationArr.sort((a, b) => b[prop].getTime() - a[prop].getTime());
    filterContent(currentPageFilter);
}
