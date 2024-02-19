const BoyNames = [ "Beast", "Blade", "Yeager", "Sirius", "Cosmo","Kratos", "Nathan", "Dante", "Ezio", "Geralt", "Aloy", "Flynn", "Lara", "Payne", "Linko", "Alistair", "Arwen", "Aragorn", "Gandalf", "Merlin", "Sonic", "Sephiroth", "Squall", "Tidus", "Sora", "Caesar", "Darius", "Frederick", "Leonidas", "Oda", "William", "Sigurd", "Edelgard", "Dimitri", "Claude", "Archer", "Bard", "Fighter", "Hunter", "Mage", "Paladin", "Rogue", "Sorcerer", "Warlock", "Warrior", "Atlas", "Chell", "Portal", "Q-bert", "Samus", "Tedros", "Byleth", "Braino", "Richter", "Nemesis", "Corrin", "Kirby", "Freddy", "Jason", "Michael", "Mylo", "Slenderman", "Amnesia", "Dracula", "Madden", "Mario", "Hector", "Tony", "Alucard", "Belmont", "Golem", "Senna", "Prost", "Hamilton", "Crash", "Rayman", "Spyro", "Sonic", "Mega Man", "Marina", "Vlad", "Ori", "Aeon", "Celeste", "Booker", "Connor", "Franklin", "Trevor", "Michael", "Arthur", "Geralt", "Sharon", "Niko", "Pac-Man", "Tetris", "Ronnie", "Hugh", "Doom", "Graham", "Reinhardt", "Giannis", "Dota", "Victor", "Atreus", "Baldur", "Thor", "Odin", "Freya", "Zelda", "Ganon", "Ganondorf", "Hyrule", "Franklin", "Lester", "Lamar", "Ash", "Claire", "Raiden", "Marth", "Gerald", "Blastoise", "Maden", "Luigi", "Bronnie", "Wario", "Yoshi"];


const GirlNames = ["Celestia", "Nebula", "Stella", "Leia", "Arya", "Hermione", "Katniss", "Eowyn", "Trinity", "Fiona", "Belle", "Mulan", "Ellie", "Ripley", "Daenerys", "Merida", "Padmé", "Clarice", "Alice", "Lara", "Rey", "Gamora", "Sarah", "Luna", "Eliza", "Tauriel", "Wendy", "Frozone", "Megara", "Scarlett", "Esmeralda", "Moana", "Violet", "Sansa", "Nala", "Matilda", "Poppy", "Gwen", "Sally", "Fleur", "Ariel", "Jasmine", "Leeloo", "Elektra", "Aurora", "Marion", "Sabrina", "Juno", "Coraline", "Xena", "Leela", "Lucy", "Nancy", "Jessie", "Roxanne", "Elsa", "Cinderella", "Wanda", "Tiana", "Holly", "Beatrix", "Artemis", "Giselle", "Odette", "Carmen", "Katara", "Storm", "Ada", "Amelia", "Evangeline", "Nova", "Ellie", "Lilo", "Max", "Audrey", "Merlin", "Athena", "Ellen", "Claire", "Pepper", "Hazel", "Mavis", "Riley", "Elle", "Marina", "Cassandra", "Persephone", "Selena", "Judy", "Remy", "Elizabeth", "Maria", "Zelda", "Samantha", "Charlotte", "Miranda", "Rose", "Fiona", "Frodo", "Dorothy" ];

  function getRandomName() {
    const randomgNumber = Math.floor(Math.random() * GirlNames.length);
    const randombNumber = Math.floor(Math.random() * BoyNames.length);
    if (!genderToggle.checked) {
      usernameField.value = BoyNames[randombNumber];
    } else {
      usernameField.value = GirlNames[randomgNumber];
    }
    usernameField.focus();
  }