var combos = [
  new Combo("2013 All Stars", "Passive - Increase Skill Proc of team members by 10%", ["Hope","Stone Fist","Gaznar Soulripper",]),
  new Combo("Aerial Doom", "Passive - Increase Skill Proc of team members by 10%", ["Ben-nu Hellborn","Gaznar Soulripper","Yzabel the Fallen","Jezebel the Shriek",]),
  new Combo("Ancient Protectors", "Passive - Increase Skill Proc of team members by 25%", ["Nathra Verdaine","Stone Ancient",]),
  new Combo("Assassin's Alliance", "Chance to instantly kill enemy team", ["Assassin","Shanke","Mist Stalker","Arcane Archer",]),
  new Combo("Assault Team", "Passive - Raise team's MAX HP by 25%", ["Vanguard","Archmage","Paladin",]),
  new Combo("Augmented Arms", "Passive - Raise team's ATK by 110%", ["Veteran Paladin","Moira","Weapon Master","Blademaster",]),
  new Combo("Back to Back", "Passive - Reduce damage by 30%", ["Weapon Master","Blademaster",]),
  new Combo("Behemoths", "Passive - Raise team's MAX HP by 150%", ["Ancient Archelon","Mammoth Beetle","Galzra",]),
  new Combo("Beyond Redemption", "Remove 50% of enemy team's current HP", ["Famine","Jezebel the Shriek","Morbius the Cursed","Father Maleficent",]),
  new Combo("Blessed Knight Rider", "Passive - Reduce damage by 20%", ["Grail Knight","Armored Warhorse","Guardian Angel",]),
  new Combo("Blessed Stag Rider", "Passive - Reduce damage by 20%", ["Primal Warrior","Alpha Stag","Guardian Angel",]),
  new Combo("Blessings of Fate", "Passive - Increase healing effectiveness by 200%, Increase Skill Proc by 5%", ["Angel of Law","Hope","Azarel","Lady of the Lake",]),
  new Combo("Body Count", "Chance to revive team with 50% HP upon death", ["Butcher of Princes","Bourgard","Pestilence",]),
  new Combo("Bone Spirit", "Chance to revive team with 20% HP upon death", ["Morbius the Cursed","Karn","Gravebane",]),
  new Combo("Bruisers", "Remove 60% of enemy team's current HP", ["Heavy Swordsman","Vanguard","Berserker","Stone Fist",]),
  new Combo("Brute Force", "Passive - Raise team's ATK by 150%", ["Totem Guard","Berserker","Stone Fist",]),
  new Combo("Burning Wrath", "Passive - Raise team's ATK by 100%", ["Gravebane","Ben-nu Fireborn","Fire Elemental","Ember Druid",]),
  new Combo("Burst Damage", "Remove 40% of enemy team's current HP", ["Archivist","Archmage","Vanguard","Stormcaller",]),
  new Combo("Celestials", "Passive - Raise team's MAX HP by 150%", ["Vambrael","Azarel","Guardian Angel","Arabel the True",]),
  new Combo("Champions", "Passive - Raise team's ATK by 200%", ["Drust Mac Erp","Sir Galahad","Weapon Master","Totem Guard",]),
  new Combo("Cold Killers", "Chance instantly kill enemy team", ["Green Knight","Assassin","Mist Stalker","Treehound",]),
  new Combo("Core Dwellers", "Passive - Raise team's MAX HP by 100%", ["Balzathor","Terraheart","Mammoth Beetle","Fire Elemental",]),
  new Combo("Corrupted", "Chance to instantly kill enemy team", ["Desdemona","Jezebel the Shriek","Yzabel the Fallen","Sir Valamir",]),
  new Combo("Crack Knights", "Passive - Raise team's ATK by 225%", ["Lapis Knight","Green Knight","White Knight","King's Guard",]),
  new Combo("Cultists", "Chance to revive team with 50% HP upon death", ["Father Maleficent","Necros the Grim",]),
  new Combo("Cunning Foes", "Passive - Increase Skill Proc of team members by 15%", ["Green Knight","Treehound","Arial","The Prophet",]),
  new Combo("Dark Arts", "Remove 66% of enemy team's current HP", ["Desdemona","Jezebel the Shriek","Ossion the Dread","Necros the Grim",]),
  new Combo("Defenders", "Passive - Reduce damage by 50%", ["Diamond Knight","Stone Ancient","Skinchanger","Marble Guardian",]),
  new Combo("Demons", "Passive - Raise team's MAX HP by 80%", ["Fenric Gore-Claw","Balzathor",]),
  new Combo("Desert Guardians", "Passive - Raise team's HP by 50%, Increase Skill Proc by 8%", ["Ageless Scorpion","Terraheart","Mara of the Sand",]),
  new Combo("Disciplined", "Increase ATK by 150% when HP falls below 15%", ["Blademaster","Gawain's Guard",]),
  new Combo("Divine Intervention", "Chance to revive team with 80% HP upon death", ["Vambrael","Guardian Angel",]),
  new Combo("Divine Ladies", "Passive - Increases healing effectiveness by 200%", ["Lady of the Lake","Rihannon the Fair",]),
  new Combo("Dragon's Blood", "Passive - Raise team's MAX HP by 100%", ["Dragon Knight","Merlin's Dragon","Nathra Verdaine",]),
  new Combo("Druid Beats", "Chance to revive team with 20% HP upon death", ["Primal Warrior","Elder Shaman","Bard",]),
  new Combo("Druid Elite", "Passive - Raise team's HP and ATK by 80%", ["Arial's Champion","Primal Rider","Arial","Totem Guard",]),
  new Combo("Druid Warband", "Passive - Raise team's MAX HP by 100%", ["Primal Warrior","Alpha Stag","Beastmaster",]),
  new Combo("Druid Warriors", "Passive - Raise team's ATK by 20%", ["Druid Warrior","Druid Marksman","Druid Initiate",]),
  new Combo("Earthen Might", "Passive - Reduce damage by 50%", ["Terraheart","Earth Mother","Stone Ancient","Marble Guardian",]),
  new Combo("Elemental Fury", "Passive - Raise team's ATK by 100%", ["Water Elemental","Fire Elemental","Caradd the Gale","Earth Elemental",]),
  new Combo("Elite Casters", "Remove 50% of enemy team's current HP", ["Archmage","Stormcaller","Elder Shaman",]),
  new Combo("Elite Force", "Passive - Raise team's ATK by 200%", ["Vambrael","Sir Galahad","Rihannon the Fair","Galzra",]),
  new Combo("Enchanted Weapons", "Passive - Raise team's HP and ATK by 175%", ["Violet Knight","Totem Guard","Arcane Archer",]),
  new Combo("Enigmatic Knights", "Passive - Raise team's MAX HP by 150%", ["Black Knight","Green Knight","White Knight",]),
  new Combo("Epic Serpents", "Passive - Raise team's ATK by 150%", ["Merlin's Dragon","Galzra","Nathra Verdaine","Mhor the Wyrm",]),
  new Combo("Fallen Heroes", "Chance to revive team with 60% HP upon death", ["Father Beneficent","General Morbius","Jezebel the Fair","White Knight",]),
  new Combo("Fearless Fighters", "Passive - Reduce damage by 65%", ["Kelley","Sir Galahad","Sir Kay","Diamond Knight",]),
  new Combo("Female Legends", "Passive - Increases healing effectiveness by 150%", ["Lady of the Lake","Rihannon the Fair","Guinevere",]),
  new Combo("Feral Pack", "Passive - Reduce damage by 30%", ["Phantom Panther","Giant Boar","Dire Bear","Beastmaster",]),
  new Combo("Final Stand", "Increase ATK by 400% when HP falls below 5%", ["Blademaster","Totem Guard","Weapon Master","Kelley",]),
  new Combo("Finesse Fighters", "Passive - Increase Skill Proc of team members by 20%", ["Ranger","Duelist",]),
  new Combo("Fire Breathing", "Remove 80% of enemy team's current HP", ["Merlin's Dragon","Galzra","Ben-nu Fireborn",]),
  new Combo("Forest Guardians", "Passive - Raise team's MAX HP by 100%", ["Nathra Verdaine","The Horned Lord","Stone Ancient",]),
  new Combo("Four Horsemen", "Chance to instantly kill enemy team", ["Death","Famine","War","Pestilence",]),
  new Combo("Free Spirits", "Passive - Increase Skill Proc of team members by 8%", ["Rogue Outlaw","Maiden Exemplar","Arial","Arcane Archer",]),
  new Combo("Frozen Terrors", "Remove 50% of enemy team's current HP", ["Silverheart","Ben-nu Frostborn","Ice Mage",]),
  new Combo("Fury of the Skies", "Remove 30% of enemy team's current HP", ["Ben-nu Skyborn","Caradd the Gale",]),
  new Combo("Generals", "Passive - Raise team's HP and ATK by 50%", ["Black Knight","Maiden Exemplar","Arial","General Morbius",]),
  new Combo("Geomancers", "Remove 30% of enemy team's current HP", ["Kel Earthbringer","Terraheart","Mara of the Sand",]),
  new Combo("Giant Insects", "Passive - Reduce damage by 40%", ["Psycho Butterfly","Doomweaver",]),
  new Combo("Gifted and Talented", "Passive - Increase Skill Proc of team members by 15%", ["Bard","Battlemage",]),
  new Combo("Gods", "Passive - Raise team's MAX HP by 200%", ["Vambrael","Rihannon the Fair","The Horned Lord",]),
  new Combo("Gods and Heroes", "Chance to revice team with full HP upon death", ["Vambrael","Rihannon the Fair","Grail Knight","Primal Warrior",]),
  new Combo("Goliaths", "Passive - Raise team's HP by 100%, Reduce damage by 25%", ["Ageless Scorpion","Mammoth Beetle","Ancient Archelon","Mhor the Wyrm",]),
  new Combo("Guardian Constructs", "Passive - Reduce damage by 10%", ["Marble Guardian","Mechanical Knight",]),
  new Combo("Healers", "Passive - Increases healing effectiveness by 80%", ["Rihannon the Fair","Ranger","Paladin",]),
  new Combo("Heavy Cavalry", "Remove 80% of enemy team's current HP", ["Maiden Exemplar","Primal Rider","King's Guard","Arial",]),
  new Combo("Hero Trifecta", "Chance to revive team with 20% HP upon death", ["Grail Knight","Archmage","Bard",]),
  new Combo("Heroic Beasts", "Passive - Raise team's MAX HP by 50%", ["Celestial Lion","Giant Eagle",]),
  new Combo("Hired Steel", "Passive - Raise team's ATK by 50%", ["Weapon Master","Huscarl","Highlander","Ulster Knight",]),
  new Combo("Holy Men", "Passive - Reduce damage by 20%", ["War Cleric","Paladin",]),
  new Combo("Hooded Terrors", "Remove 60% of enemy team's current HP", ["Ossion the Dread","Bourgard","Mist Stalker",]),
  new Combo("Hot Blooded", "Passive - Raise team's ATK by 110%, Reduce damage by 15%", ["Veteran Paladin","Kelley","Blademaster","Sir Kay",]),
  new Combo("Hybrid Beasts", "Increase ATK by 100% when HP falls below 20%", ["Gryphon","Cockatrice",]),
  new Combo("Immortals", "Chance to revive team with 80% HP upon death", ["Ossion the Dread","Druantia","Ben-nu Fireborn",]),
  new Combo("Inner Circle", "Remove 60% of enemy team's current HP", ["Mara of the Sand","Sun Mage","Myrddin",]),
  new Combo("Jack of all Trades", "Passive - Raise team's HP and ATK by 25%, Reduce damage by 25%, Increase Skill Proc by 20%", ["Veteran Paladin","Rogue Outlaw","Maiden Exemplar","King's Guard",]),
  new Combo("Killers for Hire", "Passive - Increase Skill Proc of team members by 8%", ["Rogue Outlaw","Mist Stalker","Assassin",]),
  new Combo("King Size Weapons", "Passive - Raise team's ATK by 150%", ["Totem Guard","Highlander","Bourgard",]),
  new Combo("Knight Warband", "Passive - Raise team's ATK by 100%", ["Grail Knight","Armored Warhorse","Paladin",]),
  new Combo("League of the Damned", "Passive - Raise team's HP by 150%", ["Vortigern","Ossion the Dread","Morbius the Cursed","Jezebel the Shriek",]),
  new Combo("Living Forest", "Passive - Reduce damage by 35%", ["Treekin","Treehound","Ironbark Overlord","Treekin Shaman",]),
  new Combo("Lords and Guards", "Passive - Raise team's HP and ATK by 75%", ["Sword Summoner","Kelley","Sir Galahad","Gawain's Guard",]),
  new Combo("Magicians", "Remove 30% of enemy team's current HP", ["Archmage","Ice Mage","Ember Druid",]),
  new Combo("Marksmen", "Remove 20% of enemy team's current HP", ["Longbowman","Crossbowman","Druid Marksman",]),
  new Combo("Martial Music", "Passive - Increase Skill Proc of team members by 20%", ["Lyrist","War Drummer","Horn of Broceliande","Bard",]),
  new Combo("Mercenaries", "Passive - Increase Skill Proc of team members by 10%", ["Highlander","Huscarl","Ulster Knight",]),
  new Combo("Merciful Angels", "Chance to revive team with 50% HP upon death", ["Angel of Law","Lyrist","Hope","Guardian Angel",]),
  new Combo("Monster Mash", "Chance to revive team with 75% HP upon death", ["Gaznar Soulripper","Khufu","Modron","Trahern",]),
  new Combo("Mystics", "Passive - Increase Skill Proc of team members by 15%", ["Myrddin","The Prophet",]),
  new Combo("Mythic Creatures", "Increase ATK by 80% when HP falls below 30%", ["Galzra","Ben-nu Fireborn",]),
  new Combo("Nature Magic", "Chance to revive team with 25% HP upon death", ["Myrddin","Druantia","Sun Mage","Treekin Shaman",]),
  new Combo("Nature's Wrath", "Chance instantly kill enemy team", ["Rihannon the Fair","Treekin","Caradd the Gale","Earth Elemental",]),
  new Combo("Necro Party", "Remove 80% of enemy team's current HP", ["Odo the Infernal","Necros the Grim","Soulbane","Karn",]),
  new Combo("Necromancers", "Chance to revive team with 75% HP upon death", ["Ossion the Dread","Necros the Grim",]),
  new Combo("Noobs", "Passive - Increase Skill Proc of team members by 5%", ["Squire","Apprentice","Druid Initiate",]),
  new Combo("On the Hunt", "Passive - Raise team's ATK by 25%", ["Phantom Panther","Ranger",]),
  new Combo("Opposite Ends", "Increase ATK by 300% when HP falls below 10%", ["Death","Hope","Gaznar Soulripper","White Knight",]),
  new Combo("Pet Familiars", "Remove 80% of enemy team's current HP", ["Moira","Arcane Archer","Balzathor","Silverheart",]),
  new Combo("Phoenix Fury", "Revive team with 50% HP upon death", ["Ben-nu Frostborn","Ben-nu Skyborn","Ben-nu Hellborn","Ben-nu Fireborn",]),
  new Combo("Polar", "Passive - Reduce damage by 30%", ["Hope","Toymaker","Winter Treekin","Angela",]),
  new Combo("Premeditation", "Chance to revive team with 100% HP upon death", ["Merla the Lidless","The Prophet","Archivist",]),
  new Combo("Pure Evil", "Passive - Raise team's ATK by 50%, Increase Skill Proc by 5%", ["Death","Gaznar Soulripper","Sir Valamir","Ossion the Dread",]),
  new Combo("Questing Knight", "Passive - Increase Skill Proc of team members by 10%", ["Armored Warhorse","Squire","Grail Knight",]),
  new Combo("Raw Firepower", "Remove 50% of enemy team's current HP", ["Archmage","Sun Mage","Arcane Archer",]),
  new Combo("Regeneration", "Chance to revive team with 30% HP upon death", ["Ben-nu Fireborn","Thorn Witch","Earth Elemental",]),
  new Combo("Relentless Evil", "Passive - Increase Skill Proc of team members by 10%", ["Morbius the Cursed","Balzathor","Gaznar Soulripper","Ossion the Dread",]),
  new Combo("Righteous Fury", "Passive - Raise team's ATK by 100% and reduce damage by 30%", ["Vambrael","Azarel","Father Beneficent","White Knight",]),
  new Combo("Rock and Troll", "Increase ATK by 200% when HP falls below 50%", ["Lord Stonebrand","Stone Ancient","Stone Fist",]),
  new Combo("Romantic Knights", "Chance to revive team with 50% HP upon death", ["Knight of the Rose","Violet Knight",]),
  new Combo("Royal Bodyguards", "Chance to instantly kill enemy team", ["Gawain's Guard","King's Guard","Arial's Champion",]),
  new Combo("Savage Elite", "Chance to instantly kill enemy team", ["Drust Mac Erp","Arial","Primal Rider","Stone Fist",]),
  new Combo("Shamans", "Passive - Increases healing effectiveness by 100%", ["The Horned Lord","Elder Shaman",]),
  new Combo("Shining Armor", "Passive - Reduce damage by 60%", ["Green Knight","King's Guard","Maiden Exemplar","White Knight",]),
  new Combo("Soldiers", "Passive - Raise team's MAX HP by 20%", ["Knight","Footman","Pikeman","Crossbowman",]),
  new Combo("Stag Herder", "Passive - Increase healing effectiveness by 50%", ["Alpha Stag","Wild Hunt",]),
  new Combo("Stag Pack", "Passive - Raise team's HP by 150%", ["Cernunnos","The Horned Lord","Alpha Stag","Wild Hunt",]),
  new Combo("Strength of Will", "Remove 50% of enemy team's current HP", ["Sword Summoner","Kel Earthbringer","Telekinetic",]),
  new Combo("Suited Up", "Passive - Reduce damage by 60%", ["Sir Galahad","Sir Kay","Diamond Knight","Paladin",]),
  new Combo("Summoned Minions", "Chance to revive team with 20% HP upon death", ["Water Elemental","Fire Elemental","Marble Guardian","Mechanical Knight",]),
  new Combo("Theurgists", "Passive - Increase Skill Proc of team members by 10%", ["The Horned Lord","Elder Shaman","Myrddin","Treekin Shaman",]),
  new Combo("Thick Hides", "Passive - Reduce damage by 30%", ["Mhor the Wyrm","Giant Boar",]),
  new Combo("Thirst of Night", "Passive - Raise team's HP by 60%, Increase healing effectiveness by 100%", ["Chastity","Sir Valamir",]),
  new Combo("Thorny Threat", "Increase ATK by 50% when HP falls below 60%", ["Thorn Witch","Blood Briar",]),
  new Combo("Thunder's Fury", "Remove 50% of enemy team's current HP", ["Eira Storm","Caradd the Gale","Ice Mage","Archmage",]),
  new Combo("Tide Lurkers", "Passive - Increase healing effectiveness by 20%", ["Kelpie","Water Nymph",]),
  new Combo("Titans", "Passive - Raise team's ATK by 50%", ["Mhor the Wyrm","Ysbadden",]),
  new Combo("Toxic Death", "Increase ATK by 100% when HP falls below 20%", ["Pestilence","Ruibh the Wyrm","Cockatrice","Ageless Scorpion",]),
  new Combo("Travelers", "Passive - Raise team's ATK by 30%, Raise team's HP by 40%", ["Archmage Rhobin","Archivist","Elder Shaman","Astrologist",]),
  new Combo("Tribal Fury", "Passive - Raise team's ATK by 50%, Increase Skill Proc by 10%", ["War Drummer","Horn of Broceliande","Berserker","Stone Fist",]),
  new Combo("Twin Clerics", "Increase ATK by 30% when HP falls below 70%", ["War Cleric","Father Maleficent",]),
  new Combo("Twin Knights", "Chance to revive team with 10% HP upon death", ["Paladin","Black Knight",]),
  new Combo("Twin Sisters", "Increase ATK by 200% when HP falls below 10%", ["Arabel the True","Yzabel the Fallen",]),
  new Combo("Ultimate Fighters", "Passive - Raise team's ATK by 100%, Raise team's HP by 75%", ["War","King's Guard","Drust Mac Erp",]),
  new Combo("Umbral Spirits", "Chance to revive team with 30% HP upon death", ["Merla the Lidless","Amythestine","Aleria","Cernunnos",]),
  new Combo("Undead Party", "Passive - Raise team's HP and ATK by 50%", ["Desdemona","Morbius the Cursed","Karn","Gravebane",]),
  new Combo("Undying", "Chance to revive team with 60% HP upon death", ["Azarel","Ben-nu Fireborn",]),
  new Combo("Unholy Strength", "Passive - Raise team's ATK by 80%", ["Morbius the Cursed","Gaznar Soulripper",]),
  new Combo("Unstoppable Force", "Passive - Raise team's MAX HP by 220%", ["Galzra","Ironbark Overlord","Earth Mother","Mhor the Wyrm",]),
  new Combo("Wanderers", "Increase ATK by 60% when HP falls below 50%", ["Ranger","Beastmaster",]),
  new Combo("Warrior Poets", "Passive - Increase Skill Proc of team members by 10%", ["Archivist","Father Beneficent","Necros the Grim",]),
  new Combo("Wild Pack", "Increase ATK by 20% when HP falls below 80%", ["Giant Boar","Dire Bear","Alpha Stag","Dire Wolf",]),
  new Combo("Wise Sages", "Passive - Increase Skill Proc of team members by 12%", ["Archivist","The Prophet","Myrddin","Druantia",]),
  new Combo("Woodland Deities", "Passive - Increase healing effectiveness by 80%", ["Druantia","Abnoba",]),
  new Combo("Wyrm Duo", "Remove 30% of enemy team's current HP", ["Ruibh the Wyrm","Mhor the Wyrm",]),
]
