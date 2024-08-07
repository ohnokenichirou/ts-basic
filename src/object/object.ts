export default function objectSample() {
    const a: object = {
        name: 'Torahack',
        age: 28
    }
    // a.name

    // オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    } = {
        language: 'Japanese',
        name: 'Japan',
    }

    console.log('Object object sample 1:', country)

    // 同じ構造のオブジェクトであれば再代入できる
    country = {
        language: 'English',
        name: 'United States of America',
    }

    console.log('Object object sample 2:', country)

    // オプショナル(?)なプロパティと読み取り専用(readonly)プロパティ
    const torahack: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Yamada',
        firstName: 'Tarou',
    }
    torahack.lastName = 'Kamado'
    // torahack.firstName = 'Tanjiro'
    torahack.gender = 'male'

    console.log('Object object sample 3:', torahack)

    // インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Korea: 'Seaul'
    }
    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'

    console.log('Object object sample 4:', capitals)
}