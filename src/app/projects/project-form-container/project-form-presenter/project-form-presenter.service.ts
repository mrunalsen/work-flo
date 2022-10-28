import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../../project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormPresenterService {
  private projectFormData: Subject<Projects>
  public projectFormData$: Observable<Projects>
  constructor(
    private fb: FormBuilder
  ) {
    this.projectFormData = new Subject()
    this.projectFormData$ = new Observable()
    this.projectFormData$ = this.projectFormData.asObservable()
  }
  buildform() {
    return this.fb.group({
      title: [''],
      info: [''],
      category: [''],
      summary: [''],
      detail: [''],
      billingType: [''],
      status: [''],
    })
  }
  onSubmit(projectForm: FormGroup) {
    this.projectFormData.next(projectForm.value)
  }
}