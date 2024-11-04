import { getBaseUrl } from "@/helpers/config/envConfig"

const getNotices = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/notice`)
        let result = await data.json()
        const notices = result.data
        return notices
    } catch (error) {
        console.error(error)
    }
}

export default getNotices