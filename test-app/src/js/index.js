import { StatsCollection, ChartDrawer } from '@anjson/stats-charts'

try {
  const data = [{ title: 'Orchs', value: 25 }, { title: 'Hobbits', value: 130 }, { title: 'Elfs', value: 130 }, { title: 'Dvarfs', value: 130 }]
  const data2 = [200, 100, 150, 100, 110, 80, 200, 100]

  const chartDrawer1 = new ChartDrawer(data)
  const chartDrawer2 = new ChartDrawer(data2)
  const chartDrawer3 = new ChartDrawer(data)

  const statsCollection = new StatsCollection(data)

  console.log(statsCollection.getCollectionOfDataWithPercent())

  chartDrawer1.appendPieChart('pie-container-1', { title: true, percent: true, value: true })
  chartDrawer1.appendPieChart('pie-container-2', { title: true, percent: true })
  chartDrawer1.appendPieChart('pie-container-3', { title: true })
  chartDrawer1.appendPieChart('pie-container-4')

  chartDrawer3.appendBarChart('bar-container-1', { averege: true, percent: true, value: true, title: true })
  chartDrawer2.appendBarChart('bar-container-2', { averege: true, percent: true, value: true, title: true })
  chartDrawer2.appendBarChart('bar-container-3', { averege: true, percent: true, value: true })
  chartDrawer2.appendBarChart('bar-container-4', { averege: true, percent: true })
  chartDrawer2.appendBarChart('bar-container-5', { averege: true })
  chartDrawer2.appendBarChart('bar-container-6')
} catch (error) {
  console.log(error)
}
