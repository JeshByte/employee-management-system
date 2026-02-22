package com.example.employee_management_system_backend.model;
import jakarta.persistence.*;

@Entity
@Table(name="employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="fname")
    private String fname;

    @Column(name="lname")
    private String lname;

    @Column(name="position")
    private String position;

    @Column(name="department")
    private String department;

    @Column(name="salary")
    private long salary;

    public Employee(){

    }
    
    public Employee(String fname,String lname,String position,String department,long salary){
        this.fname=fname;
        this.lname=lname;
        this.position=position;
        this.department=department;
        this.salary=salary;
    }

    public long getId(){
        return this.id;
    }
    
    public String getFirstName(){
        return this.fname;
    }
    
    public String getLastName(){
        return this.lname;
    }

    public String getPosition(){
        return this.position;
    }

    public String getDepartment(){
        return this.department;
    }

    public long getSalary(){
        return this.salary;
    }

    public void setFirstName(String fname){
        this.fname=fname;
    }

    public void setLastName(String lname){
        this.lname=lname;
    }

    public void setPosition(String position){
        this.position=position;
    }

    public void setDepartment(String department){
        this.department=department;
    }

    public void setSalary(long salary){
        this.salary=salary;
    }
}
