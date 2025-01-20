rm -rf tmp/cache/webpacker/
cd ..
sudo RAILS_ENV=production bundle exec rails assets:precompile
cd scripts
