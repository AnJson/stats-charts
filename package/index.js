// TODO: Make this the entry-point for npm.

// import { StatsCollection } from './stats/StatsCollection.js'
import { ChartDrawer } from './charts/ChartDrawer.js'

try {
  // const data1 = [255, 13, 25, 255, 18, 1, -1]
  const data2 = [{ name: 'Anders', value: 25 }, { name: 'Sigrid', value: 130 }, { name: 'Svante', value: 130 }, { name: 'Emma', value: 130 }]

  // const statsObject1 = new StatsCollection(data1)
  // const statsObject2 = new StatsCollection(data2)
  const chartObject = new ChartDrawer(data2)

  chartObject.drawPieChart('#pie-container')

/*
  console.log(statsObject1.getCollectionOfDataWithPercent())
  console.log('----------------- Averege ------------------------')
  console.log(statsObject1.getAveregeValue())
  console.log('----------------- Maximum ------------------------')
  console.log(statsObject1.getDataWithMaximumValues())
  console.log('----------------- Minimum ------------------------')
  console.log(statsObject1.getDataWithMinimumValues())
  console.log('---------------------------------------------------')
  console.log('---------------------------------------------------')
  console.log(statsObject2.getCollectionOfDataWithPercent())
  console.log('----------------- Averege ------------------------')
  console.log(statsObject2.getAveregeValue())
  console.log('----------------- Maximum ------------------------')
  console.log(statsObject2.getDataWithMaximumValues())
  console.log('----------------- Minimum ------------------------')
  console.log(statsObject2.getDataWithMinimumValues()) */
} catch (error) {
  console.error(error)
}
