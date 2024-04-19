import { Upgrade,HomeLink, Logo,Version } from '../aisb';
import { useSelector} from 'react-redux';
import { VerifyKey } from './verifykey';


export default function Header() {
  const license = useSelector((state)=>state.licenseActivate);
  const verifyKeyCheck = VerifyKey();
  const currentURL = window.location.href;

  const verifyBtn = () =>{
    if(license.status){
      return(<span className='active'>&#9673; PRO</span>);
    } else {
      return(<><span className='inactive'>&#9673; INACTIVE</span>
      <a href='' className='activate-now'>Activate now</a>
      </>
      );
    }
}




    return (
      <div className="header">
        <header>
           <Logo/>
            
            <div className="header-text">
                <div className='header-right'>
              {license.status && <div className='aisb-verifybtn'>{ verifyKeyCheck && verifyBtn()} {Version()}</div>}

              {license.status=== false && <Upgrade/> }
              <HomeLink/>
               </div>
            </div>
        </header>
      </div>
    );
  }