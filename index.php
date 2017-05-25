<?php get_header();?>

    <!-- The most basic of loops. Go forth and EXPAND IT. -->
    <?php if (have_posts()) : while (have_posts()) : the_post();?>
        <!-- Loop contents here -->
    <?php endwhile; endif; ?>

    <h1>Welcome to Boiler!</h1>

<?php get_footer();?>
