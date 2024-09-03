import React from 'react';

import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
/**
 * Vayu_Block_ToggleGroupControl Component
 * 
 * This component renders a ToggleGroupControl with dynamic options based on passed props.
 * It supports additional properties like `isBlock` and `__nextHasNoMarginBottom`.
 * 
 * @param {string} value - The current selected value of the toggle group.
 * @param {Function} onChange - Callback function to handle changes in the selected value.
 * @param {boolean} isBlock - Controls whether the component is displayed as a block.
 * @param {boolean} __nextHasNoMarginBottom - A flag to control margin bottom styling.
 * @param {Array<{value: string, label: string}>} options - Array of option objects with value and label.
 * 
 * @returns {JSX.Element} The rendered ToggleGroupControl component.
 */
const Vayu_Block_Toggle = ({
    value,
    onChange,
    isBlock = false,
    __nextHasNoMarginBottom = false,
    options = [],
}) => {
    return (
        <ToggleGroupControl
            value={value}
            onChange={onChange}
            isBlock={isBlock}
            __nextHasNoMarginBottom={__nextHasNoMarginBottom}
        >
            {options.map((option) => (
                <ToggleGroupControlOption
                    key={option.value}
                    value={option.value}
                    label={option.label}
                />
            ))}
        </ToggleGroupControl>
    );
};

export default Vayu_Block_Toggle;
