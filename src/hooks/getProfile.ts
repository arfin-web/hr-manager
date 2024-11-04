import { getBaseUrl } from "@/helpers/config/envConfig"

const getProfile = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/auth/profile`)
        let result = await data.json()
        const profile = result.data
        return profile
    } catch (error) {
        console.error(error)
    }
}

export default getProfile