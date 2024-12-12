import { getBaseUrl } from "@/helpers/config/envConfig"

const getTasks = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/tasks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'default',
            next: {
                revalidate: 50000
            }
        })
        let result = await data.json()
        const tasks = result.data
        return tasks
    } catch (error) {
        console.error(error)
    }
}

export default getTasks