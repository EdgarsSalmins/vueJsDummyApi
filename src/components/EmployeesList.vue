<template>
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Options</th>
            </thead>
            <tbody>
                <employee-item :employee="item" 
                v-for="(item, index) in employees" 
                :key="index" @view="viewEmployee"/>
            </tbody>
        </table>
        <modal name="employeeView">
            <div>
                <h3>Employee profile</h3>
                <img :src="employee.image" :alt="employee.name">
                <p>
                    Name: {{employee.name}}
                    Age: {{employee.age}}
                    Salary: {{employee.salary}}
                </p>
            </div>
        </modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import EmployeesProcessor from '../employees/EmployeesProcessor';
import EmployeeItem from './EmployeeItem.vue';
import { Employee } from '../employees/Employee';
import VModal from 'vue-js-modal';
@Component({
    components:{
        EmployeeItem
    }
})
export default class EmployeesList extends Vue {
    processor = new EmployeesProcessor();
    employees:Employee[] = [];
    employee:Employee = {
        id: 0,
        name: '',
        age: 0,
        salary: 0,
        image: ''
    }

    async mounted() {
        this.employees = await this.processor.getEmployees();
        console.log(this.employees);
    }

    async viewEmployee(employee: Employee){
        //paprasisim api
        this.employee = await this.processor.getEmployee(employee.id);
        console.log(this.employee);
        this.$modal.show("employeeView");
    }
}
</script>

<style>

</style>