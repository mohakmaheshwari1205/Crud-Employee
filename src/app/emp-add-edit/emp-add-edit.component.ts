import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  empForm: FormGroup;

    education: string[] = [
      '10th',
      '12th',
      'Graduate',
      'Post graduate',
    ];

    constructor(private _fb: FormBuilder, private _empService:EmployeeService, 
      private _dialogRef: MatDialogRef<EmpAddEditComponent>){
      this.empForm = this._fb.group({
        firstName: '',
        lastName: '',
        email:'',
        dob:'',
        gender:'',
        education:'',
        salary:'',
        age:'',
      });
    }

    onFormSubmit(){
      if(this.empForm.valid){
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any)=>{
            alert('Employee added successfully');
            this._dialogRef.close();
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
}
