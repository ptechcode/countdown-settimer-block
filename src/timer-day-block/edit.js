import  Timeleft from './timedisplay'
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	AlignmentControl,
	BlockControls,
	InspectorControls,
	RichText,
	useSetting,
	PanelColorSettings,
	InnerBlocks
} from '@wordpress/block-editor';

import {
	Icon,
	PanelBody,
	TextControl,
	SelectControl,
	
} from '@wordpress/components';

import './editor.scss';
import { useState, useEffect } from '@wordpress/element';


export default function EditChild( props ) {
	const { attributes, setAttributes, context, item,  } = props;
	const { textAlign,countdownselect } = attributes;
	const blockProps = useBlockProps( {
		className: textAlign ? 'p-text-align-' + textAlign : '',
	} );


 	let itembackgroundColor = context['create-block/timer-backgroundColor']
	let itemColor = context['create-block/timer-color']
	let itemdigitLabelGap = context['create-block/timer-digitLabelGap']

	
	 let cssstyle= {}
	 cssstyle = ( itemColor ) ?      {...cssstyle, color: itemColor  } : {...cssstyle}
	 cssstyle = ( itembackgroundColor ) ? {...cssstyle, backgroundColor: itembackgroundColor  }   : {...cssstyle}
	 cssstyle = ( itemdigitLabelGap ) ?   {...cssstyle, gap: itemdigitLabelGap  }   : {...cssstyle}


	 const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph' ];

	 
	 const TEMPLATE = [
		 [
			 'core/paragraph',
			 {
				 content: countdownselect 
			 }			
		 ]
	 ];



	return (
		<>
		

			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'General', 'engc-block' ) }>
					
					<SelectControl
						label={ __( 'Count Down Select', 'engc-block' ) }
						options={ [
							{
								label: 'Days',
								value: 'days'
							},
							{
								label: 'Hours',
								value: 'hours'
							},
							{
								label: 'Minutes',
								value: 'minutes'
							},
							{
								label: 'Seconds',
								value: 'seconds'
							}

						] }
						value={ countdownselect }
						onChange={ ( newvalue ) =>
							setAttributes( { countdownselect: newvalue } )
						}
					/>
				</PanelBody>
				</InspectorControls>


			<li 
				{ ...useBlockProps( {
					className: textAlign ? 'p-text-align-' + textAlign : '',
					style: cssstyle				
				} ) }
			>
				<span>{ <Timeleft date={context['create-block/timer-block']} item={countdownselect} /> }</span>
				
				<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
						orientation="vertical"
						// templateLock="insert" // insert //all
					/>					
				
			</li>
     
		
			</>
		
	);
}
