import { feature } from 'topojson';
import { csv, json} from 'd3';
export const loadAndProcessData  = () =>
  Promise
    .all([
      csv('deaths_per_capita.csv'),
      json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ])
    .then(([unData, topoJSONdata])=> {
      console.log(unData)



      /*
      const rowById = tsvData.reduce((accumulator,))
    }
    
    
    
    
    */
    
  });