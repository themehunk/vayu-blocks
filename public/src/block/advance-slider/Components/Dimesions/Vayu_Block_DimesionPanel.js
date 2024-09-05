import styled from '@emotion/styled';
import '../style.css';
import {
    __experimentalBoxControl as BoxControl,
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PanelDescription = styled.div`
    grid-column: span 2;
`;

const SingleColumnItem = styled(ToolsPanelItem)`
    grid-column: span 1;
`;

export function Vayu_Block_DimesionPanel({
    includePadding,
    includeMargin,
    onChange,
    label,
    para,
    values,
    paddingsides,
    marginsides,
    PaddingSetting = [],
    MarginSetting = [],
    isshownBydefault,
    paddinglabel,
    marginlabel,
    resetAll= true,
}) {
    const { padding, margin } = values;

    const handlePaddingChange = (newPadding) => onChange({ ...values, padding: newPadding });
    const handleMarginChange = (newMargin) => onChange({ ...values, margin: newMargin });

    // Convert paddingsides and marginsides to arrays
    const convertToSidesArray = (sides) => {
        if (!sides) return [];
        return Array.isArray(sides) ? sides : [sides];
    };

    const paddingSidesArray = convertToSidesArray(paddingsides);
    const marginSidesArray = convertToSidesArray(marginsides);

    // Determine which BoxControl configurations to display based on paddingsides
    const getBoxControlSides = (sidesArray, label) => {
        const uniqueSides = new Set(sidesArray);
        return {
            default: uniqueSides.has('default'),
            horizontal: uniqueSides.has('horizontal'),
            vertical: uniqueSides.has('vertical'),
        };
    };

    const paddingSidesConfig = getBoxControlSides(paddingSidesArray, paddinglabel);
    const marginSidesConfig = getBoxControlSides(marginSidesArray, marginlabel);

    // Reset all settings to default values
    const handleResetAll = () => {
        onChange({
            padding:{
                top:'0px',
                bottom:'0px',
                left:'0px',
                right:'0px'
            },
            margin:{
                top:'0px',
                bottom:'0px',
                left:'0px',
                right:'0px'
            },

        });
    };

    return (
        <div className="vayu_blocks_dimesion_panel">
            <ToolsPanel label={__(label)} resetAll={resetAll ? handleResetAll : undefined}>
                <PanelDescription>
                    {__(para)}
                </PanelDescription>

                {includePadding && (
                    <>
                    {isshownBydefault.includes('padding') ? (
                        <ToolsPanelItem
                            hasValue={() => !padding}
                            label={__(paddinglabel, 'vayu_blocks')}
                            isShownByDefault
                        >
                            {paddingSidesConfig.default && (
                                <BoxControl
                                    label={__(paddinglabel, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {paddingSidesConfig.horizontal && (
                                <BoxControl
                                    label={__(`HORIZONTAL ${paddinglabel}`, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    sides={['left', 'right']}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {paddingSidesConfig.vertical && (
                                <BoxControl
                                    label={__(`VERTICAL ${paddinglabel}`, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    sides={['top', 'bottom']}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                        </ToolsPanelItem>
                    ) : (
                        <ToolsPanelItem
                            hasValue={() => !padding}
                            label={__(paddinglabel, 'vayu_blocks')}
            
                        >
                            {paddingSidesConfig.default && (
                                <BoxControl
                                    label={__(paddinglabel, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {paddingSidesConfig.horizontal && (
                                <BoxControl
                                    label={__(`HORIZONTAL ${paddinglabel}`, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    sides={['left', 'right']}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {paddingSidesConfig.vertical && (
                                <BoxControl
                                    label={__(`VERTICAL ${paddinglabel}`, 'vayu_blocks')}
                                    onChange={handlePaddingChange}
                                    values={padding}
                                    sides={['top', 'bottom']}
                                    {...Object.fromEntries(PaddingSetting.map(setting => [setting, true]))}
                                />
                            )}
                        </ToolsPanelItem>
                    )}
                    </>
                )}

                {includeMargin && (
                    <>
                    {isshownBydefault.includes('margin') ? (
                        <ToolsPanelItem
                            hasValue={() => !margin}
                            label={__(marginlabel, 'vayu_blocks')}
                     
                            isShownByDefault
                        >
                            {marginSidesConfig.default && (
                                <BoxControl
                                    label={__(marginlabel, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {marginSidesConfig.horizontal && (
                                <BoxControl
                                    label={__(`HORIZONTAL ${marginlabel}`, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    sides={['left', 'right']}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {marginSidesConfig.vertical && (
                                <BoxControl
                                    label={__(`VERTICAL ${marginlabel}`, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    sides={['top', 'bottom']}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                        </ToolsPanelItem>
                    ) : (
                        <ToolsPanelItem
                            hasValue={() => !margin}
                            label={__(marginlabel, 'vayu_blocks')}
                         
                        >
                            {marginSidesConfig.default && (
                                <BoxControl
                                    label={__(marginlabel, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {marginSidesConfig.horizontal && (
                                <BoxControl
                                    label={__(`HORIZONTAL ${marginlabel}`, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    sides={['left', 'right']}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                            {marginSidesConfig.vertical && (
                                <BoxControl
                                    label={__(`VERTICAL ${marginlabel}`, 'vayu_blocks')}
                                    onChange={handleMarginChange}
                                    values={margin}
                                    sides={['top', 'bottom']}
                                    {...Object.fromEntries(MarginSetting.map(setting => [setting, true]))}
                                />
                            )}
                        </ToolsPanelItem>
                    )}
                    </>
                )}
            </ToolsPanel>
        </div>
    );
}
