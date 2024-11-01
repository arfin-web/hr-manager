const getTasks = async () => {
    try {
        let data = await fetch('http://localhost:5001/api/v1/tasks')
        let result = await data.json()
        const tasks = result.data
        return tasks
    } catch (error) {
        console.error(error)
    }
}

export default getTasks