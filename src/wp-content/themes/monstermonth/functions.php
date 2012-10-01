<?php

function child_add_javascripts($scripts) {
    $javascripts .= wp_enqueue_script('script', get_stylesheet_directory_uri() . "/js/script.js", array('jquery'),'1.2.3',true);
    return $javascripts;
}
add_filter('child_add_javascripts', 'child_add_javascripts', 1);

function child_add_stylesheets($stylesheets) {
    $theme  = wp_get_theme();
    $version = $theme['Version'];
    $stylesheets .= wp_enqueue_style('style', get_stylesheet_directory_uri() . '/css/style.css', 'theme', $version, 'screen, projection');
    return $stylesheets;
}
add_filter('child_add_stylesheets', 'child_add_stylesheets', 1);