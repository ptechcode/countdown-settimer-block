<?php
/**
 * Plugin Name:       Countdown Block
 * Description:       A block to countdown to a date or time..
 * Requires at least: 6.5
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            PTechCode
 * Author URI:        https://github.com/ptechcode
 * Github URI:        https://github.com/ptechcode/countdown-settimer-block
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       countdown-settimer-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly  

function create_block_countdown_settimer_block_block_init() {
	register_block_type( __DIR__ . '/build' );
	register_block_type( __DIR__ . '/build/timer-day-block' );
	
}
add_action( 'init', 'create_block_countdown_settimer_block_block_init' );
