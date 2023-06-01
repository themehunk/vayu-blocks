/**
  * WordPress dependencies.
  */
 import classnames from 'classnames'; 
 import { __ } from '@wordpress/i18n';
 
 import {
     Button,ButtonGroup,
 } from '@wordpress/components';
 
 /**
   * Internal dependencies.
   */
 
  const HoverControl = ({
     value,
     options,
     onChange
 }) => {
     return (
         <ButtonGroup className="th-hover-control">
             { options.map( ( option, index ) => {
                 return (
                     <Button
                         key={ index }
                         className={ classnames(
                             {
                                 'is-active': option.value === value
                             }
                         ) }
                         onClick={ () => onChange( option.value ) }
                     >
                         { option.label }
                     </Button>
                 );
             }) }
         </ButtonGroup>
     );
 };
 
 export default HoverControl;