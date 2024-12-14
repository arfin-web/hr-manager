import { getBaseUrl } from "@/helpers/config/envConfig"

const getDepartments = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/departments`, {
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
        const departments = result.data
        return departments
    } catch (error) {
        console.error(error)
    }
}

export default getDepartments