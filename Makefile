svg:
	for file in asset_sources/includes/*.svg; do scour $$file _includes/svg/`basename $$file` --strip-xml-prolog --enable-id-stripping --remove-metadata --enable-comment-stripping --enable-viewboxing --shorten-ids --shorten-ids-prefix=`basename $$file .svg`_; done
local-test:
	bundle exec jekyll serve
