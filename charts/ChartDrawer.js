/**
 * The ChartDrawer class.
 *
 * @author Anders Jonsson
 * @version 1.0.0
 */

 import { StatsCollection } from '../stats/StatsCollection.js'

 /**
  * Wrapper class for chart-drawing methods.
  *
  * @export
  * @class ChartDrawer
  */
 export class ChartDrawer {
   /**
    * @type {StatsCollection}
    */
   #collectionOfData
 
   /**
    * The constructor of the class.
    *
    * @param {number[] | object[]} listOfData - The list of data to draw charts from.
    * @throws {TypeError} - If argument is not an array of objects with value-property holding a number or an array of numbers.
    */
   constructor(listOfData) {
     this.#collectionOfData = new StatsCollection(listOfData)
   }
 }
 