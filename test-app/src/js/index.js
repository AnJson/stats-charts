import { ChartDrawer } from '../../../package/charts/ChartDrawer'

try {
  // const data1 = [255, 13, 25, 255, 18, 1, -1]
  const data2 = [{ title: 'Anders', value: 25 }, { title: 'Sigrid', value: 130 }, { title: 'Svante', value: 130 }, { title: 'Emma', value: 130 }]

  const chartDrawer = new ChartDrawer(data2)

  chartDrawer.drawPieChart('pie-container', { title: true })
} catch (error) {
  console.log(error)
}
