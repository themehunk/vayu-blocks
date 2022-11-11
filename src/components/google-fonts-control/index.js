/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	startCase,
	toLower
} from 'lodash';

import { __ } from '@wordpress/i18n';

import { useInstanceId } from '@wordpress/compose';

import {
	Button,
	BaseControl,
	Dropdown,
	MenuGroup,
	MenuItem,
	SelectControl,
	TextControl
} from '@wordpress/components';

import {
	useEffect,
	useState
} from '@wordpress/element';

/**
* Internal dependencies
*/
import './editor.scss';
import googleFontsLoader from '../../helpers/google-fonts.js';


const GoogleFontsControl = ({
	label,
	value,
	valueVariant,
	valueStyle,
	valueTransform,
	isSelect = false,
	onChangeFontFamily,
	onChangeFontVariant,
	onChangeFontStyle,
	onChangeTextTransform
}) => {
	const instanceId = useInstanceId( GoogleFontsControl );

	useEffect( () => {
		googleFontsLoader.afterLoading().then( ( loader ) => {
			setFonts( loader.fonts );
			if ( value ) {
				setVariants( loader.getVariants( value ) );
			}
		});
	}, []);

	const [ fonts, setFonts ] = useState( null );
	const [ variants, setVariants ] = useState( null );
	const [ search, setSearch ] = useState( '' );

	const id = `inspector-google-fonts-control-${ instanceId }`;

	return (
		<div className="th-gfont-control">
			<BaseControl
				label={ label }
				id={ id }
			>
				{ ( null !== fonts ) ? (
					( isSelect ) ? (
						<SelectControl
							value={ value || '' }
							id={ id }
							options={ [
								{
									label: __( 'Default', 'themehunk-block' ),
									value: ''
								},
								...fonts.map( i => {
									return i = {
										label: i.family,
										value: i.family
									};
								})
							] }
							onChange={ e => {
								let variants = [];
								loadFontToPage( e, 'regular', fonts );

								if ( '' === e ) {
									variants = [
										{
											'label': __( 'Regular', 'themehunk-block' ),
											'value': 'regular'
										},
										{
											'label': __( 'Italic', 'themehunk-block' ),
											'value': 'italic'
										}
									];
									onChangeFontFamily( undefined );
									setVariants( variants );
									return;
								}

								onChangeFontFamily( e );

								const font = fonts.find( i => e === i.family );

								variants = ( font.variants )
									.filter( o => false === o.includes( 'italic' ) )
									.map( o => {
										return o = {
											'label': startCase( toLower( o ) ),
											'value': o
										};
									});

								setVariants( variants );
							} }
						/>
					) : (
						<Dropdown
							contentClassName="th-gfont-popover"
							position="bottom center"
							renderToggle={ ({ isOpen, onToggle }) => (
								<Button
									className="th-gfont-button"
									id={ id }
									onClick={ onToggle }
									aria-expanded={ isOpen }
								>
									{ value ? value : __( 'Select Font Family', 'themehunk-block' ) }
								</Button>
							) }
							renderContent={ ({ onToggle }) => (
								<MenuGroup label={ __( 'Google Fonts', 'themehunk-block' ) }>
									<TextControl
										value={ search }
										onChange={ e => setSearch( e ) }
									/>

									<div className="components-popover__items">
										<MenuItem
											onClick={ () => {
												onToggle();
												onChangeFontFamily( undefined );
												setVariants([]);
												setSearch( '' );
											}}
										>
											{ __( 'Default', 'themehunk-block' ) }
										</MenuItem>

										{ ( fonts ).map( ( i, index ) => {
											if ( ! search || i.family.toLowerCase().includes( search.toLowerCase() ) ) {
												return (
													<MenuItem
														key={index}
														className={ classnames(
															{ 'is-selected': ( i.family === value ) }
														) }
														onClick={ () => {
															onToggle();
															onChangeFontFamily( i.family );

															const variants = ( i.variants )
																.filter( o => false === o.includes( 'italic' ) )
																.map( o => {
																	return o = {
																		'label': startCase( toLower( o ) ),
																		'value': o
																	};
																});

															setVariants( variants );
															setSearch( '' );
														}}
													>
														{ i.family }
													</MenuItem>
												);
											}
										}) }
									</div>
								</MenuGroup>
							) }
						/>
					)
				) : (
					__( 'Loading…', 'themehunk-block' )
				) }
			</BaseControl>

			{ variants && (
				<SelectControl
					label={ __( 'Font Weight', 'themehunk-block' ) }
					value={ valueVariant || 'regular' }
					options={ variants }
					onChange={ onChangeFontVariant }
				/>
			) }

			<SelectControl
				label={ __( 'Font Style', 'themehunk-block' ) }
				value={ valueStyle }
				options={ [
					{
						label: __( 'Regular', 'themehunk-block' ),
						value: 'normal'
					},
					{
						label: __( 'Italic', 'themehunk-block' ),
						value: 'italic'
					}
				] }
				onChange={ onChangeFontStyle }
			/>

			<SelectControl
				label={ __( 'Font Transform', 'themehunk-block' ) }
				value={ valueTransform }
				options={ [
					{
						label: __( 'Default', 'themehunk-block' ),
						value: 'none'
					},
					{
						label: __( 'Uppercase', 'themehunk-block' ),
						value: 'uppercase'
					},
					{
						label: __( 'Lowercase', 'themehunk-block' ),
						value: 'lowercase'
					},
					{
						label: __( 'Capitalize', 'themehunk-block' ),
						value: 'capitalize'
					}
				] }
				onChange={ onChangeTextTransform }
			/>
		</div>
	);
};

export default GoogleFontsControl;
