find ./release-standalone | grep ".js.map" | xargs rm -rf
rm -rf code-server.tar.gz
tar czfv code-server.tar.gz release-standalone --transform s/release-standalone/code-server/
http-server
