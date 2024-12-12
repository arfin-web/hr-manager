import { getBaseUrl } from "@/helpers/config/envConfig"

const getEmployees = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/employees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
            next: {
                revalidate: 50000
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