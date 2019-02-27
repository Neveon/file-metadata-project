const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest: 'api/fileanalyze/'});
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyze',upload.single('upfile'),function(req,res,next){
  return res.json(
    {
      "name":req.file.originalname,
      "type":req.file.mimetype,
      "size":req.file.size
    }
  );
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
