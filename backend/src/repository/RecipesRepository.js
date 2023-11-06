import { Query } from '../database/index.js';

export default {
  async findAll(orderBy) {
    const order = ['desc', 'DESC'].includes(orderBy) ? 'DESC' : 'ASC';
    const rows = await Query(`SELECT * from recipes ORDER BY name ${order}`);

    return rows;
  },

  async findById(id) {
    const row = await Query(`SELECT * from recipes where id=$1`, [id]);

    return row;
  },
};
