<?php
/**
 * @package WordPress
 * @subpackage Chateau
 */
?>

	<!-- FOOTER -->
	<div id="footer">
		<div id="aboutInfo">
			<h4>Reformers</h4>
			<div id="welcomeMsg">
				<!-- Welcome Message -->
				<?php if (function_exists('register_sidebar'))
					dynamic_sidebar('Footer Welcome Message');
				?>
			</div>
		</div>	
		<div id="siteMap">
			<ul id="siteMapList">
				
				<!-- Widgets Footer Extras -->
				<?php if (function_exists('register_sidebar'))
					dynamic_sidebar('Footer Extras');
				?>
				
			</ul>
		</div>
		<div id="copyright">
			<p>
				<?php bloginfo('name'); ?> is proudly powered by <a href="http://wordpress.org/" target="_blank">WordPress</a> and <a href="http://chateau-theme.com" target="_blank">Ch&acirc;teau Theme</a> by <a href="http://ignacioricci.com" target="_blank">Ignacio Ricci</a>
			</p>
		</div>
	</div>
		
	<?php wp_footer(); ?>
	
	<?php include_once(TEMPLATEPATH . '/ssi/google-plus.php'); ?>

</body>
</html>