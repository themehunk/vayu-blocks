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

/**
 * Vayu_Block_ToggleGroupControl Component
 * 
 * The `Vayu_Block_ToggleGroupControl` component is a flexible and customizable toggle group control
 * used to render a set of toggleable options. It allows the user to select one option from a set of
 * predefined choices. The component is designed to be reusable and can adapt its appearance and behavior
 * based on the properties passed to it.
 * 
 * ### Props:
 * 
 * - **value** (`string`):
 *   - The currently selected value in the toggle group. This should correspond to one of the values
 *     provided in the `options` prop.
 *   - **Usage**: Used to determine which toggle option is active.
 *   - **Required**: Yes.
 * 
 * - **onChange** (`Function`):
 *   - A callback function triggered when the selected value changes. The function receives the newly selected
 *     value as an argument.
 *   - **Usage**: Used to update the state or perform an action when the user selects a different toggle option.
 *   - **Required**: Yes.
 * 
 * - **isBlock** (`boolean`):
 *   - Controls whether the toggle group is displayed as a block element or inline. When set to `true`,
 *     the toggle group will occupy the full width of its container and stack the options vertically.
 *   - **Default**: `false` (inline display).
 *   - **Usage**: Useful for creating toggle groups that need to occupy the full width of a container or
 *     when vertical stacking is desired.
 *   - **Optional**: Yes.
 * 
 * - **__nextHasNoMarginBottom** (`boolean`):
 *   - A flag that, when set to `true`, removes the bottom margin of the toggle group control. This is particularly
 *     useful when aligning the component with other UI elements that require a more compact layout.
 *   - **Default**: `false` (maintains default bottom margin).
 *   - **Usage**: Helpful in fine-tuning the spacing of the component within a layout, especially in complex UIs.
 *   - **Optional**: Yes.
 * 
 * - **options** (`Array<{value: string, label: string}>`):
 *   - An array of option objects that define the possible values the user can select. Each object in the array
 *     must have a `value` (the value returned when the option is selected) and a `label` (the text displayed to
 *     the user).
 *   - **Usage**: The options determine the toggleable choices presented to the user.
 *   - **Required**: Yes.
 *   - **Example**:
 *     ```js
 *     options={[
 *       { value: 'option1', label: 'Option 1' },
 *       { value: 'option2', label: 'Option 2' },
 *       { value: 'option3', label: 'Option 3' }
 *     ]}
 *     ```
 * 
 * ### Returns:
 * 
 * - **JSX.Element**:
 *   - The rendered `ToggleGroupControl` component, displaying the options as toggleable buttons. The appearance
 *     and behavior of the component depend on the passed props.
 *   - **Behavior**:
 *     - The selected option is highlighted, and clicking on a different option triggers the `onChange` callback
 *       with the new value.
 * 
 * ### Example Usage:
 * 
 * ```js
 * <Vayu_Block_ToggleGroupControl
 *     value={currentValue}
 *     onChange={(newValue) => setCurrentValue(newValue)}
 *     isBlock={true}
 *     __nextHasNoMarginBottom={true}
 *     options={[
 *         { value: 'left', label: 'Left' },
 *         { value: 'center', label: 'Center' },
 *         { value: 'right', label: 'Right' }
 *     ]}
 * />
 * ```
 * 
 * In this example, the `Vayu_Block_ToggleGroupControl` component is used to create a toggle group with three
 * options ("Left", "Center", and "Right"). The currently selected value is stored in the `currentValue` state
 * variable, and the component updates this state when the user selects a different option.
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
