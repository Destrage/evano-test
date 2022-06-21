#! /usr/bin/env node

import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const yargs = _yargs(hideBin(process.argv));
import generate from './utils.js';

const app = 'etcli';

(async () => {
    const argv = await yargs
        .option('generate', { type: 'string', require: false })
        .alias('g', 'generate')
        .argv;

    switch (yargs.argv._[0]) {
        case 'generate':
        case 'g':
            generate();
            break;
        default:
            break;
    }

})();