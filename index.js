const menuIcon = document.querySelectorAll('#menu-icon');

menuIcon.forEach((icon) => {
  icon.addEventListener('click', () => {
    document.querySelector('.mobile-nav').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

const closeMenu = () => {
  document.querySelector('.mobile-nav').style.display = 'none';
  document.body.style.overflow = 'scroll';
};

closeMenu();

// featured speakers section
const featuredSpeakers = document.querySelector('.feature');
featuredSpeakers.classList.add('featured-speakers');
document.body.appendChild(featuredSpeakers);

// // featured title
// const featuredTitle = document.createElement('h2');
// featuredTitle.classList.add('speakers-title');
// featuredTitle.textContent = 'Featured Speakers';
// featuredSpeakers.appendChild(featuredTitle);

// featured speakers
const speakers = [
  {
    id: 1,
    name: 'Deen Freelon',
    position: 'professor',
    intro: 'Deen Freelon is an associate professor at the UNC Hussman School of Journalism and Media at the University of North Carolina and a principal researcher.',
    photo: './images/speaker_01.png',
  },

  {
    id: 2,
    name: 'Martha Lane Fox',
    position: 'businesswoman, philanthropist',
    intro: 'Martha Lane Fox, is a British businesswoman, philanthropist and public servant. She co-founded Last Minute during the dotcom boom of the early 2000s.',
    photo: './images/speaker_02.png',
  },

  {
    id: 3,
    name: 'Martha Weber',
    position: 'professor',
    intro: 'Martha Weber is an associate professor of Communication and a member of Rutgers\'NetSCI Network Science lab.',
    photo: './images/speaker_03.png',
  },

  {
    id: 4,
    name: 'Daniel J. Weitzner',
    position: 'Scientist',
    intro: 'Daniel J. Weitzner. Founding Director, MIT Internet Policy Research Initiative (IPRI) 3Com Founders Senior Research Scientist, MIT Computer Science.',
    photo: './images/speaker_04.png',
  },

  {
    id: 5,
    name: 'Jennifer Zhu Scott',
    position: 'entrepreneur and investor',
    intro: 'is an entrepreneur and investor based in Hong Kong, specialized in blockchain, Artificial Intelligence (AI) and other deep tech.',
    photo: './images/speaker_05.png',
  },

  {
    id: 6,
    name: 'Sinan Aral',
    position: 'Author and business analytic',
    intro: 'Sinan Aral a global authority on business analytics; award-winning researcher; entrepreneur, and venture capitalist.',
    photo: './images/speaker_06.png',
  },
];

// speaker-container part
const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
featuredSpeakers.appendChild(speakerContainer);

const htmlOfSpeakers = (id, name, position, intro, photo) => `  
<div class="speaker speaker-${id}">
        <div class="speaker-photo-container">
            <img src="${photo}" alt="speaker-photo" class="speaker-img">
        </div>
        <div class="speaker-text-container">   
            <h3 class="speaker-name">${name}</h3>
            <p class="speaker-position">${position}</p>
            <img src="./images/icon-line-gray-64.png" alt="underline" class="underline2">
            <p class="speaker-intro">${intro}</p>
        </div> 
    </div>
`;

speakers.forEach((speaker) => {
  const htmlAdd = htmlOfSpeakers(
    speaker.id,
    speaker.name,
    speaker.position,
    speaker.intro,
    speaker.photo,
  );
    // myWorksSection.insertAdjacentHTML('afterend',htmlAdd);
  speakerContainer.innerHTML += htmlAdd;
});

// button more speakers
const SpeakerbuttonDiv = document.createElement('div');
const speakerButton = document.createElement('button');
speakerButton.classList.add('speakerBtn');
SpeakerbuttonDiv.classList.add('button-container');
speakerButton.innerHTML = 'MORE';
const speakerBtnIcon = document.createElement('img');
speakerBtnIcon.classList.add('btnIcon');
speakerBtnIcon.src = './images/icons8-more-than-50.png';
speakerButton.appendChild(speakerBtnIcon);
speakerContainer.appendChild(SpeakerbuttonDiv);
SpeakerbuttonDiv.appendChild(speakerButton);

// mobile menu :
// const humburger = document.querySelector('.hamburger');

// more speakers button event listener:
const moreSpeakers = document.querySelector('.speakerBtn');
const arraySpeakers = [
  document.querySelector('.speaker-3'),
  document.querySelector('.speaker-4'),
  document.querySelector('.speaker-5'),
  document.querySelector('.speaker-6'),
];
moreSpeakers.addEventListener('click', () => {
  arraySpeakers.forEach((speaker) => {
    speaker.style.display = 'flex';
  });
});
