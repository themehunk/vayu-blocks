import { useState,useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { PanelBody,TabPanel,TextControl,Button,ColorIndicator,FlexItem,
ColorPalette, Popover,Dropdown,GradientPicker,
  } from '@wordpress/components';
import {
    __experimentalHStack as HStack,
    __experimentalText as Text,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import styled from '@emotion/styled';
import '../style.css';
import {
    __experimentalBoxControl as BoxControl,
    __experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
    __experimentalUnitControl as UnitControl,
} from '@wordpress/components';

const PanelDescription = styled.div`
grid-column: span 1;
`;

/**
 * ColorPanel Component
 * 
 * The `ColorPanel` component provides a user interface for managing color and gradient settings in the WordPress block editor. 
 * It allows users to select and apply colors or gradients to various block attributes. The panel supports both color and gradient selection,
 * and provides options for customizing the appearance of blocks.
 * 
 * Props:
 * 
 * @param {Array} colorTool - An array of color tool objects. Each object represents a color or gradient tool and should include:
 *   - `name` (`string`): The label for the color tool.
 *   - `value` (`string`): The color or gradient value. This can be a hex color code (e.g., '#ffffff') or a gradient string (e.g., 'linear-gradient(135deg, rgba(255,105,0,1) 0%, rgb(207,46,46) 100%)').
 *   - `attribute` (`string`): The block attribute to which the color or gradient should be applied. This is used to identify which block property is being modified.
 *   - `active` (`string`): The type of color setting to display ('color' or 'gradient').
 * 
 * @param {function} handelColorPanel - A callback function that is called when color or gradient values change. This function receives an object with the updated attribute values:
 *   - The object keys are attribute names and the values are the updated color or gradient values.
 * 
 * @param {string} [para='Select a color or gradient.'] - Optional description text for the color panel. Defaults to 'Select a color or gradient.' if not provided.
 * 
 * @returns {JSX.Element} The rendered color and gradient control panel.
 * 
 * Description:
 * 
 * - The `ColorPanel` component renders a panel with a list of color and gradient tools. Each tool is represented by a button that, when clicked, 
 *   displays a popover with the color or gradient selection options.
 * 
 * - The panel supports two main tabs: 'Color' and 'Gradient'. The active tab is determined based on the tool type (color or gradient) and 
 *   user interactions.
 * 
 * - The `colorTool` array should include objects for each color or gradient tool that you want to provide. Each object should have properties 
 *   specifying the name, value, attribute, and active type of the tool.
 * 
 * - The `handelColorPanel` callback function is called whenever a user selects a color or gradient. It receives an object with the updated attribute 
 *   values, allowing you to handle the changes and update the block's appearance accordingly.
 * 
 * - The `para` prop allows you to provide custom descriptive text for the panel. This text is displayed above the color and gradient tools and 
 *   can be used to guide users on how to use the panel.
 * 
 * - The component uses a `Popover` to display the color or gradient picker when a tool button is clicked. The `TabPanel` is used to switch between 
 *   color and gradient selection options.
 * 
 * Example usage:
 * 
 * <ColorPanel
 *     colorTool={[
 *         {
 *             name: 'Background Color',
 *             value: '#ffffff',
 *             attribute: 'backgroundColor',
 *             active: 'color'
 *         },
 *         {
 *             name: 'Text Color',
 *             value: '#000000',
 *             attribute: 'textColor',
 *             active: 'color'
 *         },
 *         {
 *             name: 'Gradient Background',
 *             value: 'linear-gradient(135deg, rgba(255,105,0,1) 0%, rgb(207,46,46) 100%)',
 *             attribute: 'backgroundGradient',
 *             active: 'gradient'
 *         }
 *     ]}
 *     handelColorPanel={(updatedValues) => console.log(updatedValues)}
 *     para="Choose colors or gradients for your block."
 * />
 * 
 * Notes:
 * 
 * - Ensure that each tool object in the `colorTool` array is correctly configured with a valid `value`, `attribute`, and `active` type.
 * 
 * - The `handelColorPanel` function should be implemented to handle the updates to block attributes. This function is called whenever the user 
 *   changes a color or gradient setting.
 * 
 * - The `para` prop is optional and can be used to provide additional context or instructions for using the color panel.
 * 
 * - The component uses WordPress's `Popover` and `TabPanel` components to manage the display of color and gradient pickers, ensuring a seamless 
 *   user experience.
 */


const ColorPanel = (props) =>{
    // Retrieve the themes color settings from the block editors' data
    const blockEditor = useSelect('core/block-editor').getSettings();

    const [ popoverAnchor, setPopoverAnchor ] = useState();
    const [ gradient, setGradient ] = useState( null );
    const [ color, setColor ] = useState( null );
    const [ activeTab, setActiveTab ] = useState('color');
    const [ attr, setAttr ] = useState( null );
    const [ isVisible, setIsVisible ] = useState( false );

    const [ colorTabActive, setcolorTabActive ] = useState( [
      {
        name: 'color',
        title: 'Color',
        className: 'tab1',

      }
    ] );
    
    const textColors = [
      {
        colors:[
          {
            "name": "Black",
            "slug": "black",
            "color": "#000000"
          },
          {
            "name": "Cyan bluish gray",
            "slug": "cyan-bluish-gray",
            "color": "#abb8c3"
          },
          {
            "name": "White",
            "slug": "white",
            "color": "#ffffff"
          },
          {
            "name": "Pale pink",
            "slug": "pale-pink",
            "color": "#f78da7"
          },
          {
            "name": "Vivid red",
            "slug": "vivid-red",
            "color": "#cf2e2e"
          },
          {
            "name": "Luminous vivid orange",
            "slug": "luminous-vivid-orange",
            "color": "#ff6900"
          },
          {
            "name": "Luminous vivid amber",
            "slug": "luminous-vivid-amber",
            "color": "#fcb900"
          },
          {
            "name": "Light green cyan",
            "slug": "light-green-cyan",
            "color": "#7bdcb5"
          },
          {
            "name": "Vivid green cyan",
            "slug": "vivid-green-cyan",
            "color": "#00d084"
          },
          {
            "name": "Pale cyan blue",
            "slug": "pale-cyan-blue",
            "color": "#8ed1fc"
          },
          {
            "name": "Vivid cyan blue",
            "slug": "vivid-cyan-blue",
            "color": "#0693e3"
          },
          {
            "name": "Vivid purple",
            "slug": "vivid-purple",
            "color": "#9b51e0"
          }
        ],
        name: 'DEFAULT'
      },
      {
        colors: blockEditor.colors,
        name: 'THEME COLORS'
      }
    ];

    const textColorsCustom = [
        { name: 'red', color: '#f00' },
        { name: 'blck', color: '#000' },
        { name: 'blue', color: '#00f' },
    ]; 

    const bgColors = [
      { name: 'red', color: '#f00' },
      { name: 'blck', color: '#000' },
      { name: 'blue', color: '#00f' },
    ]; 
  
    //blockEditor.gradients
    const gradientColor =[
      {
        gradients: [
          {
            "name": "Vivid cyan blue to vivid purple",
            "gradient": "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
            "slug": "vivid-cyan-blue-to-vivid-purple"
          },
          {
            "name": "Light green cyan to vivid green cyan",
            "gradient": "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
            "slug": "light-green-cyan-to-vivid-green-cyan"
          },
          {
            "name": "Luminous vivid amber to luminous vivid orange",
            "gradient": "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
            "slug": "luminous-vivid-amber-to-luminous-vivid-orange"
          },
          {
            "name": "Luminous vivid orange to vivid red",
            "gradient": "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
            "slug": "luminous-vivid-orange-to-vivid-red"
          },
          {
            "name": "Very light gray to cyan bluish gray",
            "gradient": "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
            "slug": "very-light-gray-to-cyan-bluish-gray"
          },
          {
            "name": "Cool to warm spectrum",
            "gradient": "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
            "slug": "cool-to-warm-spectrum"
          },
          {
            "name": "Blush light purple",
            "gradient": "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
            "slug": "blush-light-purple"
          },
          {
            "name": "Blush bordeaux",
            "gradient": "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
            "slug": "blush-bordeaux"
          },
          {
            "name": "Luminous dusk",
            "gradient": "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
            "slug": "luminous-dusk"
          },
          {
            "name": "Pale ocean",
            "gradient": "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
            "slug": "pale-ocean"
          },
          {
            "name": "Electric grass",
            "gradient": "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
            "slug": "electric-grass"
          },
          {
            "name": "Midnight",
            "gradient": "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
            "slug": "midnight"
          }
        ],
        name: 'DEFAULT'
      },
      {
        gradients: blockEditor.gradients,
        name: 'THEME COLOR'
      }
    ];
    
    useEffect(() => {
        // isHexColor(props.colorCode);
    });

    const isHexColor = (str)=>{
        
            let haxColor =  /^#([0-9A-F]{3}){1,2}$/i.test(str);
            let gradient =  /^linear-gradient/.test(str);

            if (haxColor) {
                setColor(str);
                setActiveTab('color');
                
                }else if(gradient){
                setGradient(str);
                setActiveTab('gradient');
                }
    }

    const handleActiveColorTab = (activeColorTab)=>{
            let colortab =   {
            name: 'color',
            title: 'Color',
            className: 'tab1',
    
            }
            let gradientTab =   {
            name: 'gradient',
            title: 'Gradient',
            className: 'tab2',
            }

        if(activeColorTab.includes('gradient')){
        setcolorTabActive( [colortab,gradientTab] );
        }else{
        setcolorTabActive ([colortab])
        }
    }

    const toggleVisible =  (colorCode,attrid,activeColorTab) => {

        handleActiveColorTab(activeColorTab);
        //if (activeColorTab.has("color")) {
            //get Value of video
            // alert(true);
        // }

        if((attrid ===attr && isVisible === false) || (attrid !=attr && isVisible === false)){
            setIsVisible(true);

        }else if(attrid ===attr && isVisible === true){
            setIsVisible(false);

        }else if(attrid !=attr && isVisible === true){
            setIsVisible(false);
            setTimeout(function () {setIsVisible(true)});
        }
        
        // else{
        //   console.log('state');

        //   setIsVisible((state) => !state);
        // }

        isHexColor(colorCode);
        setAttr(attrid);

    };

    const handleChange = (val)=>{
        var blockAttr = {};
        setGradient(val);
        blockAttr[attr] = val;
        props.handelColorPanel(blockAttr);
    };

    const handleClick = (val)=>{
        var blockAttr = {};
        setColor(val);
        blockAttr[attr] = val;
        props.handelColorPanel(blockAttr);
    };

    const panelColors = ( tabName ) => {
        if(tabName==='gradient') {
            return  (<GradientPicker
            __nextHasNoMargin
            value={ gradient }
            onChange={ handleChange}
            gradients={gradientColor}
            />);
        } else if(tabName==='color'){
          return (<ColorPalette
              colors={ textColors }
              value={color}
              onChange={handleClick }
              enableAlpha
          />);
        }
    };

    const onFocusOutsideClick = (event) =>{
    setIsVisible(false);
    }

    const colorButton = () => {
    let colorData = props.colorTool;

    // Default value for para
    const [para, setPara] = useState('');

    // Update para if props.para changes
    useEffect(() => {
        if (props.para) {
            setPara(props.para);
        }
    }, [props.para]);

    return (
        <div className="vayu_blocks_colorpanel">
            <ToolsPanel label={__('Color')}>
              {para && (
                <PanelDescription>
                      {__(para)}
                </PanelDescription>
              )}
              

                {colorData.map((data, i) => (
                  
                        <ToolsPanelItem
                            key={i}
                            hasValue={() => !!color || !!gradient}
                            label={__(data.name, 'vayu_blocks')}
                            onDeselect={() => props.handelColorPanel({ [data.attribute]: undefined })}
                            isShownByDefault
                        >
                            <Button
                                ref={setPopoverAnchor}
                                onClick={() => toggleVisible(data.value, data.attribute, data.active)}
                                className={`block-editor-panel-color-gradient-settings__dropdown ${attr === data.attribute && 'is-open'}`}
                            >
                                <HStack alignment="left">
                                    <ColorIndicator
                                        className="block-editor-panel-color-gradient-settings__color-indicator"
                                        colorValue={data.value}
                                    />
                                    <FlexItem>{data.name}</FlexItem>
                                </HStack>
                            </Button>
                        </ToolsPanelItem>
                ))}
            </ToolsPanel>
            {isVisible && (
                <Popover
                    placement="left-start"
                    onFocusOutside={onFocusOutsideClick}
                    anchor={popoverAnchor}
                    onClose={() => setIsVisible(false)}
                    offset={35}
                >
                    <fieldset>
                        <TabPanel
                            className="ubp-tab-panel"
                            activeClass="is-active"
                            initialTabName={activeTab}
                            tabs={colorTabActive}
                        >
                            {tab => <div className='ubp-color-component'>{panelColors(tab.name)}</div>}
                        </TabPanel>
                    </fieldset>
                </Popover>
            )}
        </div>
    );
};

return colorButton();
};

export default ColorPanel;
