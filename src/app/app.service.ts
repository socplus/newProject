import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServices {
constructor (
private http: Http
) {}

getProductData() {
return this.http.get('http://localhost:3000/app/itemdata.json')
.map((res:Response) => res.json());
}

}