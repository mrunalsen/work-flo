import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../../projects/project.model';

@Injectable()
export class ProjectListService {
  apiLink: string;

  constructor(private http: HttpClient) {
    // this.apiLink = environment.baseURL;
    this.apiLink = 'http://localhost:3000';
  }
  public getProjectData(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiLink}/project`);
  }
}