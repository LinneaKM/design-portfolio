---
Title: Rapport 2
Description: Rapport om laddningstider
Template: kmom
---

En analys av hemsidors laddningstid
=======================

Syftet med denna rapport är att ta reda på laddningstiden från tre olika hemsidor. Hemsidorna kommer även att analyseras för att se om det finns förbättringspotential när det kommer till laddningstid och användbarhet.

Urval
-----------------------

Inför denna rapport har tre hemsidor från tre olika mobiltillverkare valts ut. Detta område valdes ut då hemsidor inom teknikområdet oftast innehåller mycket bilder och animationer, vilket gör det intressant för en uppgift där laddningstid ska analyseras. De tillverkare som valdes ut har sin grund i att jag själv haft mobiler av dessa märken. 

De hemsidor som har valts ut för denna rapport är:
* <strong>Apple</strong> - <a href="https://www.apple.com/se/">www.apple.com</a>
* <strong>OnePlus</strong> - <a href="https://www.oneplus.com/se">www.oneplus.com</a>
* <strong>Oppo</strong> - <a href="https://www.oppo.com/en/">www.oppo.com</a>

Metod
-----------------------

De verktyg som har används under rapportens gång är:
* <strong>Chrome Devtools</strong> - Detta verktyg användes för att mäta sidans laddningstid, totala storlek och antalet resurser.
* <strong>Google PageSpeed</strong> - Detta verktyg användes för att mäta och betygsätta sidans prestanda, både på desktop och mobilvy. Det finns tre olika nivåer: dålig (0-49), behöver förbättring (50-89) och bra (90-100).

Resultat
-----------------------
Den rådata som samlades in för denna rapport kan ni hitta <a href="https://docs.google.com/spreadsheets/d/1rK26ZolEYmJl2i91alGsOnv8Zh_RZfd3hknKUxwPuj8/edit?usp=sharing" target="_blank">här</a>.

### Apple

<picture class="webbimg">
    <source media="(min-width: 668px)" srcset="%base_url%/image/apple.png?save-as=jpg">
    <source media="(min-width: 376px)" srcset="%base_url%/image/apple.png?w=667&save-as=jpg">
    <img src="%base_url%/image/apple.png?w=375&save-as=jpg" alt="Apples hemsida">
</picture>



På Apples <a href="https://www.apple.com/se/" target="_blank">startsida</a> fick de enligt Google PageSpeed ett betyg på 79 på desktop och 42 på mobil. Detta innebär att både desktop- och mobilvyn behöver förbättras. Mobilvyn klassades som dålig. När det kommer till laddningstid för sidan landade det i snitt på 0,68 sekunder. Sidan laddade in 49 resurser och sidan har en total storlek på 3,9MB. 

Därefter testades Apples <a href="https://www.apple.com/se/iphone/" target="_blank">produktsida</a>. Här gav Google PageSpeed betyget 63 på desktopvyn och återigen 42 på mobil-vyn. Även här krävs det förbättring och mobilyn räknas fortfarande som dålig. Denna sidas laddningstid landade ett snitt på 0,7 sekunder. Här är antalet resurser 75 och den totala storleken på sidan är 4,3MB.

Sist mättes Apples <a href="https://support.apple.com/sv-se" target="_blank">supportsida</a>. Här fick desktopvyn betyget 73 och mobilvyn fick betyget 38. Snittet på laddningstiden hamnade på 0,55 sekunder. Antalet resurser på denna sida är 51 och den totala storleken på sidan är 3,7MB.

För att förbättra sina betyg skulle Apple i första hand arbeta lite med sina bilder, det största problemet ligger i mobilvyn. Apple använder sig en del av png-filer och ett förbättringsförslag skulle vara att konvertera dem till jpg-filer. Bilder komprimeras mer med jpg, vilket skulle kunna dra ner på storleken på sidan. Detta är speciellt viktigt på mobilvyn för att låta användarna spara data när de är inne på sidan på mobilen. Bilderna behöver helt enkelt optimeras mer för mobilanvändare. Apples sidor verkar också ha lite kod (både CSS och JavaScript) som inte används. Detta skulle också kunna tas bort för att öka prestandan på sidan.

### OnePlus

<picture class="webbimg">
    <source media="(min-width: 668px)" srcset="%base_url%/image/oneplus.png?save-as=jpg">
    <source media="(min-width: 376px)" srcset="%base_url%/image/oneplus.png?w=667&save-as=jpg">
    <img src="%base_url%/image/oneplus.png?w=375&save-as=jpg" alt="OnePlus hemsida">
</picture>


När Oneplus <a href="https://www.oneplus.com/se" target="_blank">startsida</a> mättes med Google PageSpeed fick deras desktopvy betyget 82 och deras mobilvy fick 23 i betyg. Startsidan innehåller 48 resurser och den totala storleken på sidan ligger på 2.2MB. Sidan laddningstid hamnade i snitt på 0,78 sekunder.

Oneplus <a href="https://www.oneplus.com/se/store/phone?from=head" target="_blank">produktsida</a> fick betyg 70 på desktopvyn och 28 på mobilvyn när den mättes med Google PageSpeed. Sidan innehåller 57 resurser och den totala storleken på sidan är 2,3MB. I snitt hamnade sidans laddningstid på 0,71 sekunder. 

På OnePlus <a href="https://www.oneplus.com/se/support?from=head" target="_blank">supportsida</a> fick desktopvyn betyget 57 och mobilvyn fick betygen 23 när Google PageSpeed mätte. Sidan laddade i snitt på 0,61 sekunder. Supportsidan innehöll 51 resurser och den totala storleken på sidan var 1,7MB. 

Alla OnePlus sidor följer alltså samma mönster som alla Apples sidor. Desktopvyerna har förbättringspotential medan mobilvyerna anses som dåliga när det kommer till Google PageSpeed betygsättning.

Även OnePlus använder sig av en del png-filer som skulle kunna konverteras till jpg-filer för att öka prestandan på sidan. Som Apple har OnePlus fått dåliga betyg av PageSpeed på deras mobilvyer. Detta är förmodligen för att de inte ändrar storlek och kvalité på bilderna. Ett annat förslag skulle även kunna vara att ta bort lite resurser från mobilvyn som inte behövs. Även här finns kod som inte används.

### Oppo

<picture class="webbimg">
    <source media="(min-width: 668px)" srcset="%base_url%/image/oppo.png?save-as=jpg">
    <source media="(min-width: 376px)" srcset="%base_url%/image/oppo.png?w=667&save-as=jpg">
    <img src="%base_url%/image/oppo.png?w=375&save-as=jpg" alt="Oppos hemsida">
</picture>

På Oppos <a href="https://www.oppo.com/en/" target="_blank">startsida</a> fick de enligt Google PageSpeed betyget 44 på desktopvyn och betyget 20 på mobilvyn. Detta innebär att prestandan på både desktopvyn och mobilvyn anses som dåliga enligt Google PageSpeed. Startsidan hade en laddningstid på 1,7 sekunder. Sidan laddade in 73 resurser och sidans totala storlek låg på 8,8MB.

När det kom till Oppos <a href="https://www.oppo.com/en/smartphones/" target="_blank">produktsida</a> fick den betyget 47 på desktopvyn samt betyg 7 på mobilvyn. Även här anses båda vyerna som dåliga enligt Google PageSpeed. Sidans laddningstid låg på 1,92 sekunder och den totala storleken på sidan var 8,4MB.

Oppos <a href="https://support.oppo.com/en/" target="_blank">supportsida</a> fick enligt Google PageSpeed 46 i betyg på desktopvyn och 33 i betyg för mobilvyn. I snitt låg laddningstiden för sidan på 1,3 sekunder. Antal resurser landade på 102 och den totala storlekan av sidan låg på 13,5MB.

Alla Oppos sidor som har mätts är väldigt tunga och innehåller väldigt många resurser. Ett förbättringsförslag skulle vara att minska antalet resurser och optimera bilderna, både för desktopvyn samt mobilvyn. Även i detta fall finns kod som inte används samt att de skulle kunna minska storleken på sidorna genom att minifiera deras filer. 

Analys
-----------------------

Apple och Oneplus låg väldigt nära varandra när det kom till desktopvyn. Apple erhöll lite bättre betyg än OnePlus när det kom till mobilvyn. Trots att Apples sidor var något tyngre storleksmässigt och hade något fler resurser än OnePlus var de ändå lite snabbare när det kom till laddningstiden. Klart sämst var Oppos hemsida då var väldigt mycket tyngre storleksmässigt. Detta gjorde att laddningstiden var ganska mycket längre än för Apple och OnePlus. Alltså är det Apple som utses till vinnare i detta test.

### Rangordning baserat på PageSpeed (Desktop och Mobil)
1. Apple
2. OnePlus
3. Oppo

Det som är det vanligaste förbättringsförslaget bland dessa tre sidor som har analyserats är optimering av bilder. Alla tre sidor använder sig av en del png-bilder. Dock kan detta bero på att de behöver använda sig av transparens på produktbilderna bland annat. Men de skulle kunna reglera storleken på bilderna mer, speciellt på mobilvyerna då allas mäningar var dåliga när det kom till mobilvyn. Sidorna innehåller även alla en del oanvänd kod som också skulle tas bort. Men sammanfattningsvis skulle alla sidor behöva jobba mer på deras mobilvyer för att förbättra dataåtgången för mobilanvändare.  

Då vi matas med snabba hemsidor hela tiden blir det lätt att man blir kräsen. Efter mitt test skulle jag säga att en godkänd laddningstid på en sida, idag, skulle vara under 1,5-2 sekunder. Alla sidor förutom Oppos (till viss del) klarar av det måttet. Jag tror dock att det beror på att jag först analyserade två väldigt snabba sidor, innan jag analyserade Oppos sidor. Detta gjorde att jag snabbt blev otålig och trodde att mitt internet hade gått ner en aning när jag mätte Oppos sidor. Jag tror att en långsammare sida (än konkurrenternas) skulle göra göra att man tappar kunder till just konkurrenter, om deras sidor är enklare att använda.

Referenser
-----------------------

* [Apple Startsida](https://www.apple.com/se/).
* [Apple Produktsida](https://www.apple.com/se/iphone/).
* [Apple Supportsida](https://support.apple.com/sv-se).
* [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/).
* [OnePlus Startsida](https://www.oneplus.com/se).
* [OnePlus Produktsida](https://www.oneplus.com/se/store/phone?from=head).
* [OnePlus Supportsida](https://www.oneplus.com/se/support?from=head).
* [Oppo Startsida](https://www.oppo.com/en/).
* [Oppo Produktsida](https://www.oppo.com/en/smartphones/).
* [Oppo Supportsida](https://support.oppo.com/en/).

Övrigt
-----------------------

Denna rapport är skriven av Linnéa Karnel Mjörnheim.