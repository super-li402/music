// import {requerst} from './requerst'

// export function getHomeData(){
//     return requerst({
//         url:'/musicBroadcasting'
//     })
// }
import {request} from "./requerst";

export function getHomeMultidata() {
  return request({
    url: 'musicRankings'
  })
}