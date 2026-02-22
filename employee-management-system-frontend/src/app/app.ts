import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {inject} from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from './add-edit-component/add-edit-component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { EmployeeService } from './employee-service';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {CurrencyPipe} from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatToolbarModule,MatIconModule,MatButtonModule,
    MatDialogModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatSelectModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule,
    MatSortModule,CurrencyPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management-system-frontend');
  displayedColumns=[
    "id",
    "firstName",
    "lastName",
    "position",
    "department",
    "salary",
    "action"
  ];
  dataSource!:MatTableDataSource<any>;
private _paginator!: MatPaginator;
private _sort!: MatSort;

@ViewChild(MatPaginator) set paginator(value: MatPaginator) {
  if (value) {
    this._paginator = value;
    if (this.dataSource) {
      this.dataSource.paginator = this._paginator;
    }
  }
}

@ViewChild(MatSort) set sort(value: MatSort) {
  if (value) {
    this._sort = value;
    if (this.dataSource) {
      this.dataSource.sort = this._sort;
    }
  }
}
  empService=inject(EmployeeService);
  dialog=inject(MatDialog);
  ngOnInit():void{
    this.getEmployees();
  }
  getEmployees(){
    this.empService.getEmployees().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this._sort;
        this.dataSource.paginator=this._paginator;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  applyFilter(event:Event){
    const filterInput=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterInput.trim().toLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmployee(id:number){
    let confirm=window.confirm("Are you sure you want to delete the details of this employee?");
    if(confirm){
      this.empService.deleteEmployee(id).subscribe({
        next:(res)=>{
          alert("Employee Deleted!");
          this.getEmployees();
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
  deleteEmployees(){
    let confirm=window.confirm("Are you sure you want to delete the details of all the employees?");
    if(confirm){
      this.empService.deleteEmployees().subscribe({
        next:(res)=>{
          alert("All Employess Deleted!");
          this.getEmployees();
          console.log(res);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
  openAddEditEmployeeDialog(){
    const dialogRef=this.dialog.open(AddEditComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployees();
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  openEditForm(data:any){
    const dialogRef=this.dialog.open(AddEditComponent,{data:data,});
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployees();
        }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
