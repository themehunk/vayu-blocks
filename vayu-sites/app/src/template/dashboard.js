import { createRoot, render, createElement,useState,useEffect } from '@wordpress/element';
import { Flex, FlexBlock, FlexItem,Button } from '@wordpress/components';
import { Icon, arrowRight,chevronLeftSmall, color } from '@wordpress/icons';
import { Logo, Upgrade } from '../aisb';

export default function dashboard(props){


  const handelBigBtn = () =>{
  }

  const btnStyle= { color:"#fff", 
  background:"var(--aisb-bg-color)" 
}

return(<div className='aisb-dashboard'> 

<Flex className="aisb-dashboard-header" direction={[
    'column',
    'row'
  ]}>
<FlexBlock className='aisb-logo'>
<Logo/>
 <small></small> 
<h2>AI Website Builder</h2>
</FlexBlock>

<FlexItem>
<div className="header-text">

                <Upgrade styles = { btnStyle } />
                <Icon icon={<svg className = "dashboard-link" fill="#fff"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"></path></svg>} />
            </div>
</FlexItem>
</Flex>


<Flex className="aisb-dashboard-content" direction={[
    'column',
    'row'
  ]}>

<FlexItem className='aisb-left-db'>
<div className='aisb-left-content'>
<a href={window.location.href+'&template=step'}>
<h2 className='create-website'>
<img src={AISB.pluginpath+'app/assets/svg/create-site.svg'} />
  Create My Website
</h2></a>
</div>
<div className='aisb-left-content'>

<iframe width="560" height="315" src="https://www.youtube.com/embed/buuvC61uD9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className='aisb-left-content'>
  <img src={AISB.pluginpath+'app/assets/images/banner.png'} />
</div>
</FlexItem>


<FlexItem  className='aisb-right-db'>
<div className='aisb-right-content red'>
    <h3  className='aisb-desc docs'><img src={AISB.pluginpath+"/app/assets/svg/docs.svg"} alt="docs" />Documentation</h3>
    <p> Loop through the array to process them. This array structure can be used in your PHP code to organize</p>
    <a href='https://wpzita.com/docs/install-free-zita-site-builder/' target='_blank'>Read More</a>
</div>

<div className='aisb-right-content green'>
    <h3  className='aisb-desc support'><img src={AISB.pluginpath+"/app/assets/svg/support.svg"} alt="support" />Get Help</h3>
    <p> Loop through the array to process them. This array structure can be used in your PHP code to organize</p>
    <a href='https://wpzita.com/builder-support/' target='_blank'>Read More</a>
</div>

<div className='aisb-right-content blue'>
    <h3 className='aisb-desc review'><img src={AISB.pluginpath+"/app/assets/svg/review.svg"} alt="review" />Review</h3>
    <p> Loop through the array to process them. This array structure can be used in your PHP code to organize</p>
    <a href='https://www.trustpilot.com/review/themehunk.com?stars=5' target='_blank'>Read More</a>
</div>

<div className='aisb-right-content yellow'>
    <h3 className='aisb-desc suggestions'><img src={AISB.pluginpath+"/app/assets/svg/suggestions.svg"} alt="suggestions" />Suggestions</h3>
    <p> Loop through the array to process them. This array structure can be used in your PHP code to organize</p>
    <a href='https://wpzita.com/suggestions/' target='_blank'>Read More</a>
</div>
</FlexItem>

  </Flex>


</div>);
}