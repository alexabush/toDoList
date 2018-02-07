const express = require("express");

const app = express();

app.use(express.static('public'))

app.get("/", function(request, response) {
  return response.sendFile('./public/index.html');
});


app.listen(process.env.PORT || 3000, function() {
  console.log(
    "The server is running on port 3000."
  );
});