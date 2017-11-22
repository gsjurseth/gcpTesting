const Promise           = require('bluebird'),
      querystring       = require('querystring'),
      fetch             = require('node-fetch');


// Now some runtime constants
const myDate = new Date();
console.log("testing from normal console.logger output .. the date: %j", myDate);

const readTrashcans = () => {
}

exports.http = (req, res) => {
  let fn = 'http';
  if( req.url) {
    var params = querystring.parse(req.url[0] === '?' ? req.url.substr(1) : req.url );
  };

  console.log({fn}, "entering the req...: %j", params);
  fetch('http://httpbin.org/ip')
  .then( d => d.json() )
  .then( d => {
    d.date = myDate;
    console.log({fn}, "about to send");
    res.status(200).send(d);
  })
  .catch( e => {
    console.error({error: e.stack}, 'we hit some kind of error');
    res.status(500).send(d);
  });
};

exports.event = (event, callback) => {
  let fn = 'event';
  callback();
};
