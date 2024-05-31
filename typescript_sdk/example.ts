// example.ts

import { EducationDataClient, Directory, InstitutionalCharacteristics } from './src';

async function main() {
    const id = "399911";
    const fipsStateCode = 53;

    const client = new EducationDataClient();
    const directory = new Directory(client);
    const ic = new InstitutionalCharacteristics(client);

    try {
        // Find the most recent year with data
        const startYear = new Date().getFullYear(); // Start from the current year
        const mostRecentYear = await directory.findMostRecentYear(startYear);
        console.log(`The most recent year with data is: ${mostRecentYear}`);

        // Default to most recent year
        directory.setYear(mostRecentYear);

        const directoryById = await directory.getDirectoryById(id);
        console.log(directoryById);

        const directoryByState = await directory.getDirectoryByState(fipsStateCode);
        console.log(directoryByState);

    } catch (error) {
        console.error('An error occurred:', error);
    }

    // try {
    //     const data = await ic.getInstitutionalCharacteristics({unitid: id});
    //     console.log(data);
    // } catch (error) {
    //     console.error('An error occurred:', error);
    // }
}

main();
