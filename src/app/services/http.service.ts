import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  // private  rootURl = 'http://localhost/indigitous_addis_registration_api/public/api/';
  private  rootURl = 'http://api.hack2018.gcmethiopia.org/api/';

  constructor(private httpRequest: HttpClient) {
  }

  public  sendGetRequest(routeName) {
    return this.httpRequest.get(this.rootURl + routeName);
  }

  public  sendPostRequest(routeName, body, header) {
    return this.httpRequest.post(this.rootURl + routeName, body, header);
  }

  public  sendPutRequest(routeName, body, header) {
    return this.httpRequest.put(this.rootURl + routeName, body, header);
  }

  public sendDeleteRequest(routeName) {
    return this.httpRequest.delete(this.rootURl + routeName);
  }

  public  sendCustomGetRequest(full_url) {
    return this.httpRequest.get(full_url);
  }

  public  sendCustomPostRequest(full_url, body, header) {
    return this.httpRequest.post(full_url, body, header);
  }

  public  sendCustomPutRequest(full_url, body, header) {
    return this.httpRequest.put(full_url, body, header);
  }

  public  sendCustomDeleteRequest(id) {
    return this.httpRequest.delete(id);
  }


}
