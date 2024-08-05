import { Pool } from 'pg';
import { config as envConfig } from 'dotenv';
import { AverageCount, Count } from './models';

envConfig();

interface IQuery {
  text: string;
  values?: string[];
}

export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_NAME,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

export async function listAllCounts(): Promise<Count[]> {
  let qs  = {
    text: 'SELECT * FROM counts;'
  };
  
  return query(qs).then(result => result.rows);
}

export async function listAvgCounts(facility: string): Promise<AverageCount[]> {
  if(facility.length < 1) {
    console.error('Must provide facility to list average counts');
  }
  
  let qs = {
    text: 'SELECT facility, hour_posted, AVG(count) AS avg_count FROM counts WHERE facility=$1 GROUP BY facility, hour_posted;',
    values: [facility]
  };

  return query(qs).then(result => result.rows);
}

async function query(query: IQuery): Promise<any> {
  try {
    return await pool.query(query);
  } catch (err) {
    return handleError(err);
  }
}

function handleError(err): Promise<any> {
  console.error(err);
  return Promise.reject(err);
}