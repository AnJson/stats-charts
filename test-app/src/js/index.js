import { ChartDrawer } from '../../../package/charts/ChartDrawer'

try {
  // const data1 = [255, 13, 25, 255, 18, 1, -1]
  const data2 = [{ title: 'Anders', value: 25 }, { title: 'Sigrid', value: 130 }, { title: 'Svante', value: 130 }, { title: 'Emma', value: 130 }]
  const data4 = [200, 100, 150, 100, 110, 80, 200, 100]

  const chartDrawer1 = new ChartDrawer(data2)
  const chartDrawer2 = new ChartDrawer(data4)

  chartDrawer1.appendPieChart('pie-container', { title: true, percent: true })
  chartDrawer2.appendBarChart('bar-container', { averege: true, title: true })
} catch (error) {
  console.log(error)
}
