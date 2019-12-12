<template>
    <div class="employees">
        <h2>Employees</h2>
        <p>Hello</p>
        <employees-list/>
    </div>
</template>
<script>
import EmployeesList from '@/components/EmployeesList'
export default {
    name: 'employees',
    components: {
        EmployeesList
  }
}
</script>