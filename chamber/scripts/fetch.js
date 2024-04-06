const url = 'https://raw.githubusercontent.com/jaywendt/wdd230/main/chamber/data/members.json';
const memberCards = document.querySelector('#memberCards');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members)
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let memberCard = document.createElement('section');
        let name = document.createElement('h2');
        let icon = document.createElement('img');

        name.textContent = `${member.name}`;
        icon.setAttribute('src', member.imageurl);
        icon.setAttribute('alt', `Business Icon of ${member.icon}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '340');
        icon.setAttribute('height', '440');

        memberCard.appendChild(name);
        memberCard.appendChild(icon);

        memberCards.appendChild(memberCard);

    })
}