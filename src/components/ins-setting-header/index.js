/**
 * External dependencies.
 */
 import classnames from 'classnames';

 /**
  * WordPress dependencies.
  */
import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody
} from '@wordpress/components';

/**
  * Internal dependencies.
  */
 import './editor.scss';

 const InsSettingHeader = ({
	value,
	options,
	onChange
}) => {
	return (
		<PanelBody className="th-setting-header">
			{ options.map( ( option, index ) => {
				return (
					<Button
						key={ index }
						className={ classnames(
							{
								'is-active': option.value === value
							}
						) }
						onClick={ () => onChange( option.value ) }
					>
						{ option.label }
					</Button>
				);
			}) }
		</PanelBody>
	);
};

export default InsSettingHeader;