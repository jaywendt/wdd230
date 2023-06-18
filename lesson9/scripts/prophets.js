const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birth = document.createElement('p');
      let place = document.createElement('p');
      let death = document.createElement('p');
      let age = document.createElement('p');
      let children = document.createElement('p');

      let ageOfDeath;

      if(prophet.death != null){
        let deathArray = prophet.death.split("");
        let deathYear = deathArray[2];
        let birthArray = prophet.birthdate.split("");
        let birthYear = birthArray[2];

        ageOfDeath = deathYear - birthYear;
      } else {
            let birthArray = prophet.birthdate.split("");
            let birthYear = birthArray[2];
            ageOfDeath = 2023 - birthYear;
        }
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');

      birth.textContent = 'Date of Birth: ${prophet.birthdate}'

      place.textContent = 'Birth Place: ${prophet.birthplace}'

      death.textContent = 'Date of Death: ${prophet.death}'

      age.textContent = 'Age: ${ageOfDeath}'
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.append(birth);
      card.append(place);
      card.append(death);
      card.append(age);
  
      cards.appendChild(card);
    }); // end of forEach loop
  } // end of function expression

  getProphetData();