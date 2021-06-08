import { createServer, Model } from 'miragejs';



const data= [
  {"id":1,
    "title": "Hamburger",
    "price": 1994,
    "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFtYnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "extra_topping": true,
    "toppings":[ { "name":'onion',"price":10},{"name":'mayo',"price":20},{"name":'mustard',"price":20}],
    "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],   
    "discription":'Mamam best hamburger!Tasty.Come and try ',
    "type":'lunch'
  },
  {"id":2,
    "title": "Pasta",
    "price": 994,
    "img": 'https://www.seriouseats.com/thmb/GSqpVkulyUZu-D6sPijmbFV_f4s=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg',
    "extra_topping": false,
    "toppings":[],
    "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
    "discription":'Mamam best Pasta!Tasty.Come and try Childrens favorite ',
    "type":'lunch'
  },
  {"id":3,
    "title": "Fish",
    "price": 5694,
    "img": 'https://media-cdn.tripadvisor.com/media/photo-s/1c/3a/50/da/cod.jpg',
    "extra_toppings": true,
    "toppings":[ { "name":'mustar',"price":10},{"name":'ketchup',"price":20},{"name":'tartar',"price":20}],
    "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
    "discription":'Lake the best Fish and chips!Tasty.Come and try Fishermans favorite',
    "type":'lunch'
  },
  {"id":4,
    "title": "Soup",
    "price": 2994,
    "img": 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2010%2F10%2F27%2Fginger-chicken-soup_0.jpg',
    "extra_toppings": true,
    "toppings":[ { "name":'bread',"price":10},{"name":'salt',"price":20},{"name":'cheese',"price":20}],
    "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
    "discription":'Mamam best Soup! Tasty.Come and try Fill up with a warm soup in a cold winter day ',
    "type":'lunch'
  },
  {"id":5,
  "title": "Cake",
  "price": 894,
  "img": 'https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg',
  "extra_topping": true,
  "toppings":[ { "name":'marzipan',"price":10},{"name":'sprinkels',"price":20},{"name":'cream',"price":20}],
  "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
  "discription":'Mamam best Cake!Tasty.Come and try ',
  "type":'dessert'
},
{"id":6,
"title": "Ice crame",
"price": 3994,
"img": 'https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg',
"extra_topping": true,
"toppings":[ { "name":'strawbery',"price":10},{"name":'chocolet',"price":20},{"name":'vanilla',"price":20}],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'Mamam best ice crame!Tasty.Come and try on a hot summery day to cool done and enjoy ',
"type":'dessert'
},
{"id":7,
"title": "Chicken nuggets",
"price": 1994,
"img": 'https://static.toiimg.com/thumb/53222328.cms?width=1200&height=900',
"extra_topping": true,
"toppings":[ { "name":'rice',"price":10},{"name":'chips',"price":20},{"name":'salat',"price":20}],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'Mamam best Chicken nuggets!Tasty.Come and try  Childrens favorite',
"type":'lunch'
},
{"id":8,
"title": "Ribs",
"price": 1394,
"img": 'https://d2wtgwi3o396m5.cloudfront.net/recipe/06d9d64d-ee0d-46b6-9332-1ed87eb983ee.jpeg?d=1408x1120',
"extra_topping": true,
"toppings":[ { "name":'mustar',"price":10},{"name":'ketchup',"price":20},{"name":'tartar',"price":20}],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'Otto best Salty Ribs!Tasty.Come and try ',
"type":'lunch'
},
{"id":9,
"title": "Rakott kel",
"price": 794,
"img": 'https://image-api.nosalty.hu/nosalty/images/recipes/vp/aC/rakott-kelkaposzta-4-tobb-husos.jpeg?w=640&h=360&fit=crop&s=85e41547c43dd96e98e18de6d0f79ff3',
"extra_topping": false,
"toppings":[],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'Erika best Rakott kel!Tasty.Come and try ',
"type":'lunch'
},
{"id":10,
"title": "Lasagne",
"price": 1594,
"img": 'https://food-images.files.bbci.co.uk/food/recipes/vegan_lasagne_89049_16x9.jpg',
"extra_topping": false,
"toppings":[],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'Mamam best Lasagne!Tasty.Come and try Everyones favorite',
"type":'lunch'
},
{"id":11,
"title": "English Breakfast",
"price": 494,
"img": 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg',
"extra_topping": false,
"toppings":[],
 "size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'UK best Lasagne!Tasty.Come and try ...',
"type":'breakfast'
},
{"id":12,
"title": "Omlett",
"price": 1494,
"img": 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/366_1_1436868647.jpg?tr=w-800,h-1066',
"extra_topping": true,
"toppings":[ { "name":'backon',"price":10},{"name":'cheese',"price":20},{"name":'onion',"price":20}],
"size": [ { "name":'Small',"price":10},{"name":'Medium',"price":20},{"name":'Large',"price":20}],  
"discription":'UK best Lasagne!Tasty.Come and try ...',
"type":'breakfast'
}
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api/v1';        
      this.timing = 2000

      this.get('data', (schema, request) => {               // /api/ + movies url-rol kell fetchelni
      
        return data
      });

  this.get('filterData', (schema, request) => {                           // api/clients?search=[keresendo szoveg]&nev=otto
        const search = request.queryParams.search
        const clientName= request.queryParams.nev   // ===otto
        return data.filter(client => client.name.includes(search))
      });



this.post('/save', (schema, request) => {                                 // POST method to api/pets
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });

      
    },
  });
  return server;
}
