const express = require("express");

const app = express();

app.use(express.static('public'))

app.get("/", function(request, response) {
  return response.sendFile('./public/index.html');
});


app.listen(3000, function() {
  console.log(
    "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
  );
});