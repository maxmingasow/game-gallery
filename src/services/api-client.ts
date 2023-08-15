import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7ef81199ad3b4dcd9966c984534e7bcc',
  },
});
