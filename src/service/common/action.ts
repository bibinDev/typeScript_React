import actionType from './actionType';
import commonDAO from '../../model/dao/commonDao';
import { store } from '../../index';

export const getUserList = () => {
  const CommonDAO: commonDAO = new commonDAO();
  const response = CommonDAO.getUserList();
  response.then(res => {
    store.dispatch({
      payload: res,
      type: actionType.LIST_SUCCESS,

    });
  })

}
