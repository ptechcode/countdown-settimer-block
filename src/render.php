
<?php $args = ''; ?>
<?php $style = ''; ?>

<?php $textAlign    = ( isset( $attributes['textAlign'] )    && $attributes['textAlign'] != '' ) ?    $attributes['textAlign'] :    ''; ?>
<?php $dateValue    = ( isset( $attributes['dateValue'] )    && $attributes['dateValue'] !='' ) ?     $attributes['dateValue'] :    ''; ?>
<?php $timeUpString = ( isset( $attributes['timeUpString'] ) && $attributes['timeUpString'] !='' ) ?  $attributes['timeUpString'] : ''; ?>
<?php $gridGap      = ( isset( $attributes['gridGap'] )      && $attributes['gridGap'] !='' ) ?       $attributes['gridGap'] :      ''; ?>
<?php $maxWidth     = ( isset( $attributes['maxWidth'] )     && $attributes['maxWidth'] !='' ) ?      $attributes['maxWidth'] :      ''; ?>



<?php $args .= ( $textAlign )? " p-text-align-$textAlign" : ''; ?>

<?php $style .= ( $maxWidth ) ? ' max-width:' . $maxWidth . 'px;' : ''; ?>

<?php $styleinner =''; ?>
<?php $styleinner .= ( $gridGap ) ? ' gap:' . $gridGap . 'px;' : ''; ?>


<?php $wrapper_attributes = get_block_wrapper_attributes(	array( 'class' => $args, 'style' => $style )	); ?>
<div <?php echo $wrapper_attributes; ?> >
	<div class="message"><?php echo $timeUpString; ?></div>
	<div class="save countdown" data-countdowndate="<?php echo $dateValue; ?>" style="<?php echo $styleinner; ?>">
		<?php echo $content; ?>
	</div>		
</div>

