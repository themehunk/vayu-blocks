/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl,
	MediaPlaceholder
} from '@wordpress/block-editor';

import {
	Button,
	ButtonGroup,
	FocalPointPicker,
	Icon,
	PanelRow,
	SelectControl
} from '@wordpress/components';

import { useInstanceId } from '@wordpress/compose';

import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Bgclr, BgGraclr, BgImg} from '../../helpers/icon.js';
import ControlPanelControl from '../control-panel-control/index.js';

const BackgroundSelectorControl = ({
	backgroundType,
	backgroundColor,
	image,
	gradient,
	backgroundAttachment,
	backgroundRepeat,
	backgroundSize,
	focalPoint,
	changeImage,
	changeColor,
	removeImage,
	changeBackgroundType,
	changeGradient,
	changeBackgroundAttachment,
	changeBackgroundRepeat,
	changeBackgroundSize,
	changeFocalPoint
}) => {
	const instanceId = useInstanceId( BackgroundSelectorControl );

	const id = `inspector-background-selector-control-${ instanceId }`;

	return (
		<div id={ id } className="components-base-control th-background-selector-control">
			<div className="components-base-control__field">
				<div className="components-base-control__title">
					<label className="components-base-control__label">{ __( 'Background Type', 'vayu-blocks' ) }</label>
					<ButtonGroup className="linking-controls">
						<Button
							icon={ () => <Icon icon={ Bgclr } /> }
							label={ __( 'Color', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'color' === backgroundType }
							onClick={ () => changeBackgroundType( 'color' ) }
						/>

						<Button
							icon={ () => <Icon icon={ BgImg } /> }
							label={ __( 'Image', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'image' === backgroundType }
							onClick={ () => changeBackgroundType( 'image' ) }
						/>

						<Button
							icon={ () => <Icon icon={ BgGraclr } /> }
							label={ __( 'Gradient', 'vayu-blocks' ) }
							showTooltip={ true }
							isPrimary={ 'gradient' === backgroundType }
							onClick={ () => changeBackgroundType( 'gradient' ) }
						/>
					</ButtonGroup>
				</div>
			</div>

			{
				( 'color' === backgroundType || undefined === backgroundType ) && (
					<ColorGradientControl
						label={ __( 'Background Color', 'vayu-blocks' ) }
						colorValue={ backgroundColor }
						onColorChange={ changeColor }
						enableAlpha={true} 
					/>
				)
			}
			{
				'image' === backgroundType && (
					image?.url ? (
						<Fragment>
							<FocalPointPicker
								label={ __( 'Focal point picker', 'vayu-blocks' ) }
								url={ image.url }
								value={ focalPoint }
								onDragStart={ changeFocalPoint }
								onDrag={ changeFocalPoint }
								onChange={ changeFocalPoint }
							/>

							<ControlPanelControl
								label={ __( 'Background Settings', 'vayu-blocks' ) }
							>
								<SelectControl
									label={ __( 'Background Attachment', 'vayu-blocks' ) }
									value={ backgroundAttachment }
									options={ [
										{ label: __( 'Scroll', 'vayu-blocks' ), value: 'scroll' },
										{ label: __( 'Fixed', 'vayu-blocks' ), value: 'fixed' },
										{ label: __( 'Local', 'vayu-blocks' ), value: 'local' }
									] }
									onChange={ changeBackgroundAttachment }
								/>

								<SelectControl
									label={ __( 'Background Repeat', 'vayu-blocks' ) }
									value={ backgroundRepeat }
									options={ [
										{ label: __( 'Repeat', 'vayu-blocks' ), value: 'repeat' },
										{ label: __( 'No-repeat', 'vayu-blocks' ), value: 'no-repeat' }
									] }
									onChange={ changeBackgroundRepeat }
								/>

								<SelectControl
									label={ __( 'Background Size', 'vayu-blocks' ) }
									value={ backgroundSize }
									options={ [
										{ label: __( 'Auto', 'vayu-blocks' ), value: 'auto' },
										{ label: __( 'Cover', 'vayu-blocks' ), value: 'cover' },
										{ label: __( 'Contain', 'vayu-blocks' ), value: 'contain' }
									] }
									onChange={ changeBackgroundSize }
								/>
							</ControlPanelControl>

							<PanelRow>
								<Button
									isSmall
									isSecondary
									onClick={ removeImage }
								>
									{ __( 'Clear Image', 'vayu-blocks' ) }
								</Button>
							</PanelRow>
						</Fragment>
					) : (
						<MediaPlaceholder
							icon="format-image"
							labels={ {
								title: __( 'Background Image', 'vayu-blocks' ),
								name: __( 'an image', 'vayu-blocks' )
							} }
							value={ image?.id }
							onSelect={ changeImage }
							accept="image/*"
							allowedTypes={ [ 'image' ] }
						/>
					)
				)
			}
			{
				'gradient' === backgroundType && (
					<ColorGradientControl
						label={ __( 'Background Gradient', 'vayu-blocks' ) }
						gradientValue={ gradient }
						disableCustomColors={ true }
						onGradientChange={ changeGradient }
						clearable={ false }
					/>
				)
			}
		</div>
	);
};

export default BackgroundSelectorControl;