<?php

/*
 * Plugin Name: NCS4 Custom Blocks Generic Section
 * Plugin URI: https://ncs4.usm.edu
 * Description: A plugin which implements a generic section block.
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_generic_section() {

  $asset_file = include( plugin_dir_path(__FILE__) . 'build/index.asset.php');

  wp_register_script(
    'ncs4-custom-blocks_generic-section',
    plugins_url( 'build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
  );

  wp_register_style(
    'ncs4-custom-blocks_generic-section-editor',
    plugins_url( 'editor.css', __FILE__ ),
    array( 'wp-edit-blocks' ),
    //filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ),
  );

  wp_register_style(
    'ncs4-custom-blocks_generic-section',
    plugins_url( 'style.css', __FILE__),
    array(),
    //filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ),
  );

  register_block_type( 'ncs4-custom-blocks/generic-section', array(
    'editor_script'   => 'ncs4-custom-blocks_generic-section',
    'editor_style'    => 'ncs4-custom-blocks_generic-section-editor',
    'style'           => 'ncs4-custom-blocks_section',
  ));
}

add_action( 'init', 'ncs4_custom_blocks_register_generic_section');
