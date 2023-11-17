/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

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

	const toLower = (str) => {
		if (typeof str !== 'string') {
		  throw new Error('Input must be a string');
		}
	  
		return str.toLowerCase();
	  };
	
	const startCase = (str) => {
		if (typeof str !== 'string') {
		  throw new Error('Input must be a string');
		}
	  
		return str
		  .replace(/_/g, ' ') // Replace underscores with spaces
		  .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
	  };

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
									label: __( 'Default', 'vayu-blocks' ),
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
											'label': __( 'Regular', 'vayu-blocks' ),
											'value': 'regular'
										},
										{
											'label': __( 'Italic', 'vayu-blocks' ),
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
									{ value ? value : __( 'Select Font Family', 'vayu-blocks' ) }
								</Button>
							) }
							renderContent={ ({ onToggle }) => (
								<MenuGroup label={ __( 'Google Fonts', 'vayu-blocks' ) }>
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
											{ __( 'Default', 'vayu-blocks' ) }
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
					__( 'Loading…', 'vayu-blocks' )
				) }
			</BaseControl>

			{ variants && (
				<SelectControl
					label={ __( 'Font Weight', 'vayu-blocks' ) }
					value={ valueVariant || 'regular' }
					options={ variants }
					onChange={ onChangeFontVariant }
				/>
			) }

			<SelectControl
				label={ __( 'Font Style', 'vayu-blocks' ) }
				value={ valueStyle }
				options={ [
					{
						label: __( 'Regular', 'vayu-blocks' ),
						value: 'normal'
					},
					{
						label: __( 'Italic', 'vayu-blocks' ),
						value: 'italic'
					}
				] }
				onChange={ onChangeFontStyle }
			/>

			<SelectControl
				label={ __( 'Font Transform', 'vayu-blocks' ) }
				value={ valueTransform }
				options={ [
					{
						label: __( 'Default', 'vayu-blocks' ),
						value: 'none'
					},
					{
						label: __( 'Uppercase', 'vayu-blocks' ),
						value: 'uppercase'
					},
					{
						label: __( 'Lowercase', 'vayu-blocks' ),
						value: 'lowercase'
					},
					{
						label: __( 'Capitalize', 'vayu-blocks' ),
						value: 'capitalize'
					}
				] }
				onChange={ onChangeTextTransform }
			/>
		</div>
	);
};

export default GoogleFontsControl;
