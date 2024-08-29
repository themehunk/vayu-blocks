import { __ } from '@wordpress/i18n';
import UpgradeButton from '../../vayu-sites/template/UpgradeButton';

function Header({ activeTab, handleTabClick }) {
    return (
        <div className="th-header">
            <div className="th-conatiner">
                <div className="th-header-wrap">
                    <div className="th-logo-wrap">
                        <img src={`${vayublock.homeUrl}assets/img/logo-vayu.png`} alt="Vayu Blocks Logo" />
                        <h2>{__('VAYU BLOCKS', 'vayu-blocks')}</h2>
                    </div>
                    <div className="th-menu-wrap">
                        <div className={`th-menu-item ${activeTab === 'welcome' ? 'active' : ''}`} onClick={() => handleTabClick('welcome')}>
                            {__('Welcome', 'vayu-blocks')}
                        </div>
                        <div className={`th-menu-item ${activeTab === 'blocks' ? 'active' : ''}`} onClick={() => handleTabClick('blocks')}>
                            {__('Settings', 'vayu-blocks')}
                        </div>
                        <div className={`th-menu-item ${activeTab === 'sites' ? 'active' : ''}`} onClick={() => handleTabClick('sites')}>
                            {__('Vayu Sites', 'vayu-blocks')}
                        </div>
                    </div>
                    <div className='header-text'>
                        <UpgradeButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
