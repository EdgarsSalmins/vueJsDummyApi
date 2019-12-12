<template>
  <tr>
    <td>{{employee.name}}</td>
    <td>{{employee.age}}</td>
    <td>{{employee.salary}}</td>
    <td>
      <button @click="onView(employee)">View</button>
      <button @click="onDelete(employee)">Delete</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Employee } from '../employees/Employee';
@Component
export default class EmployeeItem extends Vue{
    @Prop() employee!: Employee;
    onView(employee: Employee){
        this.$emit("view",employee);
    }

}
</script>

<style>

</style>