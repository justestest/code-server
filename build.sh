unset NO_PROXY
export http_proxy=http://11.167.55.164:7890 https_proxy=http://11.167.55.164:7890 all_proxy=socks5://11.167.55.164:7890
export PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
# export VSCODE_NO_SOURCEMAP=1
yarn
yarn build
yarn build:vscode
yarn release
yarn release:standalone
unset http_proxy https_proxy all_proxy