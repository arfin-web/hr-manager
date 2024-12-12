import { getBaseUrl } from "@/helpers/config/envConfig"

const getAttendance = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/attendances`, {
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
        const attendances = result.data
        return attendances
    } catch (error) {
        console.error(error)
    }
}

export default getAttendance