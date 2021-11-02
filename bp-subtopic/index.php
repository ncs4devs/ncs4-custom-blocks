<?php

/*
 * Plugin Name: NCS4 Custom Blocks Best Practices Subtopic Block
 * Plugin URI: https://ncs4.usm.edu
 * Description: Creates a block for use within bp-subtopic blocks
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_bp_subtopic() {

  $asset_file = include( plugin_dir_path(__FILE__) . 'build/index.asset.php');

  wp_register_script(
    'ncs4-custom-blocks_bp-subtopic',
    plugins_url( 'build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
  );

  wp_register_style(
    'ncs4-custom-blocks_bp-subtopic-editor',
    plugins_url( 'editor.css', __FILE__ ),
    array( 'wp-edit-blocks' ),
    filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ),
  );

  wp_register_style(
    'ncs4-custom-blocks_bp-subtopic',
    plugins_url( 'style.css', __FILE__),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ),
  );

  register_block_type( 'ncs4-custom-blocks/bp-subtopic', array(
    'editor_script'   => 'ncs4-custom-blocks_bp-subtopic',
    'editor_style'    => 'ncs4-custom-blocks_bp-subtopic-editor',
    'style'           => 'ncs4-custom-blocks_bp-subtopic',
  ));
}

function bp_subtopic_footerScripts() {
  if (has_block('ncs4-custom-blocks/bp-subtopic')) {
    wp_enqueue_script(
      'bp-subtopic-share',
      plugins_url( 'js/share.js', __FILE__ ),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/share.js' ),
    );
  }
}

add_action( 'init', 'ncs4_custom_blocks_register_bp_subtopic');
add_action( 'wp_footer', 'bp_subtopic_footerScripts' );
