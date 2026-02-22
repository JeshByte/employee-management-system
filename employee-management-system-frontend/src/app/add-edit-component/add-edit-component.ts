import { Component,inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import { EmployeeService } from '../employee-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-edit-component',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatDialogModule],
  templateUrl: './add-edit-component.html',
  styleUrl: './add-edit-component.css',
})
export class AddEditComponent {
  public data=inject(MAT_DIALOG_DATA);
  empService=inject(EmployeeService);
  dialogRef=inject(MatDialogRef<AddEditComponent>);
  empForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    position:new FormControl('',Validators.required),
    department:new FormControl('',Validators.required),
    salary:new FormControl('',Validators.required)
  });
  ngOnInit():void{
    this.empForm.patchValue(this.data);
  }
  onSubmit(){
    if(this.empForm.valid){
      if(this.data){
        this.empService.updateEmployee(this.empForm.value,this.data.id).subscribe({
          next:(val)=>{
            alert("Employee Details Updated");
            console.log(val);
            this.dialogRef.close(true);
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
      else{
        this.empService.addEmployee(this.empForm.value).subscribe({
          next:(val)=>{
            alert("Employee Details Added!");
            console.log(val);
            this.empForm.reset();
            this.dialogRef.close(true);
          },
          error:(err)=>{
            console.log(err);
          }
        })
      }
    }
  }
}
