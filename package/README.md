# @anjson/stats-charts

This package offers methods to get stats and to append charts to the DOM based on a collection of data.

## Installation

```javascript
  npm i @anjson/stats-charts
```

## Usage

<br>

### **StatsCollection**

A class instanciated with an array of numbers or an array of objects with at least a value-property.

```javascript
  import { StatsCollection } from '@anjson/stats-charts'

  const statsCollection = new StatsCollection([100, 110, 5, 12])

  console.log(statsCollection.getCollectionOfDataWithPercent())
  /*
  [
    { value: 100, percent: 0.44052863436123346 },
    { value: 110, percent: 0.4845814977973568 }, 
    { value: 5, percent: 0.022026431718061675 }, 
    { value: 12, percent: 0.05286343612334802 }  
  ]
  */
```

#### Properties

* **collectionOfData**

  The array of data set in the constructor.

<br>

<br>

#### Methods

* **constructor**

  Create an instance of the StatsCollection. The argument should be an array of numbers or an array of objects with at least a value-property.

  **arguments:** *number[ ] | object [ ]* <br>
  **throws:** *TypeError* <br>
  **returns:** *number*

  <br>

* **getMinimumValue**

  Get the minimum value in the collection of data. <br>
  **returns:** *number*

  <br>

* **getMaximumValue**

  Get the maximum value in the collection of data. <br>
  **returns:** *number*

  <br>

* **getDataWithMaximumValues**

  Get an array containing the data from the collection of data with the maximum values. <br>
  **returns:** *number[ ] | object[ ]*

  <br>

* **getDataWithMinimumValues**

  Get an array containing the data from the collection of data with the minimum values. <br>
  **returns:** *number[ ] | object[ ]*

  <br>

* **getAveregeValue**

  Get the average-value from the collection of data. <br>
  **returns:** *number*

  <br>

* **getCollectionOfDataWithPercent**

  Get a copy of the collection of data converted to array of objects with calculated number in percent-property. <br>
  **returns:** *object[ ]*

  <br>

* **getSumOfCollection**

  Get the sum of values in the collection of data. <br>
  **returns:** *number*

  <br>

  <br>

### **ChartDrawer**

A class instanciated with an array of numbers or an array of objects with at least a value-property. The class appends custom DOM-element to illustrate data in charts.

```html
  <div id="pie-chart"></div>
  <div id="bar-chart"></div>
```

```javascript
  import { ChartDrawer } from '@anjson/stats-charts'

  const chartDrawer = new ChartDrawer([{ title: 'a', value: 100 }, { title: 'a', value: 110 }, { title: 'a', value: 5 }, { title: 'a', value: 12 }])

  chartDrawer.appendPieChart('pie-chart', { title: true, percent: true, value: true })
  chartDrawer.appendBarChart('bar-chart', { title: true, percent: true, value: true, average: true })
```

#### Methods

* **constructor**

  Create an instance of the ChartDrawer. The argument should be an array of numbers or an array of objects with at least a value-property. <br>
  **arguments:** *number[ ] | object [ ]* <br>
  **throws:** *TypeError* <br>
  **returns:** *number*

  <br>

* **appendPieChart**

  Create an instance of the StatsCollection. The argument should be an array of numbers or an array of objects with at least a value-property. <br>
  **arguments:** <br>

   *  *__elementId__: (string) - The id of the DOM-element to append the chart to. The name should be a plain string without css-selector*

    *  *__options__: (object) -* <br>
      *__value__: (boolean) - If to display meta-data with the value.* <br>
      *__title__: (boolean) - If to display meta-data with the title.* <br>
      *__percent__: (boolean) - If to display percent with one decimal in the meta-data.*

  **throws:** *Error | TypeError* <br>

<br>

* **appendBarChart**

  Create an instance of the StatsCollection. The argument should be an array of numbers or an array of objects with at least a value-property. <br>
  **arguments:** <br>

   *  *__elementId__: (string) - The id of the DOM-element to append the chart to. The name should be a plain string without css-selector*

    *  *__options__: (object) -* <br>
      *__value__: (boolean) - If to display meta-data with the value.* <br>
      *__title__: (boolean) - If to display meta-data with the title.* <br>
      *__percent__: (boolean) - If to display percent with one decimal in the meta-data.* <br>
      *__average__: (boolean) - If to display a line in the bar-chart representing the average-value.*

  **throws:** *Error | TypeError* <br>

<br>

## Bugreport/Issues

- A collection larger than 25 results in not showing colors for the exceeding data due to limited amount of colors. (https://github.com/AnJson/stats-charts/issues/6)

[Test report](https://github.com/AnJson/stats-charts/blob/main/testrapport.md)

## Contribute

Work with the repository(https://github.com/AnJson/stats-charts) locally and make a pull-request to make contributions to the package.

Contribution with features like these are always more than welcome:

* More chart-types.
* More types of statistics.
* Update charts to handle more meta-data.
* Improve layout of charts.
* Bug-fixes.
etc.

