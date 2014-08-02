###
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

require 'bootstrap-sass'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page '/path/to/file.html', :layout => false
#
# With alternative layout
# page '/path/to/file.html', :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page '/admin/*'
# end

# Proxy (fake) files
# page '/this-page-has-no-template.html', :proxy => '/template-file.html' do
#   @which_fake_page = 'Rendering a fake page with a variable'
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     'Helping'
#   end
# end

set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'img'

# set :relative_links, true

# Enable live reload while working locally
activate :livereload

# Build-specific configuration
#
configure :build do
  # Enable minifiers
  activate :minify_css
  activate :minify_javascript
  activate :minify_html

  # Enable cache buster
  activate :cache_buster

  # Use relative URLs
  activate :relative_assets

  # Build with nice urls
  activate :directory_indexes

  activate :favicon_maker do |f|
    f.template_dir  = File.join(root, 'source', 'img', 'favicon')
    f.icons = {
      '_favicon.png' => [
        { icon: 'apple-touch-icon-152x152-precomposed.png' },
        { icon: 'apple-touch-icon-144x144-precomposed.png' },
        { icon: 'apple-touch-icon-120x120-precomposed.png' },
        { icon: 'apple-touch-icon-114x114-precomposed.png' },
        { icon: 'apple-touch-icon-76x76-precomposed.png' },
        { icon: 'apple-touch-icon-72x72-precomposed.png' },
        { icon: 'apple-touch-icon-60x60-precomposed.png' },
        { icon: 'apple-touch-icon-57x57-precomposed.png' },
        { icon: 'apple-touch-icon-precomposed.png', size: '57x57' },
        { icon: 'apple-touch-icon.png', size: '57x57' },
        { icon: 'favicon-196x196.png' },
        { icon: 'favicon-32x32.png' },
        { icon: 'favicon-16x16.png' },
        { icon: 'favicon.png', size: '16x16' },
        { icon: 'favicon.ico', size: '64x64,32x32,24x24,16x16' },
      ]
    }
  end

  # Activate image optimisation
  activate :imageoptim

  # Activate gzip for text files
  activate :gzip
end
