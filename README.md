# JamelseWeather
Phase 2 React App for FlatIron School
 
 - Great way to check your local weather and save your favorite location's weather + weather outlooks!

 # Features
 
 - On loading of the page, user will be prompted with a request to share their current location. Given the location is shared, will render a weather card of that location's current outlook, hourly outlook, and weekly outlook. If permission is denied, page will instead render a search box for the user to input a location.

 - Each weather card will feature current weather, location name, hourly weather, and daily weather.

 - Each SEARCHED weather card will feature a "Save location" button that will save that current location to the "Saved Locations" tab on the navbar.

 - Navbar contains 3 inputs- "Home" button, "Saved Locations" button, and a searchbox.

 - Home button on Navbar returns user to either- 1. Currently searched location or 2. Search box input

 - Saved Locations button redirects the user to the Saved Locations page. 

 - Saved locations page renders a smaller card containing the location name, current temperature, and weather icon for the current weather of all the locations that the user saved. 

 - Each of the miniature cards in the saved locations page also features 2 buttons: 1.) A remove button in the top left that will remove that card from the saved locations page. 2.) A drop down arrow button that will redirect the user to a new page for that specific location. This new page renders the full weather card and outlook for that current location. However, instead of the "Save Location" button, it is now a "Remove Location" button. This button will remove this weather location and card from the "Saved Locations" page and redirect the user back to the Saved Locations page.

 - Searchbox in the Navbar allows the user to search for a new location no matter what page or place on the page the user is at!

 # Thanks + acknowledgment
 - Special thanks to the creators of https://openweathermap.org/ for their hard work on the Weather API and also geolocation API.
 - Also thanks to my friend Bogdan for help / support.

 # License 
MIT License

Copyright (c) 2022 Jacob M. Amelse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.