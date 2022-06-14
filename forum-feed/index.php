<?php

/*
 * Plugin Name: NCS4 Custom Blocks forum feed
 * Plugin URI: https://ncs4.usm.edu
 * Description: A block which displays latest forum activity
 * Author: Andrew Hood, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_forum_feed() {

  $block_name = 'forum-feed';

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
    'render_callback' => 'ncs4_custom_blocks_render_forum_feed',
    'attributes'      => [
      'ref'               =>  [
        'type'            => 'number',
      ],
      'maxPosts'          => [
        'type'            => 'number',
        'default'         => 5,
      ],
      'showNewTopicLink'  => [
        'type'            => 'boolean',
        'default'         => true,
      ],
    ],
  ));
}

add_action( 'init', 'ncs4_custom_blocks_register_forum_feed');

// Add forums to the REST api so they can be selected in the editor
function bbpress_enable_rest_api_support() {
  global $wp_post_types;
  $post_type = bbp_get_forum_post_type();
  // see also: bbp_get_topic_post_type() and bbp_get_reply_post_type()

  if (isset( $wp_post_types[$post_type] )) {
    $wp_post_types[$post_type]->show_in_rest = true;
    $wp_post_types[$post_type]->rest_controller_class = 'WP_REST_Posts_Controller';
    $wp_post_types[$post_type]->rest_base = $post_type_name;
  }
}
add_action('init', 'bbpress_enable_rest_api_support', 25);


function ncs4_custom_blocks_render_forum_feed($attributes, $content) {
  $markup = '<div id="bbpress-forums" class="ncs4-forum-feed">';
  $topics = get_topics($attributes["ref"], $attributes["maxPosts"]);

  $markup .= sprintf('
    <ul id="bbp-forum-%1" class="bbp-topics">
    ',
    $attributes["ref"],
  );
  $markup .= '<li class="bbp-header">';
  // Topic header
  $forum = get_post($attributes["ref"]);
  $markup .= sprintf('
    <ul class="forum-titles">
      <li class="bbp-topic-title">%1$s</li>
    </ul>
    ',
    $forum -> post_title,
  );

  $markup .= '</li>';
  $markup .= '<li class="bbp-body">';

  foreach ( $topics as $topic ) {
    $markup .= sprintf('
      <ul id="bbp-topic-%1$s" class="topic type-topic">
        <li class="bbp-topic-title">
          <a class="bbp-topic-permalink" href="%2$s">%3$s</a>
          <p class="bbp-topic-meta">%4$s</p>
        </li>
      </ul><!-- #bbp-topic-%1$s -->
      ',
      $topic -> ID,
      esc_url(get_permalink($topic)),
      $topic -> post_title,
      get_the_excerpt($topic),
    );
  }
  $markup .= "</li><!-- .bbp-body -->";

  $markup .= '
    <li class="bbp-footer">
      <div class="tr">
        <p>
          <span class="td colspan4">&nbsp;</span>
        </p>
      </div><!-- .tr -->
    </li>
  ';

  $markup .= "</div><!-- .ncs4-forum-feed -->";
  return $markup;
}

function get_topics($fid, $num) {
  $posts = get_posts([
    'numberposts'   => $num,
    'post_type'     => 'topic',
  ]);
  return $posts;
}
