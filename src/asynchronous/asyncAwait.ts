export default async function asyncAwaitSample() {
    const url = 'https://api.github.com/users/ohnokenichirou'

    type Profile = {
        login: string
        id:number
    }

    type FetchProfile = () => Promise<Profile | null>

    // async/awaitでコールバック関数を同期的な処理に置き換える
    const fetchProfile: FetchProfile = async () => {
        const response = await fetch(url)
            .then((response) => response)
            .catch((error) => {
                console.error(error)
                return null
            })

            // responseがnullならfetchに失敗している
            if (!response) {
                return null
            }

            const json = await response
                .json()
                .then((json: Profile) => {
                    console.log('Asynchronous async/await Sample 1:', json)
                    return json
                })
                .catch((error) => {
                    console.error(error)
                    return null
                })

            // jsonがnullならレスポンスBodyの読み取りに失敗している
            if (!json) {
                return null
            }

            return json
    }
    fetchProfile().then((profile: Profile | null) => {
        if (profile) {
            console.log('Asynchronous async/await Sample 2:', profile)
        }
    })

    // さらに同期的な処理にする
    const profile = await fetchProfile()
    if (profile) {
        console.log('Asynchronous async/await Sample 3:', profile)
    }
}
