console.log("START HO RAHA HAI");

let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/news") {
    let obj = {
      status: 1,
      data: [
        {
          newsTitle: 'ws',
          newsDes: "News Title",
        }
      ]
    };

   
    res.end(JSON.stringify(obj));
  }
});

server.listen(3000, () => {
  console.log("Server chal raha hai portm 3000 pe");
});