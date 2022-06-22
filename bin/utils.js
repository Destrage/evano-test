
import inquirer from "inquirer";
import fs from 'fs';
import { execSync } from 'child_process';
import fse from "fs-extra";

const generate = async () => {
    const path = process.cwd();

    let files = fs.readdirSync(path);
    if (files.length === 0 || !files.includes('package.json')) {
        const answers = await inquirer.prompt([
            {
                type: "list",
                message: 'Would you like to initialize the node project?',
                name: 'init',
                choices: ['Yes', 'No']
            }
        ]);
        if (answers.init === "Yes") {
            process.stdout.write("Setting up everything please wait...");
            await initializeNode();
            await installDependencies();
            await setUpFolderStructure();
        }
    }
    else {

        process.stdout.write("Setting up everything please wait...");
        await installDependencies();
        await setUpFolderStructure();
    }
}

const initializeNode = async () => execSync("npm init -y");

const installDependencies = async () => execSync("npm i --save-dev chai mocha supertest mochawesome");

const setUpFolderStructure = async () => {
    let path = process.execPath.split('\\');
    path.pop();
    path = `${(path.join('\\'))}\\node_modules\\evano-test\\dist\\test`;
    let srcDir = fse.existsSync(path) ? path : process.env.APPDATA + '\\npm\\node_modules\\evano-test\\dist\\test';
    console.log({ path, srcDir });
    const destDir = process.cwd() + '\\test';

    fse.copySync(srcDir, destDir, { overwrite: true }, (err) => {
        if (err) {
            process.stdout.write(err);
        } else {
            process.stdout.write("Done!");
        }
    });
};

export default generate 