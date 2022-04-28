import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface IHttpMethods {
  getAll(url: string): Observable<any>;
}

@Injectable()
export class HttpServices implements IHttpMethods {


  constructor(private http: HttpClient) {
  }

  getAll(route: string) {
    route = this.generateUrl(route);
    return this.http.get(route);
  }

  private generateUrl(rawUrl: String): string {
    return environment.baseUri + rawUrl;
  }
}
