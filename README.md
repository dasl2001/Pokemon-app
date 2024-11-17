# Individual-Assignment-Frontend-2-JavaScript-bibliotek-och-ramverk
Individual Assignment for the course Frontend 2 - JavaScript - bibliotek och ramverk

Assignment:  
Övningsuppgift - Pokemon Application
Er uppgift är att skapa ett gränssnitt där man kan få ut information om olika Pokemon.
API Endpoint: https://pokeapi.co/api/v2/pokemon?limit=151
Komponenter: 
<App>
<PokemonApplication>
<Pokemon>
Vid start av applikationen, ska användaren se en knapp med texten “Start Pokemon App”.
Vid klick på knappen, ska <PokemonApplication> renderas i DOM:en.
När <PokemonApplication/> renderas, ska det göras ett anrop mot API:et för att hämta data för samtliga 151 Pokemon, och spara datat i state.
I <PokemonApplication> ska ni sedan skapa dropdown-lista med samtliga namn på alla Pokemon som hämtats. Användaren ska kunna välja en Pokemon i dropdown-listan, och sedan klicka på knappen för att hämta data för sin valda Pokemon.
När användaren hämtar data för en Pokemon, rendera en <Pokemon>-komponent.
<Pokemon>-komponenten ska visa ut följande data för användarens val av Pokemon:
Namn
Bild på Pokemon
Typ/Typer din pokemon har (dvs “types” i API:et)
Vikt
Längd

Information about the program: https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/
