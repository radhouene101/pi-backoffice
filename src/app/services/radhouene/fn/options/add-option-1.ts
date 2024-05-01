/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OptionDto } from '../../models/option-dto';

export interface AddOption1$Params {
      body: OptionDto
}

export function addOption1(http: HttpClient, rootUrl: string, params: AddOption1$Params, context?: HttpContext): Observable<StrictHttpResponse<OptionDto>> {
  const rb = new RequestBuilder(rootUrl, addOption1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<OptionDto>;
    })
  );
}

addOption1.PATH = '/options';
