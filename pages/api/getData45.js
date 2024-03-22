import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  let fileContents = await fs.readFile(jsonDirectory + '/data45.json', 'utf8');
  //Return the content of the data file in json format
  // fileContents = JSON.parse("[" + fileContents + "]");
  // res.status(200).json(fileContents.slice(700,fileContents.length));
  res.status(200).json(fileContents)
}