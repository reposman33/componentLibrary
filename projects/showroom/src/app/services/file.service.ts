import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  pathPrefix = './../components/';

  constructor() {}

  readFile(fileName: any) {
    const fileReader = new FileReader();
    const file = new File([], this.pathPrefix + fileName);
    return new Promise<string>((resolve, reject) => {
      fileReader.addEventListener('load', (e) => {
        if (fileReader.result) {
          console.log('fileReader = ', fileReader.result);
          resolve(fileReader.result.toString());
        } else {
          reject(fileReader.error);
        }
      });
      fileReader.readAsText(file, 'utf8');
    });
  }
}
