import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../../project.model';

@Injectable()
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
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      category: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      summary: [''],
      detail: [''],
      billingType: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  onSubmit(projectForm: FormGroup) {
    this.projectFormData.next(projectForm.value)
  }
}