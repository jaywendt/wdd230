const url = 'https://github.com/jaywendt/wdd230/blob/master/chamber/data/members.json'
const members = document.querySelector('#members');

async function getjson(url) {
    const response = await fetch(url);
    const data = await response.json();
    displaymembers(data.members)
}

getjson();

const displayMembers = (members) => {
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