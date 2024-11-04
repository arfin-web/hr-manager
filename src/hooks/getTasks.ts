import { getBaseUrl } from "@/helpers/config/envConfig"

const getTasks = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/tasks`)
        let result = await data.json()
        const tasks = result.data
        return tasks
    } catch (error) {
        console.error(error)
    }
}

export default getTasks