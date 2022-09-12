import { Stats } from '../stats/Stats.js'

try {
  const data1 = [255, 13, 25, 18, 1]
  const data2 = [{ name: 'Anders', value: 25 }, { name: 'Sigrid', value: 130 }]
  
  const statsObject1 = new Stats(data1)
  const statsObject2 = new Stats(data2)
  
  console.log(statsObject1.getCollectionOfDataWithPercent())
  console.log(statsObject2.getCollectionOfDataWithPercent())
} catch (error) {
  console.error(error)
}
