const getEmployees = async () => {
    try {
        let data = await fetch('http://localhost:5001/api/v1/employees')
        let result = await data.json()
        const employees = result.data
        return employees
    } catch (error) {
        console.error(error)
    }
}

export default getEmployees