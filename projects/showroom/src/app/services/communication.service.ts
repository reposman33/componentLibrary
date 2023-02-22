import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { displayMode } from '../models/Types';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  subject: Subject<{ mode: displayMode }>;

  constructor() {
    this.subject = new Subject();
  }

  sendMessage(mode: { viewMode: displayMode }) {
    this.subject.next({ mode: mode.viewMode });
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
