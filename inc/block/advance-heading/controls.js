/**
 * WordPress dependencies.
 */
 import { __ } from '@wordpress/i18n';

 import {
     Button,
     Dropdown,
     DropdownMenu,
     RangeControl,
     SVG,
     ToolbarGroup
 } from '@wordpress/components';
 
 import { BlockControls } from '@wordpress/block-editor';
 
 import { Fragment } from '@wordpress/element';
 
 const Controls = ({
     attributes,
     setAttributes
 }) => {
 
     const getTagIcon = value => {
         switch ( value ) {
         case 'h1':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H1</text></SVG>;
         case 'h2':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H2</text></SVG>;
         case 'h3':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H3</text></SVG>;
         case 'h4':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H4</text></SVG>;
         case 'h5':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H5</text></SVG>;
         case 'h6':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">H6</text></SVG>;
         case 'div':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">DIV</text></SVG>;
         case 'p':
             return <SVG style={ { width: '25px', height: '20px' } }><text x="0" y="15">P</text></SVG>;
         case 'span':
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">SPAN</text></SVG>;
         default:
             return <SVG style={ { width: '25px', height: '20px' } }><text style={ { fontSize: '12px' } } x="0" y="15">DEFAULT</text></SVG>;
         }
     };
 
 
     const changeTag = value => {
         setAttributes({ tag: value });
     };
 
     return (
         <BlockControls>
             <DropdownMenu
                 icon={ getTagIcon( attributes.tag ) }
                 label={ __( 'Select tag', 'themehunk-block' ) }
                 className="components-toolbar"
                 controls={ [
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 1',
                         icon: getTagIcon( 'h1' ),
                         onClick: () => changeTag( 'h1' )
                     },
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 2',
                         icon: getTagIcon( 'h2' ),
                         onClick: () => changeTag( 'h2' )
                     },
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 3',
                         icon: getTagIcon( 'h3' ),
                         onClick: () => changeTag( 'h3' )
                     },
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 4',
                         icon: getTagIcon( 'h4' ),
                         onClick: () => changeTag( 'h4' )
                     },
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 5',
                         icon: getTagIcon( 'h5' ),
                         onClick: () => changeTag( 'h5' )
                     },
                     {
                         title: __( 'Heading', 'themehunk-block' ) + ' 6',
                         icon: getTagIcon( 'h6' ),
                         onClick: () => changeTag( 'h6' )
                     },
                     {
                         title: __( 'Division', 'themehunk-block' ),
                         icon: getTagIcon( 'div' ),
                         onClick: () => changeTag( 'div' )
                     },
                     {
                         title: __( 'Paragraph', 'themehunk-block' ),
                         icon: getTagIcon( 'p' ),
                         onClick: () => changeTag( 'p' )
                     },
                     {
                         title: __( 'Span Tag', 'themehunk-block' ),
                         icon: getTagIcon( 'span' ),
                         onClick: () => changeTag( 'span' )
                     }
                 ] }
             />
         </BlockControls>
     );
 };
 
 export default Controls;