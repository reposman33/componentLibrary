import { Injectable } from '@angular/core';
import environment from '../environment.json';

type Environment = { [key: string]: string };
@Injectable({
  providedIn: 'root',
})
export class HydrateService {
  constructor() {}

  hydrate(url: string, token: string): string {
    return url.replace(token, (environment as Environment)[token]);
  }
}
