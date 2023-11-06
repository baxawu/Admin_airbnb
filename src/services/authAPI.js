import fetcher  from './fetcher'

export const authAPI = {
    signIn: (user) => {
        return fetcher.post('/auth/signin', user);
    },

    signUp:(user) => {
        return fetcher.post('auth/signup', user)
    }
   
}