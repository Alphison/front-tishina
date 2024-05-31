import Cookies from 'js-cookie'

export const getAccessToken = () => {
    const accessToken = Cookies.get('access_token')
    return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set('access_token', accessToken, {
        domain: 'localhost',
        sameSite: 'strict',
        expires: 1
    })
}

export const removeFromStorage = () => {
    Cookies.remove('access_token')
}