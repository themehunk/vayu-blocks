import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Define the order options
const orderOptions = [
    { label: __('Newest to oldest', 'vayu-blocks'), value: 'date/desc' },
    { label: __('Oldest to newest', 'vayu-blocks'), value: 'date/asc' },
    { label: __('A → Z', 'vayu-blocks'), value: 'title/asc' },
    { label: __('Z → A', 'vayu-blocks'), value: 'title/desc' },
];

// OrderControl Component to handle order selection
const OrderControl = ({ order, orderBy, onChange }) => (
    <SelectControl
        label={__('Order by', 'vayu-blocks')}
        value={`${orderBy}/${order}`}
        options={orderOptions}
        onChange={(value) => {
            const [newOrderBy, newOrder] = value.split('/');
            onChange({ order: newOrder, orderBy: newOrderBy });
        }}
    />
);

export default OrderControl;
