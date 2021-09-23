import { STORE_ID } from '../actions/storeId'

export default function storeId (state = null, action) {
    switch (action.type) {
        case STORE_ID :
            return action.id
        default :
            return state
    }
}