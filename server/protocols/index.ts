import fs, { read } from 'fs';
import { get } from 'http';
import path from 'path';

export const readJSON = (filePath: string) => {
    try {
        const dirPath = path.join(__dirname, filePath);
        const fileContent = fs.readFileSync(dirPath, 'utf-8');
        const jsonData = JSON.parse(fileContent);
        return jsonData;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}

export const getProtocols = () => {
    const protocols = readJSON('protocols.json');
    return protocols;
}