import * as fs from "fs";
export const editJson = (filePath: string) => {
};

const main = async () => {
  const data = await fs.promises.readFile('password.json');  
  const jsonData = JSON.parse(data.toString());
};

main();