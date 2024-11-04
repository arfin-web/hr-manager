import { getBaseUrl } from "@/helpers/config/envConfig"

const getEmployees = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/employees`)
        let result = await data.json()
        const employees = result.data
        return employees
    } catch (error) {
        console.error(error)
    }
}

export default getEmployees