import { Stats } from '../stats/Stats.js'

try {
  const data1 = [255, 13, 25, 255, 18, 1, -1]
  const data2 = [{ name: 'Anders', value: 25 }, { name: 'Sigrid', value: 130 }, { name: 'Svante', value: 130 }, { name: 'Emma', value: 130 }]
  
  const statsObject1 = new Stats(data1)
  const statsObject2 = new Stats(data2)
  
  console.log(statsObject1.getCollectionOfDataWithPercent())
  console.log(statsObject1.getAveregeValue())
  console.log(statsObject1.getDataWithMaximumValues())
  console.log('---------------------------------------------------')
  console.log(statsObject2.getCollectionOfDataWithPercent())
  console.log(statsObject2.getAveregeValue())
  console.log(statsObject2.getDataWithMaximumValues())
} catch (error) {
  console.error(error)
}
