import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody, Button, Popover,DuotonePicker  } from '@wordpress/components';
import { __experimentalHStack as HStack, __experimentalText as Text } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __experimentalToolsPanel as ToolsPanel, __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';


const DuotonePanel = ({ duotoneValue, onDuotoneChange, duotonePalette }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [popoverAnchor, setPopoverAnchor] = useState();
    const [dutone, setdutone] = useState(duotoneValue);

    const toggleVisible = () => {
        setIsVisible((prev) => !prev);
    };

    const handleDuotoneChange = (value) => {
        onDuotoneChange(value);
        setdutone(value);
    };

    console.log(dutone);

    return (
        <div className="vayu_blocks_duotone_panel">
            <ToolsPanel label={__('Duotone')}>
                <ToolsPanelItem
                    className="vayu_blocks_dutone_toolspanel_item"
                    hasValue={() => !!duotoneValue}
                    label={__('Filter')}
                    onDeselect={() => onDuotoneChange(undefined)}
                    isShownByDefault
                >
                    <Button
                        ref={setPopoverAnchor}
                        onClick={toggleVisible}
                        className={`block-editor-panel-duotone-settings__dropdown ${isVisible && 'is-open'}`}
                    >
                        <HStack alignment="left">
                        <div data-wp-c16t="true" data-wp-component="Flex" class="components-flex ff-ad-ec-a-ebdfba-spl71z e19lxcc00"><span class="component-color-indicator block-editor-duotone-control__unset-indicator"  style={{
                                background: (dutone && dutone.length > 1) ? `linear-gradient(135deg, ${dutone[0]} 0%,${dutone[0]} 50%, ${dutone[1]} 50%, ${dutone[1]} 100%)` :'',
                            }}></span></div>
                            <Text>{__('Duotone')}</Text>
                        </HStack>
                    </Button>
                </ToolsPanelItem>
            </ToolsPanel>
            {isVisible && (
                <Popover
                    placement="left-start"
                    className='vayu_blocks_toolspanel_items_popover'
                    anchor={popoverAnchor}
                    onClose={() => setIsVisible(false)}
                    offset={35}
                    resize
                >
                    <div className='vayu_blocks_div_duotone'>
                    <h4>Duotone</h4>
                    <p>Create a two-tone color effect without losing your original image.</p>
                    <DuotonePicker
                        label={__('Filter')}
                        className='vayu_blocks_dutonepicker_popover'
                        duotonePalette={duotonePalette}
                        value={duotoneValue}
                        onChange={handleDuotoneChange}
                        disableCustomColors
                        disableCustomDuotone
                    />
                    </div>
                </Popover>
            )}
        </div>
    );
};

export default DuotonePanel;
