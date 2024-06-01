
process.loadEnvFile()

        let mapToken=process.env.MAP_TOKEN
        console.log(mapToken)
        mapboxgl.accessToken = mapToken;
          const map = new mapboxgl.Map({
              container: 'map', // container ID
              center: [-74.5, 40], // starting position [lng, lat]
              zoom: 9 // starting zoom
          });
      