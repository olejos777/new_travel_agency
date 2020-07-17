## TDD - Test Driven Development -
Podejście w którym najpierw pisze się testy a dopiero potem funkcjonalność, którą te testy sprawdzają.

Frameworki odpowiadają za konfigurację środowiska testowego, sugerują sposób, w jaki testy powinny być pisane, niektóre dostarczają również funkcje do **asercji**, czyli porównywania wyniku testu z oczekiwanym rezultatem. Odpowiadają też za uruchamianie testów oraz przedstawienie wyników działania testów w terminalu. W połączeniu z innymi narzędziami potrafią też wygenerować raport na temat ilość kodu, który jest pokryty testami (tzw. __coverage report__), a nawet wskazać konkretne linijki kodu, które nie są przetestowane!

W przypadku __Reacta__, bardzo często używana kombinacją jest **Jest** i **Enzyme** (czytaj: __dżest__ i __enzajm__). Pierwszy z nich jest frameworkiem służącym do uruchamiania testów, asercji (sprawdzania, czy wynik testu spełnia oczekiwania), oraz mockowania. Natomiast **Enzyme** jest biblioteką, która ułatwi nam pisanie testów, w tym renderowanie komponentów, symulowanie eventów, czy przeszukiwanie symulowanego drzewa DOM.


## Frameworki testowe:
### `Mocha`
`npm install --global mocha`
or as a development dependency for your project:
`npm install --save-dev mocha`

Mocha web page [https://mochajs.org/]

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.


### `Jasmine`
Add Jasmine to your package.json
`npm install --save-dev jasmine`

Initialize Jasmine in your project
`npx jasmine init`

Set jasmine as your test script in your package.json
``` json
"scripts": { "test": "jasmine" }

```

Run your tests
`npm test`

Jasmin web page [https://jasmine.github.io/pages/getting_started.html]

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.
Low overhead, jasmine-core has no external dependencies.
Comes out of the box with everything you need to test your code.
Run your browser tests and Node.js tests with the same framework.


### `Jest`

`npm install --save-dev jest`

Jest web page [https://jestjs.io/docs/en/getting-started.html]

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.
Jest is well-documented, requires little configuration and can be extended to match your requirements.
It works with projects using: `Babel`, `TypeScript`, `Node`, `React`, `Angular`, `Vue` and more!
Jest aims to work out of the box, config free, on most JavaScript projects.
Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.
Tests are parallelized by running them in their own processes to maximize performance.
From `it` to `expect` - Jest has the entire toolkit in one place. Well documented, well maintained, well good.
By ensuring your tests have unique global state, Jest can reliably run tests in parallel. To make things quick, Jest runs previously failed tests first and re-organizes runs based on how long test files take.
Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.
Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope. You can use mocked imports with the rich Mock Functions API to spy on function calls with readable test syntax.


### `QUnit` -
`npm install --save-dev qunit`

QUnit web page [https://qunitjs.com/]

The powerful, easy-to-use JavaScript testing framework.
Easy, zero configuration setup for any Node.js project and minimal configuration for Browser-based projects.
Tests can be run anywhere; Node, your browser, even inside a Web Worker. Test your code where it runs.
Flexible APIs for custom assertions, runners, and reporters mean you can extend QUnit to fit your needs.

### `Tape`


## Rodzaje testów

### Poziom 1: testy jednostkowe
**Unit testing** polega na testowaniu małego fragmentu kodu. Może to być jedna funkcja czy jeden komponent. Dla przykładu, może to być pole wyszukiwania, w którym testy będą sprawdzać, czy wpisanie tekstu wywoła funkcję przekazaną w propsie `changeSearchPhrase` z odpowiednimi argumentami.

Na tym poziomie nie interesuje, nas po co użytkownik wpisuje tekst w inpucie, co ma się wtedy stać z resztą aplikacji, itd. Sprawdzamy tylko, czy ten komponent robi to, co powinien.

Mówimy tutaj o komponentach, ale w ten sam sposób możemy testować np. reducery, funkcje pomocnicze, etc.

Ten poziom testów wykonuje się w separacji od reszty aplikacji, co znaczy, że nasz test będzie przekazywał komponentowi jego propsy i sprawdzał, czy komponent odpowiednio je wykorzystuje. Oznacza to między innymi, że komponent nie będzie korzystał z reduksowego stanu, tylko z danych przekazanych mu w teście.

To podejście jest niezbędne, aby test nie był zależny od danych w stanie aplikacji. Pozwala również przetestować działanie komponentu dla różnych scenariuszy – np. jeśli komponent `Trips` otrzyma pustą listę wycieczek.


### Poziom 2: testy integracyjne
Na tym poziomie sprawdzamy, jak komponenty współpracują ze sobą. To w tym wypadku sprawdzalibyśmy, czy wpisanie tekstu w polu wyszukiwania poprawnie przefiltruje listę wycieczek.

**Integration testing** pozwala uniknąć sytuacji, w których poszczególne komponenty działają dobrze, ale nie współpracują ze sobą poprawnie. Weźmy za przykład sytuację, w której pole wyszukiwania zapisuje wpisany tekst w stanie aplikacji jako `searchPhrase`, ale lista wycieczek korzysta z pola `filterPhrase`. Może się to łatwo zdarzyć, jeśli nad aplikacją pracuje kilku programistów. Oba komponenty działają poprawnie same w sobie, ale nie będą ze sobą współpracować.

### Poziom 3: testy end-to-end
Inaczej zwane testami systemowymi, polegają na sprawdzaniu scenariuszy zachowań użytkowników. W tym podejściu, testy symulują zachowania osoby korzystającej ze strony – czyli taki test mógłby np. otwierać stronę główną, klikać link __Trips__, klikać w pierwszą wycieczkę, wybrać wycieczkę dla 3 osób z prywatnym basenem, podać nazwisko i numer telefonu i kliknąć guzik wysłania zamówienia, a na końcu oczekiwać, że pojawi się strona z potwierdzeniem.

Dzięki temu poziomowi testów sprawdza się już nie tylko czy komponenty poprawnie działają i współpracują ze sobą, ale czy cała aplikacja funkcjonuje prawidłowo. Na tym etapie można wychwycić kolejne błędy – np. niedziałające linki do podstron czy problemy z wysyłaniem formularza.

## Instalacja Jest i Enzyme
1. `npm install -D babel-jest@24.8.0 enzyme@3.9.0 enzyme-adapter-react-16@1.12.1 identity-obj-proxy@3.0.0 jest@24.8.0 jest-css-modules@2.0.0 jest-environment-jsdom-fourteen@0.1.0 jest-resolve@24.8.0 jest-watch-typeahead@0.3.1 jest-prop-type-error@1.1.0 react-test-renderer@16.8.6`

2. W pliku package.json
```json
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage --colors"
```
Pierwszy z nich posłuży do jednorazowego uruchomienia wszystkich testów, drugi do ciągłego uruchamiania testów w czasie pracy nad projektem, a trzeci pokaże nam stopień pokrycia kodu przez testy.

3. Doda pliki konfiguracyjne do głównego katalogu projektu.
`enzyme.config.js`
`jest.config.js`

4. Ostatnia zmiana, która będzie nam potrzebna przed rozpoczęciem pisania testów, będzie w pliku `.eslintrc`. W sekcji `env` dodaj:
```json
"jest": true
```

### Pierwszy test
`npm run test:watch` - Po tej komendzie testy będą wykonywane automatycznie po wprowadzeniu zmian w plikach.
`npm run test` - uruchamia pojedynczy test.

`describe` służy do zgrupowania kilku testów. Tej grupie nadajemy opis "Component Hero" w pierwszym argumencie. Drugim argumentem jest funkcja strzałkowa, której zawartość będzie zawierała poszczególne testy.

Funkcja `it` służy do zdefiniowania pojedynczego testu, którego opis znajduje się w pierwszym argumencie – "should render without crashing".

Kod testu składa się z dwóch linijek:

W stałej `component` zapisujemy wynik funkcji `shallow`, która renderuje dla nas ten komponent.
Funkcja `expect` służy do tego, aby porównywać podany jej argument z oczekiwanym wynikiem.

`shallow` - Enzyme zawiera bibliotekę JSDOM, która symuluje drzewo DOM tworzone przez przeglądarkę. Pozwala nam to na niby-renderowanie komponentów do kodu JSX! Co więcej, funkcja shallow renderuje tylko komponent, który jej przekazujemy, bez renderowania komponentów zawartych w nim.
