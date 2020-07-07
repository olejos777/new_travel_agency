# A simple travel agency application where you can look for the travel you want

## Commends to start
- `git init` to init empty repository.
- `npm install` to install all packages.
- `npm start` to start the application.


## Files/folders
- `App.js` is now located directly in `src` - it's responsible mainly for routing configuration but it's not responsible for any elements visible on the page. In the ladder it is equal with `index.js`.
- `xxx.json` contains basic data (the apllication content)
- `tripGenerator.js` - contains a configuration used in JSON files generator. It's used to generate trips.json(the one that contains list of all trips available in the application)
- `globalRedux.js` - it maintain whole application state and not just it's fragments. We need this to set at the same time up more than one props stored in the application state.
>Konkretniej rzecz biorąc, chodzi o funkcję `parseTrips.js`, którą znajdziesz w katalogu `src/utils`. Wykorzystujemy ją w komponencie `App`. Przyjmuje ona listę wszystkich wycieczek, a szczegółowe informacje o krajach pobiera z pliku `countries.json`, ale w stanie nie są zapisywane dane wszystkich krajów – tworzy zestawienie wyłącznie tych krajów, regionów i subregionów, do których oferujemy wycieczki.
- `countries.json` - each country has assigned a region and a subregion - that's why we create a summary in order to display countries (or trips) according to ths division.
- `pricing.json` - contains configuration of all trip's options.
- `orderRedux.js` - contains selectors to read whole order or just a few options. Action `SET_OPTION` is responsible for updating selected option value in the application state. Reducer that reacts on `SET_OPTION`
> W reducerze zwróć szczególną uwagę na sposób aktualizacji statePart poprzez rozpakowanie zarówno samego statePart, jak i statePart.options. Pamiętaj, że reducer nie może zmieniać statePart, ani żadnego obiektu (ani tablicy) pobranych z niego. Dlatego tworzymy nowe obiekty, rozpakowując do nich wartości otrzymane w statePart
- `parseTrips.js` - new version of the file responsible for generating initial object `order` in the application state (based on the option definition from `pricing.json`).





- `/layout` – responsible for layout of the page
- `/views` – contains components that are displayed with `routing` (subpages of the SPA)
- `/features` – fragments of views from `/views` (single box of trips list)
- `/common` – basic components used for various purposes such as buttons or pictures wrappers


## Packages
- `react-flexbox-grid` - provides:
* `Grid` used instead of `Container`. Don't nest another `Grid` inside `Grid`.
* `Row` - a row where `columns will be nested
* `Col` - columns that can be set up with different width property for various rdisplay resolution

[https://github.com/roylee0704/react-flexbox-grid]

[https://roylee0704.github.io/react-flexbox-grid/]

- `Section.js` - allows to use different variants of styles for page section
