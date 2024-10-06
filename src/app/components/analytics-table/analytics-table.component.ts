import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrl: './analytics-table.component.scss'
})
export class AnalyticsTableComponent implements OnInit {
  @Input()
  departmentId: string | undefined;
  
  weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.employees = this.employeeData.filter(employee => employee.departmentId === this.departmentId);
    this.employeeService.getEmployeeHoursByDepartment(this.departmentId).subscribe((employees: Employee[]) => {
      this.employees = employees;
  });
  }
  getTotalHours(employee: Employee): number {
    return employee.monday + employee.tuesday + employee.wednesday
        + employee.thursday + employee.friday + employee.saturday + employee.sunday;
  }

}
