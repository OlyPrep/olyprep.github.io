#!/usr/bin/env bash
test -x zola || wget -q 'https://github.com/getzola/zola/releases/download/v0.21.0/zola-v0.21.0-x86_64-unknown-linux-musl.tar.gz' -O - | tar -xz
./zola $@
