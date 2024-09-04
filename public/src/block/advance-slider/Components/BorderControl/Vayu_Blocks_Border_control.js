import React from 'react';
import styled from '@emotion/styled';
import {
    __experimentalBorderBoxControl as BorderBoxControl,
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PanelDescription = styled.div`
    grid-column: span 2;
`;

const SingleColumnItem = styled(ToolsPanelItem)`
    grid-column: span 1;
`;

const defaultBorder = {
    color: '#72aee6',
    style: 'solid',
    width: '0px',
};

const defaultBorderRadius = {
    width: '0px'
};


/**
 * Vayu_Block_Border_Control Component
 * 
 * This component renders a control panel for managing border and border-radius settings.
 * It allows users to configure the border properties (color, style, width) and border-radius 
 * for each side of an element.
 * 
 * Props:
 * 
 * @param {string} [label='Border'] - The label for the border control panel. Defaults to 'Border'.
 * @param {object} [value] - The current border and border-radius settings. 
 *                            Should include `border` and `borderRadius` properties.
 * @param {string} [para='Configure border and border radius settings.'] - Description text for the control panel.
 * @param {function} onChange - Callback function that is called when border or border-radius values change.
 * @param {boolean} [includeBorder=true] - Whether to include the border controls in the panel.
 * @param {boolean} [includeBorderRadius=true] - Whether to include the border-radius controls in the panel.
 * @param {string} [borderLabel='Border'] - Label for the border control.
 * @param {string} [borderRadiusLabel='RADIUS'] - Label for the border-radius control.
 * @param {string} [color] - Default color for the border.
 * @param {boolean} [disableCustomColors=false] - Whether to disable custom color options.
 * @param {string} [popoverPlacement] - The placement of the color popover.
 * @param {boolean} [enableAlpha=false] - Whether to enable alpha transparency in color picker.
 * @param {boolean} [enableStyle=true] - Whether to enable style options.
 * 
 * @returns {JSX.Element} The rendered border and border-radius control panel.
 * 
 * Example usage:
 * 
 * <Vayu_Block_Border_Control
 *     label="Custom Border Control"
 *     value={{
 *         border: {
 *             top: { color: '#ff0000', style: 'dashed', width: '2px' },
 *             right: { color: '#00ff00', style: 'dotted', width: '3px' },
 *             bottom: { color: '#0000ff', style: 'solid', width: '4px' },
 *             left: { color: '#ffff00', style: 'double', width: '5px' },
 *         },
 *         borderRadius: {
 *             top: { width: '10px' },
 *             right: { width: '15px' },
 *             bottom: { width: '20px' },
 *             left: { width: '25px' },
 *         },
 *     }}
 *     onChange={(newSettings) => console.log(newSettings)}
 *     includeBorder={true}
 *     includeBorderRadius={true}
 *     borderLabel='Custom Border'
 *     borderRadiusLabel='Custom Radius'
 *     color='#ff0000'
 *     disableCustomColors={false}
 *     popoverPlacement="bottom"
 *     enableAlpha={true}
 *     enableStyle={true}
 * />
 */

export function Vayu_Block_Border_Control({
    label = 'Border',
    value = {
        border: {
            top: defaultBorder,
            right: defaultBorder,
            bottom: defaultBorder,
            left: defaultBorder,
        },
        borderRadius: {
            top: defaultBorderRadius,
            right: defaultBorderRadius,
            bottom: defaultBorderRadius,
            left: defaultBorderRadius,
        },
    },
    onChange,
    para="Configure border and border radius settings.",
    includeBorder = true,
    includeBorderRadius = true,
    borderLabel = 'BORDER',
    borderRadiusLabel = 'RADIUS',
    color,
    disableCustomColors=false,
    popoverPlacement,
    enableAlpha=false,
    enableStyle=true
}) {
    const { border, borderRadius } = value;

   const handleBorderChange = (newBorder) => {
        const updatedValue = { ...value, border: newBorder };
        onChange(updatedValue);
    };

    const handleBorderRadiusChange = (newBorderRadius) => {
        const updatedValue = { ...value, borderRadius: newBorderRadius };
        onChange(updatedValue);
    };

    const resetAll = () => {
        const resetValue = {
            border: {
                top: defaultBorder,
                right: defaultBorder,
                bottom: defaultBorder,
                left: defaultBorder,
            },
            borderRadius: defaultBorderRadius,
        };
        onChange(resetValue);
    };

    return (
        <div className="vayu_blocks_border_panel">
            <ToolsPanel label={__(label)} resetAll={resetAll}>
                <PanelDescription>
                    {__(para)}
                </PanelDescription>

                {includeBorder && (
                    <ToolsPanelItem
                        hasValue={() => !!border}
                        label={__(borderLabel, 'vayu_blocks')}
                        onDeselect={() => handleBorderChange(undefined)}
                        isShownByDefault
                    >
                        <div class="vayu_block_border_control">
                        <BorderBoxControl
                            label={__(borderLabel, 'vayu_blocks')}
                            onChange={handleBorderChange}
                            value={border}
                            color={color}
                            disableCustomColors={disableCustomColors}
                            popoverPlacement={popoverPlacement}
                            enableAlpha={enableAlpha}
                            enableStyle={enableStyle}
                        />
                        </div>
                    </ToolsPanelItem>
                )}

                {includeBorderRadius && (
                    <ToolsPanelItem
                        hasValue={() => !!borderRadius}
                        label={__(borderRadiusLabel, 'vayu_blocks')}
                        onDeselect={() => handleBorderRadiusChange(undefined)}
                        isShownByDefault
                    >
                        <div class="vayu_block_borderradius_control">
                        <BorderBoxControl
                            label={__(borderRadiusLabel, 'vayu_blocks')}
                            onChange={handleBorderRadiusChange}
                            value={borderRadius}
                        />
                        </div>
                    </ToolsPanelItem>
                )}
            </ToolsPanel>
        </div>
    );
}
