import React from 'react';

function LearningResources() {

  const categories = [
    {
      name: 'Find More Sheet Music',
      links: [
        { title: 'Hal Leonard - The Gold Standard in educational music books. Get \'The Real Book\' if you ever want to play jazz', url: 'https://www.halleonard.com' },
        { title: 'Sheet Music Plus - Physical and downloadable sheet music for all instruments, and voice!', url: 'https://www.sheetmusicplus.com' },
        { title: 'Musicnotes - Amazing database with previews and a pro membership tier offering credits like Kindle', url: 'https://www.musicnotes.com' },
        { title: 'Sheet Happens - A source for tab books and sheet music, focusing on rock and metal', url: 'https://www.sheethappenspublishing.com' },
      ],
    },
    {
      name: 'Where to Buy Gear',
      links: [
        { title: 'Sweetwater - A big box store geared towards modern musicians', url: 'https://www.sweetwater.com' },
        { title: 'Reverb - Buy & Sell Used Gear, known for it\'s hidden gems', url: 'https://www.reverb.com' },
        { title: 'Zzounds', url: 'https://www.zzounds.com' },
        { title: 'Musician\'s Friend', url: 'https://www.musiciansfriend.com.' },
        { title: 'Fiddler Shop - Orchestral String Instruments', url: 'https://www.fiddlershop.com' },
        { title: 'Houton Horns - For all brass players', url: 'https://www.houtonhorns.com' },
        { title: 'Chuck Levin\'s Music Center - A privately owned single shop with a great selection and reputation', url: 'https://www.chucklevins.com' },
        { title: 'Lark in the Morning - Exotic, Historic, and Worldly Instruments', url: 'https://www.larkinthemorning.com' },

      ],
    },
    {
      name: 'Online Lessons & Tutorials',
      links: [
        { title: 'Scott\s Bass Lessons - Online Compendium for bassists featuring 100\ of online tutorials, YouTube videos, and professional guest appearances', url: 'https://scottsbasslessons.com' },
        { title: 'Adam Neely - Lessons and essays from the perspective of a band leader and jazz musician', url: 'https://www.youtube.com/@AdamNeely' },
        { title: 'Ray Chen - A globetrotting, exceptional violinist focusing on entertainment', url: 'https://www.youtube.com/@RayChenViolinist' },
        { title: 'Interlochen - Online private lessons in music, theatre, visual arts, and more the creative', url: 'https://discover.interlochen.org' },
        { title: 'El Estepario Siberiano - Incredibly talented drummer with aspirational content', url: 'https://www.youtube.com/@ElEsteparioSiberiano' },
        { title: 'Yousician - Online Lessons for every instrument', url: 'https://www.yousician.com' },

      ],
    },

  ];

  return (
    <div id="learning-resources">
      <h1>Learning Resources</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul className= "learning-links">
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default LearningResources;
