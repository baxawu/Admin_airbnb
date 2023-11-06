import fetcher from './fetcher'

const userAPI = {
    
    getUsers: () => {
        return fetcher.get('/users', {
        })
    },

    getUserById : (id) => {
        return fetcher.get(`users/${id}`);
    },

    addUser: (user) => {
        return fetcher.post('/users', { ...user, role: 'Admin' })
    },

    editUser: (user) => {
        return fetcher.post('/users', { ...user });
    },

    updateUser: (user) => {
        return fetcher.put('/users', user);
    },

    deleteUser: (userId) => {
        return fetcher.delete('/users', {
            params: {
                id: userId
            }
        })
    },

    getUserPage: (pageIndex, pageSize) => {
        return fetcher.get('/users/phan-trang-tim-kiem', {
            params: {
                pageIndex: pageIndex,
                pageSize: 10
            }
        })
    },
    
    searchUsers: (search) => {
        return fetcher.get('/users/search', {
            params: {
                searchUser: search
            }
        })

    }
}

export default userAPI;