import { SIGNED_IN, SIGNED_OUT } from "../types";

export default function user(state={}, action={}){
    switch (action.type){
        case SIGNED_IN:
            return action.user;
        case SIGNED_OUT:
            return {};
        default : 
            return state;
    }
} 