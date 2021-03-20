
const initialState = {
    nowExchanges: [
        {
            id: 1,
            largeExcName: 'Azərbaycan manatı',
            smallExcName: 'AZN',
            sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
            comparativeValue: '1 AZN = 1 AZN'
        },
        // {
        //     id: 2,
        //     largeExcName: 'ABŞ dolları',
        //     smallExcName: 'USD',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 0.5882 USD'
        // },
        // {
        //     id: 3,
        //     largeExcName: 'Avro',
        //     smallExcName: 'EUR',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 0.4936 EUR'
        // },
        // {
        //     id: 4,
        //     largeExcName: 'Türk lirəsi',
        //     smallExcName: 'TRY',
        //     sourceExc: 'Mənbə: A.R. Mərkəzi Bankı',
        //     comparativeValue: '1 AZN = 4.3122 TRY'
        // }
    ]
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        // case IS_LOGIN:
        //     return {
        //         ...state,
        //         isLogin: action.payload
        //     }
        default:
            return state
    }
}