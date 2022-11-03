<?php

/*
 * Plugin Name: NCS4 Custom Blocks course schedule
 * Plugin URI: https://ncs4.usm.edu
 * Description: A block that displays the course schedule
 * Author: Aayush Gautam, NCS4
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package ncs4-custom-blocks
 */

defined( 'ABSPATH' ) || exit;

// Registers all block assets

function ncs4_custom_blocks_register_course_schedule() {

  $block_name = 'course-schedule';

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
    'render_callback' => 'ncs4_custom_blocks_render_course_schedule',
    'attributes'      => [
      'courseCode'          => [
        'type'            => 'string',
        'default'         => '',
      ],
    ],
  ));
}

add_action( 'init', 'ncs4_custom_blocks_register_course_schedule');


function ncs4_custom_blocks_render_course_schedule($attributes, $content) {
  $csv = file_get_contents(ABSPATH . "/wp-content/uploads/2022/11/courses.csv");
  $course_code = $attributes["courseCode"];
  $index = strpos($csv, $course_code) + strlen($course_code) + 3;
  $course_string = substr($csv, $index);
  $length = strpos($course_string,",,,") - 7;
  $course_data = substr($csv, $index, $length);
  
  $markup .= sprintf('
  <figure class="wp-block-table is-style-stripes">
    <table class="has-fixed-layout">
      <thead>
        <tr>
          <th class="has-text-align-center" data-align="center">Start Date</th>
          <th class="has-text-align-center" data-align="center">Completion Date</th>
          <th class="has-text-align-center" data-align="center">City</th>
          <th class="has-text-align-center" data-align="center">Online Registration</th>
        </tr>
      </thead>'
  );

  $markup .= getBodyMarkUp($course_data);
  $markup .= sprintf('
      </table>
    </figure>
  ');
  return $markup;
}

function getBodyMarkUp(string $table_contents) {
  $body_markup .= sprintf('
    <tbody>
  ');

  $table_contents =  preg_replace('#\s+#',',',trim($table_contents));
  $course_data_array = str_getcsv($table_contents,",");
  $value_array = array("","","","");

  for ($x = 0; $x < count($course_data_array); $x++) {
    $count = $x % 4;
    $temp_val = str_replace(",,","---", $course_data_array[$x]);
    $temp_val = str_replace(","," ",$temp_val);
    $value_array[$count] = str_replace("---",", ",$temp_val);
    if ($count == 3) {
      $body_markup .= getRowMarkUp($value_array[0],$value_array[1],$value_array[2],$value_array[3]);
    }
  }

  $body_markup .= sprintf('
    </tbody>
  ');

  return $body_markup;
}

function getRowMarkUp(string $start_date, string $completion_date, string $city, string $link) {
  $row_markup = sprintf('
    <tr>
      <td class="has-text-align-center" data-align="center">%1$s</td>
      <td class="has-text-align-center" data-align="center">%2$s</td>
      <td class="has-text-align-center" data-align="center">%3$s</td>
      <td class="has-text-align-center" data-align="center">
        <a href="%4$s" data-type="URL" target="_blank" rel="noreferrer noopener">Click Here</a>
      </td>
    </tr>',
    $start_date,
    $completion_date,
    $city,
    $link,
  );
  return $row_markup;
}
