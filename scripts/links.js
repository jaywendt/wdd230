const baseURL = "https://github.com/jaywendt/wdd230";
const linksURL = "https://github.com/jaywendt/wdd230/blob/master/data/links.json";

async function getLinks()  {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();