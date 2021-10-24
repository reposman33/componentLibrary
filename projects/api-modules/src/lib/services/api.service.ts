import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LOCAL_ASSETS_HTML = 'assets/sections';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getJson<T>(url: string): Observable<T> {
		return this.get(url, new HttpHeaders({ Accept: 'application/json' }));
	}

	getJsonP<T>(url: string): Observable<Object> {
		return this.http.jsonp(url, 'callback');
	}

	getHtml(url: string): Observable<string> {
		return this.http.get(url, { responseType: 'text' });
	}

	// get the HTML from a local file eg. myHtml.html
	getHtmlSection(section: string): Observable<string> {
		return this.getHtml(`${LOCAL_ASSETS_HTML}/${section}.html`);
	}

	private get(url: string, headers: HttpHeaders): Observable<any> {
		return this.http.get(url, { headers: headers });
	}
}
