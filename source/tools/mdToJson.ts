import * as fs from "fs";
import * as readline from "readline";
import { getConfig } from "@config/applicationConfig"; 
export const mdToJson = (filePath: string) => {

};

const getColumns = (line: any[]): any[] => {
  line = line.slice(1, line.length - 1);  
  line = line.map(l => l.trim());
  return line;
};

const main = async () => {
  const config = getConfig();
  const filePath = config.storage.path;
  const stream = fs.createReadStream(filePath)
  const rl = readline.createInterface({input: stream});
  let i = 1;
  const product: any[] = [];
  let current = {} as any;
  let data: any[] = [];
  let ignore = false;
  let header = false;
  let headers: any[] = [];
  for await (const l of rl) {
    if (ignore) {
      ignore = false;  
      continue;
    }  
    const line = l.trim();
    // 空行はスキップする。
    if (line.length === 0) {
        continue;
    }
    if (header) {
      header = false;
      ignore = true;  
      const columns = line.split("|");
      headers = getColumns(columns);
      continue;
    }
    const char = line[0];
    if (char === "#") {
      header = true;  
      current = {};
      product.push(current);
      const comment = line.substr(1);
      data = [];
      current.comment = comment;
      current.data = data;
      continue;
    }
    let columns = line.split("|");
    columns = getColumns(columns);
    const item: any = {};
    data.push(item);
    for (let i = 0; i < columns.length; i++) {
      const key = headers[i];  
      const value = columns[i];
      item[key] = value;
    }
  }
  console.log(JSON.stringify(product));
};

main();