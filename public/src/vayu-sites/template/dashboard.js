import { useState } from '@wordpress/element';
import { Flex, FlexBlock, FlexItem } from '@wordpress/components';
import { Logo } from '../aisb';
import { __ } from '@wordpress/i18n';
import UpgradeButton from './UpgradeButton';

export default function dashboard(props){
  const [activeTab, setActiveTab] = useState('si');
  const [ builder, setBuilder ] = useState(null);

  const builderHide = (builder_rs) => {
    setBuilder(builder_rs);
  }

  const handleClick = (active,url='')=>{
    setActiveTab(active);
    window.location.href = VAYUB.baseurl+'wp-admin/admin.php?page=vayu-blocks'+url;
  }


return(<div className='aisb-dashboard'> 
<div className='aisb-header-wrap'>
<Flex className="aisb-dashboard-header" direction={[
    'column',
    'row'
  ]}>
<FlexBlock className='aisb-logo'>
<Logo/>
<h2>{__('VAYU BLOCKS', 'vayu-blocks')} </h2>
</FlexBlock>

<FlexBlock className='th-menu-wrap'>
<div className={`th-menu-item ${activeTab==='w' && 'active'}`} onClick={()=>handleClick('w','')}>{__('Welcome', 'vayu-blocks')}</div>
<div className={`th-menu-item ${activeTab==='s' && 'active'}`} onClick={()=>handleClick('s','&path=blocks')}>{__('Settings', 'vayu-blocks')}</div>
<div className={`th-menu-item ${activeTab==='si' && 'active'}`}>{__('Vayu Sites', 'vayu-blocks')}</div>
</FlexBlock>

<FlexItem>
<div className="header-text">
<UpgradeButton link={false}/>
</div>
</FlexItem>
</Flex>
</div>

<div class="th-content">
  <div class="th-conatiner">


  <div className='aisb-left-content'>
  <h3>      {__('Ready To Import Websites', 'vayu-blocks') } </h3>

  <p>      {__('Vayu comes with unlimited possibilities. Check Vayu starter websites for all kinds of niches. Starter templates cover a verity of categories like Fashion, furniture, toys, electronics, Pets, and many more. You can customize templates using WordPress full site editor. So what are you waiting for, Click the button and check the available templates.', 'vayu-blocks') } </p>

  <a href={window.location.href+'&template=step'}>
  <h2 className='create-website'>
  <img src={VAYUB.pluginpath+'admin/assets/svg/create-site.svg'} />
  {__('View All Starter Sites', 'vayu-blocks') }
   
  </h2></a>
  </div>
  <div className='aisb-left-content unsused'>
<iframe width="560" height="315" src="https://www.youtube.com/embed/SkvRl211AQs" title="vayu blocks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>
</div>


</div>);
}