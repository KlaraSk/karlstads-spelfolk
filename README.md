# Karlstads spelfolk

Detta är mitt första hobbyprojekt. Jag ser det som en chans att utveckla mina kunskaper inom react och databasmodellering. Målet är att bygga en resposiv webb som spelmanslaget kan använda för att lyssna på övningsfiler under repetetioner. Sidan ska även innehålla information om gruppen.


## Innehåll
- Navigation mellan olika sidor
- Footer med länkar till relaterade sidor
- Startsida som hämtar filer från mitt API och presenterar dem i en lista.
- Om oss-sida som på sikt kommer att innehålla mer information
- Bli medlem-sida som på sikt kommer att innehålla mer information


## Tekniker som används

- React, grunden i projektet
- React Router (v6), routing med nested routes och RootLayout för gemensam struktur.
- useSound, används för att hantera ljudfiler
- ExpressJS, används för backend och API-routing
- Mongoose
- Styled components
- Axios
- MUI material
- Responsivitet med media queries
- Variabler för typsnitt och färger



## Vidareutveckling

I nästa steg kommer sidorna Om spelmanslaget och Bli medlem att fyllas med innehåll. 


### Ytterligare funktioner i pipeline:

- Innehåll till övriga sidor (om/bli medlem)
- Filtrering på t ex låttyp, låtskapare etc.
- Sökfunktionalitet
- Inloggning för admins:
  - Kunna lägga upp, ändra och ta bort låtar ur databasen
  - Kunna skapa egna listor, t ex inför spelningar
- Inloggning för användare:
  - Kunna skapa egna listor för individuell övning.