import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

// Save function as a constant
const Save = ({ attributes: { tagName: Tag = 'div' } }) => {
    // Get the block properties for the save context
    const blockProps = useBlockProps.save();
    
    // Get the properties needed to save inner blocks content correctly
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    // Render the component with the chosen tag name and inner blocks content
    return <Tag {...innerBlocksProps} />;
};

export default Save;
