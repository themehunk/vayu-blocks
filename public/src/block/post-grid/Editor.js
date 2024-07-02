
import { PanelBody, ToggleControl, ColorPalette, FontSizePicker, RangeControl, __experimentalBoxControl as BoxControl, DropdownMenu, GradientPicker, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import './editor.scss';
import { MenuGroup, MenuItem } from '@wordpress/components';
import { more, arrowUp, arrowDown, trash ,moreVertical} from '@wordpress/icons';
import { Button, Popover } from '@wordpress/components';


import {
	InsSettingHeader,
	ResponsiveControl,
	SizingControl,
	HoverControl,
	ControlPanelControl,
	BackgroundSelectorControl,
	UnitChooser,
	ToogleGroupControl,
	IconPicker,
	GoogleFontsControl
} from '../../components/index.js';


const Editor = ({ attributes, setAttributes }) => {
    const {
		pg_backgroundType,
		pg_backgroundColor,
		pg_postBorderRadius,
		pg_layoutBorder,
		pg_layoutBorderColor,
		pg_layoutPaddingTop,
		pg_layoutPaddingRight,
		pg_layoutPaddingBottom,
		pg_layoutPaddingLeft,
		pg_blockTitleColor,
		pg_blockTitleSize,
		pg_blockTitleTag,
		pg_textColor,
		pg_textSize,
		pg_lineHeight,
		pg_showFeaturedImage,
		pg_imageBorderRadius,
		pg_showCategoriesMenu,
		pg_showTagsMenu,
		pg_showAuthorMenu,
		pg_showDateMenu,
		pg_showCategories,
		pg_showCategoriesOnImage,
		pg_categoryTextSize,
		pg_categoryTextColor,
		pg_categoryBackgroundColor,
		pg_categoryBorderRadius,
		pg_categoryBorder,
		pg_categoryBorderColor,
		pg_categoryPaddingTop,
		pg_categoryPaddingBottom,
		pg_categoryPaddingLeft,
		pg_categoryPaddingRight,
		pg_showTags,
		pg_tagTextSize,
		pg_tagTextColor,
		pg_tagBackgroundColor,
		pg_tagBorderRadius,
		pg_tagBorder,
		pg_tagBorderColor,
		pg_tagPaddingTop,
		pg_tagPaddingBottom,
		pg_tagPaddingLeft,
		pg_tagPaddingRight,
		pg_showAuthor,
		pg_authorTextSize,
		pg_authorTextColor,
		pg_authorImageScale,
		pg_showDate,
		pg_dateTextSize,
		pg_dateColor,
		buttonpaddingUnit,
		categorypaddingUnit,
		layoutborderType,
		categoryorderType,
		tagborderType,
		
        layout_backgroundType,
        layout_backgroundColor,
        layout_backgroundImage,
        layout_backgroundGradient,
        layout_backgroundPosition,
        layout_backgroundAttachment,
        layout_backgroundRepeat,
        layout_backgroundSize,
		
		category_backgroundType,
        category_backgroundColor,
        category_backgroundImage,
        category_backgroundGradient,
        category_backgroundPosition,
        category_backgroundAttachment,
        category_backgroundRepeat,
        category_backgroundSize,

		tag_backgroundType,
        tag_backgroundColor,
        tag_backgroundImage,
        tag_backgroundGradient,
        tag_backgroundPosition,
        tag_backgroundAttachment,
        tag_backgroundRepeat,
        tag_backgroundSize,
		tagpaddingUnit,

		pg_showBorderColorMenu,
		pg_showBorderSizeMenu ,
		pg_showBorderTypeMenu,
		pg_showBorderRadiusMenu,

		pg_showCategoriesBorderColorMenu,
		pg_showCategoriesBorderSizeMenu ,
		pg_showCategoriesBorderTypeMenu,
		pg_showCategoriesBorderRadiusMenu ,

		pg_showtagBorderColorMenu,
		pg_showtagBorderSizeMenu ,
		pg_showtagBorderTypeMenu,
		pg_showtagBorderRadiusMenu 

	} = attributes;
	
    const fontSizes = [
		{ name: __('Small', 'post-grid'), slug: 'small', size: 12 },
		{ name: __('Medium', 'post-grid'), slug: 'medium', size: 16 },
		{ name: __('Large', 'post-grid'), slug: 'large', size: 20 },
		{ name: __('Larger', 'post-grid'), slug: 'larger', size: 24 },
	];
	const fontSizesmeta =   [
		{ name: __('Small', 'post-grid'), slug: 'small', size: 8 },
		{ name: __('Medium', 'post-grid'), slug: 'medium', size: 12 },
		{ name: __('Large', 'post-grid'), slug: 'large', size: 18 },
		{ name: __('Larger', 'post-grid'), slug: 'larger', size: 24},
	];
	const fontSizeextra =   [
		{ name: __('Small', 'post-grid'), slug: 'small', size: 18 },
		{ name: __('Medium', 'post-grid'), slug: 'medium', size: 24 },
		{ name: __('Large', 'post-grid'), slug: 'large', size: 32 },
		{ name: __('Larger', 'post-grid'), slug: 'larger', size: 40},
	];
	const fontSizesauthor= [
		{ name: __('Small', 'post-grid'), slug: 'small', size: 10 },
		{ name: __('Medium', 'post-grid'), slug: 'medium', size: 14},
		{ name: __('Large', 'post-grid'), slug: 'large', size: 18 },
		{ name: __('Larger', 'post-grid'), slug: 'larger', size: 24},
	];
    const colors = [
		{ name: 'Gray', color: '#808080' },         // Dark Gray
		{ name: 'Light Gray', color: '#D3D3D3' },   // Light Gray
		{ name: 'Black', color: '#000' },           // Black
		{ name: 'Light Black', color: '#333' },     // Light Black
		{ name: 'Blue', color: '#00f' },            // Blue
		{ name: 'Light Blue', color: '#add8e6' },   // Light Blue
		{ name: 'Green', color: '#008000' },        // Green
		{ name: 'Dark Blue', color: '#00008B' },    // Dark Blue
		{ name: 'Red', color: '#f00' },             // Red
		{ name: 'Light Red', color: '#FF6347' },    // Light Red
		{ name: 'Purple', color: '#800080' },       // Purple
	];

	const setpaddingButtonUnit = (unit) => {
        setAttributes({ buttonpaddingUnit: unit });
    };

    const changeButtonPadding = (type, value) => {
        switch (type) {
            case 'top':
                setAttributes({ pg_layoutPaddingTop: value });
                break;
            case 'right':
                setAttributes({ pg_layoutPaddingRight: value });
                break;
            case 'bottom':
                setAttributes({ pg_layoutPaddingBottom: value });
                break;
            case 'left':
                setAttributes({ pg_layoutPaddingLeft: value });
                break;
        }
    };

    const getButtonPadding = (side) => {
        switch (side) {
            case 'top':
                return pg_layoutPaddingTop;
            case 'right':
                return pg_layoutPaddingRight;
            case 'bottom':
                return pg_layoutPaddingBottom;
            case 'left':
                return pg_layoutPaddingLeft;
        }
    };

	const setpaddingcategoryUnit = (unit) => {
        setAttributes({ categorypaddingUnit: unit });
    };


    const changecategoryPadding = (type, value) => {
        switch (type) {
            case 'top':
                setAttributes({ pg_categoryPaddingTop: value });
                break;
            case 'right':
                setAttributes({ pg_categoryPaddingRight: value });
                break;
            case 'bottom':
                setAttributes({ pg_categoryPaddingBottom: value });
                break;
            case 'left':
                setAttributes({ pg_categoryPaddingLeft: value });
                break;
        }
    };


    const getcategoryPadding = (side) => {
        switch (side) {
            case 'top':
                return pg_categoryPaddingTop;
            case 'right':
                return pg_categoryPaddingRight;
            case 'bottom':
                return pg_categoryPaddingBottom;
            case 'left':
                return pg_categoryPaddingLeft;
        }
    };

	const setpaddingtagUnit = (unit) => {
        setAttributes({ tagpaddingUnit: unit });
    };


    const changetagPadding = (type, value) => {
        switch (type) {
            case 'top':
                setAttributes({ pg_tagPaddingTop: value });
                break;
            case 'right':
                setAttributes({ pg_tagPaddingRight: value });
                break;
            case 'bottom':
                setAttributes({ pg_tagPaddingBottom: value });
                break;
            case 'left':
                setAttributes({ pg_tagPaddingLeft: value });
                break;
        }
    };


    const gettagPadding = (side) => {
        switch (side) {
            case 'top':
                return pg_tagPaddingTop;
            case 'right':
                return pg_tagPaddingRight;
            case 'bottom':
                return pg_tagPaddingBottom;
            case 'left':
                return pg_tagPaddingLeft;
        }
    };

	const [ isVisible, setIsVisible ] = useState( false );
    const toggleVisible = () => {
        setIsVisible( ( state ) => ! state );
    };

    return (
        <>
		
          <PanelBody title={__('Layout Block', 'post-grid')} initialOpen={false}>
						
						<h4>Background Color</h4>
							<BackgroundSelectorControl
								backgroundType={layout_backgroundType}
								backgroundColor={layout_backgroundColor}
								image={layout_backgroundImage}
								gradient={layout_backgroundGradient}
								focalPoint={layout_backgroundPosition}
								backgroundAttachment={layout_backgroundAttachment}
								backgroundRepeat={layout_backgroundRepeat}
								backgroundSize={layout_backgroundSize}
								changeBackgroundType={(value) => setAttributes({ layout_backgroundType: value })}
								changeImage={(media) => {
									setAttributes({
										layout_backgroundImage: pick(media, ['id', 'url'])
									});
								}}
								removeImage={() => setAttributes({ layout_backgroundImage: undefined })}
								changeColor={(value) => setAttributes({ layout_backgroundColor: value })}
								changeGradient={(value) => setAttributes({ layout_backgroundGradient: value })}
								changeBackgroundAttachment={(value) => setAttributes({ layout_backgroundAttachment: value })}
								changeBackgroundRepeat={(value) => setAttributes({ layout_backgroundRepeat: value })}
								changeFocalPoint={(value) => setAttributes({ layout_backgroundPosition: value })}
								changeBackgroundSize={(value) => setAttributes({ layout_backgroundSize: value })}
							/>

				
					
							< >
					<div style={{
						borderTop: "0.8px solid rgba(128, 128, 128, 0.209)",
						borderBottom: "0.8px solid rgba(128, 128, 128, 0.209)",
						paddingLeft:"17px",
						marginTop:'0px',
						position:"relative"
						
						}}>
						<h4>Border</h4>
						<div style={{
								marginTop:"-45px",
								marginLeft:"78%",
								position:"absolute"
							}}>
									<DropdownMenu
									icon={moreVertical}
										controls={[
											{
												onClick: () => {setAttributes({pg_showBorderColorMenu: !pg_showBorderColorMenu,})},
												title: pg_showBorderColorMenu ? __('Border Color ✔ ', 'post-grid') : __('Border Color', 'post-grid'),
												hidden: pg_showBorderColorMenu,
												 // Hide if Category panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showBorderSizeMenu: !pg_showBorderSizeMenu})},
												title: pg_showBorderSizeMenu ? __('Border Size ✔ ', 'post-grid') : __('Border Size', 'post-grid'),
												hidden: pg_showBorderSizeMenu, // Hide if Tag panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showBorderTypeMenu:!pg_showBorderTypeMenu})},
												title: pg_showBorderTypeMenu ? __('Border Type ✔ ', 'post-grid') : __('Border Type', 'post-grid'),
												hidden: pg_showBorderTypeMenu, // Hide if Author panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showBorderRadiusMenu:!pg_showBorderRadiusMenu})},
												title: pg_showBorderRadiusMenu ? __('BorderRadius ✔ ', 'post-grid') : __('BorderRadius', 'post-grid'),
												hidden: pg_showBorderRadiusMenu, // Hide if Author panel is already open
											},

										]}
										label={__('Select a Border Option', 'post-grid')}
									/>
									</div>
				</div>
										
									{pg_showBorderColorMenu && (
										<PanelBody title = {__('Border Color','post-grid')} > {/* Category Meta Settings */}
										   <ColorPalette
												label={__('Border Color', 'post-grid')}
												colors={colors}
												value={pg_layoutBorderColor}
												onChange={(color) => setAttributes({ pg_layoutBorderColor: color })}
											/>
										</PanelBody>
										)}

									{/* Tag Panel */}
									{pg_showBorderSizeMenu  && (
									  <PanelBody title = {__('Border Size','post-grid')}>
										<RangeControl
												label={__('Border', 'post-grid')}
												value={pg_layoutBorder}
												onChange={(value) => setAttributes({ pg_layoutBorder: value })}
												min={0}
												max={25}
											/>
									  </PanelBody>
									)}
								  
									{/* Author Panel */}
									{pg_showBorderTypeMenu  && (
									  <PanelBody title = {__('Border Type','post-grid')}>
											<SelectControl
												label={ __( 'Border Type', 'vayu-blocks' ) }
												value={ attributes.layoutborderType }
												options={ [
													{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
													{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
													{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
													{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
													{ label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
													{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
												] }
												onChange={ e => setAttributes({ layoutborderType: e }) }
											/>	
									  </PanelBody>
									)}

									{/* Date Panel */}
									{pg_showBorderRadiusMenu  && (
									  <PanelBody title = {__('Border Radius','post-grid')}>
										
										<RangeControl
												label={__('Border Radius', 'post-grid')}
												value={pg_postBorderRadius}
												onChange={(value) => setAttributes({ pg_postBorderRadius: value })}
												min={0}
												max={60}
											/>
										
									  </PanelBody>
									)}
								  
			</> 

						<h4>Padding</h4>
				 <ResponsiveControl label={__('Padding', 'post-grid')}>
                    <UnitChooser
                        value={categorypaddingUnit}
                        onClick={(unit) => {
                            setAttributes({ buttonpaddingUnit: unit });
                            setpaddingButtonUnit(unit);
                        }}
                        units={['px', 'em', '%']}
                    />
                    <SizingControl
                        min={0}
                        max={100} // Adjust as needed
                        onChange={changeButtonPadding}
                        options={[
                            {
                                label: __('Top', 'post-grid'),
                                type: 'top',
                                value: getButtonPadding('top')
                            },
                            {
                                label: __('Right', 'post-grid'),
                                type: 'right',
                                value: getButtonPadding('right')
                            },
                            {
                                label: __('Bottom', 'post-grid'),
                                type: 'bottom',
                                value: getButtonPadding('bottom')
                            },
                            {
                                label: __('Left', 'post-grid'),
                                type: 'left',
                                value: getButtonPadding('left')
                            }
                        ]}
                    />
                </ResponsiveControl>

			</PanelBody>

			<PanelBody title={__('Content', 'post-grid')} initialOpen={false}>
				<h4>Color</h4>
				<ColorPalette
					label={__(' Color', 'post-grid')}
					colors={colors}
					value={pg_textColor}
					onChange={(color) => setAttributes({ pg_textColor: color })}
				/>
				<h4> Font Size</h4>
				<FontSizePicker
					label={__(' Font Size', 'Post_blockk')}
					fontSizes={fontSizes}
					value={pg_textSize}
					onChange={(value) => setAttributes({ pg_textSize: value })}
				/>
				<br />
				<RangeControl
					label={__('Line Height', 'post-grid')}
					value={pg_lineHeight}
					onChange={(value) => setAttributes({ pg_lineHeight: value })}
					min={1}
					max={3}
					step={0.1}
				/>
				{/* <BoxControl
					label={__('Padding', 'post-grid')}
					value={padding}
					onChange={(value) => setAttributes({ padding: value })}
				/>
				<BoxControl
					label={__('Margin', 'post-grid')}
					value={margin}
					onChange={(value) => setAttributes({ margin: value })}
				/> */}
			</PanelBody>

			<PanelBody title={__('Featured Image', 'post-grid')} initialOpen={false}>
				<ToggleControl
					label={__('Show Featured Image', 'post-grid')}
					checked={pg_showFeaturedImage}
					onChange={(value) => {
						setAttributes({ pg_showFeaturedImage: value });

						// Automatically disable and uncheck 'Show Categories on Image' if 'Show Featured Image' is false
						if (!value) {
							setAttributes({ pg_showCategoriesOnImage: false });
						}
					}}
				/>
				{pg_showFeaturedImage && (
					<RangeControl
						label={__('Border Radius', 'post-grid')}
						value={pg_imageBorderRadius}
						onChange={(value) => setAttributes({ pg_imageBorderRadius: value })}
						min={0}
						max={60}
					/>
				)}
			</PanelBody>
			
			{/* Meta */}
            < >
					<div style={{
						borderTop: "0.8px solid rgba(128, 128, 128, 0.209)",
						borderBottom: "0.8px solid rgba(128, 128, 128, 0.209)",
						paddingLeft:"17px",
						marginTop:'0px',
						position:"relative"
						
						}}>
						<h4>Meta</h4>
						<div style={{
								marginTop:"-45px",
								marginLeft:"78%",
								position:"absolute"
							}}>
									<DropdownMenu
									// icon={<moreVertical/>}
										controls={[
											{
												onClick: () => {setAttributes({pg_showCategoriesMenu: !pg_showCategoriesMenu,})},
												title: pg_showCategoriesMenu ? __('Category ✔', 'post-grid') : __('Category', 'post-grid'),
												hidden: pg_showCategoriesMenu,
												 // Hide if Category panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showTagsMenu: !pg_showTagsMenu})},
												title: pg_showTagsMenu ? __('Tag ✔', 'post-grid') : __('Tag', 'post-grid'),
												hidden: pg_showTagsMenu, // Hide if Tag panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showAuthorMenu:!pg_showAuthorMenu})},
												title: pg_showAuthorMenu ? __('Author ✔', 'post-grid') : __('Author', 'post-grid'),
												hidden: pg_showAuthorMenu, // Hide if Author panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showDateMenu:!pg_showDateMenu})},
												title: pg_showDateMenu ? __('Date ✔', 'post-grid') : __('Date', 'post-grid'),
												hidden: pg_showDateMenu, // Hide if Author panel is already open
											},

										]}
										label={__('Select a Meta Option', 'post-grid')}
									/>
									</div>
				</div>
									
									
									{pg_showCategoriesMenu && (
										<PanelBody title = {__('Category','post-grid')} > {/* Category Meta Settings */}
										    <h2>Category</h2>
											<ToggleControl
											label={__('Show Categories', 'post-grid')}
											checked={pg_showCategories}
											onChange={(value) => setAttributes({ pg_showCategories: value })}
										/>
										{pg_showCategories && (<>
										{pg_showCategories && pg_showFeaturedImage && (
											<ToggleControl
												label={__('Show Categories on Image', 'post-grid')}
												checked={pg_showCategoriesOnImage}
												onChange={(value) => setAttributes({ pg_showCategoriesOnImage: value })}
											/>
										)}
											<h4>{__('Font Size', 'post-grid')}</h4>
											<FontSizePicker
											label={__('Font Size', 'post-grid')}
											fontSizes={fontSizesmeta}
											value={pg_categoryTextSize}
											onChange={(value) => setAttributes({ pg_categoryTextSize: value })}
											/>
											<h4>{__('Color', 'post-grid')}</h4>
											<ColorPalette
										
											label={__('Color', 'post-grid')}
											colors={colors}
											value={pg_categoryTextColor}
											onChange={(color) => setAttributes({ pg_categoryTextColor: color })}
											/>
											<h4>{__('Background Color', 'post-grid')}</h4>
											<BackgroundSelectorControl
												backgroundType={category_backgroundType}
												backgroundColor={category_backgroundColor}
												image={category_backgroundImage}
												gradient={category_backgroundGradient}
												focalPoint={category_backgroundPosition}
												backgroundAttachment={category_backgroundAttachment}
												backgroundRepeat={category_backgroundRepeat}
												backgroundSize={category_backgroundSize}
												changeBackgroundType={(value) => setAttributes({ category_backgroundType: value })}
												changeImage={(media) => {
													setAttributes({
														category_backgroundImage: pick(media, ['id', 'url'])
													});
												}}
												removeImage={() => setAttributes({ category_backgroundImage: undefined })}
												changeColor={(value) => setAttributes({ category_backgroundColor: value })}
												changeGradient={(value) => setAttributes({ category_backgroundGradient: value })}
												changeBackgroundAttachment={(value) => setAttributes({ category_backgroundAttachment: value })}
												changeBackgroundRepeat={(value) => setAttributes({ category_backgroundRepeat: value })}
												changeFocalPoint={(value) => setAttributes({ category_backgroundPosition: value })}
												changeBackgroundSize={(value) => setAttributes({ category_backgroundSize: value })}
											/>


< >
					<div style={{
						borderTop: "0.8px solid rgba(128, 128, 128, 0.209)",
						borderBottom: "0.8px solid rgba(128, 128, 128, 0.209)",
						paddingLeft:"17px",
						marginTop:'0px',
						position:"relative"
						
						}}>
						<h4>Border</h4>
						<div style={{
								marginTop:"-45px",
								marginLeft:"78%",
								position:"absolute"
							}}>
									<DropdownMenu
									icon={moreVertical}
										controls={[
											{
												onClick: () => {setAttributes({pg_showCategoriesBorderColorMenu: !pg_showCategoriesBorderColorMenu,})},
												title: pg_showCategoriesBorderColorMenu ? __('Border Color ✔ ', 'post-grid') : __('Border Color', 'post-grid'),
												hidden: pg_showCategoriesBorderColorMenu,
												 // Hide if Category panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showCategoriesBorderSizeMenu: !pg_showCategoriesBorderSizeMenu})},
												title: pg_showCategoriesBorderSizeMenu ? __('Border Size ✔ ', 'post-grid') : __('Border Size', 'post-grid'),
												hidden: pg_showCategoriesBorderSizeMenu, // Hide if Categories panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showCategoriesBorderTypeMenu:!pg_showCategoriesBorderTypeMenu})},
												title: pg_showCategoriesBorderTypeMenu ? __('Border Type ✔ ', 'post-grid') : __('Border Type', 'post-grid'),
												hidden: pg_showCategoriesBorderTypeMenu, // Hide if Author panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showCategoriesBorderRadiusMenu:!pg_showCategoriesBorderRadiusMenu})},
												title: pg_showCategoriesBorderRadiusMenu ? __('BorderRadius ✔ ', 'post-grid') : __('BorderRadius', 'post-grid'),
												hidden: pg_showCategoriesBorderRadiusMenu, // Hide if Author panel is already open
											},

										]}
										label={__('Select a Border Option', 'post-grid')}
									/>
									</div>
				</div>
										
									{pg_showCategoriesBorderColorMenu && (
										<PanelBody title = {__('Border Color','post-grid')} > {/* Category Meta Settings */}
											<ColorPalette
											
											label={__('Border Color', 'post-grid')}
											colors={colors}
											value={pg_categoryBorderColor}
											onChange={(color) => setAttributes({ pg_categoryBorderColor: color })}
											/>

										</PanelBody>
										)}

									{/* Categories Panel */}
									{pg_showCategoriesBorderSizeMenu  && (
									  <PanelBody title = {__('Border Size','post-grid')}>
											<h4>{__('Border Width', 'post-grid')}</h4> {/* Corrected label */}
											<RangeControl
											label={__('Border Width', 'post-grid')}
											value={pg_categoryBorder}
											onChange={(value) => setAttributes({ pg_categoryBorder: value })}
											min={0}
											max={25}
											/>
									  </PanelBody>
									)}
								  
									{/* Author Panel */}
									{pg_showCategoriesBorderTypeMenu  && (
									  <PanelBody title = {__('Border Type','post-grid')}>
											<SelectControl
												label={ __( 'Border Type', 'vayu-blocks' ) }
												value={ attributes.CategoryborderType }
												options={ [
													{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
													{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
													{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
													{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
													{ label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
													{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
												] }
												onChange={ e => setAttributes({ CategoryborderType: e }) }
											/>	
							
									  </PanelBody>
									)}

									{/* Date Panel */}
									{pg_showCategoriesBorderRadiusMenu  && (
									  <PanelBody title = {__('Border Radius','post-grid')}>
										
										<h4>{__('Border Radius', 'post-grid')}</h4>
											<RangeControl
											label={__('Border Radius', 'post-grid')}
											value={pg_categoryBorderRadius}
											onChange={(value) => setAttributes({ pg_categoryBorderRadius: value })}
											min={0}
											max={60}
											/>
									  </PanelBody>
									)}
								  
			</>

											<h4>{__('Padding', 'post-grid')}</h4>
											<ResponsiveControl label={__('Padding', 'post-grid')}>
                    <UnitChooser
                        value={categorypaddingUnit}
                        onClick={(unit) => {
                            setAttributes({ categorypaddingUnit: unit });
                            setpaddingcategoryUnit(unit);
                        }}
                        units={['px', 'em', '%']}
                    />
                    <SizingControl
                        min={0}
                        max={100} // Adjust as needed
                        onChange={changecategoryPadding}
                        options={[
                            {
                                label: __('Top', 'post-grid'),
                                type: 'top',
                                value: getcategoryPadding('top')
                            },
                            {
                                label: __('Right', 'post-grid'),
                                type: 'right',
                                value: getcategoryPadding('right')
                            },
                            {
                                label: __('Bottom', 'post-grid'),
                                type: 'bottom',
                                value: getcategoryPadding('bottom')
                            },
                            {
                                label: __('Left', 'post-grid'),
                                type: 'left',
                                value: getcategoryPadding('left')
                            }
                        ]}
                    />
               							</ResponsiveControl>
										</>)}
										</PanelBody>
										)}

								  
									{/* Tag Panel */}
									{pg_showTagsMenu  && (
									  <PanelBody title = {__('Tags','post-grid')}>
										<h2>Tags</h2>
										
											<ToggleControl
												label={__('Show Tags', 'post-grid')}
												checked={pg_showTags}
												onChange={(value) => setAttributes({ pg_showTags: value })}
											/>
										{/* Tag Meta Settings */}
										{pg_showTags && (<>
										<h4>{__('Font Size', 'post-grid')}</h4>
										<FontSizePicker
										  label={__('Font Size', 'post-grid')}
										  fontSizes={fontSizesmeta}
										  value={pg_tagTextSize}
										  onChange={(value) => setAttributes({ pg_tagTextSize: value })}
										/>
										<h4>{__('Color', 'post-grid')}</h4>
										<ColorPalette
										  
										  label={__('Color', 'post-grid')}
										  colors={colors}
										  value={pg_tagTextColor}
										  onChange={(color) => setAttributes({ pg_tagTextColor: color })}
										/>
										<h4>{__('Background Color', 'post-grid')}</h4>
										<BackgroundSelectorControl
											backgroundType={tag_backgroundType}
											backgroundColor={tag_backgroundColor}
											image={tag_backgroundImage}
											gradient={tag_backgroundGradient}
											focalPoint={tag_backgroundPosition}
											backgroundAttachment={tag_backgroundAttachment}
											backgroundRepeat={tag_backgroundRepeat}
											backgroundSize={tag_backgroundSize}
											changeBackgroundType={(value) => setAttributes({ tag_backgroundType: value })}
											changeImage={(media) => {
												setAttributes({
													tag_backgroundImage: pick(media, ['id', 'url'])
												});
											}}
											removeImage={() => setAttributes({ tag_backgroundImage: undefined })}
											changeColor={(value) => setAttributes({ tag_backgroundColor: value })}
											changeGradient={(value) => setAttributes({ tag_backgroundGradient: value })}
											changeBackgroundAttachment={(value) => setAttributes({ tag_backgroundAttachment: value })}
											changeBackgroundRepeat={(value) => setAttributes({ tag_backgroundRepeat: value })}
											changeFocalPoint={(value) => setAttributes({ tag_backgroundPosition: value })}
											changeBackgroundSize={(value) => setAttributes({ tag_backgroundSize: value })}
										/>


< >
					<div style={{
						borderTop: "0.8px solid rgba(128, 128, 128, 0.209)",
						borderBottom: "0.8px solid rgba(128, 128, 128, 0.209)",
						paddingLeft:"17px",
						marginTop:'0px',
						position:"relative"
						
						}}>
						<h4>Border</h4>
						<div style={{
								marginTop:"-45px",
								marginLeft:"78%",
								position:"absolute"
							}}>
									<DropdownMenu
									icon={moreVertical}
										controls={[
											{
												onClick: () => {setAttributes({pg_showtagBorderColorMenu: !pg_showtagBorderColorMenu,})},
												title: pg_showtagBorderColorMenu ? __('Border Color ✔ ', 'post-grid') : __('Border Color', 'post-grid'),
												hidden: pg_showtagBorderColorMenu,
												 // Hide if Category panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showtagBorderSizeMenu: !pg_showtagBorderSizeMenu})},
												title: pg_showtagBorderSizeMenu ? __('Border Size ✔ ', 'post-grid') : __('Border Size', 'post-grid'),
												hidden: pg_showtagBorderSizeMenu, // Hide if Tag panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showtagBorderTypeMenu:!pg_showtagBorderTypeMenu})},
												title: pg_showtagBorderTypeMenu ? __('Border Type ✔ ', 'post-grid') : __('Border Type', 'post-grid'),
												hidden: pg_showtagBorderTypeMenu, // Hide if Author panel is already open
											},
											{
												onClick: () => {setAttributes({pg_showtagBorderRadiusMenu:!pg_showtagBorderRadiusMenu})},
												title: pg_showtagBorderRadiusMenu ? __('BorderRadius ✔ ', 'post-grid') : __('BorderRadius', 'post-grid'),
												hidden: pg_showtagBorderRadiusMenu, // Hide if Author panel is already open
											},

										]}
										label={__('Select a Border Option', 'post-grid')}
									/>
									</div>
				</div>
										
									{pg_showtagBorderColorMenu && (
										<PanelBody title = {__('Border Color','post-grid')} > {/* Category Meta Settings */}
											<ColorPalette
											
											label={__('Border Color', 'post-grid')}
											colors={colors}
											value={pg_tagBorderColor}
											onChange={(color) => setAttributes({ pg_tagBorderColor: color })}
											/>

										</PanelBody>
										)}

									{/* Tag Panel */}
									{pg_showtagBorderSizeMenu  && (
									  <PanelBody title = {__('Border Size','post-grid')}>
											<h4>{__('Border Width', 'post-grid')}</h4> {/* Corrected label */}
											<RangeControl
											label={__('Border Width', 'post-grid')}
											value={pg_tagBorder}
											onChange={(value) => setAttributes({ pg_tagBorder: value })}
											min={0}
											max={25}
											/>
									  </PanelBody>
									)}
								  
									{/* Author Panel */}
									{pg_showtagBorderTypeMenu  && (
									  <PanelBody title = {__('Border Type','post-grid')}>
											<SelectControl
												label={ __( 'Border Type', 'vayu-blocks' ) }
												value={ attributes.tagborderType }
												options={ [
													{ label:  __( 'None', 'vayu-blocks' ), value: 'none' },
													{ label: __( 'Solid', 'vayu-blocks' ), value: 'solid' },
													{ label: __( 'Double', 'vayu-blocks' ), value: 'double' },
													{ label: __( 'Dotted', 'vayu-blocks' ), value: 'dotted' },
													{ label: __( 'Dashed', 'vayu-blocks' ), value: 'dashed' },
													{ label: __( 'Groove', 'vayu-blocks' ), value: 'groove' },
												] }
												onChange={ e => setAttributes({ tagborderType: e }) }
											/>	
							
									  </PanelBody>
									)}

									{/* Date Panel */}
									{pg_showtagBorderRadiusMenu  && (
									  <PanelBody title = {__('Border Radius','post-grid')}>
										
										<h4>{__('Border Radius', 'post-grid')}</h4>
											<RangeControl
											label={__('Border Radius', 'post-grid')}
											value={pg_tagBorderRadius}
											onChange={(value) => setAttributes({ pg_tagBorderRadius: value })}
											min={0}
											max={60}
											/>
									  </PanelBody>
									)}
								  
			</>
										<h4>Padding</h4>
										<ResponsiveControl label={__('Padding', 'post-grid')}>
                    <UnitChooser
                        value={tagpaddingUnit}
                        onClick={(unit) => {
                            setAttributes({ tagpaddingUnit: unit });
                            setpaddingtagUnit(unit);
                        }}
                        units={['px', 'em', '%']}
                    />
                    <SizingControl
                        min={0}
                        max={100} // Adjust as needed
                        onChange={changetagPadding}
                        options={[
                            {
                                label: __('Top', 'post-grid'),
                                type: 'top',
                                value: gettagPadding('top')
                            },
                            {
                                label: __('Right', 'post-grid'),
                                type: 'right',
                                value: gettagPadding('right')
                            },
                            {
                                label: __('Bottom', 'post-grid'),
                                type: 'bottom',
                                value: gettagPadding('bottom')
                            },
                            {
                                label: __('Left', 'post-grid'),
                                type: 'left',
                                value: gettagPadding('left')
                            }
                        ]}
                    />
                </ResponsiveControl>
									</>)}
									  </PanelBody>
									)}
								  
									{/* Author Panel */}
									{pg_showAuthorMenu  && (
									  <PanelBody title = {__('Author','post-grid')}>
										<h2>Author</h2>
										<ToggleControl
												label={__('Show Author', 'post-grid')}
												checked={pg_showAuthor}
												onChange={(value) => setAttributes({ pg_showAuthor: value })}
										/>
										{(pg_showAuthor) && (	
											<>
										{/* Author Meta Settings */}
										<h4>{__('Font Size', 'post-grid')}</h4>
										<FontSizePicker
										  label={__('Font Size', 'post-grid')}
										  fontSizes={fontSizesauthor}
										  value={pg_authorTextSize}
										  onChange={(value) => setAttributes({ pg_authorTextSize: value })}
										/>
										<h4>{__('Color', 'post-grid')}</h4>
										<ColorPalette
										  
										  label={__('Color', 'post-grid')}
										  colors={colors}
										  value={pg_authorTextColor}
										  onChange={(color) => setAttributes({ pg_authorTextColor: color })}
										/>
										<h4>{__('Image Scale', 'post-grid')}</h4>
										<RangeControl
										  label={__('Image Scale', 'post-grid')}
										  value={pg_authorImageScale}
										  onChange={(value) => setAttributes({ pg_authorImageScale: value })}
										  min={0.5} // Minimum scale value
										  max={2}   // Maximum scale value
										  step={0.1} // Step increment
										/>
										</>
									)}
									  </PanelBody>
									)}

									{/* Date Panel */}
									{pg_showDateMenu  && (
									  <PanelBody title = {__('Date','post-grid')}>
										<h2>Date</h2>
											<ToggleControl
												label={__('Show Date', 'post-grid')}
												checked={pg_showDate}
												onChange={(value) => setAttributes({ pg_showDate: value })}
											/>
										{pg_showDate && (<>
										{/* Date Meta Settings */}
										<h4>{__('Font Size', 'post-grid')}</h4>
										<FontSizePicker
										  label={__('Font Size', 'post-grid')}
										  fontSizes={fontSizesauthor}
										  value={pg_dateTextSize}
										  onChange={(value) => setAttributes({ pg_dateTextSize: value })}
										/>
										<h4>{__('Color', 'post-grid')}</h4>
										<ColorPalette
										 
										  label={__('Color', 'post-grid')}
										  colors={colors}
										  value={pg_dateColor}
										  onChange={(color) => setAttributes({pg_dateColor: color })}
										/>
									</>)}
									  </PanelBody>
									)}
								  
			</> 
        </>
    );
};

export default Editor;