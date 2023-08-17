/**
 * Internal dependencies
 */
import generalSvgs from './svgs-list';
import DOMPurify from 'dompurify';

function sanitizeSVG( svg ) {
	return DOMPurify.sanitize( svg, { USE_PROFILES: { svg: true, svgFilters: true } } );
}

/**
 * WordPress dependencies
 */
import {
	__,
} from '@wordpress/i18n';

import {
	Component,
	Fragment,
	renderToString,
} from '@wordpress/element';

import {
	BaseControl,
	SelectControl,
	ToggleControl,
	TextControl,
	Tooltip,
	Button,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

import {
	applyFilters,
} from '@wordpress/hooks';

/**
 * Typography Component
 */
class IconPicker extends Component {
	constructor() {
		super( ...arguments );

		this.state = {
			showIcons: false,
			showGeneralIcons: false,
			showSocialIcons: false,
		};
	}

	render() {
		const {
			attributes,
			setAttributes,
			attrIcon,
			attrIconLocation,
			locationOptions,
			attrRemoveText,
			id,
		} = this.props;

		let iconSVGSets = {
			general: {
				group: __( 'Icon Library', 'vayu-blocks' ),
				svgs: generalSvgs,
			}
		};

		iconSVGSets = applyFilters( 'thblocks.editor.iconSVGSets', iconSVGSets, { attributes } );

		return (
			<Fragment>
				<BaseControl className="th-svg-html">
					
					<div className="th-icon-label">{ __( 'Icon', 'vayu-blocks' ) }</div>
					<div className="th-icon-preview">
						<span dangerouslySetInnerHTML={ { __html: sanitizeSVG( attributes[ attrIcon ] ) } } />

						<Button
							isSmall
							className="reset-icon is-secondary"
							onClick={ () => {
								setAttributes( {
									[ this.props[ 'attrIcon' ] ]: '', // eslint-disable-line dot-notation
									hasIcon: false,
									[ this.props[ 'attrRemoveText' ] ]: false, // eslint-disable-line dot-notation
								} );
							} }
						>
							<span className="editor-block-types-list__item-icon">
								{ __( 'Clear', 'vayu-blocks' ) }
							</span>
						</Button>
					</div>
				</BaseControl>

				<BaseControl className="th-icon-chooser">
					{
						Object.keys( iconSVGSets ).map( ( svg, i ) => {
							const svgItems = iconSVGSets[ svg ].svgs;

							return (
								<PanelBody className="th-blocks-panel-label th-blocks-icon-panel" title={ iconSVGSets[ svg ].group } initialOpen={ false } key={ i }>
									<PanelRow>
										<BaseControl>
											<ul className="th-blocks-icon-chooser">
												{
													Object.keys( svgItems ).map( ( svgItem, index ) => {
														return (
															<li key={ `editor-pblock-types-list-item-${ index }` }>
																<Tooltip text={ ( svgItems[ svgItem ].label ) }>
																	<Button
																		className="editor-block-list-item-button"
																		onClick={ () => {
																			let iconValue = svgItems[ svgItem ].icon;

																			if ( 'string' !== typeof iconValue ) {
																				iconValue = renderToString( iconValue );
																			}

																			setAttributes( {
																				[ this.props.attrIcon ]: iconValue,
																				hasIcon: true,
																				display: 'headline' === id ? 'flex' : 'inline-flex',
																				alignItems: 'center',
																			} );
																		} }
																	>
																		{ 'string' === typeof svgItems[ svgItem ].icon ? (
																			<Fragment>
																				<span
																					className="editor-block-types-list__item-icon"
																					dangerouslySetInnerHTML={ { __html: sanitizeSVG( svgItems[ svgItem ].icon ) } }
																				/>
																			</Fragment>
																		) : (
																			<Fragment>
																				<span className="editor-block-types-list__item-icon">
																					{ svgItems[ svgItem ].icon }
																				</span>
																			</Fragment>
																		) }
																	</Button>
																</Tooltip>
															</li>
														);
													} )
												}
							</ul>
						<TextControl
						label={ __( 'SVG Markup', 'vayu-blocks' ) }
						value={ attributes[ attrIcon ] }
						onChange={ ( value ) => {
							setAttributes( {
								[ this.props[ 'attrIcon' ] ]: sanitizeSVG( value ), // eslint-disable-line dot-notation
							} );

							if ( '' !== value ) {
								setAttributes( {
									'hasIcon': true, // eslint-disable-line quote-props
									display: 'headline' === id ? 'flex' : 'inline-flex',
									alignItems: 'center',
								} );
							} else {
								setAttributes( {
									'hasIcon': true, // eslint-disable-line quote-props
								} );
							}
						} }
					/>
					<span>{ __( 'Can also enter custom code', 'vayu-blocks' ) }</span>
										</BaseControl>
									</PanelRow>
								</PanelBody>
							);
						} )
					}
				</BaseControl>


				{ ( typeof attributes[ attrRemoveText ] !== 'undefined' && !! attributes[ attrIcon ] ) &&
					<ToggleControl
						label={ __( 'Remove Text', 'vayu-blocks' ) }
						checked={ !! attributes[ attrRemoveText ] }
						onChange={ ( value ) => {
							setAttributes( {
								[ this.props[ 'attrRemoveText' ] ]: value, // eslint-disable-line dot-notation
							} );
						} }
					/>
				}
			</Fragment>
		);
	}
}

export default IconPicker;
