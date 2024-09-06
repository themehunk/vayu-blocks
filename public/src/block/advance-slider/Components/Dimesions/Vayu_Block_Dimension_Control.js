import { Vayu_Block_DimesionPanel } from './Vayu_Block_DimesionPanel'; // Adjust the path as needed
import '../style.css';


/**
 * Vayu_Block_Dimension_Control Component
 * 
 * This component renders a control panel for handling various dimension-related settings in a WordPress block.
 * It supports the inclusion and configuration of padding and margin settings based on passed props.
 * 
 * Props:
 * 
 * @param {string} [label='Dimension'] - The label for the dimension control panel. Defaults to 'Dimension'.
 * @param {object} value - The current values of the dimensions being controlled. This should be an object containing the dimension values (e.g., padding and margin).
 * @param {string} [para='Select dimensions related settings from the menu for additional controls.'] - Description text for the dimension control panel.
 * @param {function} onChange - Callback function to handle changes in the dimension values. It should accept an object with updated dimension values.
 * @param {string|string[]} [marginsides=['default']] - Specifies the sides to which margin settings apply. Can be an array or a string representing the sides (e.g., 'top', 'bottom', 'left', 'right').
 * @param {string|string[]} [paddingsides=['default']] - Specifies the sides to which padding settings apply. Can be an array or a string representing the sides (e.g., 'top', 'bottom', 'left', 'right').
 * @param {Array<string>} [PaddingSetting=[]] - Array of additional padding settings to be applied. 
 * @param {Array<string>} [MarginSetting=[]] - Array of additional margin settings to be applied.
 * @param {boolean} [includePadding=true] - Boolean flag to determine if padding controls should be included.
 * @param {boolean} [includeMargin=true] - Boolean flag to determine if margin controls should be included.
 * @param {Array<string>} [isshownBydefault=['padding']] - Array of dimension types that should be shown by default (e.g., 'padding', 'margin').
 * @param {string} [paddinglabel='PADDING'] - Label for the padding control.
 * @param {string} [marginlabel='MARGIN'] - Label for the margin control.
 * 
 * @returns {JSX.Element} The rendered dimension control panel.
 * 
 * Example usage:
 * 
 * <Vayu_Block_Dimension_Control
 *     label="Adjust Dimensions"
 *     value={{
 *         padding: {
 *             top: 10,
 *             right: 15,
 *             bottom: 20,
 *             left: 25,
 *         },
 *         margin: {
 *             top: 5,
 *             right: 10,
 *             bottom: 15,
 *             left: 20,
 *         },
 *     }}
 *     onChange={(newValues) => console.log(newValues)}
 *     includePadding={true}
 *     includeMargin={true}
 *     paddingsides={['top', 'bottom']}
 *     marginsides={['left', 'right']}
 *     isshownBydefault={['padding']}
 *     paddinglabel='Padding'
 *     marginlabel='Margin'
 * />
 */

export function Vayu_Block_Dimension_Control({
    label='Dimension',
    value,
    para = "Select dimensions related settings from the menu for additional controls.",
    onChange,
    PaddingSetting = [],
    MarginSetting = [],
    includePadding = true,
    includeMargin = true,
    paddingsides=["default"],
    marginsides=["default"],
    isshownBydefault = ["padding"],
    paddinglabel ='PADDING',
    marginlabel ='MARGIN'
}) {
    // Determine which dimensions to include based on the includePadding and includeMargin flags
    const dimensionsToInclude = {
        includePadding, // Controls whether the padding settings are included in the panel
        includeMargin,  // Controls whether the margin settings are included in the panel
    };

    // Update the value based on the dimension type and included dimensions
    const handleDimensionChange = (newValues) => {
        onChange({ ...value, ...newValues });
    };

    
    return (
        <Vayu_Block_DimesionPanel
            label={label}
            para = {para}
            values={value}
            onChange={handleDimensionChange}
            marginsides = {marginsides}
            paddingsides = {paddingsides}
            PaddingSetting={PaddingSetting}
            MarginSetting={MarginSetting}
            isshownBydefault = {isshownBydefault}
            paddinglabel = {paddinglabel}
            marginlabel = {marginlabel}
            {...dimensionsToInclude} 
        />
    );
}
