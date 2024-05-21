import UpgradeButton from './UpgradeButton';
import { Logo } from '../aisb';
export default function Header() {
    return (
      <div className="header">
        <header>
           <Logo/>
            
            <div className="header-text">
                <div className='header-right'>
            <UpgradeButton/>
               </div>
            </div>
        </header>
      </div>
    );
  }