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
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H1</text>
         case 'h2':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H2</text>;
         case 'h3':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H3</text>;
         case 'h4':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H4</text>;
         case 'h5':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H5</text>;
         case 'h6':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">H6</text>;
         case 'div':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">DIV</text>;
         case 'p':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">P</text>;
         case 'span':
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">SPAN</text>;
         default:
             return <text style={ { fontSize: '14px',fontWeight:'bold' } } x="0" y="15">DEFAULT</text>;
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
                         label:__( 'Heading 1', 'themehunk-block' ),
                         icon: getTagIcon( 'h1' ),
                         onClick: () => changeTag( 'h1' )
                     },
                     {
                         label:__( 'Heading 2', 'themehunk-block' ),
                         icon: getTagIcon( 'h2' ),
                         onClick: () => changeTag( 'h2' )
                     },
                     {
                         label:__( 'Heading 3', 'themehunk-block' ),
                         icon: getTagIcon( 'h3' ),
                         onClick: () => changeTag( 'h3' )
                     },
                     {
                         label:__( 'Heading 4', 'themehunk-block' ),
                         icon: getTagIcon( 'h4' ),
                         onClick: () => changeTag( 'h4' )
                     },
                     {
                         label:__( 'Heading 5', 'themehunk-block' ),
                         icon: getTagIcon( 'h5' ),
                         onClick: () => changeTag( 'h5' )
                     },
                     {
                         label:__( 'Heading 6', 'themehunk-block' ),
                         icon: getTagIcon( 'h6' ),
                         onClick: () => changeTag( 'h6' )
                     },
                     {
                         label:__( 'Div', 'themehunk-block' ),
                         icon: getTagIcon( 'div' ),
                         onClick: () => changeTag( 'div' )
                     },
                     {
                         label:__( 'Paragraph', 'themehunk-block' ),
                         icon: getTagIcon( 'p' ),
                         onClick: () => changeTag( 'p' )
                     },
                     {
                         label:__( 'Span', 'themehunk-block' ),
                         icon: getTagIcon( 'span' ),
                         onClick: () => changeTag( 'span' )
                     }
                 ] }
             />
         </BlockControls>
     );
 };
 
 export default Controls;