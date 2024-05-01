/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface GetGroupsByWinningSteak$Params {
  streakValue: number;
}

export function getGroupsByWinningSteak(http: HttpClient, rootUrl: string, params: GetGroupsByWinningSteak$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<string>>> {
  const rb = new RequestBuilder(rootUrl, getGroupsByWinningSteak.PATH, 'get');
  if (params) {
    rb.path('streakValue', params.streakValue, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<string>>;
    })
  );
}

getGroupsByWinningSteak.PATH = '/projects/hall-of-fame-groups/{streakValue}';
