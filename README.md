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
|       |         |

## Reflektion
