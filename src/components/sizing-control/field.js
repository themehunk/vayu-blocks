/**
 * WordPress dependencies
 */
import {
	Fragment,
	useRef
} from '@wordpress/element';

const Field = ({
	id,
	index,
	option,
	min,
	max,
	onChange
}) => {
	const fieldRef = useRef( null );

	return (
		<div className="th-sizing-control-item">
			{ index.disabled ? (
				<input
					type="number"
					disabled={ index.disabled }
					className="th-sizing-control-item-input"
					id={ `th-sizing-control-item-input-${ option }` }
				/>
			) : (
				<Fragment>
					<input
						type="number"
						className="th-sizing-control-item-input"
						id={ `th-sizing-control-item-input-${ option }-${ id }` }
						value={ undefined !== index.value ? index.value : '' }
						min={ min }
						max={ max }
						ref={ fieldRef }
						onChange={ e => onChange( index.type, parseInt( e.target.value ) ) }
					/>
				</Fragment>
			) }

			{ index.label && (
				<label
					className="th-sizing-control-item-label"
					htmlFor={ `th-sizing-control-item-input-${ option }-${ id }` }
				>
					{ index.label }
				</label>
			) }
		</div>
	);
};

export default Field;
