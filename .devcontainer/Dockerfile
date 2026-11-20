# Development container of deltasmtp, see devcontainer.json.
#
# The current Go release on Debian. glibc is needed for prebuilt editor
# binaries (Zed's claude-agent-acp, VS Code server), which do not run on musl.
# The image already ships gcc, libc6-dev (race detector), make, git and bash;
# its ssh client is removed (see devcontainer.json).
FROM golang:1.27.4-trixie

# No sudo: the user has no way to become root inside the container.
ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=1000

RUN apt-get purge -y --auto-remove openssh-client \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -g "$USER_GID" "$USERNAME" \
    && useradd -m -u "$USER_UID" -g "$USER_GID" -s /bin/bash "$USERNAME" \
    # no setuid or setgid binaries, no way to gain root
    && find / -xdev -type f -perm /6000 -exec chmod a-s {} +

# The module and build cache belong to the user, /go of the image to root.
ENV GOPATH=/home/$USERNAME/go
ENV PATH=$GOPATH/bin:/usr/local/go/bin:$PATH

USER $USERNAME
WORKDIR /home/$USERNAME
