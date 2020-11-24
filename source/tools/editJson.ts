import * as fs from "fs";
export const editJson = (filePath: string) => {
};

const processors: ((item: any) => any)[] = [];
const checkArgs = (args: string[]) => {
  for (const arg of args) {
    if (arg.startsWith("--renameKey")) {
        const argParams = arg.split("--renameKey=")[1];
        const renameKeyParams = argParams.split(":");
        const [filter, location, command] = renameKeyParams;
        processors.push((item) => {
            const [filterKey, filterValue] = filter.split("=");
            if (item[filterKey] !== filterValue) {
                return item;
            }
            const targets = location.split(",");
            for (const target of targets) {
                const commands = command.split(",");
                for (const cmd of commands) {
                    const [before, after] = cmd.split("=");
                    let targets = item[target];
                    if (!Array.isArray(targets)) {
                      targets = [targets];
                    }
                    for (const targetJson of targets) {
                        if (before in targetJson) {
                            targetJson[after] = targetJson[before];
                            delete targetJson[before];
                        }
                    }
                }
            }
            return item;
        });
    }
  }
};

const main = async () => {
  const args = process.argv.slice(2);
  checkArgs(args);    
  const data = await fs.promises.readFile('password.json');  
  const jsonData = JSON.parse(data.toString());
  const product: any[] = [];
  for (const line of jsonData) {
    for (const proc of processors) {
        product.push(proc(line));
    }
  }
  console.log(JSON.stringify(product, null, '  '));
};

main();