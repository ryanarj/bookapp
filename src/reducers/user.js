import { SIGNED_IN } from "../types";

export default function user(state={}, action={}){
    switch (action.type){
        case SIGNED_IN:
            return action.user;
        default : 
            return state;
    }
} 