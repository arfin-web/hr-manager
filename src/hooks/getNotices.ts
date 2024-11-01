const getNotices = async () => {
    try {
        let data = await fetch('http://localhost:5001/api/v1/notice')
        let result = await data.json()
        const notices = result.data
        return notices
    } catch (error) {
        console.error(error)
    }
}

export default getNotices