import axios from 'axios';
import { ServiceAPI } from '../../constants/apiConstants'

export default class CommonDAO {
  public async getUserList(){
    return (await axios.get(ServiceAPI.GET_LIST)).data;
  }
}