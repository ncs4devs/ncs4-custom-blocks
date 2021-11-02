<?php

/*
 * Plugin Name: NCS4 Custom Blocks Best Practices Content Block
 * Plugin URI: https://ncs4.usm.edu
 * Description: A plugin which is used for content of Best Practices topic pages
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_bp_content() {

  $asset_file = include( plugin_dir_path(__FILE__) . 'build/index.asset.php');

  wp_register_script(
    'ncs4-custom-blocks_bp-content',
    plugins_url( 'build/index.js', __FILE__),
    $asset_file['dependencies'],
    $asset_file['version'],
  );

  wp_register_style(
    'ncs4-custom-blocks_bp-content-editor',
    plugins_url( 'editor.css', __FILE__ ),
    array( 'wp-edit-blocks' ),
    filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' ),
  );

  wp_register_style(
    'ncs4-custom-blocks_bp-content',
    plugins_url( 'style.css', __FILE__),
    array(),
    filemtime( plugin_dir_path( __FILE__ ) . 'style.css' ),
  );

  register_block_type( 'ncs4-custom-blocks/bp-content', array(
    'editor_script'   => 'ncs4-custom-blocks_bp-content',
    'editor_style'    => 'ncs4-custom-blocks_bp-content-editor',
    'style'           => 'ncs4-custom-blocks_bp-content',
  ));
}

function bp_content_footerScripts() {
  if (has_block('ncs4-custom-blocks/bp-content')) {
    wp_enqueue_script(
      'bp-content-resize',
      plugins_url( 'js/resize.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/resize.js' ),
    );
    wp_enqueue_script(
      'bp-content-expand',
      plugins_url( 'js/expand.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/expand.js' ),
    );
    wp_enqueue_script(
      'bp-content-filters',
      plugins_url( 'js/filters.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/filters.js' ),
    );
    wp_enqueue_script(
      'bp-content-subtopic',
      plugins_url( 'js/subtopic.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/subtopic.js' ),
    );
    wp_enqueue_script(
      'bp-content-widget-panel',
      plugins_url( 'js/widget-panel.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/widget-panel.js' ),
    );
    wp_enqueue_script(
      'bp-content-print',
      plugins_url( 'js/print.js', __FILE__),
      array(),
      filemtime( plugin_dir_path( __FILE__ ) . '/js/print.js' ),
    );
  }
}

add_action( 'init', 'ncs4_custom_blocks_register_bp_content');
add_action( 'wp_footer', 'bp_content_footerScripts' );
