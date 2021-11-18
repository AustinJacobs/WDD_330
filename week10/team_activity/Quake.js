import {
  getJSON
} from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it

    // get location
    let locResp = await getLocation();
    // take a look at where the information we need is in the returned object
    console.log(locResp);
    // we really only need the coords portion
    const location = locResp.coords;
    // build out the url with the location
    const query =
      this.baseUrl +
      `&latitude=${location.latitude}&longitude=${location.longitude}&maxradiuskm=${radius}`;
    console.log(query);
    // fetch the data
    this._quakes = await getJSON(query);

    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}