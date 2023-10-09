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
     ToolbarGroup,
     ToolbarButton
 } from '@wordpress/components';
 
 import { BlockControls, useBlockProps,
	__experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
 
 import { Fragment } from '@wordpress/element';
 import { link } from '@wordpress/icons';
 
 const Controls = ({
     attributes,
     setAttributes
 }) => {
 
    
 
     return (
         <BlockControls>
             <Dropdown
        className="th-link-button"
        contentClassName="my-popover-content-classname"
        popoverProps={ { placement: 'bottom-start' } }
        renderToggle={ ( { isOpen, onToggle } ) => (
            <Button
                variant="primary"
                onClick={ onToggle }
                aria-expanded={ isOpen }
                icon={ link }
            >
                
            </Button>
        ) }
        renderContent={ () => 
        <LinkControl
            searchInputPlaceholder="Search here..."
            value={ attributes.post }
            settings={[
                {
                    id: 'opensInNewTab',
                    title: 'New tab?',
                }
                // ,{
                //     id: 'customDifferentSetting',
                //     title: 'Has this custom setting?'
                // }
            ]}
            onChange={ ( newPost ) => setAttributes( { post: newPost } ) }
            withCreateSuggestion={true}
            createSuggestion={ (inputValue) => setAttributes( { post: {
                ...attributes.post,
                title: inputValue,
                type: "custom-url",
                id: Date.now(),
                url: inputValue
            } } ) }
            createSuggestionButtonText={ (newValue) => `${__("New:")} ${newValue}` }
        >
        </LinkControl> }
    />
         </BlockControls>
     );
 };
 
 export default Controls;