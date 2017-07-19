# Solusek

Custom DnD 5e based ruleset and character creator, created by Matthew Forrest. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## TODO

* Add reference section to summary for spell attack and saving throws
* Update spell text to include better wording and expand
* Add archetype selection to character at level 3
* Add skill types to spells.json?
* Add character advancement functionality
* Separate 'equipment' and 'inventory' and add equip/unequip
  * Add 'slot' to character and equipment to allocate items 
  * Add proficiency service to calculate whether a character can use an item
  * Add proficiencies for all items
* Tidy racial passives into modifiers to remove hardcoding
* Allow modifiers to be 'functions' that get applied - custom DSL?
* Calculate attack damage
  * Weapons need a 'base' die and stat modifier function 
* Add image upload for characters OR do artwork myself
* Create an interactive version of the map
* Add a monster creator
* Migrate page content into firebase
  * Rules
  * DM
* Add more spells for nature and light
* Flesh out classes that aren't current being played
  * Add spells for dark, mind and song

