# Browser Technologies @cmda-minor-web 20-21

// Robuuste, toegankelijke websites ontwerpen en maken … //

In het vak Browser Technologies gaan we onderzoeken wat Progressive Enhancement is en hoe je dit kan toepassen om goede, robuuste, toegankelijke websites te maken. Voor iedereen. Het web is voor iedereen, in dit vak leer je hoe je daarvoor kan zorgen.

## Opdrachten

het vak bestaat uit 3 opdrachten. In week 1 werken we aan opdracht 1 en 2. Vanaf week 2 werken we aan de eindopdracht.

### Opdracht 1 🛹 NPM install Progressive- enhancement

Voor de eerste opdracht gaan we onderzoeken wat Progressive Enhancement is.

- [Opdracht 1 Uitleg - NPM install Progressive Enhancement](course/Opdracht1.md)

### [**Uitwerking opdracht 1**](https://web-technologies.netlify.app/)

<br />

### Opdracht 2 💔 Breek het Web

Voor opdracht 2 ga je proberen het Web te laten 'breken' door (browser) features bewust uit te zetten. Wat gebeurt er als images, custom fonts, JavaScript, kleur, breedband internet niet optimaal werken? 

- [Opdracht 2 Uitleg- Breek het Web](course/Opdracht2.md)

### [**Uitwerking opdracht 2**](https://github.com/tsjuusmei/browser-technologies-2021/wiki/Opdracht-2)

<br />

### De eindopdracht ✨ Progressive Enhanced Browser Technologie

Voor de eindopdracht ontwerp en maak je een interactieve toepassing volgens het principe van Progressive Enhancement. Zorg dat alle gebruikers, met alle browsers, in iedere context de toepassing zo goed mogelijk te zien, horen en/of voelen krijgen. De meest 'enhanced' versie is 'delightful UX', mooi en prettig om te gebruiken.

- [De eindopdracht Uitleg - Progressive Enhanced Browser Technologie](course/Eindopdracht.md)

## Live Link

https://browsertech-guus.herokuapp.com/login

## Case

### Enquête Minor Web Design & Development

*Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.*

### Vereisten voor de Enquete

- Studentgegevens (naam + nummer) verplicht
- Per vak 
	- naam
	- docent(en)
	- weken waarin je het vak deed
	- beoordeling op schaal 1-10 van
	- lesstof (hoe moeilijk is het)
	- uitleg (hoe duidelijk is het uitgelegd)
	- eigen inzicht (hoe goed snap je het)
	
- Validatie: alles moet zijn ingevuld voordat je verder mag met het formulier. Geef duidelijke foutmeldingen.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Core functionaliteit

Enquêtes voor de minor kunnen invullen, valideren en later kunnen afmaken.

## Wireflow

### Start scherm

![](https://i.imgur.com/9igutkl.jpeg)

### Dashboard scherm

![](https://i.imgur.com/QPY4eQr.jpeg)

### Enquête scherm

![](https://i.imgur.com/PZeweUT.jpg)

## Vier lagen

### Functional / Reliable

Dit is de laag waarbij, in mijn project, alleen HTML wordt gebruikt. Het ziet er visueel niet aantrekkelijk uit, maar behoud de hoofdfunctionaliteit; kunnen inloggen, het invullen van enquêtes en deze kunnen opslaan om later verder te gaan.

### Usable

Bij deze laag komt CSS in werking. Hierdoor is de user experience veel beter, omdat het er logischer, beter en mooier uit ziet. De styling is zodanig toegepast dat ook functionaliteiten veel duidelijker zijn en beter voor gebruik.

### Pleasurable

De pleasurable laag bevat allemaal extra functionaliteiten die handig zijn, maar niet persee nodig. Ik heb hier bijvoorbeeld een slider toegevoegd in het formulier, en ik heb de vragen achter elkaar laten verschijnen wanneer JavaScript aan staat binnen de browser.

## Enhancements

### Slider

In elke enquête staat een vraag met wat voor cijfer de student het vak zou geven. Deze wordt zonder JavaScript getoond als een tekstvakje waarin je een cijfer moet typen of kun je omhoog of omlaag klikken. Met JavaScript heb ik hier een slider toegevoegd, waardoor het aanduiden van een cijfer makkelijker en mooier wordt.

Zie [hier](https://github.com/tsjuusmei/browser-technologies-2021/blob/master/public/scripts/slider.js) de code voor de slider.

### Formulier in stappen

De enquête bestaat uit zeven vragen. Zonder JavaScript worden deze allemaal gelijk getoond, maar met JavaScript wordt de volgende vraag na elk gegeven antwoord getoond. Voor al ingevulde enquêtes werkt dit hetzelfde, maar als er al een gegeven antwoord is, dan staat de volgende vraag er al.

Zie [hier](https://github.com/tsjuusmei/browser-technologies-2021/blob/master/public/scripts/enhenq.js) de code voor het formulier in stappen.

## Tests

### Desktop

Voor desktop ga ik de volgende browsers testen:
- Google Chrome
- Firefox

**Google Chrome**

<img src="https://i.imgur.com/1SWAVVT.png" width="1100"/>

**Firefox**

<img src="https://i.imgur.com/F7V5acw.png" width="1100"/>

### Mobile

Voor mobile ga ik de volgende browsers testen:
- iOS: Google Chrome
- Android: Firefox

**iOS,Google Chrome**

<img src="https://i.imgur.com/769HxrG.png" width="400"/> 

**Android, Firefox**

<img src="https://i.imgur.com/FdCJAY0.png" width="400"/>

### Testverslag

Binnen de tests test ik de core functionaliteiten en de color vision deficiencies. Bij elke test werkte de website snel en prima qua functionaliteit. De styling veranderd alleen helaas wel per browser en/of device. Zo ziet de font `monospace` er anders uit op Google Chrome dan op Firefox. Dit is gelukkig geen grote issue geweest, en heb ook in mijn CSS een back-up font `sans-serif` genoteerd. Ook de radio buttons en sliders zien er per browser en device verschillend uit. Deze waren in alle gevallen nog goed bruik- en zichtbaar. Ook de progressive enhancements werkten op mijn geteste devices nog prima.

## Installation

### Clone the repository

`git clone https://github.com/tsjuusmei/browser-technologies-2021.git`

### Navigate to foler

`cd browser-technologies-2021`

### Install packages

`npm install`

### Run application

`npm run start`

## Extra tijd

### Wat zou ik hebben toegevoegd als ik meer tijd had voor dit project?

Een extra enhancement die ik zou toevoegen zou toch wel een progress bar bij elke enquête zijn. Hiermee geef je gemakkelijk aan hoe ver een gebruiker in een enquête is, wat heel handig is in samenwerking met mijn progressive enhanvement die de enquête in stappen laat zien.


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
