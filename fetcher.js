const request = require('request');
const [url, localStorage] = process.argv.slice(2);
const fs = require('fs')

let content = 'Some content!'



request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  if(error) {
    console.log("Error reading from URL. Check that a valid URL is being provided.")
    return;
  }

  let size = body.length;
  
  fs.writeFile(localStorage, body, err => {
    if (err) {
      console.error(err)
      console.log("Error writing to file. Check that a valid filepath was provided.");
      return
    }
    console.log(`Downloaded and saved ${size} bytes to ${localStorage}.`)
    //file written successfully
  })

});
