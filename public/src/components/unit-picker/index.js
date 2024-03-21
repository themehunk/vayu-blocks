
import {
	Component,
} from '@wordpress/element';

import {
	__,
	sprintf,
	_x,
} from '@wordpress/i18n';

import {
	ButtonGroup,
	Button,
	Tooltip,
	BaseControl,
} from '@wordpress/components';

export default class UnitChooser extends Component {
	render() {
		const {
			label,
			value,
			onClick,
			units,
			id,
			singleOption = false,
		} = this.props;

		const allUnits = singleOption ? [ value ] : units;

		return (
			<BaseControl label={ label } id={ id } className="components-th-blocks-units-control-header__units">
				<div className="components-th-blocks-control__units">
					<ButtonGroup className="components-th-blocks-control-buttons__units" aria-label={ __( 'Select Units', 'vayu-blocks' ) }>
						{ allUnits.map( ( unit ) => {
							let unitName = unit;

							if ( 'px' === unit ) {
								unitName = _x( 'Pixel', 'A size unit for CSS markup', 'vayu-blocks' );
							}

							if ( 'em' === unit ) {
								unitName = _x( 'Em', 'A size unit for CSS markup', 'vayu-blocks' );
							}

							if ( '%' === unit ) {
								unitName = _x( 'Percentage', 'A size unit for CSS markup', 'vayu-blocks' );
							}

							if ( 'deg' === unit ) {
								unitName = _x( 'Degree', 'A size unit for CSS markup', 'vayu-blocks' );
							}

							return <Tooltip
								/* translators: Unit type (px, em, %) */
								text={ sprintf( __( '%s Units', 'vayu-blocks' ), unitName ) }
								key={ unit }
							>
								<Button
									key={ unit }
									className={ 'components-th-blocks-control-button__units--' + unit }
									isSmall
									isPrimary={ value === unit }
									aria-pressed={ value === unit }
									/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
									aria-label={ sprintf( __( '%s Units', 'vayu-blocks' ), unitName ) }
									onClick={ () => onClick( unit ) }
								>
									{ unit }
								</Button>
							</Tooltip>;
						} ) }
					</ButtonGroup>
				</div>
			</BaseControl>
		);
	}
}
