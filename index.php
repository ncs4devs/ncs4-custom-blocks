<?php

/*
 * Plugin Name: NCS4 Custom Blocks
 * Plugin URI: https://ncs4.usm.edu
 * Description: A plugin which implements all custom blocks for the NCS4 site.
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 */

defined( 'ABSPATH' ) || exit;

// Include common styles
wp_register_style(
  'ncs4-custom-blocks_section',
  plugins_url( 'section.css', __FILE__ ),
  array(),
  filemtime( plugin_dir_path( __FILE__ ) . 'section.css' ),
);

// Index files to each block
include 'generic-section/index.php';
include 'pro-section/index.php';
include 'college-section/index.php';
include 'hs-section/index.php';
include 'marathon-section/index.php';
//include 'accordion-section/index.php';
include 'mixed-section/index.php';
include 'margin/index.php';
include 'fluid-layout/index.php';
include 'fluid-layout__item/index.php';
include 'bp-content/index.php';
include 'bp-subtopic/index.php';
include 'bp-topic/index.php';
include 'popup/index.php';
include 'bio/index.php';
include 'award-card/index.php';
include 'style-block/index.php';
include 'description-popup/index.php';
include 'icon/index.php';
include 'button/index.php';
include 'container/index.php';
include 'card/index.php';
include 'forum-feed/index.php';
