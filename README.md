# Solusek

Custom DnD 5e based ruleset and character creator, created by Matthew Forrest. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## TODO

* Add character advancement functionality
  * Also add more choice to classes such as rogue/warrior
* Separate 'equipment' and 'inventory' and add equip/unequip
  * Add 'slot' to character and equipment to allocate items 
* Add proficiency service to calculate whether a character can use an item
* Tidy racial passives into modifiers to remove hardcoding
* Allow modifiers to be 'functions' that get applied - custom DSL?
* Calculate attack damage
  * Weapons need a 'base' die and stat modifier function 
* Add image upload for characters
