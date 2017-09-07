import { Injectable} from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {


	token = localStorage.getItem('token');
	private apiUrl = 'http://localhost:9999';
	private jsonContent = new RequestOptions({
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	});

	constructor( private http: Http ){}
	get authenticated(){
		return this.token !== null;
	}

	authenticate(username: string, password: string): Promise<any> {
		const json = JSON.stringify({
			username: username,
			password: password
		});
		return this.http.post(`${this.apiUrl}/token`, json, this.jsonContent)
			.toPromise()
			.then( response => {
				this.token = response.json().token;
				localStorage.setItem('token',this.token);
			});
		

	}
}
