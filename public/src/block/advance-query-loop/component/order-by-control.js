import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Define the order options
const orderOptions = [
    { label: __('Author', 'vayu-blocks'), value: 'author' },
    { label: __('Date', 'vayu-blocks'), value: 'date' },
    { label: __('ID', 'vayu-blocks'), value: 'id' },
    { label: __('Include', 'vayu-blocks'), value: 'include' },
    { label: __('Modified', 'vayu-blocks'), value: 'modified' },
    { label: __('Parent', 'vayu-blocks'), value: 'parent' },
    { label: __('Slug', 'vayu-blocks'), value: 'slug' },
    { label: __('Include Slugs', 'vayu-blocks'), value: 'include_slugs' },
    { label: __('Title', 'vayu-blocks'), value: 'title' },
];

// OrderControl Component to handle order selection
const OrderByControl = ({orderBy, onChange }) => (
    <SelectControl
        label={__('Order by', 'vayu-blocks')}
        value={`${orderBy}`}
        options={orderOptions}
        onChange={(newOrder) => {
            onChange({ orderBy: newOrder });
        }}
    />
    
);

export default OrderByControl;
