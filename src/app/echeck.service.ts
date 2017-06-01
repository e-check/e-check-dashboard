import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';
import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';

@Injectable()
export class EcheckService {
  constructor(
    private http: Http,
    private cookieService: CookieService
  ) {

  }

  logIn(email: string, password: string): Promise<string> {
    var service_endpoint = environment.echeck_api_base_url + '/sessions'
    var credentials = encodeURIComponent(email + ":" + password)
    var headers = new Headers({ 'Authorization': 'Basic ' + credentials });
    return this.http.post(service_endpoint, null, { headers: headers })
      .toPromise()
      .then(response => response.text())
  }

  getActivities(): Promise<any> {
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.get(service_endpoint, { headers: this.geneaterHeaders() })
      .toPromise()
      .then(response => response.json())
  }

  createActivity(activity_name, form_id): Promise<any> {
    var request_body = { name: activity_name, form_id: form_id }
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.post(service_endpoint, request_body, { headers: this.geneaterHeaders() })
      .toPromise()
      .then(response => response.json())
  }

  getAttendances(activity_id: string): Promise<Array<any>> {
    var service_endpoint = environment.echeck_api_base_url + '/attendances'
    return this.http.get(service_endpoint, { headers: this.geneaterHeaders(), params: { activity_id: activity_id } })
      .toPromise()
      .then(response => response.json())
  }

  geneaterHeaders() {
    var headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('jwt')
    });
    return headers;
  }
}
