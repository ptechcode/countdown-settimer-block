
<?php $args = ''; ?>
<?php $style = ''; ?>


<?php $textAlign            = ( isset( $attributes['textAlign'] )             && $attributes['textAlign'] != '' ) ?           $attributes['textAlign'] :    ''; ?>
<?php $countdownselect      = ( isset( $attributes['countdownselect'] )       && $attributes['countdownselect'] != '' ) ?           $attributes['countdownselect'] :    ''; ?>
<?php $countColor           = ( isset( $block->context['create-block/timer-color'] )            && $block->context['create-block/timer-color'] !='' ) ?           $block->context['create-block/timer-color'] : ''; ?>
<?php $countbackgroundColor = ( isset( $block->context['create-block/timer-backgroundColor'] )  && $block->context['create-block/timer-backgroundColor'] !='' ) ? $block->context['create-block/timer-backgroundColor'] : ''; ?>
<?php $digitLabelGap        = ( isset( $block->context['create-block/timer-digitLabelGap'] )    && $block->context['create-block/timer-digitLabelGap'] !='' ) ?   $block->context['create-block/timer-digitLabelGap'] : ''; ?>



<?php $args .= ( $textAlign )? " p-text-align-$textAlign" : ''; ?>

<?php $style .= ( $countColor ) ? ' color:' . $countColor . ';' : ''; ?>
<?php $style .= ( $countbackgroundColor ) ? ' background-color:' . $countbackgroundColor . ';' : ''; ?>
<?php $style .= ( $digitLabelGap ) ? ' gap:' . $digitLabelGap . 'px;' : ''; ?>



<?php $wrapper_attributes = get_block_wrapper_attributes(	array( 'class' => $args, 'style' => $style )	); ?>
<li <?php echo $wrapper_attributes; ?>>
  <span class="<?php echo $countdownselect; ?>"></span>
  <?php echo $content; ?>
</li>
   


