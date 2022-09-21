# @anjson/stats-charts

@anjson/stats-charts underlättar att utläsa statistik från en samling av data och även att illustrera statistiken grafiskt genom cirkel- och stapel-diagram i DOM.

Statistik som kan utläsas från en samling av data är:

* Fördelning i procent.
* Medelvärde.
* Max- och Min-värden, inklusive vilket data som innehöll Max- och Min-värdena.
* Summan av värden i samlingen.

Diagram som kan illustrera data från en samling är:

* Cirkel-diagram (pie-chart).
* Stapel-diagram (bar-chart).

[För användning av paketet läs här.](./package/README.md)

## Beroenden

**Paketet i helhet har inga externa beroenden av andra moduler eller ramverk.**

Inom paketet finns beroenden mellan ChartDrawer som har en associations-relation till StatsCollection- och Validator-klassen. ChartDrawer har även en dependencie-relation till Chart-modulen som är ett custom element.

Chart-modulen och chart-canvas -modulen som båda är custom elements, har en dependencie-relation till StatsCollection för att kunna göra uträkningar på data.

Även StatsCollection har en associations-relation till Validator-klassen.



## Testning

Testning av modulen har gjorts genom både manuell testning och automatisk enhetstestning.

[Läs testrapport](testrapport.md)

## Namngivning

| Namn och förklaring           |  Reflektion och regler från Clean Code |
|:-----------------------------:|:--------------------------------------:|
|  **collectionOfData** - attribut på *StatsCollection*-classen. |  **Make meaningful distinctions** - <br> *__Data__* säger inte så mycket om vad det är för något. I det här fallet så kan det vara två olika typer, en samling av objekt eller en samling av nummer. Eftersom klassen går ut på att hämta ut statistik från en samling av **data** så tycker jag ändå att namnet berättar att det är just samlingen av data. <br> <br> **Dont use noice-words** - <br> *__of__* är ett noice-word här och jag skulle nog egentligen döpa om attributet till **dataCollection**. |
| **appendPieChart(elementId, options)** - metodnamn i *ChartDrawer*-klassen. | **Use Solution Domain Names** - <br> Namnet tillsammans med argumenten berättar en tydlig historia för en programmerare om vad metoden gör då append används frekvent i *solution domain*. *"The method appends a pie-chart to the element with elementId and options is available"*. <br> <br> **Methods should have a verb or verb-sentence name** - <br> Detta är ett exempel på *__verb-sentence__* |
| **getCollectionOfDataWithPercent** - metod på *StatsCollection*-klassen. | **Use intention-revealing names** - <br> Namnet förklarar precis vad metoden gör och vad som returneras. <br> <br> **Pick one word per concept** - <br> *Collection* används här och i hela klassen(även i klassens namn) för att referera till samlingen av data, även *get* används i namnet på alla publika metoder då alla metoder handlar om att läsa ut något ur samlingen. |
| **ChartDrawer** - klassnamnet på en av de två publika klasserna.  | **Dont be cute** - <br> *diagram ritare* skulle kunna uppfattas som ett slarvigt uttryck eller slang för att generera diagram. *__ChartGenerator__* kanske skulle vara ett mer seriöst namn. Men eftersom klassen faktiskt använder Canvas API för att rita diagram så tycker jag ändå att det är ett passande namn. <br> <br> **Don't pun** - <br> Namnet skulle kunna tolkas som både *diagram ritare* och *diagram låda*, men eftersom målgruppen är programmerare i *problem domain* så tänker jag ändå att det är sällan man pratar om drawer som en låda i problemdomänen och att jag behåller namnet. |
| **getMaximumValue** - metod på *StatsCollection*-klassen. | **Make meaningful distinctions** - <br> *Value* är ett odistinkt *noice-word* som kan tyckas överflödigt. Men eftersom metoden returnerar ett enskilt maximalt värde till skillnad från klassens metod *__getDataWithMaximumValues__* som returnerar de objekt som innehåller det maximala värdet, så tycker jag namnet/namnen beskriver skillnaden bra. |

## Funktioner

| Metodnamn och länk eller kod  | Antal rader |  Reflektion                            |
|:-----------------------------:|:-----------:|:--------------------------------------:|
| **drawBarChart(statsCollection, showAverage)** - metod på klassen i *chart-canvas* custom element. |  17     | **Small** - <br> 17 rader kod är enligt boken en alldeles för lång funktion. I det här fallet handlar funktionen om att rita på canvas enligt Canvas API och då går det åt en hel del rader för att göra det enligt API:ets regler, att ställa in höjd, att flytta position för att rita på nästa ställe, att ställa in färg och att rita. Allt detta tycker jag ändå hör till samma abstraktionsnivå, att rita diagrammet. <br> <br> **Do one thing** - <br> Även om funktionen gör en sak, ritar ett stapeldiagram, så ser jag ändå att jag skulle kunna bryta ut koden i en if-sats som kontrollerar om medelvärdet ska ritas ut till en privat *drawAveregeLine* -method som sköter själva ritandet av medelvärdet. <br> <br> **Flag arguments** - <br> Metoden tar ett *flag argument* för att signalera om medelvärdet ska ritas ut eller inte. Ytterligare en signal på att metoden faktiskt gör mer än en sak, ritar ett diagram och ritar en medelvärdes-linje. |
| **#getBarAndGapWidth(statsCollection)** - privat metod på klassen i *chart-canvas* custom element. | 17 | **Use descriptive names** - <br> Metodnamnet beskriver vad som returneras men egentligen inget om vad som görs, här skulle kanske *calculateBarAndGapWidth(amountOfDataToIllustrate)* beskriva mer att en uträkning görs för att räkna ut bredden på staplar och bredden mellanrum baserat på den mängd data som ska illustreras görs. |
| **drawPieChart(statsCollection)** - metod på klassen i *chart-canvas* custom element. | 14 | **Small** - <br> Även här indikerar längden på att det kanske görs fler saker än en. Jag skulle kunna höja abstraktionsnivån och dela in funktionen mindre funktions-anrop sum utförs steg för steg. Först initiera canvas-data och sedan utföra själva ritandet. <br> <br> **Argument Objects** - <br> Här skulle jag egentligen behöva två argument, en *summa* för att bestämma vinklarna på cirkel-diagrammet och *data* som ska ritas ut, men här hör dessa två ihop och jag bestämde mig att ta in ett objekt av *StatsCollection*-typen där jag både har samlingen av data och kan få ut summan(som hör till/beräknas på samlingen av data). |
| **generateMetaDataElements(dataCollection, options)** - Privat metod på klassen i *chart* custom element. | 11 | **Blocks and indenting** - <br> Här (och i alla andra metoder) applicerar jag regeln att inte ha nästlade-block av kod. I de flesta fall gör jag det genom att göra metod-anrop. Här valde jag att göra kontrollen i loopen med hjälp av *ternary expressiont* för att inte skapa ett nästlat block, och för att inte göra ytterligare en metod som i sin tur ska ta två argument för att kunna göra kontrollen. Detta resulterar i en metod på låg abstraktionsnivå med sämre *__Readability__* eftersom *ternary expressions* inte är lika tydliga/pedagogiska som ett if-block. <br> Så här skulle egentligen också gjort metodanrop istället för att göra kontrollen i loopen. |
| **getCollectionOfDataWithPercent** - metod på StatsCollection-klassen. | 9 | **No side effects** - <br> Här returneras alltså samlingen av data *(collectionOfData)* men modifierad till en samling av objekt med ytterligare ett attribut som heter percent. Detta görs utan att manipulera den samling av data som finns i *collectionOfData*-attributet. Alltså utan sido-effekter. |

## Reflektion
