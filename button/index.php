<?php

/*
 * Plugin Name: NCS4 Custom Blocks Button block
 * Plugin URI: https://ncs4.usm.edu
 * Description: A plugin which adds button blocks
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_button() {

  $block_name = 'button';

  $domain = 'ncs4-custom-blocks';
  $asset_file = include( plugin_dir_path(__FILE__) . 'build/index.asset.php');

  wp_register_script(
    $domain . '_' . $block_name,
    plugins_url( 'build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
  );

  wp_register_style(
    $domain . '_' . $block_name . '-editor',
    plugins_url( 'editor.css', __FILE__ ),
    array( 'wp-edit-blocks' ),
    filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ),
  );

  wp_register_style(
    $domain . '_' . $block_name,
    plugins_url( 'style.css', __FILE__),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ),
  );

  register_block_type( $domain . '/' . $block_name, array(
    'editor_script'   => $domain . '_' . $block_name,
    'editor_style'    => $domain . '_' . $block_name . '-editor',
    'style'           => $domain . '_' . $block_name,
  ));
}

add_action( 'init', 'ncs4_custom_blocks_register_button');
