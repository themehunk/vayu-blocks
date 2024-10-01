import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {

    const blockProps = useBlockProps.save( { className: 'my-class' } );
    const innerBlocksProps = useInnerBlocksProps.save( blockProps );
 
    return <section {...innerBlocksProps} />
};

export default Save;
