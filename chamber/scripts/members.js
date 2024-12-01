const baseURL = 'https://jaywendt.github.io/wdd230/';
const dataURL = 'https://jaywendt.github.io/wdd230/chamber/data/members.json'
const members = document.querySelector('#members');

async function getMembers(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        displayMembers(data.members);
        return data;
    } catch (error) {
        console.error("Data fetch error", error);
        throw error;
    }
}

getMembers();

const displayMembers = (members) => {

    const card = document.querySelector('#members');
    
    members.forEach((member) => {

        let box = document.createElement('section');
        let memberName = document.createElement('h2');
        let img = document.createElement('img');

        memberName.textContent = '${member.name}';
        img.setAttribute('src', member.imageFile);
        img.setAttribute('alt', '${member.name} logo');
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '340');
        img.setAttribute('height', '440');

        box.appendChild(memberName);
        box.appendChild(img);

        members.appendChild(box);
    });
}