import { getBaseUrl } from "@/helpers/config/envConfig"

const getStipends = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/stipends`, {
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
        const stipends = result.data
        return stipends
    } catch (error) {
        console.error(error)
    }
}

export default getStipends