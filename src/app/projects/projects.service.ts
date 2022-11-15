import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from './project.model';

@Injectable()
export class ProjectsService {
  apiLink: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiLink = environment.baseURL;
  }

  public getProjectData(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiLink}/project`)
  }
  public addProjectData(form: Projects): Observable<Projects[]> {
    return this.http.post<Projects[]>(`${this.apiLink}/project`, form)
  }
  public getProjectById(id: number): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiLink}/project/${id}`);
  }
  public editProjectData(form: Projects, id: number): Observable<Projects[]> {
    return this.http.put<Projects[]>(`${this.apiLink}/project/${id}`, form)
  }
  public deleteProjectData(id: number): Observable<Projects[]> {
    return this.http.delete<Projects[]>(`${this.apiLink}/project/${id}`)
  }
}