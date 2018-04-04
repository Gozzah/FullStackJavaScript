const gameArea = 
{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [
            12.50868022441864,
            55.77139237536917
          ],
          [
            12.507542967796326,
            55.77089449044544
          ],
          [
            12.507333755493164,
            55.77037547636127
          ],
          [
            12.50791311264038,
            55.76989266635793
          ],
          [
            12.509071826934814,
            55.770004316702746
          ],
          [
            12.510080337524414,
            55.77050221299624
          ],
          [
            12.510150074958801,
            55.7710453653363
          ],
          [
            12.50868022441864,
            55.77139237536917
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
        12.507998943328857,
        55.77089750794899
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "Lars"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.508846521377563,
        55.77094880547344
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "Marco"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.50943660736084,
        55.770825087799565
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "Børge"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.509302496910095,
        55.77050221299624
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "Anton"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.508057951927185,
        55.77042375703271
      ]
    }
  },
  {
    "type": "Feature",
    "properties": {"name": "Jonas"},
    "geometry": {
      "type": "Point",
      "coordinates": [
        12.508572936058044,
        55.77073154490739
      ]
    }
  }
]


  module.exports = {

    gameArea,
    players


  }