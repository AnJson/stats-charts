import { ChartDrawer } from '../../../package/charts/ChartDrawer'

try {
  // const data1 = [255, 13, 25, 255, 18, 1, -1]
  const data2 = [{ title: 'Anders', value: 25 }, { title: 'Sigrid', value: 130 }, { title: 'Svante', value: 130 }, { title: 'Emma', value: 130 }]
  // const data3 = [{ title: 'Anders', value: 25 }, { title: 'Sigrid', value: 130 }, { title: 'Svante', value: 130 }, { title: 'Emma', value: 130 }, { title: 'Fluffe', value: 5 }, { title: 'Smabols', value: 13 }, { title: 'Bossen', value: 77 }]
  const data4 = [200, 100, 150, 100, 110, 80, 200, 100]

  console.log(data4.length)
  const chartDrawer1 = new ChartDrawer(data2)
  const chartDrawer2 = new ChartDrawer(data4)

  chartDrawer1.drawPieChart('pie-container', { title: true })
  chartDrawer2.drawBarChart('bar-container', { title: true })
} catch (error) {
  console.log(error)
}
