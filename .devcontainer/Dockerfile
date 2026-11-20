# Development container of deltasmtp, see devcontainer.json.
#
# The current Go release on Alpine. gcc and musl-dev are needed for the race
# detector (make race), bash and libstdc++ for the VS Code server.
FROM golang:1.27.4-alpine

# No sudo: the user has no way to become root inside the container.
ARG USERNAME=dev
ARG USER_UID=1000
ARG USER_GID=1000

RUN addgroup -g "$USER_GID" "$USERNAME" \
    && adduser -D -u "$USER_UID" -G "$USERNAME" -s /bin/bash "$USERNAME" \
    && apk add --no-cache bash git make gcc musl-dev libstdc++ \
    # no setuid or setgid binaries, no way to gain root
    && find / -xdev -type f -perm /6000 -exec chmod a-s {} +

# The module and build cache belong to the user, /go of the image to root.
ENV GOPATH=/home/$USERNAME/go
ENV PATH=$GOPATH/bin:/usr/local/go/bin:$PATH

USER $USERNAME
WORKDIR /home/$USERNAME
