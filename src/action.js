import * as actions from './actionType';

export const onAddData = (item) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        type: actions.ADD_ITEM,
        payload: item
    }
}

export const onDelete = (id) => {
    // return  {
    //     axios.post(url, {}, {headers}).then().catch()
    // }
    return {
        type: actions.REMOVE_ITEM,
        payload: id
    }
}