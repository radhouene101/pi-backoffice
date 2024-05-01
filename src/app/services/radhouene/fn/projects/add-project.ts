/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ProjectsDto } from '../../models/projects-dto';

export interface AddProject$Params {
      body: ProjectsDto
}

export function addProject(http: HttpClient, rootUrl: string, params: AddProject$Params, context?: HttpContext): Observable<StrictHttpResponse<ProjectsDto>> {
  const rb = new RequestBuilder(rootUrl, addProject.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ProjectsDto>;
    })
  );
}

addProject.PATH = '/projects';
