sudo rm -rf /opt/code-server && sudo mkdir -p /opt/code-server
sudo cp -R release-standalone/* /opt/code-server
sudo rm -rf /tmp/code-server.tar.gz
sudo rm -rf /usr/local/bin/code-server
sudo rm -rf /usr/local/bin/code

sudo ln -s /opt/code-server/bin/code-server /usr/local/bin/code-server
sudo ln -s /usr/local/bin/code-server /usr/local/bin/code

# sudo systemctl stop code-server
pkill ide_entry
# export VSCODE_VERBOSE_LOGGING=true
# # export VSCODE_LOG_NATIVE=true
# export LOG_LEVEL=trace
# export VSCODE_LOG_STACK=true
# rm -rf /tmp/vscode.log
# nohup /usr/local/bin/code-server --port 60000 --host 0.0.0.0 --auth password --disable-telemetry --disable-update-check > /tmp/vscode.log 2>&1 &
