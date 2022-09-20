// import { ChartDrawer } from '@anjson/stats-charts'

try {
  // -----------------------------
  // [UC 1] Display pie-charts.
  // -----------------------------
  /*
  const data = [{ title: 'Orchs', value: 25 }, { title: 'Hobbits', value: 130 }, { title: 'Elfs', value: 130 }, { title: 'Dvarfs', value: 130 }]

  const chartDrawer1 = new ChartDrawer(data)

  chartDrawer1.appendPieChart('pie-container-1', { title: true, percent: true, value: true })
  chartDrawer1.appendPieChart('pie-container-2', { title: true, percent: true })
  chartDrawer1.appendPieChart('pie-container-3', { title: true })
  chartDrawer1.appendPieChart('pie-container-4')
  chartDrawer1.appendPieChart('pee-container')
  */

  // -----------------------------
  // [UC2] Display bar-charts.
  // -----------------------------
  /*
  const data2 = [200, 100, 150, 100, 110, 80, 200, 100]
  const data3 = [{ title: 'Orchs', value: 25 }, { title: 'Hobbits', value: 130 }, { title: 'Elfs', value: 130 }, { title: 'Dvarfs', value: 130 }]

  const chartDrawer2 = new ChartDrawer(data2)
  const chartDrawer3 = new ChartDrawer(data3)
  chartDrawer2.appendBarChart('bar-container-1', { averege: true, percent: true, value: true, title: true })
  chartDrawer2.appendBarChart('bar-container-2', { averege: true, percent: true, value: true })
  chartDrawer2.appendBarChart('bar-container-3', { averege: true, percent: true })
  chartDrawer2.appendBarChart('bar-container-4', { averege: true })
  chartDrawer2.appendBarChart('bar-container-5')
  chartDrawer3.appendBarChart('bar-container-6', { averege: true, percent: true, value: true, title: true })
  */

  // -----------------------------
  // [UC 3] Large amount of data in constructor.
  // -----------------------------
  /* const data3 = [200, 100, 150, 100, 110, 80, 200, 100, 200, 100, 150, 100, 110, 80, 200, 100, 200, 100, 150, 100, 110, 80, 200, 100, 200, 100, 150, 100, 110, 80, 200, 100, 100, 200, 100, 150, 100, 110, 80, 200, 100, 200, 100, 150, 100, 110, 80, 200, 100]

  const chartDrawer4 = new ChartDrawer(data3)
  chartDrawer4.appendPieChart('pie-container-5') */
} catch (error) {
  console.error(error)
}
