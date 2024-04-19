import { useEffect,useState } from '@wordpress/element';
import CryptoJS from 'crypto-js';
import { useSelector, useDispatch } from 'react-redux';
import {licenseKey} from '../actions';
import Cookies from 'js-cookie';
import apiFetch from '@wordpress/api-fetch';
import {PluginStatusChecker} from './PluginStatusChecker';

export function VerifyKey(){
  const pluginStatus =  PluginStatusChecker('vayu-blocks-pro/vayu-blocks-pro');
    const [checkLicense,setCheckLicense] = useState(null);
    const secretKey = useSelector((state)=>state.licenseKeyRandom);
    const dispatch = useDispatch();



    useEffect(() => {
      if(pluginStatus.isActive){
          if(handleGetCookie()===false){
            Checkverify();
          }
      }else if (pluginStatus.isActive === false){
        dispatch(licenseKey({ apikey: null , status:false}));
        setCheckLicense(false);
      }
    
      }, [pluginStatus]);


      const setCookieWithExpiration = (cookieValue) => {
      //  const expirationTime = 24 * 60 * 60 * 1000; // 24 hours
        Cookies.set('vayu-ccheck', cookieValue, { expires: 50 });
      };

      const handleGetCookie = () => {
        const myCookie = Cookies.get('vayu-ccheck');
        if(myCookie && myCookie!=='null'){
          const updatedData = {...aisb_decryptData(myCookie),
            status:true,
          };
          dispatch(licenseKey(updatedData));
          setCheckLicense(true);
          return true;
        }else if(myCookie && myCookie==='null'){
          dispatch(licenseKey({ apikey: null , status:false}));
          setCheckLicense(false);

          return true;
        }
        return false;
      };


    const aisb_decryptData= (encryptedData)=>{

        const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
        const jsonData = JSON.parse(decryptedData);
        return jsonData;
      }

    const verify_status = (license) =>{

      let dycrypt_key = aisb_decryptData(license);

      if(new Date(dycrypt_key.expire_date) > new Date(dycrypt_key.begin_date)){

        const updatedData = {...dycrypt_key,
          status:true,
        };

        setCookieWithExpiration(license);
    
        dispatch(licenseKey(updatedData));

        setCheckLicense(true);


      }else{
        const updatedData = {...dycrypt_key,
          status:false,
        };
        
        dispatch(licenseKey(updatedData));
      }
    }
    const Checkverify = async () =>{
        const dataToSend = { data:'key'};
        try {

        const response = await apiFetch(  {
          path:'/wp/v1/vayu-blocks-api',
          method: 'POST',
      }).then( ( res ) => {

        if (res && res.data && res.data.key) {
          verify_status(res.data.key);
        } else {
          dispatch(licenseKey({ apikey: null , status:false}));
          setCookieWithExpiration(null);
              }
        
    } ) .catch(error => {
                   // Handle errors
                  console.error('Error in api request:', error);
      });

      } catch (error) {
          console.error('Error fetching data:', error);
        }   
  
      }

      return(checkLicense && checkLicense);

}