/**
 * External dependencies
 */
import classnames from 'classnames';
import { backup, settings, Icon } from '@wordpress/icons';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	Dropdown
} from '@wordpress/components';

import { useInstanceId } from '@wordpress/compose';

import {
	Fragment,
	useEffect,
	useState
} from '@wordpress/element';

/**
 * Internal dependencies
 */

const ControlPanelControl = ({
	label,
	attributes,
	setAttributes,
	resetValues,
	onClick,
	children
}) => {
	useEffect( () => {
		for ( const key in resetValues ) {
			if ( resetValues[ key ] !== attributes[ key ]) {
				return setActive( true );
			}

			setActive( false );
		}
	}, [ attributes ]);

	const instanceId = useInstanceId( ControlPanelControl );

	const [ isActive, setActive ] = useState( false );

	const id = `inspector-control-panel-control-${ instanceId }`;

	return (
		<div className="th-control-panel-control">
			<div className="components-base-control__field">
				<div className="components-base-control__title">
					<label
						className="components-base-control__label"
						htmlFor={ id }
					>
						{ label }
					</label>

					<div className="floating-controls">
						<Dropdown
							position="top left"
							headerTitle={ label }
							expandOnMobile={ true }
							renderToggle={ ({ isOpen, onToggle }) => (
								<Fragment>
									{ isActive && (
										<Button
											icon={ <Icon icon={ backup } /> }
											label={ __( 'Reset to default', 'vayu-blocks' ) }
											showTooltip={ true }
											isTertiary
											onClick={ () => setAttributes({ ...resetValues }) }
										/>
									) }

									<Button
										id={ id }
										icon={ settings }
										label={ label }
										showTooltip={ true }
										onClick={ () => {
											onToggle();
											if ( onClick ) {
												onClick();
											}
										} }
										aria-expanded={ isOpen }
										className={ classnames(
											{ 'is-active': isActive }
										) }
									/>
								</Fragment>
							) }
							renderContent={ () => (
								<div className="th-popover-settings">
									{ children }
								</div>
							) }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ControlPanelControl;
