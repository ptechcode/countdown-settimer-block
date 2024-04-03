import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	PanelColorSettings,
	InnerBlocks
} from '@wordpress/block-editor';

import {  
	__experimentalNumberControl as NumberControl,
	DateTimePicker, RangeControl, PanelBody, TextControl, ToggleControl } from '@wordpress/components';

import { useState, useEffect } from '@wordpress/element';


import './editor.scss';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { maxWidth, timeUpString, customToggle, hourCustom, minuteCustom, secondCustom, textAlign, dateValue, countbackgroundColor, countColor,digitLabelGap, gridGap } = attributes;
	
	
	const onCountDownBackgroundColorChange = (newval) =>{
		setAttributes( { countbackgroundColor: newval } )
	}
	
	const onCountColorChange = (newval) =>{
		setAttributes( { countColor: newval } )
	}
	
	let cssstyle= {}
	cssstyle = ( gridGap ) ? {...cssstyle, gap: gridGap  }   : {...cssstyle}
	cssstyle = ( maxWidth ) ? {...cssstyle, maxWidth: maxWidth  }   : {...cssstyle}

	const TEMPLATE = [
		[
			'create-block/timer-day-block',	{ countdownselect: 'days'}
		],
		[
			'create-block/timer-day-block', { countdownselect: 'hours'}				
		],
		[
			'create-block/timer-day-block', { countdownselect: 'minutes'}						
		],
		[
			'create-block/timer-day-block', { countdownselect: 'seconds'}						
		]
	];
	
	const ALLOWED_BLOCKS = [ 'create-block/timer-day-block' ];

	const [ timeleft, setTimeleft ] = useState(false)

 

useEffect( () =>{
	
	setTimeleft(false)
	let now = new Date().getTime();		
	let date = Date.parse(dateValue)
	let left = date - now;   
	  
		const interval = setInterval(()=> { 
			date = Date.parse(dateValue)
			now = new Date().getTime();		
	
			left = date - now; 
	
			if ( left < 0 ) {		
				setTimeleft(true)			
				clearInterval(interval)
			}		
		} , 1000 ) 

		return () => {
      // 👇️ clear timeout when the component unmounts
      clearInterval(interval)
    }; 
},[dateValue])



useEffect(()=>{
	let current = new Date();

	current.setHours( current.getHours() + hourCustom )
	current.setMinutes( current.getMinutes() + minuteCustom )
	current.setSeconds( current.getSeconds() + secondCustom )
	setAttributes({dateValue: current});

},[customToggle, hourCustom, minuteCustom, secondCustom])


	return (
		<>
			<InspectorControls>
		
				<PanelBody title={ __( 'Date/Time Picker', 'engc-block' ) } initialOpen={true}>
				{ !customToggle && 
					<DateTimePicker
						currentDate={ dateValue }
						onChange={ (newval)=> { setAttributes({dateValue: newval});   } }
						is12Hour={ true }
						__nextRemoveHelpButton
						__nextRemoveResetButton
					/>	}

					<ToggleControl
						label={ __( 'Show Custom', 'engc-block' ) }
						checked={ customToggle }
						help={
							customToggle
								? __(
										'',
										'engc-block'
								  )
								: __( '', 'engc-block' )
						}
						onChange={ ( newval ) => {
							props.setAttributes( { customToggle: newval } );
						} }
					/>
					{ customToggle && <>
				
					<NumberControl
						label={ __( 'Number of Hours', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( { hourCustom: parseInt(newval) } );								
						} }
						min={ 0 }
						max={ 10000 }
						shiftStep={ 10 }
						value={ hourCustom }
					/>

					<NumberControl
						label={ __( 'Number of Minutes', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( { minuteCustom: parseInt(newval) } );								
						} }
						min={ 0 }
						max={ 59 }
						shiftStep={ 10 }
						value={ minuteCustom }
					/>

					<NumberControl
						label={ __( 'Number of Seconds', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( {secondCustom: parseInt(newval) } );								
						} }
						min={ 0 }
						max={ 59 }
						shiftStep={ 10 }
						value={secondCustom }
					/>
					
					
					</>}
					
					<TextControl
						label={ __( 'Time up String', 'engc-block' ) }
						value={ timeUpString }
						onChange={ (newval) => setAttributes({timeUpString: newval}) }					
					/>
									
				</PanelBody>

				<PanelColorSettings 
					title={ __( 'Count Down Color Settings', 'engc-block' ) }
					icon="admin-appearance"
					initialOpen = { false }
					disableCustomColors={ false }
					enableAlpha={ true }
					colorSettings={ [
						{
							value: countbackgroundColor,
							onChange: onCountDownBackgroundColorChange,
							label: __( 'Count Down Background Color', 'engc-block' ),
						},
						{
							value: countColor,
							onChange: onCountColorChange,
							label: __( 'Count Down Color', 'engc-block' ),
						},
					] }
				>					
			</PanelColorSettings>

				<PanelBody title={ __( 'Additional Styles', 'engc-block' ) } initialOpen={false}>

				<NumberControl
						label={ __( 'Maximum Width', 'engc-block' ) }
						isShiftStepEnabled={ true }
						onChange={  (newval)=> {
							setAttributes( { maxWidth: parseInt(newval) } );								
						} }
						min={ 0 }
						max={ 10000 }
						shiftStep={ 10 }
						value={ maxWidth }
					/>
					
					<RangeControl
						label={ __( 'Grid Gap(px)', 'engc-block' ) }
						value={ gridGap }
						min={ 0 }
						max={ 100 }
						step={ 1 }
						onChange={ ( newval )=> { setAttributes({ gridGap: newval }) }  }
					/>

					<RangeControl
						label={ __( 'Label Gap(px)', 'engc-block' ) }
						value={ digitLabelGap }
						min={ 0 }
						max={ 100 }
						step={ 1 }
						onChange={ ( newval )=> { setAttributes({ digitLabelGap: newval }) }  }
					/>
				</PanelBody>
			</InspectorControls>

			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
		
			<div
				{ ...useBlockProps( {
					className: `p-text-align-${ textAlign }`,
					
				} ) }
			>
			
			{ timeleft && <div>{timeUpString}</div>}
				{ !timeleft && <div className='countdown' style={cssstyle}>
		
		<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						orientation="vertical"
						//templateLock="all" // insert //all
					/>		
					</div>			}
				
	
      
    </div>
  
			
			</>
		
	);
}
