import { getBaseUrl } from "@/helpers/config/envConfig"

const getLeaveRequests = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/leaverequests`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        let result = await data.json()
        const leaverequests = result.data
        return leaverequests
    } catch (error) {
        console.error(error)
    }
}

export default getLeaveRequests