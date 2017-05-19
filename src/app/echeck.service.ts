import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from 'environments/environment';


@Injectable()
export class EcheckService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getActivities(): Promise<any> {
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.get(service_endpoint, { headers: this.headers })
      .toPromise()
      .then(response => response.json())
  }

  createActivity(activity_name, form_id): Promise<any> {
    var request_body = { name: activity_name, form_id: form_id }
    var service_endpoint = environment.echeck_api_base_url + '/activities'
    return this.http.post(service_endpoint, request_body, { headers: this.headers })
      .toPromise()
      .then(response => response.json())
  }

  getCheckinList(form_id: string): Promise<any> {
    var service_endpoint = environment.echeck_api_base_url + '/checkin'
    return this.http.get(service_endpoint, { headers: this.headers, params: { form_id: form_id } })
      .toPromise()
      .then(response => response.json())
  }
}
