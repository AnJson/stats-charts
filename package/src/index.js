// TODO: Make this the entry-point for npm.

import { StatsCollection } from './stats/StatsCollection.js'

try {
  // const data1 = [255, 13, 25, 255, 18, 1]
  // const data2 = [{ name: 'Anders', value: 25 }, { name: 'Sigrid', value: 130 }, { name: 'Svante', value: 130 }, { name: 'Emma', value: 130 }]
  const data3 = [10, 12, 3, 18]

  // const statsObject1 = new StatsCollection(data1)
  // const statsObject2 = new StatsCollection(data2)
  const statsObject3 = new StatsCollection(data3)

  console.log(statsObject3.getCollectionOfDataWithPercent())

  /* console.log(statsObject1.getCollectionOfDataWithPercent())
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
