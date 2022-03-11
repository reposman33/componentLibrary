import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LOCAL_ASSETS_HTML = 'assets/sections';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // url: string =
  //   'http://cms.marcbakker.com/ws/RemotePageService.cfc?domainUrl=marcbakker.com&';

  url: string =
    'https://api.aglty.io/e0429f10-u/fetch/en-us/page/2?contentLinkDepth=2';

  options = {
    headers: new HttpHeaders({
      APIKey:
        'defaultlive.e9680f709821a7bd529d85c4bfc8434fdbcfd4d82f39dabb0a58d76f3dcab119',
      accept: 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getCMSContent(pageKey: string, language: string): Observable<object> {
    const url = this.url; //`${this.url}method=getPage&pageKey=${pageKey}&lang=${language}`;
    return this.get<object>(url);
  }

  getJson<T>(url: string): Observable<T> {
    return this.get<T>(url);
  }

  getJsonP<T>(url: string): Observable<T> {
    return this.http.jsonp<T>(url, 'callback');
  }

  // get the HTML from a local file eg. myHtml.html
  getHtmlSection(section: string): Observable<ArrayBuffer> {
    return this.getHtml<ArrayBuffer>(`${LOCAL_ASSETS_HTML}/${section}.html`);
  }

  getHtml<T>(url: string) {
    return this.http.get<T>(url, {
      headers: { responseType: 'text' },
    });
  }

  private get<T>(url: string, headers = {}): Observable<T> {
    // return this.http.get<T>(url);
    return this.http.get<T>(url, headers);
  }
}
