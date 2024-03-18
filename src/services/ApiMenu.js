import axios from 'axios';

function get_menu_data() {
    return axios.get('http://localhost:8000/menu/')
    .then(res => {
      return res.data
    })
  }  
  export default get_menu_data  