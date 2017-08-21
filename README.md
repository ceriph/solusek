# Solusek

Custom DnD 5e based ruleset and character creator, created by Matthew Forrest. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## TODO

### Features

* Add spell/slot selector
* Add archetype selection to character at level 3
* Add character levelup
* Add equip/unequip
  * Add proficiency service to calculate whether a character can use an item
  * Add proficiencies for all items
* Add 'combat' section to summary including attack damage
  * Weapons need a 'base' die and stat modifier function
* Add a monster creator
* Simplify equipment/inventory/skills to create single page character sheet

### Refactoring

* Change slots to be item 'types'
* Enrich spell object and structure for cross-class spell support
* Tidy racial passives into modifiers to remove hardcoding
* Allow modifiers to be 'functions' that get applied - custom DSL?
* Migrate page content into firebase
  * Rules
  * DM


### Content

* Address spell Action vs Bonus Action
* Review current archetypes
* Add more spells for arcane, nature and light
* Flesh out classes that aren't current being played
  * Add spells for dark, mind and song
* Create a digital/interactive version of the map




