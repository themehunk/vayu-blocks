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
                 label={ __( 'Select tag', 'vayu-blocks' ) }
                 className="components-toolbar"
                 controls={ [
                     { 
                         label:__( 'Heading 1', 'vayu-blocks' ),
                         icon: getTagIcon( 'h1' ),
                         onClick: () => changeTag( 'h1' )
                     },
                     {
                         label:__( 'Heading 2', 'vayu-blocks' ),
                         icon: getTagIcon( 'h2' ),
                         onClick: () => changeTag( 'h2' )
                     },
                     {
                         label:__( 'Heading 3', 'vayu-blocks' ),
                         icon: getTagIcon( 'h3' ),
                         onClick: () => changeTag( 'h3' )
                     },
                     {
                         label:__( 'Heading 4', 'vayu-blocks' ),
                         icon: getTagIcon( 'h4' ),
                         onClick: () => changeTag( 'h4' )
                     },
                     {
                         label:__( 'Heading 5', 'vayu-blocks' ),
                         icon: getTagIcon( 'h5' ),
                         onClick: () => changeTag( 'h5' )
                     },
                     {
                         label:__( 'Heading 6', 'vayu-blocks' ),
                         icon: getTagIcon( 'h6' ),
                         onClick: () => changeTag( 'h6' )
                     },
                     {
                         label:__( 'Div', 'vayu-blocks' ),
                         icon: getTagIcon( 'div' ),
                         onClick: () => changeTag( 'div' )
                     },
                     {
                         label:__( 'Paragraph', 'vayu-blocks' ),
                         icon: getTagIcon( 'p' ),
                         onClick: () => changeTag( 'p' )
                     },
                     {
                         label:__( 'Span', 'vayu-blocks' ),
                         icon: getTagIcon( 'span' ),
                         onClick: () => changeTag( 'span' )
                     }
                 ] }
             />
         </BlockControls>
     );
 };
 
 export default Controls;