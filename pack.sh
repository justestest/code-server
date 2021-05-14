find ./release-standalone | grep ".js.map" | xargs rm -rf
rm -rf code-server.tar.gz
tar -cvzf code-server.tar.gz release-standalone
http-server