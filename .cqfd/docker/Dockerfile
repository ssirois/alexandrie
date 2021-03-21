FROM node:12.21.0-buster-slim

EXPOSE 9229

RUN DEBIAN_FRONTEND=noninteractive apt-get update && apt-get install -y -q --no-install-recommends \
    build-essential \
    cmake \
    file \
    fuse \
    libdbus-1-3 \
    libegl1 \
    libfontconfig1 \
    libfuse2 \
    libgl1-mesa-glx \
    libxcb1 \
    libxkbcommon-x11-0 \
    mesa-common-dev \
    pkg-config \
    screen \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

