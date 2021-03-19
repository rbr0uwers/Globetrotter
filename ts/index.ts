const locationArr : Array<Locations>  = [
    new Locations("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/stcharles.jpg", new Date(Date.now() - 12000000000)),
    new Locations("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/zoo.jpg", new Date(Date.now() - 10000000000)),
    new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/lemonleaf.jpg", new Date(Date.now() - 11000000000), "+43(1)5812308", "Thai", new URL("http://www.lemonleaf.at")),
    new Restaurant("SIXTA", "Vienna", "1050", "Schönbrunner Straße 21", "img/sixta.jpg", new Date(Date.now() - 70000000000), "+43 1 58 528 56", "Austrian", new URL("http://www.sixta-restaurant.at/")),
    new Events("Kris Kristofferson", "Vienna", "1150", `Wiener Stadthalle, Halle F, Roland Rainer Platz 1`, "img/kristofferson.jpg", new Date(Date.now() - 95000000000), new Date(2021, 11, 15, 20, 0), 58.50),
    new Events("Lenny Kravitz", "Vienna", "1150", `Wiener Stadthalle, Halle D, Roland Rainer Platz 1`, "img/kravitz.jpg", new Date(Date.now() - 30000000000), new Date(2029, 12, 9, 19, 30), 47.80),
    new Locations("Mariahilferstrasse", "Vienna", "1070", "Mariahilferstrasse", "img/mahue.jpg", new Date(Date.now() - 10500000000)),
    new Locations("Stephansdom", "Vienna", "1010", "Stephansplatz 3", "img/steffl.jpg", new Date(Date.now() - 8800000000)),
    new Restaurant("Der Wiener Deewan", "Vienna", "1090", "Liechtensteinstraße 10", "img/deewan.jpg", new Date(Date.now() - 15000000000), "+43(1)58435418", "Pakistanian", new URL("http://www.deewan.at/")),
    new Restaurant("Eatalico", "Vienna", "1020", "Praterstraße 31", "img/eatalico.jpg", new Date(Date.now() - 78000000000), "+43 1 00 09 15 56", "Italian", new URL("https://www.eatalico.at/")),
    new Events("Woodkid", "Vienna", "1100", `Planet.tt/Gasometer - Guglgasse 8`, "img/woodkid.jpg", new Date(Date.now() - 30000000000), new Date(2021, 9, 24, 20, 0), 40.50),
    new Events("Fritz Kalkbrenner", "Vienna", "1030", `Arena Wien - Baumgasse 80`, "img/kalki.jpg", new Date(Date.now() - 1000000000), new Date(2022, 12, 9, 19, 30), 30.80)
]

let currentPageFilter : string = "";

createContent(locationArr);
registerElements();

function createContent(data : Array<Locations>) : void{
    let generatedContent : string = '';
    data.forEach(location => generatedContent += location.display());
    document.querySelector(`[data-meta="entry"]`)!.innerHTML = generatedContent;
}

function registerElements() : void {
    document.querySelectorAll(`[data-meta="filter"]`).forEach(ele => ele.addEventListener("click", function(this : HTMLElement){filterContent(this.dataset.assoc || "")}));
    document.querySelectorAll(`[data-meta="sort"]`).forEach(ele => ele.addEventListener("click", function(this : HTMLElement){sortContent(this.dataset.assoc || "")}));
}

/*  
    Applies filter to global array and creates content with filtered array
    @param filter     Value of the data-assoc attribute from the calling HTMLElement (e.g. "Restaurant")
*/
function filterContent(filter: string) : void {
    currentPageFilter = filter;
    if (!currentPageFilter) createContent(locationArr);
    else createContent(locationArr.filter(ele => ele.constructor.name.toLowerCase() === currentPageFilter));
}

/*  
    Sorts the global array and applies the current filter
    @param prop     Value of the data-assoc attribute from the calling HTMLElement 
*/
function sortContent(prop : string) : void {
    if (prop === "title") locationArr.sort((a, b) => a[prop].localeCompare(b[prop])); 
    else if (prop ==="date") locationArr.sort((a, b) => b[prop].getTime() - a[prop].getTime());
    
    filterContent(currentPageFilter);
}
