**En responsiv webbapplikation byggd med moderna JavaScript-ramverk som låter användare utforska detaljerad information om de första 151 Pokémon.**
Detta projekt är en individuell uppgift i kursen **Frontend 2 – JavaScript-bibliotek och ramverk** vid Nackademin, Webbutvecklare fullstack open source.

---

## Projektöversikt
Syftet med projektet är att bygga ett interaktivt gränssnitt som hämtar och visar data om olika Pokémon via [PokéAPI](https://pokeapi.co/api/v2/pokemon?limit=151). Användaren kan bläddra bland Pokémon från första generationen och se detaljerad information om varje individ.

---

## Funktioner
- **Sökfunktion**: Sök Pokémon via namn eller ID.
- **Detaljerad information**: Visa typ, förmågor, statistik m.m.
- **Responsiv design**: Anpassad för både mobil och dator.
- **Snabb prestanda**: Byggd med moderna verktyg för snabb laddning och smidiga interaktioner.

---

## Använda tekniker
- **Ramverk**: [React](https://reactjs.org/) 
- **Byggverktyg**: [Vite](https://vitejs.dev/)
- **Stilmall**: CSS Modules / Tailwind CSS 
- **API**: [PokéAPI](https://pokeapi.co/)
- **Paketmanager**: npm

---

## Projektstruktur
```plaintext
pokemon-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md

