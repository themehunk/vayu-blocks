import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Define the order options
const orderOptions = [
    { label: __('ASC', 'vayu-blocks'), value: 'asc' },
    { label: __('DESC', 'vayu-blocks'), value: 'desc' },
];

// OrderControl Component to handle order selection
const OrderControl = ({ order, onChange }) => (
    <SelectControl
        label={__('Order', 'vayu-blocks')}
        value={order}
        options={orderOptions}
        onChange={(newOrder) => {
            onChange({ order: newOrder });
        }}
    />
);

export default OrderControl;
