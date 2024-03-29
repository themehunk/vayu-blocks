/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	SelectControl
} from '@wordpress/components';

import {
	Fragment,
	useState,
	useEffect
} from '@wordpress/element';

import { applyFilters } from '@wordpress/hooks';

/**
  * Internal dependencies.
  */
import {
	animationsList,
	delayList,
	outAnimation,
	speedList
} from './data.js';

import AnimationPopover from './components/animation-popover.js';

import ControlPanelControl from '../../components/control-panel-control/index.js';

// import countPlaceholder from './../../assets/images/count-animation.png';

// import typingPlaceholder from './../../assets/images/typing-animation.png';

const AnimationType = {
	count: 'count',
	typing: 'typing',
	default: 'default'
};

import { memo } from '@wordpress/element';

export const updateAnimConfig = ( type, oldValue, newValue, callback, attributes, setAttributes ) => {
	let template;
	switch ( type ) {
	case AnimationType.count:
		template = 'o-count-';
		break;
	case AnimationType.typing:
		template = 'o-typing-';
		break;
	case AnimationType.default:
		template = '';
		break;
	}

	const oldClassName = template + oldValue;
	const newClassName = 'none' !== newValue ? template + newValue : '';
	let classes;

	if ( attributes.className ) {
		classes = attributes.className;
		classes = classes.split( ' ' );
		const exists = classes.find( ( i ) => i === oldClassName );

		if ( exists ) {
			classes = classes.join( ' ' ).replace( oldClassName, newClassName );
		} else {
			classes.push( newClassName );
			classes = classes.join( ' ' ).trim();
		}
	} else {
		classes = newClassName;
	}

	classes = classes.replace( /\s+/g, ' ' );

	if ( '' === classes ) {
		classes = undefined;
	}

	setAttributes({ className: classes });
	callback?.();
};

function AnimationControls({
	clientId,
	attributes,
	setAttributes
}) {
	useEffect( () => {
		let classes;

		if ( attributes.className ) {
			classes = attributes.className;
			classes = classes.split( ' ' );

			let animationClass = Array.from( animationsList ).find( ( i ) => {
				return classes.find( ( o ) => o === i.value );
			});

			const delayClass = Array.from( delayList ).find( ( i ) => {
				return classes.find( ( o ) => o === i.value );
			});

			const speedClass = Array.from( speedList ).find( ( i ) => {
				return classes.find( ( o ) => o === i.value );
			});

			setAnimation( animationClass ? animationClass.value : 'none' );
			setDelay( delayClass ? delayClass.value : 'none' );
			setSpeed( speedClass ? speedClass.value : 'none' );
			setCurrentAnimationLabel(
				animationClass ? animationClass.label : 'none'
			);
		}

	}, []);

	const [ animation, setAnimation ] = useState( 'none' );
	const [ delay, setDelay ] = useState( 'none' );
	const [ speed, setSpeed ] = useState( 'none' );
	const [ currentAnimationLabel, setCurrentAnimationLabel ] = useState( __( 'None', 'vayu-blocks' ) );

	const updateAnimation = ( e ) => {
		let classes;
		let animationValue = 'none' !== e ? e : '';

		if ( attributes.className ) {
			classes = attributes.className;
			classes = classes.split( ' ' );
			const exists = classes.find( ( i ) => i === animation );
			const animatedExists = classes.find( ( i ) => 'animated' === i );

			if ( ! animatedExists ) {
				classes.push( 'animated' );
			}

			if ( exists ) {
				classes = classes
					.join( ' ' )
					.replace( animation, animationValue );
			} else {
				classes.push( animationValue );
				classes = classes.join( ' ' );
			}
		} else {
			classes = `animated ${ animationValue }`;
		}

		if ( 'none' === e ) {
			classes = classes
				.replace( 'animated', '' )
				.replace( delay, '' )
				.replace( speed, '' );

			setDelay( 'none' );
			setSpeed( 'none' );
		}

		classes = classes.replace( /\s+/g, ' ' ).trim();

		if ( '' === classes ) {
			classes = undefined;
		}

		setAnimation( e );
		setAttributes({ className: classes });

		let block = document.querySelector( `#block-${ clientId } .animated` ) || document.querySelector( `#block-${ clientId }.animated` );

		if ( block ) {
			outAnimation.forEach( ( i ) => {
				const isOut = block.className.includes( i );

				if ( isOut ) {
					block.addEventListener( 'animationend', () => {
						block.classList.remove( i );

						block.addEventListener( 'animationstart', () => {
							block.classList.remove( i );
						});
					});
				}
			});
		}
	};

	useEffect( () => {
		if ( undefined !== window?.blocksAnimation ) {
			window.blocksAnimation.removeAnimation = () => updateAnimation( 'none' );
		}
	}, []);

	const replayAnimation = () => {
		let classes = attributes.className;
		classes = classes.replace( animation, 'o-replay' );

		setAttributes({ className: classes });

		setTimeout( () => setAttributes({ className: classes.replace( 'o-replay', animation ) }), 100 );
	};

	return (
		<PanelBody
			title={ __( 'Animations', 'vayu-blocks' ) }
			initialOpen={ false }
		>
			<div className="o-animations-control">
				<AnimationPopover
					animationsList={ animationsList }
					updateAnimation={ updateAnimation }
					currentAnimationLabel={ currentAnimationLabel }
					setCurrentAnimationLabel={ setCurrentAnimationLabel }
				/>

				{ 'none' !== animation && (
					<Fragment>
						<SelectControl
							label={ __( 'Delay', 'vayu-blocks' ) }
							value={ delay || 'none' }
							options={ delayList }
							onChange={  value => updateAnimConfig( AnimationType.default, delay, value, () => setDelay( value ), attributes, setAttributes ) }
						/>

						<SelectControl
							label={ __( 'Speed', 'vayu-blocks' ) }
							value={ speed || 'none' }
							options={ speedList }
							onChange={ value => updateAnimConfig( AnimationType.default, speed, value, () => setSpeed( value ), attributes, setAttributes ) }
						/>

						<Button
							variant="secondary"
							onClick={ replayAnimation }
						>
							{ __( 'Replay Animation', 'vayu-blocks' ) }
						</Button>
					</Fragment>
				) }
			</div>

			{/* //This code is to enable cout animation.
			<ControlPanelControl
				label={ __( 'Count Animations', 'vayu-blocks' ) }
			>
				<img
					src={ ' ' }
					alt={ _( 'Using Count Animation in the Block Editor', 'vayu-blocks' ) }
					className="th-animations-count-image"
				/>

				<p>{ __( 'You can add counting animation from the format toolbar of this block.', 'vayu-blocks' ) }</p>
				<p>{ __( 'Note: This feature is not available in all the blocks.', 'vayu-blocks' ) }</p>
			</ControlPanelControl>
			 */}

			<ControlPanelControl
				label={ __( 'Typing Animations', 'vayu-blocks' ) }
			>
				<img
					src={ ' ' }
					alt={ _( 'Using Typing Animation in the Block Editor', 'vayu-blocks' ) }
					className="th-animations-count-image"
				/>

				<p>{ __( 'Typing Animation located in Block Toolbar of a Block ', 'vayu-blocks' ) }</p>
				<p>{ __( 'Note: This is available in some blocks.', 'vayu-blocks' ) }</p>
			</ControlPanelControl>

			<div className="o-fp-wrap">
				{ applyFilters( 'thenehunk-block.feedback', '', 'animations' ) }
				{ applyFilters( 'vayu-blocks.poweredBy', '' ) }
			</div>
		</PanelBody>
	);
}

export default memo( AnimationControls );
