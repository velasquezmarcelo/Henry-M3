var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http.createServer((req, res) => {
  if(req.url === '/'){
    const index = fs.readFileSync('./index.html')
    res.writeHead(200, {"Content-type" : "text/html"})
    return res.end(index)
  }

  const beatle = req.url.split('/')
  if(beatle.length < 3 && !beatle.includes('api')){
    const beatleName = beatle[1].replace('%20', ' ')

    const oneBeatle = beatles.filter(obj => obj.name === beatleName)[0]

    let templete = fs.readFileSync('./beatle.html', 'utf-8') //se coloca utf-8 porque como tiene imagenes no lo entiende 
    templete = templete.replace('{name}', oneBeatle.name)
    templete = templete.replace('{birthday}', oneBeatle.birthdate)
    templete = templete.replace('{image}', oneBeatle.profilePic)

    res.writeHead(200, {"Content-type" : "text/html"})
    return res.end(templete)

  }

  if(req.url === '/api'){
    res.writeHead(200, {"Content-type" : "application/json"})
    return res.end(JSON.stringify(beatles)) //transforma de js a json
  }

  //console.log(req.url.split('/').pop().replace('%20', ' '))
  const beatleName = req.url.split('/').pop().replace('%20', ' ')   //con split hacemos un array y con pop nos quedamos con el ultimo indice
  if(req.url.includes('/api') && beatleName) {
    const oneBeatle = beatles.filter(obj => obj.name === beatleName) //filtra el objeto que cumpla esa condicion
    if(!oneBeatle.length) {
      res.writeHead(404, {"Content-type" : "text/plain"})
      return res.end('Beatle invalid')
    }
    res.writeHead(200, {"Content-type" : "application/json"})
    return res.end(JSON.stringify(oneBeatle[0])) //como el enunciado pide un objeto se coloca el indice [0] sino nos da un array de un objeto
  }
}).listen(3001, 'localhost')