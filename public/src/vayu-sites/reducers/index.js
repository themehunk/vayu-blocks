import { combineReducers } from 'redux';
import {templateData,templateSelect,trueFalse,tmplInstall,licenseActivate,licenseKeyRandom,stepLoad} from "./temperature";

const rootReducer = combineReducers( { templateData,templateSelect,trueFalse,tmplInstall,licenseActivate,licenseKeyRandom,stepLoad } );

export default rootReducer;