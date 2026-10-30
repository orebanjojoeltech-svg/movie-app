/* =========================================================
   DAVID — movie app
   Every title has a verified YouTube trailer ID (yt) which plays
   INSIDE the site through an embedded player.
   To add a movie: copy one entry below, give it a unique `id`, and
   paste the trailer's YouTube video ID (the part after ?v=) in `yt`.
   ========================================================= */

const CATALOG = [
  /* ---------------- Movies ---------------- */
  {id:'john-wick-4',title:'John Wick: Chapter 4',year:2023,type:'Movie',length:'2h 49m',rating:'R',hue:12,genres:['Action','Thriller'],credit:['Director','Chad Stahelski'],tagline:'One last journey. One impossible fight.',synopsis:'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.',cast:[['Keanu Reeves','John Wick'],['Donnie Yen','Caine'],['Bill Skarsgård','Marquis'],['Laurence Fishburne','Bowery King'],['Hiroyuki Sanada','Shimazu']],yt:'qEVUtrk8_B4'},
  {id:'inception',title:'Inception',year:2010,type:'Movie',length:'2h 28m',rating:'PG-13',hue:210,genres:['Sci-Fi','Thriller'],credit:['Director','Christopher Nolan'],tagline:'Your mind is the scene of the crime.',synopsis:'A thief who steals corporate secrets through dream-sharing technology is given the inverse task: planting an idea inside the mind of a powerful executive.',cast:[['Leonardo DiCaprio','Dom Cobb'],['Joseph Gordon-Levitt','Arthur'],['Elliot Page','Ariadne'],['Tom Hardy','Eames'],['Marion Cotillard','Mal']],yt:'YoHD9XEInc0'},
  {id:'the-dark-knight',title:'The Dark Knight',year:2008,type:'Movie',length:'2h 32m',rating:'PG-13',hue:225,genres:['Action','Crime','Thriller'],credit:['Director','Christopher Nolan'],tagline:'Why so serious?',synopsis:'When the menace known as the Joker wreaks havoc and chaos on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',cast:[['Christian Bale','Bruce Wayne'],['Heath Ledger','The Joker'],['Aaron Eckhart','Harvey Dent'],['Maggie Gyllenhaal','Rachel Dawes'],['Gary Oldman','Jim Gordon']],yt:'EXeTwQWrcwY'},
  {id:'interstellar',title:'Interstellar',year:2014,type:'Movie',length:'2h 49m',rating:'PG-13',hue:200,genres:['Sci-Fi','Drama','Adventure'],credit:['Director','Christopher Nolan'],tagline:'Mankind was born on Earth. It was never meant to die here.',synopsis:'With Earth dying, a team of explorers travels through a wormhole in space in an attempt to ensure humanity’s survival.',cast:[['Matthew McConaughey','Cooper'],['Anne Hathaway','Brand'],['Jessica Chastain','Murph'],['Michael Caine','Professor Brand'],['Matt Damon','Dr. Mann']],yt:'zSWdZVtXT7E'},
  {id:'dune-part-two',title:'Dune: Part Two',year:2024,type:'Movie',length:'2h 46m',rating:'PG-13',hue:28,genres:['Sci-Fi','Adventure','Action'],credit:['Director','Denis Villeneuve'],tagline:'Long live the fighters.',synopsis:'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family — and must prevent a terrible future only he can foresee.',cast:[['Timothée Chalamet','Paul Atreides'],['Zendaya','Chani'],['Rebecca Ferguson','Lady Jessica'],['Austin Butler','Feyd-Rautha'],['Javier Bardem','Stilgar']],yt:'Way9Dexny3w'},
  {id:'oppenheimer',title:'Oppenheimer',year:2023,type:'Movie',length:'3h 0m',rating:'R',hue:18,genres:['Drama','History','Thriller'],credit:['Director','Christopher Nolan'],tagline:'The world forever changes.',synopsis:'The story of J. Robert Oppenheimer and his role in developing the atomic bomb during World War II — and the haunting consequences that followed.',cast:[['Cillian Murphy','J. Robert Oppenheimer'],['Emily Blunt','Kitty Oppenheimer'],['Matt Damon','Leslie Groves'],['Robert Downey Jr.','Lewis Strauss'],['Florence Pugh','Jean Tatlock']],yt:'uYPbbksJxIg'},
  {id:'avengers-endgame',title:'Avengers: Endgame',year:2019,type:'Movie',length:'3h 1m',rating:'PG-13',hue:265,genres:['Action','Sci-Fi','Superhero','Adventure'],credit:['Directors','Anthony & Joe Russo'],tagline:'Avenge the fallen.',synopsis:'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.',cast:[['Robert Downey Jr.','Tony Stark'],['Chris Evans','Steve Rogers'],['Mark Ruffalo','Bruce Banner'],['Chris Hemsworth','Thor'],['Scarlett Johansson','Natasha Romanoff']],yt:'TcMBFSGVi1c'},
  {id:'spider-man-no-way-home',title:'Spider-Man: No Way Home',year:2021,type:'Movie',length:'2h 28m',rating:'PG-13',hue:355,genres:['Action','Superhero','Adventure'],credit:['Director','Jon Watts'],tagline:'The multiverse unleashed.',synopsis:'With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',cast:[['Tom Holland','Peter Parker'],['Zendaya','MJ'],['Benedict Cumberbatch','Doctor Strange'],['Jacob Batalon','Ned Leeds'],['Willem Dafoe','Green Goblin']],yt:'JfVOs4VSpmA'},
  {id:'avatar-way-of-water',title:'Avatar: The Way of Water',year:2022,type:'Movie',length:'3h 12m',rating:'PG-13',hue:190,genres:['Sci-Fi','Adventure','Action'],credit:['Director','James Cameron'],tagline:'Return to Pandora.',synopsis:'Jake Sully lives with his newfound family on Pandora. When a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the Na’vi to protect their home.',cast:[['Sam Worthington','Jake Sully'],['Zoe Saldaña','Neytiri'],['Sigourney Weaver','Kiri'],['Stephen Lang','Colonel Quaritch'],['Kate Winslet','Ronal']],yt:'d9MyW72ELq0'},
  {id:'top-gun-maverick',title:'Top Gun: Maverick',year:2022,type:'Movie',length:'2h 11m',rating:'PG-13',hue:35,genres:['Action','Drama'],credit:['Director','Joseph Kosinski'],tagline:'Feel the need. Again.',synopsis:'After more than thirty years of service, Maverick is still pushing the envelope as a top naval aviator — and must confront the ghosts of his past while training a new generation of pilots.',cast:[['Tom Cruise','Pete "Maverick" Mitchell'],['Miles Teller','Rooster'],['Jennifer Connelly','Penny Benjamin'],['Jon Hamm','Cyclone'],['Glen Powell','Hangman']],yt:'giXco2jaZ_4'},
  {id:'joker',title:'Joker',year:2019,type:'Movie',length:'2h 2m',rating:'R',hue:130,genres:['Crime','Drama','Thriller'],credit:['Director','Todd Phillips'],tagline:'Put on a happy face.',synopsis:'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society — and begins a downward spiral of revolution and bloody crime.',cast:[['Joaquin Phoenix','Arthur Fleck'],['Robert De Niro','Murray Franklin'],['Zazie Beetz','Sophie Dumond'],['Frances Conroy','Penny Fleck']],yt:'zAGVQLHvwOY'},
  {id:'parasite',title:'Parasite',year:2019,type:'Movie',length:'2h 12m',rating:'R',hue:95,genres:['Drama','Thriller','Korean'],credit:['Director','Bong Joon-ho'],tagline:'Act like you own the place.',synopsis:'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',cast:[['Song Kang-ho','Kim Ki-taek'],['Lee Sun-kyun','Park Dong-ik'],['Cho Yeo-jeong','Park Yeon-kyo'],['Choi Woo-shik','Kim Ki-woo'],['Park So-dam','Kim Ki-jung']],yt:'5xH0HfJHsaY'},
  {id:'black-panther',title:'Black Panther',year:2018,type:'Movie',length:'2h 14m',rating:'PG-13',hue:275,genres:['Action','Superhero','Adventure'],credit:['Director','Ryan Coogler'],tagline:'Long live the king.',synopsis:'T’Challa returns home to Wakanda to take his place as king — but a powerful enemy resurfaces, putting the fate of Wakanda and the entire world at risk.',cast:[['Chadwick Boseman','T’Challa'],['Michael B. Jordan','Erik Killmonger'],['Lupita Nyong’o','Nakia'],['Danai Gurira','Okoye'],['Letitia Wright','Shuri']],yt:'xjDjIWPwcPU'},
  {id:'the-batman',title:'The Batman',year:2022,type:'Movie',length:'2h 56m',rating:'PG-13',hue:0,genres:['Action','Crime','Thriller'],credit:['Director','Matt Reeves'],tagline:'Unmask the truth.',synopsis:'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',cast:[['Robert Pattinson','Bruce Wayne'],['Zoë Kravitz','Selina Kyle'],['Paul Dano','The Riddler'],['Colin Farrell','Oz Cobb'],['Jeffrey Wright','James Gordon']],yt:'mqqft2x_Aa4'},
  {id:'mad-max-fury-road',title:'Mad Max: Fury Road',year:2015,type:'Movie',length:'2h 0m',rating:'R',hue:22,genres:['Action','Sci-Fi','Adventure'],credit:['Director','George Miller'],tagline:'What a lovely day.',synopsis:'In a post-apocalyptic wasteland, Max teams up with Furiosa to flee a cult tyrant and his army across the desert in a high-octane chase for freedom.',cast:[['Tom Hardy','Max Rockatansky'],['Charlize Theron','Imperator Furiosa'],['Nicholas Hoult','Nux'],['Hugh Keays-Byrne','Immortan Joe'],['Zoë Kravitz','Toast the Knowing']],yt:'hEJnMQG9ev8'},
  {id:'everything-everywhere',title:'Everything Everywhere All at Once',year:2022,type:'Movie',length:'2h 19m',rating:'R',hue:300,genres:['Sci-Fi','Comedy','Adventure'],credit:['Directors','The Daniels'],tagline:'The universe is so much bigger than you realize.',synopsis:'An aging Chinese immigrant is swept up in an insane adventure in which she alone can save the world by exploring other universes connecting with the lives she could have led.',cast:[['Michelle Yeoh','Evelyn Wang'],['Stephanie Hsu','Joy / Jobu Tupaki'],['Ke Huy Quan','Waymond Wang'],['Jamie Lee Curtis','Deirdre Beaubeirdre'],['James Hong','Gong Gong']],yt:'wxN1T1uxQ2g'},
  {id:'barbie',title:'Barbie',year:2023,type:'Movie',length:'1h 54m',rating:'PG-13',hue:330,genres:['Comedy','Adventure','Fantasy'],credit:['Director','Greta Gerwig'],tagline:'She’s everything. He’s just Ken.',synopsis:'Barbie suffers a crisis that leads her to question her world and her existence — sending her on a journey from Barbieland to the real world.',cast:[['Margot Robbie','Barbie'],['Ryan Gosling','Ken'],['America Ferrera','Gloria'],['Kate McKinnon','Weird Barbie'],['Issa Rae','President Barbie']],yt:'pBk4NYhWNMM'},
  {id:'deadpool-wolverine',title:'Deadpool & Wolverine',year:2024,type:'Movie',length:'2h 7m',rating:'R',hue:350,genres:['Action','Comedy','Superhero'],credit:['Director','Shawn Levy'],tagline:'Come together.',synopsis:'A listless Wade Wilson toils away in civilian life — until his days as a morally flexible mercenary, Deadpool, come calling when he’s recruited to save his world.',cast:[['Ryan Reynolds','Wade Wilson / Deadpool'],['Hugh Jackman','Logan / Wolverine'],['Emma Corrin','Cassandra Nova'],['Matthew Macfadyen','Mr. Paradox'],['Morena Baccarin','Vanessa']],yt:'73_1biulkYk'},
  {id:'across-the-spider-verse',title:'Spider-Man: Across the Spider-Verse',year:2023,type:'Movie',length:'2h 20m',rating:'PG',hue:320,genres:['Animation','Action','Superhero','Adventure'],credit:['Directors','Dos Santos, Powers & Thompson'],tagline:'It’s how you wear the mask that matters.',synopsis:'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence — and clashes with them over how to handle a new threat.',cast:[['Shameik Moore','Miles Morales'],['Hailee Steinfeld','Gwen Stacy'],['Oscar Isaac','Miguel O’Hara'],['Issa Rae','Jessica Drew'],['Jake Johnson','Peter B. Parker']],yt:'shW9i6k8cB0'},

  /* ---------------- Series ---------------- */
  {id:'arcane',title:'Arcane',year:2021,type:'Series',length:'2 Seasons',rating:'TV-14',hue:290,genres:['Animation','Action','Sci-Fi','Drama'],credit:['Created by','Christian Linke & Alex Yee'],tagline:'Two sisters. Two cities. One war.',synopsis:'Amid the stark discord of the twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',cast:[['Hailee Steinfeld','Vi'],['Ella Purnell','Jinx'],['Katie Leung','Caitlyn'],['Kevin Alejandro','Jayce'],['Jason Spisak','Silco']],yt:'W4gLFBNGgiY'},
  {id:'peaky-blinders',title:'Peaky Blinders',year:2013,type:'Series',length:'6 Seasons',rating:'TV-MA',hue:30,genres:['Crime','Drama','History'],credit:['Created by','Steven Knight'],tagline:'By order of the Peaky Blinders.',synopsis:'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps — and their fierce boss, Tommy Shelby.',cast:[['Cillian Murphy','Tommy Shelby'],['Paul Anderson','Arthur Shelby'],['Sophie Rundle','Ada Shelby'],['Helen McCrory','Polly Gray'],['Joe Cole','John Shelby']],yt:'oVzVdvGIC7U'},
  {id:'breaking-bad',title:'Breaking Bad',year:2008,type:'Series',length:'5 Seasons',rating:'TV-MA',hue:120,genres:['Crime','Drama','Thriller'],credit:['Created by','Vince Gilligan'],tagline:'Remember my name.',synopsis:'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his family’s future.',cast:[['Bryan Cranston','Walter White'],['Aaron Paul','Jesse Pinkman'],['Anna Gunn','Skyler White'],['Dean Norris','Hank Schrader'],['Bob Odenkirk','Saul Goodman']],yt:'HhesaQXLuRY'},
  {id:'you',title:'You',year:2018,type:'Series',length:'5 Seasons',rating:'TV-MA',hue:250,genres:['Thriller','Crime','Drama','Romance'],credit:['Created by','Greg Berlanti & Sera Gamble'],tagline:'Love has no limits.',synopsis:'A dangerously charming, intensely obsessive bookstore manager goes to extreme measures to insert himself into the lives of those he is transfixed by.',cast:[['Penn Badgley','Joe Goldberg'],['Victoria Pedretti','Love Quinn'],['Elizabeth Lail','Guinevere Beck'],['Charlotte Ritchie','Kate Galvin']],yt:'6T-WSphZ3VA'},
  {id:'narcos',title:'Narcos',year:2015,type:'Series',length:'3 Seasons',rating:'TV-MA',hue:45,genres:['Crime','Drama','History'],credit:['Created by','Chris Brancato, Carlo Bernard & Doug Miro'],tagline:'The rise and fall of the cartels.',synopsis:'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.',cast:[['Wagner Moura','Pablo Escobar'],['Boyd Holbrook','Steve Murphy'],['Pedro Pascal','Javier Peña'],['Joanna Christie','Connie Murphy']],yt:'xl8zdCY-abw'},
  {id:'stranger-things',title:'Stranger Things',year:2016,type:'Series',length:'5 Seasons',rating:'TV-14',hue:352,genres:['Sci-Fi','Drama','Fantasy'],credit:['Created by','The Duffer Brothers'],tagline:'Every ending has a beginning.',synopsis:'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one very strange little girl.',cast:[['Millie Bobby Brown','Eleven'],['Finn Wolfhard','Mike Wheeler'],['David Harbour','Jim Hopper'],['Winona Ryder','Joyce Byers'],['Gaten Matarazzo','Dustin Henderson']],yt:'b9EkMc79ZSU'},
  {id:'wednesday',title:'Wednesday',year:2022,type:'Series',length:'2 Seasons',rating:'TV-14',hue:268,genres:['Comedy','Fantasy','Mystery'],credit:['Created by','Alfred Gough & Miles Millar'],tagline:'Smart, sinister and a little bit deadly.',synopsis:'Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.',cast:[['Jenna Ortega','Wednesday Addams'],['Gwendoline Christie','Principal Weems'],['Emma Myers','Enid Sinclair'],['Catherine Zeta-Jones','Morticia Addams'],['Luis Guzmán','Gomez Addams']],yt:'Di310WS8zLk'},
  {id:'money-heist',title:'Money Heist',year:2017,type:'Series',length:'5 Parts',rating:'TV-MA',hue:5,genres:['Crime','Thriller','Drama'],credit:['Created by','Álex Pina'],tagline:'The greatest heist in history.',synopsis:'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history — stealing 2.4 billion euros from the Royal Mint of Spain.',cast:[['Úrsula Corberó','Tokyo'],['Álvaro Morte','The Professor'],['Pedro Alonso','Berlin'],['Alba Flores','Nairobi'],['Itziar Ituño','Raquel Murillo']],yt:'_InqQJRqGW4'},
  {id:'dark',title:'Dark',year:2017,type:'Series',length:'3 Seasons',rating:'TV-MA',hue:215,genres:['Sci-Fi','Mystery','Thriller','Drama'],credit:['Created by','Baran bo Odar & Jantje Friese'],tagline:'The question is not where, but when.',synopsis:'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',cast:[['Louis Hofmann','Jonas Kahnwald'],['Lisa Vicari','Martha Nielsen'],['Oliver Masucci','Ulrich Nielsen'],['Karoline Eichhorn','Charlotte Doppler'],['Maja Schöne','Katharina Nielsen']],yt:'rrwycJ08PSA'},
  {id:'the-last-of-us',title:'The Last of Us',year:2023,type:'Series',length:'2 Seasons',rating:'TV-MA',hue:85,genres:['Drama','Sci-Fi','Action'],credit:['Created by','Craig Mazin & Neil Druckmann'],tagline:'When you’re lost in the darkness, look for the light.',synopsis:'Twenty years after modern civilization has been destroyed, Joel is hired to smuggle a 14-year-old girl, Ellie, out of an oppressive quarantine zone.',cast:[['Pedro Pascal','Joel Miller'],['Bella Ramsey','Ellie'],['Gabriel Luna','Tommy Miller'],['Anna Torv','Tess'],['Nick Offerman','Bill']],yt:'uLtkt8BonwM'},

  /* ---------------- Korean TV drama ---------------- */
  {id:'the-glory',title:'The Glory',year:2022,type:'Series',length:'16 Episodes',rating:'TV-MA',hue:210,genres:['Drama','Thriller','Korean'],credit:['Written by','Kim Eun-sook'],tagline:'Revenge is a dish served patiently.',synopsis:'Years after a violent childhood, a woman patiently plans a meticulous revenge on the people who made her school years unbearable.',cast:[['Song Hye-kyo','Moon Dong-eun'],['Lee Do-hyun','Joo Yeo-jeong'],['Lim Ji-yeon','Park Yeon-jin'],['Yeom Hye-ran','Kang Hyeon-nam'],['Jung Sung-il','Jeon Jae-joon']],yt:'N2iloGDu92M'},
  {id:'my-name',title:'My Name',year:2021,type:'Series',length:'8 Episodes',rating:'TV-MA',hue:350,genres:['Action','Crime','Thriller','Korean'],credit:['Director','Kim Jin-min'],tagline:'Who killed her father?',synopsis:'Out for revenge after her father’s murder, a determined young woman infiltrates a crime syndicate — then joins the police force to uncover the truth.',cast:[['Han So-hee','Yoon Ji-woo'],['Park Hee-soon','Choi Mu-jin'],['Ahn Bo-hyun','Jeon Pil-do'],['Kim Sang-ho','Cha Gi-ho']],yt:'MaJ7ZT70ve4'},
  {id:'evilive',title:'Evilive',year:2023,type:'Series',length:'Korean Drama',rating:'TV-MA',hue:10,genres:['Thriller','Crime','Drama','Korean'],credit:['Streaming on','Disney+'],tagline:'Where does justice end?',synopsis:'A lawyer crosses a dangerous line after meeting a powerful and manipulative criminal.',cast:[['Shin Ha-kyun','Han Dong-soo'],['Kim Young-kwang','Seo Do-young'],['Shin Jae-ha','Han Beom-jae'],['Song Young-chang','Moon Sang-guk']],yt:'IDB2K2pva70'},
  {id:'queen-of-tears',title:'The Queen of Tears',year:2024,type:'Series',length:'16 Episodes',rating:'TV-14',hue:340,genres:['Romance','Drama','Comedy','Korean'],credit:['Written by','Park Ji-eun'],tagline:'Can love be rediscovered?',synopsis:'The queen of department stores and her small-town husband weather a marriage crisis — until an unexpected turn rekindles their love.',cast:[['Kim Soo-hyun','Baek Hyun-woo'],['Kim Ji-won','Hong Hae-in'],['Park Sung-hoon','Yoon Eun-sung'],['Kwak Dong-yeon','Hong Soo-cheol']],yt:'-dp3Bpsm25E'},
  {id:'squid-game',title:'Squid Game',year:2021,type:'Series',length:'3 Seasons',rating:'TV-MA',hue:335,genres:['Thriller','Drama','Action','Korean'],credit:['Created by','Hwang Dong-hyuk'],tagline:'456 players. One prize. Play or die.',synopsis:'Hundreds of cash-strapped players accept a strange invitation to compete in children’s games — with a tempting prize and deadly high stakes.',cast:[['Lee Jung-jae','Seong Gi-hun'],['Lee Byung-hun','Front Man'],['Wi Ha-joon','Hwang Jun-ho'],['Jung Ho-yeon','Kang Sae-byeok'],['Park Hae-soo','Cho Sang-woo']],yt:'oqxAJKy0ii4'},
  {id:'all-of-us-are-dead',title:'All of Us Are Dead',year:2022,type:'Series',length:'12 Episodes',rating:'TV-MA',hue:0,genres:['Action','Thriller','Horror','Korean'],credit:['Director','Lee Jae-kyu'],tagline:'Class is in session. So are the zombies.',synopsis:'A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.',cast:[['Park Ji-hu','Nam On-jo'],['Yoon Chan-young','Lee Cheong-san'],['Cho Yi-hyun','Choi Nam-ra'],['Lomon','Lee Su-hyeok'],['Yoo In-soo','Yoon Gwi-nam']],yt:'IN5TD4VRcSM'},
  {id:'crash-landing-on-you',title:'Crash Landing on You',year:2019,type:'Series',length:'16 Episodes',rating:'TV-14',hue:155,genres:['Romance','Drama','Comedy','Korean'],credit:['Written by','Park Ji-eun'],tagline:'A paragliding accident. A love across the border.',synopsis:'A South Korean heiress crash-lands in North Korea after a paragliding accident — and meets a soldier who decides to hide her.',cast:[['Hyun Bin','Ri Jeong-hyeok'],['Son Ye-jin','Yoon Se-ri'],['Seo Ji-hye','Seo Dan'],['Kim Jung-hyun','Gu Seung-jun']],yt:'GVQGWgeVc4k'},
  {id:'goblin',title:'Goblin',year:2016,type:'Series',length:'16 Episodes',rating:'TV-14',hue:175,genres:['Fantasy','Romance','Drama','Korean'],credit:['Written by','Kim Eun-sook'],tagline:'Immortal. Cursed. Searching for his bride.',synopsis:'In his quest for a bride to end his immortal life, a 939-year-old goblin meets a grim reaper, a girl who sees ghosts — and a destiny that changes all three.',cast:[['Gong Yoo','Kim Shin / Goblin'],['Kim Go-eun','Ji Eun-tak'],['Lee Dong-wook','Grim Reaper'],['Yoo In-na','Sunny'],['Yook Sung-jae','Yoo Deok-hwa']],yt:'y1ClsA-zt-I'},

  /* ---------------- Nollywood ---------------- */
  {id:'king-of-boys',title:'King of Boys: The Return of the King',year:2021,type:'Series',length:'7 Episodes',rating:'TV-MA',hue:42,genres:['Crime','Drama','Thriller','Nollywood'],credit:['Created by','Kemi Adetiba'],tagline:'Long live the queen.',synopsis:'Alhaja Eniola Salami returns to a Lagos she once ruled, fighting to reclaim her throne in a ruthless power struggle where every ally can become an enemy.',cast:[['Sola Sobowale','Eniola Salami'],['Toni Tones','Young Eniola'],['Reminisce','Odogwu Malay'],['Illbliss','Makanaki']],yt:'i4OeHI3EJuY'},
  {id:'the-black-book',title:'The Black Book',year:2023,type:'Movie',length:'Netflix Film',rating:'TV-MA',hue:230,genres:['Action','Thriller','Crime','Nollywood'],credit:['Director','Editi Effiong'],tagline:'A father’s fight for justice.',synopsis:'A grieving deacon is framed for a crime he did not commit and sets out to avenge his son’s death, taking on a powerful web of corruption.',cast:[['Richard Mofe-Damijo','Paul Edima'],['Shaffy Bello',''],['Sam Dede',''],['Ade Laoye',''],['Femi Branch','']],yt:'RU0YzOTviEU'},
  {id:'lionheart',title:'Lionheart',year:2018,type:'Movie',length:'1h 35m',rating:'PG',hue:20,genres:['Comedy','Drama','Nollywood'],credit:['Director','Genevieve Nnaji'],tagline:'Fight for the family business.',synopsis:'When her father falls ill, Adaeze Obiagu steps up to save the family’s struggling transport company — teaming up with her uncle to keep the business alive.',cast:[['Genevieve Nnaji','Adaeze Obiagu'],['Pete Edochie','Chief Ernest Obiagu'],['Nkem Owoh','Godswill Obiagu'],['Onyeka Onwenu','']],yt:'XLHR9wNzNB0'},
  {id:'blood-sisters',title:'Blood Sisters',year:2022,type:'Series',length:'Netflix Series',rating:'TV-MA',hue:0,genres:['Thriller','Drama','Crime','Nollywood'],credit:['Streaming on','Netflix'],tagline:'Two best friends. One night. One secret.',synopsis:'Two best friends go on the run after a deadly encounter on the eve of a wedding — and must decide how far they’ll go to protect each other.',cast:[['Ini Dima-Okojie','Sarah'],['Nancy Isime','Kemi'],['Deyemi Okanlawon',''],['Daniel Etim-Effiong','']],yt:'tAVDubPb0N8'}
];

CATALOG.splice(0, CATALOG.length,
  {id:'toy-story',title:'Toy Story',year:1995,type:'Movie',length:'1h 21m',rating:'G',hue:42,genres:['Animation','Cartoon','Adventure','Comedy'],credit:['Director','John Lasseter'],tagline:'The adventure takes off when Andy leaves.',synopsis:'A cowboy doll and a space ranger learn to work together after an exciting new toy arrives in Andy’s room.',cast:[['Tom Hanks','Woody'],['Tim Allen','Buzz Lightyear'],['Annie Potts','Bo Peep'],['Don Rickles','Mr. Potato Head']],yt:'wmiIUN-7p2U'},
  {id:'finding-nemo',title:'Finding Nemo',year:2003,type:'Movie',length:'1h 40m',rating:'G',hue:190,genres:['Animation','Cartoon','Adventure','Comedy'],credit:['Director','Andrew Stanton'],tagline:'An unforgettable journey begins under the sea.',synopsis:'A cautious clownfish travels across the ocean with a forgetful friend to find his son, Nemo.',cast:[['Albert Brooks','Marlin'],['Ellen DeGeneres','Dory'],['Alexander Gould','Nemo'],['Willem Dafoe','Gill']],yt:'wZdpNglLmz4'},
  {id:'inside-out-2',title:'Inside Out 2',year:2024,type:'Movie',length:'1h 36m',rating:'PG',hue:35,genres:['Animation','Cartoon','Comedy','Adventure'],credit:['Director','Kelsey Mann'],tagline:'A new adventure inside Riley’s mind.',synopsis:'As Riley grows up, her emotions meet new feelings and learn how to make room for change.',cast:[['Amy Poehler','Joy'],['Maya Hawke','Anxiety'],['Phyllis Smith','Sadness'],['Lewis Black','Anger']],yt:'LEjhY15eBx0'},
  {id:'frozen',title:'Frozen',year:2013,type:'Movie',length:'1h 42m',rating:'PG',hue:205,genres:['Animation','Cartoon','Fantasy','Adventure'],credit:['Directors','Chris Buck & Jennifer Lee'],tagline:'The magic of sisterhood can change everything.',synopsis:'A fearless young woman sets out on a snowy journey to find her sister and help bring summer back to their kingdom.',cast:[['Kristen Bell','Anna'],['Idina Menzel','Elsa'],['Josh Gad','Olaf'],['Jonathan Groff','Kristoff']],yt:'TbQm5doF_Uc'},
  {id:'moana',title:'Moana',year:2016,type:'Movie',length:'1h 47m',rating:'PG',hue:175,genres:['Animation','Cartoon','Adventure','Fantasy'],credit:['Directors','Ron Clements & John Musker'],tagline:'The ocean is calling.',synopsis:'A brave young navigator sails beyond her island to help restore balance to her people and discover her own strength.',cast:[['Auliʻi Cravalho','Moana'],['Dwayne Johnson','Maui'],['Rachel House','Gramma Tala'],['Temuera Morrison','Chief Tui']],yt:'LKFuXETZUsI'},
  {id:'zootopia',title:'Zootopia',year:2016,type:'Movie',length:'1h 48m',rating:'PG',hue:105,genres:['Animation','Cartoon','Adventure','Comedy'],credit:['Directors','Byron Howard & Rich Moore'],tagline:'Anyone can be anything.',synopsis:'A determined rabbit police officer and a clever fox team up to solve a citywide mystery.',cast:[['Ginnifer Goodwin','Judy Hopps'],['Jason Bateman','Nick Wilde'],['Idris Elba','Chief Bogo'],['Jenny Slate','Bellwether']],yt:'jWM0ct-OLsM'},
  {id:'coco',title:'Coco',year:2017,type:'Movie',length:'1h 45m',rating:'PG',hue:25,genres:['Animation','Cartoon','Adventure','Fantasy'],credit:['Directors','Lee Unkrich & Adrian Molina'],tagline:'The story of a family, a journey, and the power of music.',synopsis:'A young musician visits the Land of the Dead, where he uncovers the story of his family and follows his love of music.',cast:[['Anthony Gonzalez','Miguel'],['Gael García Bernal','Héctor'],['Benjamin Bratt','Ernesto de la Cruz'],['Alanna Ubach','Mamá Imelda']],yt:'Rvr68u6k5sI'},
  {id:'spirited-away',title:'Spirited Away',year:2001,type:'Movie',length:'2h 5m',rating:'PG',hue:155,genres:['Animation','Anime','Adventure','Fantasy'],credit:['Director','Hayao Miyazaki'],tagline:'A magical world is waiting.',synopsis:'After entering a mysterious spirit world, a young girl must find courage and help her parents return home.',cast:[['Rumi Hiiragi','Chihiro'],['Miyu Irino','Haku'],['Mari Natsuki','Yubaba'],['Bunta Sugawara','Kamaji']],yt:'ByXuk9QqQkk'},
  {id:'my-neighbor-totoro',title:'My Neighbor Totoro',year:1988,type:'Movie',length:'1h 26m',rating:'G',hue:95,genres:['Animation','Anime','Adventure','Fantasy'],credit:['Director','Hayao Miyazaki'],tagline:'A wondrous forest adventure for the whole family.',synopsis:'Two sisters move to the countryside and discover friendly forest spirits living nearby.',cast:[['Noriko Hidaka','Satsuki'],['Chika Sakamoto','Mei'],['Shigesato Itoi','Tatsuo Kusakabe'],['Hitoshi Takagi','Totoro']],yt:'92a7Hj0ijLs'},
  {id:'ponyo',title:'Ponyo',year:2008,type:'Movie',length:'1h 41m',rating:'G',hue:195,genres:['Animation','Anime','Adventure','Fantasy'],credit:['Director','Hayao Miyazaki'],tagline:'A little fish with a big dream.',synopsis:'A curious goldfish befriends a young boy and dreams of becoming human, setting off a colorful seaside adventure.',cast:[['Yuria Nara','Ponyo'],['Hiroki Doi','Sosuke'],['Tomoko Yamaguchi','Lisa'],['Kazushige Nagashima','Koichi']],yt:'CsR3KVgBzSM'},
  {id:'how-to-train-your-dragon',title:'How to Train Your Dragon',year:2010,type:'Movie',length:'1h 38m',rating:'PG',hue:220,genres:['Animation','Cartoon','Adventure','Fantasy'],credit:['Director','Dean DeBlois'],tagline:'A friendship that changes two worlds.',synopsis:'A young Viking befriends a dragon and discovers that the creatures his village fears may be friends instead.',cast:[['Jay Baruchel','Hiccup'],['America Ferrera','Astrid'],['Gerard Butler','Stoick'],['Craig Ferguson','Gobber']],yt:'oKiYuIsPxYk'},
  {id:'kung-fu-panda',title:'Kung Fu Panda',year:2008,type:'Movie',length:'1h 32m',rating:'PG',hue:10,genres:['Animation','Cartoon','Adventure','Comedy'],credit:['Director','Mark Osborne'],tagline:'Believe in the panda.',synopsis:'A fun-loving panda discovers that with practice and confidence, he can become the hero his valley needs.',cast:[['Jack Black','Po'],['Dustin Hoffman','Master Shifu'],['Angelina Jolie','Tigress'],['Jackie Chan','Monkey']],yt:'PXi3Mv6KMzY'},
  {id:'across-the-spider-verse',title:'Spider-Man: Across the Spider-Verse',year:2023,type:'Movie',length:'2h 20m',rating:'PG',hue:320,genres:['Animation','Cartoon','Adventure','Superhero'],credit:['Directors','Dos Santos, Powers & Thompson'],tagline:'It’s how you wear the mask that matters.',synopsis:'Miles Morales journeys across the multiverse, meets other Spider-People, and discovers that being a hero means choosing your own path.',cast:[['Shameik Moore','Miles Morales'],['Hailee Steinfeld','Gwen Stacy'],['Oscar Isaac','Miguel O’Hara'],['Jake Johnson','Peter B. Parker']],yt:'shW9i6k8cB0'},
  {id:'the-lego-movie',title:'The LEGO Movie',year:2014,type:'Movie',length:'1h 40m',rating:'PG',hue:50,genres:['Animation','Cartoon','Adventure','Comedy'],credit:['Directors','Phil Lord & Christopher Miller'],tagline:'The story of a nobody who saved everybody.',synopsis:'An ordinary LEGO minifigure is mistaken for a hero and joins a team on a funny, brick-built adventure.',cast:[['Chris Pratt','Emmet'],['Elizabeth Banks','Wyldstyle'],['Will Arnett','Batman'],['Morgan Freeman','Vitruvius']],yt:'fZ_JsVd2LwE'}
);

/* Shelves shown on the home page */
const SHELVES = [
  {key:'top10',  title:'Top Picks for Kids', style:'ranked', ids:['toy-story','finding-nemo','inside-out-2','frozen','moana','zootopia','coco','spirited-away','my-neighbor-totoro','across-the-spider-verse']},
  {key:'trending',title:'Family Favorites', ids:['inside-out-2','moana','zootopia','coco','how-to-train-your-dragon','kung-fu-panda','ponyo','the-lego-movie']},
  {key:'movies', title:'Animated Movies',    filter:m=>m.type==='Movie'},
  {key:'cartoons',title:'Cartoon Adventures',filter:m=>m.genres.includes('Cartoon')},
  {key:'anime',  title:'Anime for Kids',     filter:m=>m.genres.includes('Anime')},
  {key:'adventure',title:'Big Adventures',   filter:m=>m.genres.includes('Adventure')},
  {key:'fantasy',title:'Magical Worlds',     filter:m=>m.genres.includes('Fantasy')}
];
const HERO_IDS = ['toy-story','moana','spirited-away','inside-out-2','how-to-train-your-dragon'];
const CHIPS = ['All','Movies','Cartoon','Anime','Adventure','Comedy','Fantasy','Animation'];

/* ---------- helpers ---------- */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const byId = Object.fromEntries(CATALOG.map(m => [m.id, m]));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const initials = n => n.split(/\s+/).map(p => p[0]).filter(Boolean).slice(0,2).join('').toUpperCase();
const hueOf = str => { let h = 0; for (const c of str) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
const meta = m => `${m.year} · ${m.length} · ${m.rating} · HD`;

/* trailer thumbnails: try the sharpest, fall back step by step, then to the colour artwork */
const THUMBS = ['maxresdefault','hq720','sddefault','hqdefault'];
function thumbURL(m, step=0){ return `https://i.ytimg.com/vi/${m.yt}/${THUMBS[step]}.jpg`; }
function paintImage(img, m, wrap){
  let step = 0;
  img.addEventListener('load', () => {
    // YouTube returns a tiny 120px grey placeholder when a size does not exist
    if (img.naturalWidth <= 140 && step < THUMBS.length - 1){ step++; img.src = thumbURL(m, step); return; }
    wrap && wrap.classList.add('has-image');
  });
  img.addEventListener('error', () => {
    if (step < THUMBS.length - 1){ step++; img.src = thumbURL(m, step); }
    else img.remove();
  });
  img.src = thumbURL(m, 0);
}

/* ---------- storage (My List / Saved) ---------- */
const store = {
  get(k){ try { return new Set(JSON.parse(localStorage.getItem(k) || '[]')); } catch { return new Set(); } },
  set(k, set){ try { localStorage.setItem(k, JSON.stringify([...set])); } catch {} }
};
let myList = store.get('saxz:list');
let saved  = store.get('saxz:saved');

/* ---------- toast ---------- */
const toast = $('#toast');
function notify(msg){
  toast.textContent = msg; toast.classList.add('show');
  clearTimeout(notify.t); notify.t = setTimeout(() => toast.classList.remove('show'), 2200);
}

/* =========================================================
   Cards
   ========================================================= */
function makeCard(m, opts={}){
  const a = document.createElement('a');
  a.href = `#/title/${m.id}`;
  a.className = 'poster-card' + (opts.rank ? ' ranked' : '');
  a.style.setProperty('--h', m.hue);
  a.setAttribute('aria-label', `${m.title}, ${m.year}`);
  a.innerHTML = `
    ${opts.rank ? `<span class="rank-num" aria-hidden="true">${opts.rank}</span>` : ''}
    <div class="poster-art">
      <span class="art-title">${esc(m.title)}</span>
      <span class="art-badge">${m.type === 'Series' ? 'SERIES' : 'FILM'}</span>
      <span class="art-play" aria-hidden="true">▶</span>
    </div>
    <span class="poster-title">${esc(m.title)}</span>
    <span class="poster-year">${m.year} · ${esc(m.type)}</span>`;
  const art = $('.poster-art', a);
  const img = new Image(); img.alt = ''; img.loading = 'lazy'; img.decoding = 'async';
  art.prepend(img); paintImage(img, m, art);
  return a;
}

/* =========================================================
   Home
   ========================================================= */
function renderShelves(){
  const host = $('#shelves'); host.innerHTML = '';
  SHELVES.forEach(s => {
    const items = s.ids ? s.ids.map(id => byId[id]).filter(Boolean) : CATALOG.filter(s.filter);
    if (!items.length) return;
    const sec = document.createElement('section');
    sec.className = 'shelf reveal';
    sec.innerHTML = `
      <div class="section-heading"><h2>${esc(s.title)}</h2>
        <div class="shelf-tools">
          <button class="arrow" data-dir="-1" aria-label="Scroll left">‹</button>
          <button class="arrow" data-dir="1" aria-label="Scroll right">›</button>
          <button class="text-button see-all">See all</button>
        </div>
      </div>
      <div class="poster-row ${s.style === 'ranked' ? 'ranked-row' : ''}"></div>`;
    const row = $('.poster-row', sec);
    items.forEach((m, i) => row.appendChild(makeCard(m, s.style === 'ranked' ? {rank:i+1} : {})));
    $$('.arrow', sec).forEach(b => b.addEventListener('click', () =>
      row.scrollBy({left: b.dataset.dir * row.clientWidth * .85, behavior:'smooth'})));
    $('.see-all', sec).addEventListener('click', () => { location.hash = '#/shelf/' + s.key; });
    host.appendChild(sec);
  });
  observeReveals();
}

/* Hero carousel */
let heroIndex = 0, heroTimer = null;
function renderHero(){
  const slides = $('#heroSlides'), dots = $('#heroDots');
  slides.innerHTML = ''; dots.innerHTML = '';
  HERO_IDS.map(id => byId[id]).forEach((m, i) => {
    const s = document.createElement('div');
    s.className = 'hero-slide'; s.style.setProperty('--h', m.hue);
    const img = new Image(); img.alt = ''; img.decoding = 'async';
    s.appendChild(img); paintImage(img, m, s);
    slides.appendChild(s);
    const d = document.createElement('button');
    d.className = 'dot'; d.setAttribute('role', 'tab'); d.setAttribute('aria-label', `Show ${m.title}`);
    d.addEventListener('click', () => { setHero(i); startHeroTimer(); });
    dots.appendChild(d);
  });
  setHero(0); startHeroTimer();
  const hero = $('#hero');
  hero.addEventListener('mouseenter', () => clearInterval(heroTimer));
  hero.addEventListener('mouseleave', startHeroTimer);
}
function setHero(i){
  heroIndex = (i + HERO_IDS.length) % HERO_IDS.length;
  const m = byId[HERO_IDS[heroIndex]];
  $$('.hero-slide').forEach((s, n) => s.classList.toggle('active', n === heroIndex));
  $$('.dot').forEach((d, n) => d.classList.toggle('active', n === heroIndex));
  const c = $('#heroContent');
  c.classList.remove('swap'); void c.offsetWidth; c.classList.add('swap');
  c.innerHTML = `
    <span class="eyebrow">${m.type === 'Series' ? 'DAVID SERIES' : 'DAVID ORIGINAL PICK'}</span>
    <h1>${esc(m.title)}</h1>
    <div class="hero-meta"><span class="pill">${esc(m.rating)}</span><span>${m.year}</span><span>${esc(m.length)}</span><span>${esc(m.genres.slice(0,3).join(' • '))}</span></div>
    <p class="hero-description">${esc(m.tagline)}</p>
    <div class="hero-buttons">
      <button class="primary-button" data-act="play">▶ <span>Play Trailer</span></button>
      <button class="outline-button" data-act="details">ⓘ Details</button>
    </div>`;
  $('[data-act=play]', c).addEventListener('click', () => openTrailer(m));
  $('[data-act=details]', c).addEventListener('click', () => { location.hash = '#/title/' + m.id; });
}
function startHeroTimer(){
  clearInterval(heroTimer);
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  heroTimer = setInterval(() => setHero(heroIndex + 1), 7500);
}

/* Genre chips */
function matchesChip(m, chip){
  switch (chip){
    case 'All': return true;
    case 'Movies': return m.type === 'Movie';
    case 'Series': return m.type === 'Series';
    default: return m.genres.includes(chip);
  }
}
function renderChips(host, active, onPick){
  host.innerHTML = '';
  CHIPS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'chip' + (c === active ? ' active' : '');
    b.textContent = c; b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', c === active);
    b.addEventListener('click', () => onPick(c));
    host.appendChild(b);
  });
}

/* =========================================================
   Browse / lists
   ========================================================= */
function showBrowse({kicker, title, sub, items, chip, emptyMsg}){
  $('#browseKicker').textContent = kicker;
  $('#browseTitle').textContent = title;
  $('#browseSub').textContent = sub || '';
  const grid = $('#browseGrid'); grid.innerHTML = ''; grid.classList.remove('clips');
  if (!items.length){
    grid.innerHTML = `<div class="empty-state"><div class="empty-ico">🎬</div><p>${esc(emptyMsg || 'Nothing here yet.')}</p><a class="primary-button inline" href="#/">Browse titles</a></div>`;
    return;
  }
  items.forEach(m => grid.appendChild(makeCard(m)));
}
function browseByChip(chip){
  const items = CATALOG.filter(m => matchesChip(m, chip));
  showBrowse({kicker:'BROWSE', title: chip === 'All' ? 'All Titles' : chip, sub:`${items.length} titles — every one has a trailer you can play here`, items});
  renderChips($('#browseChips'), chip, c => { location.hash = '#/browse/' + encodeURIComponent(c); });
  $('#browseChips').parentElement.classList.remove('hidden');
}

/* =========================================================
   Details
   ========================================================= */
let current = null;
function renderDetails(m){
  current = m;
  document.title = `${m.title} — David`;
  $('#detailTitle').textContent = m.title;
  $('#detailMeta').textContent = meta(m);
  $('#detailSynopsis').textContent = m.synopsis;
  $('#detailCredit').innerHTML = `<b>${esc(m.credit[0])}:</b> ${esc(m.credit[1])}`;
  $('#detailBadge').textContent = m.type === 'Series' ? 'Binge-worthy series' : 'Popular right now';
  $('#detailGenres').innerHTML = m.genres.map(g => `<a href="#/browse/${encodeURIComponent(g)}">${esc(g)}</a>`).join('');
  const art = $('#detailArt'); art.innerHTML = ''; art.style.setProperty('--h', m.hue); art.classList.remove('has-image');
  const img = new Image(); img.alt = `${m.title} trailer preview`; art.appendChild(img); paintImage(img, m, art);
  syncButtons();

  const row = $('#castRow'); row.innerHTML = '';
  m.cast.forEach(([name, role]) => {
    const card = document.createElement('div'); card.className = 'cast-card';
    card.innerHTML = `<div class="cast-avatar" style="--h:${hueOf(name)}" aria-hidden="true">${esc(initials(name))}</div><strong>${esc(name)}</strong><span>${esc(role || 'Cast')}</span>`;
    row.appendChild(card);
  });

  const sim = $('#similarRow'); sim.innerHTML = '';
  CATALOG.filter(x => x.id !== m.id)
    .map(x => ({x, score: x.genres.filter(g => m.genres.includes(g)).length + (x.type === m.type ? .5 : 0)}))
    .filter(o => o.score > 0).sort((a, b) => b.score - a.score).slice(0, 10)
    .forEach(o => sim.appendChild(makeCard(o.x)));
}
function syncButtons(){
  if (!current) return;
  const inList = myList.has(current.id), inSaved = saved.has(current.id);
  const lb = $('#listButton'); lb.textContent = inList ? '✓' : '＋'; lb.classList.toggle('is-added', inList);
  $('#downloadButton').classList.toggle('is-added', inSaved);
  $('#trailerList').textContent = inList ? '✓ In My List' : '＋ My List';
}
function toggleList(m){
  if (myList.has(m.id)){ myList.delete(m.id); notify('Removed from My List'); }
  else { myList.add(m.id); notify('Added to My List'); }
  store.set('saxz:list', myList); syncButtons();
}
function toggleSaved(m){
  if (saved.has(m.id)){ saved.delete(m.id); notify('Removed from Saved'); }
  else { saved.add(m.id); notify('Saved for later'); }
  store.set('saxz:saved', saved); syncButtons();
}
$('#listButton').addEventListener('click', () => current && toggleList(current));
$('#downloadButton').addEventListener('click', () => current && toggleSaved(current));
$('#detailPlay').addEventListener('click', () => current && openTrailer(current));
$('#bigPlay').addEventListener('click', () => current && openTrailer(current));
$('#backHome').addEventListener('click', () => {
  if (navCount > 1) history.back(); else location.hash = '#/';
});
$('#shareButton').addEventListener('click', async () => {
  if (!current) return;
  const data = {title: current.title, text: `Watch the trailer for ${current.title} on David`, url: location.href};
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(location.href); notify('Link copied'); }
  } catch { /* cancelled */ }
});

/* =========================================================
   Trailer player — plays INSIDE the site
   ========================================================= */
const trailerModal = $('#trailerModal');
let player = null, ytApi = null, trailerTitle = null, lastFocus = null;

function loadYouTubeAPI(){
  if (ytApi) return ytApi;
  ytApi = new Promise(resolve => {
    if (window.YT && window.YT.Player) return resolve(true);
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { prev && prev(); resolve(true); };
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
    setTimeout(() => resolve(!!(window.YT && window.YT.Player)), 6000);
  });
  return ytApi;
}
function showTrailerError(m, code){
  const box = $('#trailerError');
  const local = location.protocol === 'file:';
  $('#trailerErrorText').textContent = local
    ? 'YouTube blocks embedded players on pages opened straight from a file. Run the site from a web server (e.g. VS Code “Live Server”) or host it online and the trailer will play right here.'
    : 'This trailer could not load inside the page right now. Check your connection and try again.';
  $('#youtubeFallback').href = `https://www.youtube.com/watch?v=${m.yt}`;
  box.classList.remove('hidden');
}
function plainIframe(m){
  const wrap = $('#trailerFrameWrap'); wrap.innerHTML = '';
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${m.yt}?autoplay=1&rel=0&playsinline=1&modestbranding=1`;
  f.title = `${m.title} trailer`;
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen';
  f.referrerPolicy = 'strict-origin-when-cross-origin';
  f.allowFullscreen = true;
  wrap.appendChild(f);
}
async function openTrailer(m){
  trailerTitle = m; lastFocus = document.activeElement;
  $('#trailerHeading').textContent = `${m.title} — Trailer`;
  $('#trailerMeta').textContent = `${m.year} · ${m.length} · ${m.genres.slice(0,3).join(' • ')}`;
  $('#trailerError').classList.add('hidden');
  $('#trailerFrameWrap').innerHTML = '<div id="ytPlayer"></div>';
  $('#youtubeFallback').href = `https://www.youtube.com/watch?v=${m.yt}`;
  trailerModal.classList.remove('hidden');
  document.body.classList.add('trailer-open');
  $('#closeTrailer').focus({preventScroll:true});
  syncButtons(); renderUpNext(m);
  clearInterval(heroTimer);

  const apiOK = await loadYouTubeAPI();
  if (trailerTitle !== m || trailerModal.classList.contains('hidden')) return;   // closed / switched meanwhile
  if (!apiOK){ plainIframe(m); return; }
  try {
    const vars = {autoplay:1, rel:0, playsinline:1, modestbranding:1};
    if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
    player = new YT.Player('ytPlayer', {
      host: 'https://www.youtube-nocookie.com',
      videoId: m.yt, width: '100%', height: '100%', playerVars: vars,
      events: {
        onReady: e => { try { e.target.playVideo(); } catch {} },
        onError: () => showTrailerError(m)
      }
    });
  } catch { plainIframe(m); }
}
function closeTrailer(){
  if (trailerModal.classList.contains('hidden')) return;
  try { player && player.destroy && player.destroy(); } catch {}
  player = null; trailerTitle = null;
  $('#trailerFrameWrap').innerHTML = '<div id="ytPlayer"></div>';   // stops playback
  trailerModal.classList.add('hidden');
  document.body.classList.remove('trailer-open');
  if (lastFocus && lastFocus.focus) try { lastFocus.focus({preventScroll:true}); } catch {}
  if (!$('#homeView').classList.contains('hidden')) startHeroTimer();
}
function renderUpNext(m){
  const host = $('#upNext'); host.innerHTML = '';
  CATALOG.filter(x => x.id !== m.id)
    .map(x => ({x, s: x.genres.filter(g => m.genres.includes(g)).length + Math.random() * .4}))
    .sort((a, b) => b.s - a.s).slice(0, 8).forEach(({x}) => {
      const b = document.createElement('button'); b.className = 'upnext-card'; b.style.setProperty('--h', x.hue);
      b.innerHTML = `<span class="un-art"></span><span class="un-title">${esc(x.title)}</span>`;
      const art = $('.un-art', b); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.appendChild(img); paintImage(img, x, art);
      b.addEventListener('click', () => { try { player && player.destroy && player.destroy(); } catch {} player = null; openTrailer(x); });
      host.appendChild(b);
    });
}
$('#closeTrailer').addEventListener('click', closeTrailer);
trailerModal.addEventListener('click', e => { if (e.target === trailerModal) closeTrailer(); });
$('#trailerDetails').addEventListener('click', () => { const m = trailerTitle; closeTrailer(); if (m) location.hash = '#/title/' + m.id; });
$('#trailerList').addEventListener('click', () => trailerTitle && toggleList(trailerTitle));

/* =========================================================
   Search
   ========================================================= */
const searchModal = $('#searchModal'), searchInput = $('#searchInput'), searchResults = $('#searchResults');
function openSearch(){ searchModal.classList.remove('hidden'); searchInput.value = ''; renderSearch(''); setTimeout(() => searchInput.focus(), 40); }
function closeSearch(){ searchModal.classList.add('hidden'); }
function renderSearch(q){
  q = q.trim().toLowerCase(); searchResults.innerHTML = '';
  let list;
  if (!q){
    searchResults.innerHTML = '<p class="search-hint">Popular right now</p>';
    list = ['toy-story','moana','spirited-away','inside-out-2','zootopia'].map(id => byId[id]);
  } else {
    list = CATALOG.map(m => {
      const t = m.title.toLowerCase();
      let s = 0;
      if (t.startsWith(q)) s = 4; else if (t.includes(q)) s = 3;
      else if (m.cast.some(c => c[0].toLowerCase().includes(q))) s = 2;
      else if (m.genres.some(g => g.toLowerCase().includes(q)) || m.type.toLowerCase().includes(q) || String(m.year) === q) s = 1;
      return {m, s};
    }).filter(o => o.s).sort((a, b) => b.s - a.s).map(o => o.m);
  }
  if (!list.length){ searchResults.innerHTML = '<p class="empty-message">No titles found. Try another name, actor or genre.</p>'; return; }
  list.forEach(m => {
    const row = document.createElement('div'); row.className = 'search-result'; row.style.setProperty('--h', m.hue); row.tabIndex = 0;
    const star = q && m.cast.find(c => c[0].toLowerCase().includes(q) && !m.title.toLowerCase().includes(q));
    row.innerHTML = `<span class="sr-art"></span><span class="sr-text"><b>${esc(m.title)}</b><small>${m.year} · ${esc(m.type)} · ${esc(m.genres.slice(0,2).join(' / '))}${star ? ' · with ' + esc(star[0]) : ''}</small></span><button class="sr-play" aria-label="Play ${esc(m.title)} trailer">▶</button>`;
    const art = $('.sr-art', row); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.appendChild(img); paintImage(img, m, art);
    const go = () => { closeSearch(); location.hash = '#/title/' + m.id; };
    row.addEventListener('click', e => { if (e.target.closest('.sr-play')){ closeSearch(); openTrailer(m); } else go(); });
    row.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    searchResults.appendChild(row);
  });
}
$('#searchToggle').addEventListener('click', openSearch);
$('#closeSearch').addEventListener('click', closeSearch);
searchModal.addEventListener('click', e => { if (e.target === searchModal) closeSearch(); });
searchInput.addEventListener('input', () => renderSearch(searchInput.value));

/* =========================================================
   Router (hash based — works on any host, even without a server)
   ========================================================= */
const views = {home: $('#homeView'), browse: $('#browseView'), details: $('#detailsView')};
function show(name){
  Object.entries(views).forEach(([k, el]) => el.classList.toggle('hidden', k !== name));
  window.scrollTo(0, 0);
  if (name === 'home') startHeroTimer(); else clearInterval(heroTimer);
}
function setNav(key){
  $$('[data-nav]').forEach(b => b.classList.toggle('active', b.dataset.nav === key));
  $$('[data-top]').forEach(a => a.classList.toggle('active', a.dataset.top === key));
}
let navCount = 0;
function route(){
  navCount++;
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(decodeURIComponent);
  const [a, b] = parts;
  document.title = 'David — Cartoons & Anime for Kids';
  closeSearch();
  if (a === 'title' && byId[b]){ renderDetails(byId[b]); show('details'); setNav(''); return; }
  if (a === 'list'){ show('browse'); setNav('list');
    showBrowse({kicker:'YOUR COLLECTION', title:'My List', sub:`${myList.size} saved`, items:[...myList].map(id => byId[id]).filter(Boolean), emptyMsg:'Your list is empty. Tap ＋ on any title to add it.'});
    $('#browseChips').parentElement.classList.add('hidden'); return; }
  if (a === 'downloads'){ show('browse'); setNav('downloads');
    showBrowse({kicker:'YOUR COLLECTION', title:'Saved for Later', sub:`${saved.size} saved`, items:[...saved].map(id => byId[id]).filter(Boolean), emptyMsg:'Nothing saved yet. Tap the cloud icon on any title.'});
    $('#browseChips').parentElement.classList.add('hidden'); return; }
  if (a === 'clips'){ show('browse'); setNav('clips'); renderClips(); return; }
  if (a === 'shelf'){
    const s = SHELVES.find(x => x.key === b);
    if (s){ show('browse'); setNav('');
      const items = s.ids ? s.ids.map(id => byId[id]) : CATALOG.filter(s.filter);
      showBrowse({kicker:'COLLECTION', title:s.title, sub:`${items.length} titles`, items});
      $('#browseChips').parentElement.classList.add('hidden'); return; }
  }
  if (a === 'browse'){ show('browse'); setNav(b === 'Movies' ? 'movies' : b === 'Anime' ? 'series' : ''); browseByChip(CHIPS.includes(b) || b ? b : 'All'); return; }
  show('home'); setNav('home');
}
function renderClips(){
  $('#browseKicker').textContent = 'WATCH HERE';
  $('#browseTitle').textContent = 'Trailers';
  $('#browseSub').textContent = 'Tap any card to play the trailer without leaving David';
  $('#browseChips').parentElement.classList.add('hidden');
  const grid = $('#browseGrid'); grid.innerHTML = ''; grid.classList.add('clips');
  CATALOG.forEach(m => {
    const b = document.createElement('button'); b.className = 'clip-card'; b.style.setProperty('--h', m.hue);
    b.innerHTML = `<span class="clip-art"><span class="clip-title-fallback">${esc(m.title)}</span><span class="clip-play">▶</span></span><span class="clip-info"><b>${esc(m.title)}</b><small>${m.year} · ${esc(m.type)}</small></span>`;
    const art = $('.clip-art', b); const img = new Image(); img.alt = ''; img.loading = 'lazy'; art.prepend(img); paintImage(img, m, art);
    b.addEventListener('click', () => openTrailer(m));
    grid.appendChild(b);
  });
}
window.addEventListener('hashchange', route);

/* bottom nav + top links */
$$('[data-nav]').forEach(b => b.addEventListener('click', () => {
  const k = b.dataset.nav;
  const target = {home:'#/', list:'#/list', downloads:'#/downloads', clips:'#/clips'}[k];
  if (location.hash === target || (k === 'home' && !location.hash)) route(); else location.hash = target;
}));
$('#brandHome').addEventListener('click', e => { if (!location.hash || location.hash === '#/') { e.preventDefault(); route(); } });

/* =========================================================
   Misc: scroll effects, reveal animation, keyboard
   ========================================================= */
const topbar = $('#topbar');
addEventListener('scroll', () => topbar.classList.toggle('solid', scrollY > 30), {passive:true});
let io;
function observeReveals(){
  if (!('IntersectionObserver' in window)) { $$('.reveal').forEach(el => el.classList.add('in')); return; }
  io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }), {rootMargin:'0px 0px -8% 0px'});
  $$('.reveal:not(.in)').forEach(el => io.observe(el));
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ closeSearch(); closeTrailer(); return; }
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName);
  if (e.key === '/' && !typing){ e.preventDefault(); openSearch(); }
  if (!typing && trailerModal.classList.contains('hidden') && !$('#homeView').classList.contains('hidden')){
    if (e.key === 'ArrowRight') { setHero(heroIndex + 1); startHeroTimer(); }
    if (e.key === 'ArrowLeft')  { setHero(heroIndex - 1); startHeroTimer(); }
  }
});

/* ---------- boot ---------- */
renderHero();
renderChips($('#chips'), 'All', c => { location.hash = '#/browse/' + encodeURIComponent(c); });
renderShelves();
route();