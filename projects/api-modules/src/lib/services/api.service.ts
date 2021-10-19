import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { from, Observable, pipe, Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const LOCAL_ASSETS_HTML = 'assets/sections';
const LOCAL_ASSETS_IMAGES = 'assets/images';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	getJson(url: string): Observable<HttpResponse<any>> {
		return this.get(url, new HttpHeaders({ Accept: 'application/json' }));
	}

	getJsonP(url: string): Observable<any> {
		return this.http.jsonp(url, 'callback');
	}

	getHtml(url: string) {
		return this.http.get(url, { responseType: 'text' });
	}

	getHtmlSection(section: string): Observable<string> {
		return this.getHtml(`${LOCAL_ASSETS_HTML}/${section}.html`);
	}

	private get(url: string, headers: HttpHeaders): Observable<any> {
		return this.http.get(url, { headers: headers });
	}
}
