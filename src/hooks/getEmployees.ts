import { getBaseUrl } from "@/helpers/config/envConfig"

const getEmployees = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/employees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'default',
            next: {
                revalidate: 5000
            }
        })
        let result = await data.json()
        const employees = result.data
        return employees
    } catch (error) {
        console.error(error)
    }
}

export default getEmployees