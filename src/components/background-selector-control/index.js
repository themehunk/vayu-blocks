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
import './editor.scss';
import { barcodeIcon } from '../../helpers/icon.js';
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
					<label className="components-base-control__label">{ __( 'Background Type', 'themehunk-block' ) }</label>
					<ButtonGroup className="linking-controls">
						<Button
							icon={ 'admin-customizer' }
							label={ __( 'Color', 'themehunk-block' ) }
							showTooltip={ true }
							isPrimary={ 'color' === backgroundType }
							onClick={ () => changeBackgroundType( 'color' ) }
						/>

						<Button
							icon={ 'format-image' }
							label={ __( 'Image', 'themehunk-block' ) }
							showTooltip={ true }
							isPrimary={ 'image' === backgroundType }
							onClick={ () => changeBackgroundType( 'image' ) }
						/>

						<Button
							icon={ () => <Icon icon={ barcodeIcon } /> }
							label={ __( 'Gradient', 'themehunk-block' ) }
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
						label={ __( 'Background Color', 'themehunk-block' ) }
						colorValue={ backgroundColor }
						onColorChange={ changeColor }
					/>
				)
			}
			{
				'image' === backgroundType && (
					image?.url ? (
						<Fragment>
							<FocalPointPicker
								label={ __( 'Focal point picker', 'themehunk-block' ) }
								url={ image.url }
								value={ focalPoint }
								onDragStart={ changeFocalPoint }
								onDrag={ changeFocalPoint }
								onChange={ changeFocalPoint }
							/>

							<ControlPanelControl
								label={ __( 'Background Settings', 'themehunk-block' ) }
							>
								<SelectControl
									label={ __( 'Background Attachment', 'themehunk-block' ) }
									value={ backgroundAttachment }
									options={ [
										{ label: __( 'Scroll', 'themehunk-block' ), value: 'scroll' },
										{ label: __( 'Fixed', 'themehunk-block' ), value: 'fixed' },
										{ label: __( 'Local', 'themehunk-block' ), value: 'local' }
									] }
									onChange={ changeBackgroundAttachment }
								/>

								<SelectControl
									label={ __( 'Background Repeat', 'themehunk-block' ) }
									value={ backgroundRepeat }
									options={ [
										{ label: __( 'Repeat', 'themehunk-block' ), value: 'repeat' },
										{ label: __( 'No-repeat', 'themehunk-block' ), value: 'no-repeat' }
									] }
									onChange={ changeBackgroundRepeat }
								/>

								<SelectControl
									label={ __( 'Background Size', 'themehunk-block' ) }
									value={ backgroundSize }
									options={ [
										{ label: __( 'Auto', 'themehunk-block' ), value: 'auto' },
										{ label: __( 'Cover', 'themehunk-block' ), value: 'cover' },
										{ label: __( 'Contain', 'themehunk-block' ), value: 'contain' }
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
									{ __( 'Clear Image', 'themehunk-block' ) }
								</Button>
							</PanelRow>
						</Fragment>
					) : (
						<MediaPlaceholder
							icon="format-image"
							labels={ {
								title: __( 'Background Image', 'themehunk-block' ),
								name: __( 'an image', 'themehunk-block' )
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
						label={ __( 'Background Gradient', 'themehunk-block' ) }
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