export const STORE_ID = "STORE_ID"

export function storeId(id){
    return{
        type: STORE_ID,
        id
    }
}