const gameArea = 
{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            12.545356750488281,
            55.8658721608619
          ],
          [
            12.318763732910156,
            55.83368638065531
          ],
          [
            12.342453002929688,
            55.737162319794564
          ],
          [
            12.56011962890625,
            55.74566603524846
          ],
          [
            12.545356750488281,
            55.8658721608619
          ]
        ]
      ]
    }
  }
  

  const players =[ 

  {
    
    
        "type": "Feature",
        "properties": {"name": "Rune"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.513771057128906,
            55.840626886363616
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name": "Peter"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.44922637939453,
            55.774642049830206
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name": "Troels"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.352066040039062,
            55.81613680041562
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {"name": "luder"},
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.368202209472656,
            55.75320187033113
          ]
        }
      }
]


  module.exports = {

    gameArea,
    players


  }