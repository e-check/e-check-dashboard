import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';


@Injectable()
export class EcheckService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
    environment.echeck_api_base_url;
  }

  getActivities(): Promise<any> {
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.get(service_endpoint, { headers: this.headers })
      .toPromise()
      .then(response => response.json())
  }

  createActivity():Promise<any> {
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.get(service_endpoint, { headers: this.headers })
      .toPromise()
      .then(response => response.json())
  }
}
