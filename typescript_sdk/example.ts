// example.ts

import { EducationDataClient, Directory, InstitutionalCharacteristics } from './src';

async function main() {
    const id = "399911";

    const client = new EducationDataClient();
    const directory = new Directory(client);
    const ic = new InstitutionalCharacteristics(client);

    try {
        const data = await directory.getDirectory({unitid: id});
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }

    try {
        const data = await ic.getInstitutionalCharacteristics({unitid: id});
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

main();
