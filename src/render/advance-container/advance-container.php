<?php 

function advance_container_style($attr){

    $css = '';

    if(isset( $attr['id'] )){
        
		$css .= ".wp-block-th-advance-container-{$attr['id']}.boxed-content .th-inside-content-wrap{";
        // boxed-width
		if (isset($attr['boxedcontentWidth'])) {
			$boxedcontentWidthUnit = isset($attr['boxedcontentWidthUnit']) ? $attr['boxedcontentWidthUnit'] : 'px';
			$css .= "max-width: {$attr['boxedcontentWidth']}{$boxedcontentWidthUnit}; ";
		}else{
            $css .= "max-width: {100%};";
        }
        $css .= "}";

        $css .= ".wp-block-th-advance-container-{$attr['id']}.fullwidth-content{";
            // boxed-width
            if (isset($attr['fullcontentWidth'])) {
                $fullcontentWidthUnit = isset($attr['fullcontentWidthUnit']) ? $attr['fullcontentWidthUnit'] : 'px';
                $css .= "width: {$attr['fullcontentWidth']}{$fullcontentWidthUnit}; ";
            }else{
                $css .= "width: {100%};";
            }
       $css .= "}";


       $css .= ".wp-block-th-advance-container-{$attr['id']}{";
      
       // min-height
       if (isset($attr['contentMinHgt'])) {
            $contentMinHgtUnit = isset($attr['contentMinHgtUnit']) ? $attr['contentMinHgtUnit'] : 'px';
            $css .= "min-height: {$attr['contentMinHgt']}{$contentMinHgtUnit}; ";
        }else{
            $css .= "min-height: auto";
        }


       $css .= "}";


      //    tablet view
      $css .= "@media only screen and (min-width: 768px) and (max-width: 1023px) {";
      
      $css .= ".wp-block-th-advance-container-{$attr['id']}.boxed-content .th-inside-content-wrap{";
            // boxed-width
            if (isset($attr['boxedcontentWidthTablet'])) {
                $boxedcontentWidthUnit = isset($attr['boxedcontentWidthUnit']) ? $attr['boxedcontentWidthUnit'] : 'px';
                $css .= "max-width: {$attr['boxedcontentWidthTablet']}{$boxedcontentWidthUnit}; ";
            }else{
                $css .= "max-width: {100%};";
            }
            $css .= "}";
    
            $css .= ".wp-block-th-advance-container-{$attr['id']}.fullwidth-content{";
                // boxed-width
                if (isset($attr['fullcontentWidthTablet'])){
                    $fullcontentWidthUnit = isset($attr['fullcontentWidthUnit']) ? $attr['fullcontentWidthUnit'] : 'px';
                    $css .= "width: {$attr['fullcontentWidthTablet']}{$fullcontentWidthUnit}; ";
                }else{
                    $css .= "width: {100%};";
                }
           $css .= "}";
    
    
           $css .= ".wp-block-th-advance-container-{$attr['id']}{";
          
           // min-height
           if (isset($attr['contentMinHgtTablet'])) {
                $contentMinHgtUnit = isset($attr['contentMinHgtUnit']) ? $attr['contentMinHgtUnit'] : 'px';
                $css .= "min-height: {$attr['contentMinHgtTablet']}{$contentMinHgtUnit}; ";
            }else{
                $css .= "min-height: auto";
            }
    
    
           $css .= "}";

      $css .= " }";

      //    mobile view
      $css .= "@media only screen and (min-width: 767px){";
      
        $css .= ".wp-block-th-advance-container-{$attr['id']}.boxed-content .th-inside-content-wrap{";
              // boxed-width
              if (isset($attr['boxedcontentWidthMobile'])){
                  $boxedcontentWidthUnit = isset($attr['boxedcontentWidthUnit']) ? $attr['boxedcontentWidthUnit'] : 'px';
                  $css .= "max-width: {$attr['boxedcontentWidthMobile']}{$boxedcontentWidthUnit}; ";
              }else{
                  $css .= "max-width: {100%};";
              }
              $css .= "}";
      
              $css .= ".wp-block-th-advance-container-{$attr['id']}.fullwidth-content{";
                  // boxed-width
                  if (isset($attr['fullcontentWidthMobile'])){
                      $fullcontentWidthUnit = isset($attr['fullcontentWidthUnit']) ? $attr['fullcontentWidthUnit'] : 'px';
                      $css .= "width: {$attr['fullcontentWidthMobile']}{$fullcontentWidthUnit}; ";
                  }else{
                      $css .= "width: {100%};";
                  }
             $css .= "}";
      
      
             $css .= ".wp-block-th-advance-container-{$attr['id']}{";
            
             // min-height
             if (isset($attr['contentMinHgtMobile'])) {
                  $contentMinHgtUnit = isset($attr['contentMinHgtUnit']) ? $attr['contentMinHgtUnit'] : 'px';
                  $css .= "min-height: {$attr['contentMinHgtMobile']}{$contentMinHgtUnit}; ";
              }else{
                  $css .= "min-height: auto";
              }
      
      
             $css .= "}";
  
        $css .= " }";

    }

    return $css;

}