import axios from 'axios';

export default {
    // Api request to get the responds from the server to get the email and the token
 user: {
     login: (credentials) => 
        axios.post('/api/auth', {credentials}).then(res => res.data.user),
      signup : (user) =>
        axios.post('/api/users', {user}).then(res => res.data.user),
      fetchAll : () =>
        axios.get('/api/users').then(res => res.data.user)
 }
}