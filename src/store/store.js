import { createStore,combineReducers } from "redux";
import{  UilUsdSquare,UilClipboard,UilMoneyWithdrawal} from "@iconscout/react-unicons"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const oldData={
    currentuser:{},
    inputdata:{},
    cartdata:[],
}

function userData(puranaData = oldData , nayadta){
if(nayadta.type == "userlogins"){
    // console.log(nayadta.payload);
        puranaData.currentuser = nayadta.payload;

    }else if(nayadta.type == "del"){
        puranaData.currentuser={}
        localStorage.removeItem('token')
        }
    else if(nayadta.type == "inputvalue"){
        puranaData.inputdata = nayadta.payload;
        // console.log(nayadta.payload);
    }
    else if(nayadta.type == "User_LoginOk"){
        puranaData.currentuser = nayadta.payload;
    }
    else if(nayadta.type == "cartProducts"){
        puranaData.cartdata.push(nayadta.payload) ;
        console.log(nayadta.payload);
    }
    else if(nayadta.type == "Del-Ad"){
        puranaData.cartdata.splice(nayadta.payload,1) ;
        console.log(nayadta.payload);
    }
    else if(nayadta.type=="persist/REHYDRATE"&& nayadta.payload){
         return nayadta.payload.userData
    }
    return {...puranaData}
}

let bigSection = combineReducers({userData});
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, bigSection)
  export let store = createStore(persistedReducer)
  export let persistor = persistStore(store);
// export let store = createStore(bigSection);