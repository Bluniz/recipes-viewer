
import {Query} from "../database/index.js"

export default  {
  async findAll(){
    const rows = await Query('SELECT * from recipes');

    return rows
  },

  async findById(id){
    const row = await Query(`SELECT * from recipes where id=$1`, [id])

    return row
  }

}

