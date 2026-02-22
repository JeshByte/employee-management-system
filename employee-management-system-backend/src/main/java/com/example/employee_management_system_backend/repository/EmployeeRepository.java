package com.example.employee_management_system_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.employee_management_system_backend.model.Employee;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Long>{
    List<Employee> findByDepartment(String department);
}
