import React, { useState } from 'react';
import styled from '@emotion/styled';
import '../style.css';
import {
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalUnitControl as UnitControl,
    FontSizePicker,
    SelectControl
} from '@wordpress/components';
import { __experimentalTextDecorationControl as TextDecorationControl } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { LineHeightControl } from '@wordpress/block-editor';
import { __experimentalTextTransformControl  as TextTransformControl   } from '@wordpress/block-editor';

const PanelDescription = styled.div`
    grid-column: span 2;
`;

const SingleColumnItem = styled(ToolsPanelItem)`
    grid-column: span 1;
`;

/**
 * Vayu_blocks_typographycontrol Component
 *
 * This component renders a typography control panel for managing typography-related settings in a WordPress block.
 * It provides controls for font, font size, appearance, line height, letter spacing, text decoration, and letter case.
 * Each control can be conditionally included based on the props passed.
 *
 * Props:
 * 
 * @param {string} [label='Typography'] - The label for the typography control panel. Defaults to 'Typography'.
 * @param {string} [fontLabel='FONT'] - The label for the font control.
 * @param {string} [sizeLabel='SIZE'] - The label for the font size control.
 * @param {string} [appearanceLabel='APPEARANCE'] - The label for the font appearance control.
 * @param {string} [lineHeightLabel='LINEHEIGHT'] - The label for the line height control.
 * @param {string} [letterSpacingLabel='LETTERSPACING'] - The label for the letter spacing control.
 * @param {string} [textDecorationLabel='TEXTDECORATION'] - The label for the text decoration control.
 * @param {string} [letterCaseLabel='LETTERCASE'] - The label for the text transform/letter case control.
 * @param {boolean} [includeFont=false] - Boolean flag to determine if font control should be included.
 * @param {boolean} [includeSize=false] - Boolean flag to determine if font size control should be included.
 * @param {boolean} [includeAppearance=false] - Boolean flag to determine if appearance control should be included.
 * @param {boolean} [includeLineHeight=false] - Boolean flag to determine if line height control should be included.
 * @param {boolean} [includeLetterSpacing=false] - Boolean flag to determine if letter spacing control should be included.
 * @param {boolean} [includeTextDecoration=false] - Boolean flag to determine if text decoration control should be included.
 * @param {boolean} [includeLetterCase=false] - Boolean flag to determine if letter case control should be included.
 * @param {object} value - The current typography settings. This should be an object containing:
 *    - {string} font: The selected font.
 *    - {number} size: The font size.
 *    - {string} appearance: The font appearance/weight.
 *    - {number} lineHeight: The line height.
 *    - {string} letterSpacing: The letter spacing.
 *    - {string} textDecoration: The text decoration (e.g., 'none', 'underline').
 *    - {string} letterCase: The text transform/letter case (e.g., 'none', 'uppercase').
 * @param {function} onChange - Callback function to handle changes in typography settings. It should accept an updated value object.
 * @param {string} [para='Typography Settings'] - A description for the typography settings panel.
 * @param {boolean} [letterSpacingdisableUnits=false] - Flag to disable the units dropdown for letter spacing control.
 * @param {number} [letterSpacingmax=100] - Maximum value for letter spacing control.
 * @param {number} [letterSpacingmin=0] - Minimum value for letter spacing control.
 * @param {Array} [letterSpacingunits=[]] - List of available units for letter spacing.
 * @param {boolean} [letterSpacingisResetValueOnUnitChange=true] - Flag to reset the value when unit is changed.
 * @param {Array} [fontOptions=[]] - Array of available font options for the font control.
 * @param {Array} [vayu_blocks_sizes=[]] - Array of available sizes for the font size control.
 * @param {Array} [appearanceOptions=[]] - Array of available appearance options for the appearance control.
 * @param {function} resetAll - Function to reset all controls to their default values.
 *
 * @returns {JSX.Element} The rendered typography control panel.
 *
 * Example usage:
 *
 * <Vayu_blocks_typographycontrol
 *     label="Complete Typography Settings"
 *     value={{
 *         font: 'Roboto, sans-serif',
 *         size: 18,
 *         appearance: '700', // Bold font
 *         lineHeight: 1.8,
 *         letterSpacing: '2px',
 *         textDecoration: 'underline',
 *         letterCase: 'uppercase'
 *     }}
 *     onChange={(newValues) => console.log('Typography settings changed:', newValues)}
 *     para="Customize the typography settings"
 *     includeFont={true}
 *     includeSize={true}
 *     includeAppearance={true}
 *     includeLineHeight={true}
 *     includeLetterSpacing={true}
 *     includeTextDecoration={true}
 *     includeLetterCase={true}
 *     letterSpacingdisableUnits={false}
 *     letterSpacingmax={50}
 *     letterSpacingmin={1}
 *     letterSpacingunits={[
 *         { label: 'px', value: 'px' },
 *         { label: 'em', value: 'em' },
 *         { label: 'rem', value: 'rem' }
 *     ]}
 *     fontOptions={[
 *         { label: 'Default', value: 'default' },
 *         { label: 'Arial', value: 'Arial, sans-serif' },
 *         { label: 'Roboto', value: '"Roboto", sans-serif' },
 *         { label: 'Georgia', value: 'Georgia, serif' }
 *     ]}
 *     vayu_blocks_sizes={[
 *         { name: 'Small', size: 12, slug: 'small' },
 *         { name: 'Medium', size: 16, slug: 'medium' },
 *         { name: 'Large', size: 20, slug: 'large' },
 *         { name: 'Extra Large', size: 24, slug: 'extra-large' }
 *     ]}
 *     appearanceOptions={[
 *         { label: 'Default', value: 'default' },
 *         { label: 'Normal', value: '400' },
 *         { label: 'Bold', value: '700' },
 *         { label: 'Extra Bold', value: '800' }
 *     ]}
 *     resetAll={() => console.log('Reset all typography settings to default')}
 * />
 */


export function Vayu_blocks_typographycontrol ({
    label = 'Typography',
    fontLabel = 'FONT',
    sizeLabel = 'SIZE',
    appearanceLabel = 'APPEARANCE',
    lineHeightLabel = 'LINEHEIGHT',
    letterSpacingLabel = "LETTERSPACING",
    textDecorationLabel = "TEXTDECORATION",
    letterCaseLabel = "LETTERCASE",
    includeSize = false,
    includeFont = false,
    includeAppearance = false,
    includeLineHeight = false,
    includeLetterSpacing = false,
    includeTextDecoration = false,
    includeLetterCase = false,
    value = { 
        font:'default',
        size: 0, 
        appearance : 'default',
        lineHeight: 1, 
        letterSpacing:'0px',
        textDecoration:'none',
        letterCase: 'none'
    },
    onChange,
    para = "Typography Settings",
    letterSpacingdisableUnits=false,
    letterSpacingmax=100,
    letterSpacingmin=0,
    letterSpacingunits=[
        {
          default: 1,
          label: 'km',
          value: 'km'
        },
        {
          default: 1,
          label: 'mi',
          value: 'mi'
        },
        {
          default: 1000,
          label: 'm',
          value: 'm'
        },
        {
          default: 1760,
          label: 'yd',
          value: 'yd'
        }
    ],
    letterSpacingisResetValueOnUnitChange = true,
    sizeUnits = [],
    fontOptions = [
        {
            disabled: true,
            label: 'Select a Font',
            value: ''
        },
        {
            label: 'Default',
            value: 'default'
        },
        {
            label: 'Arial',
            value: 'Arial, sans-serif'
        },
        {
            label: 'Georgia',
            value: 'Georgia, serif'
        },
        {
            label: 'Helvetica',
            value: 'Helvetica, sans-serif'
        },
        {
            label: 'Times New Roman',
            value: '"Times New Roman", Times, serif'
        },
        {
            label: 'Courier New',
            value: '"Courier New", Courier, monospace'
        },
        {
            label: 'Verdana',
            value: 'Verdana, sans-serif'
        },
        {
            label: 'Roboto',
            value: '"Roboto", sans-serif'
        }
    ],   
    vayu_blocks_sizes= [
        {
            name: 'Small',
            size: 12,
            slug: 'small'
        },
        {
            name: 'Meadium',
            size: 16,
            slug: 'meadium'
        },
        {
            name: 'extraMeadium',
            size: 18,
            slug: 'extrameadium'
        },
        {
            name: 'Big',
            size: 20,
            slug: 'big'
        }
    ],
    appearanceOptions = [
        {
            label: 'Default',
            value: 'default' // Typically, this would be 'normal' or 'inherit'
        },
        {
            label: 'Lighter',
            value: 'lighter' // Font-weight lighter
        },
        {
            label: 'Normal',
            value: '400' // Regular font-weight
        },
        {
            label: 'Bold',
            value: '700' // Bold font-weight
        },
        {
            label: 'Bolder',
            value: 'bolder' // Bolder than parent
        },
        {
            label: 'Extra Bold',
            value: '800' // Extra bold weight
        },
        {
            label: 'Black',
            value: '900' // Heaviest weight
        }
    ],
    resetAll=true
}) {
    const { size ,lineHeight, font, appearance, letterSpacing, textDecoration, letterCase} = value;

    const handleFontChange = (newFont) => onChange({ ...value, font: newFont });
    const handleSizeChange = (newSize) => onChange({ ...value, size: newSize });
    const handleAppearanceChange = (newAppearance) => onChange({ ...value, appearance: newAppearance });
    const handleLineHeightChange = (newLineHeight) => onChange({ ...value, lineHeight: newLineHeight });
    const handleLetterSpacingChange = (newLetterSpacing) => onChange({ ...value, letterSpacing: newLetterSpacing });
    const handleTextDecorationChange = (newTextDecoration) => onChange({ ...value, textDecoration: newTextDecoration });
    const handleLetterCaseChange = (newLetterCase) => onChange({ ...value, letterCase: newLetterCase });

    
    // Reset all settings to default values
    const handleResetAll = () => {
        onChange({
            font: 'default',
            size: 16,
            appearance: 'default',
            lineHeight: 1,
            letterSpacing: '0px',
            textDecoration: 'none',
            letterCase: 'none'
        });
    };
    

    return (
        <div className="vayu_blocks_typography_panel">
            <ToolsPanel label={__(label)} resetAll={resetAll ? handleResetAll : undefined}>
                <PanelDescription>{__(para)}</PanelDescription>

                {includeFont && (
                    <ToolsPanelItem
                        hasValue={() => !font} // Check if a font is selected
                        label={__(fontLabel, 'vayu_blocks')}
                    >
                        <SelectControl
                            label={__(fontLabel, 'vayu_blocks')}
                            value={ font }
                            onChange={handleFontChange}
                            options={fontOptions}
                        />
                    </ToolsPanelItem>
                )}

                {includeSize && (
                    <ToolsPanelItem
                        hasValue={() => !!true}
                        label={__(sizeLabel, 'vayu_blocks')}
                    >
                        <FontSizePicker
                            label={__(sizeLabel, 'vayu_blocks')}
                            fontSizes={vayu_blocks_sizes}
                            onChange={handleSizeChange}
                            value={size}
                            units={sizeUnits}
                        />
                    </ToolsPanelItem>
                )}

                <div className="vayu_blocks_size_all">
                    {includeAppearance && (
                        <ToolsPanelItem
                            hasValue={() => !appearance} // Check if a appearance is selected
                            label={__(appearanceLabel, 'vayu_blocks')}
                        >
                            <SelectControl
                                className="vayu_blocks_appearance"
                                label={__(appearanceLabel, 'vayu_blocks')}
                                value={ appearance }
                                size="compact"
                                onChange={handleAppearanceChange}
                                options={appearanceOptions}
                                variant="minimal"
                            />
                        </ToolsPanelItem>
                    )}

                    {includeLineHeight && (
                        <ToolsPanelItem
                            hasValue={() => !lineHeight}
                            label={__(lineHeightLabel, 'vayu_blocks')}
                        >
                            <LineHeightControl
                                className="vayu_block_lineheightControl"
                            __unstableInputWidth="100px"
                            value={lineHeight}
                            onChange={handleLineHeightChange}

                            />
                        </ToolsPanelItem>
                    )}

                    {includeLetterSpacing && (
                        <ToolsPanelItem
                            hasValue={() => !letterSpacing}
                            label={__(letterSpacingLabel, 'vayu_blocks')}
                        >

                            <UnitControl
                                className="vayu_block_lineheightControl"
                                label={__(letterSpacingLabel, 'vayu_blocks')}
                                onChange={handleLetterSpacingChange}
                                value={letterSpacing}
                                disableUnits={letterSpacingdisableUnits}
                                max={letterSpacingmax}
                                min={letterSpacingmin}
                                units={letterSpacingunits}
                                isResetValueOnUnitChange={letterSpacingisResetValueOnUnitChange}
                            />

                        </ToolsPanelItem>
                    )}

                    {includeTextDecoration && (
                        <ToolsPanelItem
                            hasValue={() => !true}
                            label={__(textDecorationLabel, 'vayu_blocks')}
                        >
                            <TextDecorationControl
                                className="vayu_block_lineheightControl"
                                label={__(textDecorationLabel, 'vayu_blocks')}
                                onChange={handleTextDecorationChange}
                                value={textDecoration}
                            />
                        </ToolsPanelItem>
                    )}
                </div>

                {includeLetterCase && (
                    <ToolsPanelItem
                        hasValue={() => !true}
                        label={__(letterCaseLabel, 'vayu_blocks')}
                    >
                        <TextTransformControl
                            label={__(letterCaseLabel, 'vayu_blocks')}
                            onChange={handleLetterCaseChange}
                            value={letterCase}
                        />

                    </ToolsPanelItem>
                )}

            </ToolsPanel>
        </div>
    );
}
