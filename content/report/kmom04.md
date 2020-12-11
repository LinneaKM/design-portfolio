---
Title: Kmom04
Description: Fourth assignment
Template: kmom
---

 Kursmoment 4
======

## Färg

### Kommentera kort om skrivuppgiften, något som är värt att nämna från arbetet med den?

Jag tyckte att det var intressant att analysera hemsidorna. Dock är det väldigt svårt då speciellt färg, kan uppfattas väldigt olika mellan olika personer. Jag var också lite osäker på hur mycket man behövde skriva och hur djupt i analyserna man behövde gå. Enligt genomgångarna och kraven kändes det inte som att man behövde skriva så mycket under varje rubrik. Vad gäller mitt arbete tycker jag att jag fick ett ganska intressant resultat med att alla sidor jag analyserade oftast använde sig av vitt, gråskalor och svart. Förmodligen för att lägga fokus på deras tidigare projekt.


### Vilket färgschema valde du till ditt tema och hur valde du att använda färgerna (mer eller mindre eller lika mycket av alla färger)?


Jag hade redan tänkt på det en del innan denna uppgift, så jag valde att behålla mitt tidigare tema som mitt “ljusa” tema. Jag hade alltså valt ett monokromatiskt färgschema. Grönt i några olika typer av nyanser och kontraster. Jag reglerar detta en del med hjälp av SASS lighten och darken. På det ljusa temat valde jag att ha en mörkare grön som navbar och footer. Detta för att locka besökaren. På det mörka temat följde jag exemplet från css-tricks guiden om “dark themes”, att färgen skulle vara lite ljusare ju “närmare” den var användaren. Så jag har tänkt lite i lager, att det som ligger lite djupare från användaren har en mörkare nyans. 


### Valde du att jobba med accentfärg och isåfall hur?


Ja jag valde en “guldig” färg som accentfärg. Jag tyckte att den poppade lite från den gröna färgen, både på mitt mörka och ljusa tema. Jag valde främst att använda den på mina nav-länkar samt mina övriga länkar. Detta för dra besökarens uppmärksamhet mot dem, så att man vet att de går att trycka på. På mitt ljusa tema valde jag dock att göra den lite mörkare, så att den skulle synas bättre mot min ljusa bakgrund. 


### Hur valde du att lösa ditt dark theme? Gjorde du en kopia på ditt vanliga tema? Eller löste du det med imports?


Jag hade ganska många färg-variabler sedan innan vilket var väldigt skönt. Jag löste det genom att göra en ny SASS-fil för mitt nya mörka tema, importera de filer jag behövde och satte sedan nya värden på mina gamla variabler. Vissa färgval hade jag inte löst så snygg från början, så jag fick i detta stadium skapa lite nya variabler och hoppa tillbaka till min layout-fil och fixa lite där. Men jag tycker att det ändå gick väldigt smidigt att byta ut färgerna när man väl använde sig av variabler.


### Vilken är din TIL för detta kmom?

Min TIL för denna vecka är bland annat att jag har förstått vikten av att använda sig av variabler i sina SASS-filer. Det gjorde att denna veckas kmom gick väldigt mycket smidigare. Det hade nog tagit väldigt mycket längre tid att leta efter varje element som hade färg och byta ut den. 

Jag har även lärt mig väldigt mycket om mörka teman och vad man behöver tänka på när man skapar ett. Till exempel att saker som är närmare användaren bör vara i en ljusare nyans, att man bör dra ner ljusstyrkan på bilderna samt att inte ha så hög kontrast på text.
