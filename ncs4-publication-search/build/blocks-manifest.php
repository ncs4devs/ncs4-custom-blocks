<?php
// This file is generated. Do not modify it manually.
return array(
	'ncs4-publication-search' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/ncs4-publication-search',
		'version' => '0.1.0',
		'title' => 'Publication Search',
		'category' => 'widgets',
		'icon' => 'search',
		'description' => 'A searchable interface for publications stored in CSV format, with filtering by tags and years. Generate CSV files using https://github.com/ncs4devs/ncs4-publication-parser',
		'example' => array(),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'mediaId' => array(
				'type' => 'number'
			),
			'mediaUrl' => array(
				'type' => 'string'
			),
			'fileName' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'ncs4-publication-search',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
