import { Employee } from './Employee';
import axios from 'axios';

export default class EmployeesProcessor {
    async getEmployees() : Promise<Employee[]> {
        return new Promise((resolve, reject) => {
            axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then((response) => {
                const output: Employee[] = 
                response.data.map((element: any): Employee => ({
                    id: element.id,
                    name: element.employee_name,
                    age: element.employee_age,
                    salary: element.employee_salary,
                    image: element.profile_image
                }));
                resolve(output);
            }).catch(error => {
                reject(error);
            })
        })
    }

    async getEmployee(id: number) : Promise<Employee> {
        return new Promise((resolve, reject) => {
            axios
            .get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
            .then((response: any) => {
                const employee: Employee = {
                    id: response.data.id,
                    name: response.data.employee_name,
                    age: response.data.employee_age,
                    salary: response.data.employee_salary,
                    image: response.data.profile_image
                }
                resolve(employee);
            })
            .catch(error => {
                reject(error);
            })
        })
    }
}