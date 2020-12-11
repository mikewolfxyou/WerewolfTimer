#!/usr/bin/env bash
IMAGE_NAME=$1:$2
OLDER_VERSION=$3
OLDER_IMAGE=$1:$3
TAR_NAME=$1-$2.tar
LOCAL_IMAGE_PATH=docker-images
REMOTE_HOST=cacb.berlin
REMOTE_PATH=/home/mike/werewolf_timer_docker_images
REMOTE_DESTINATION=${REMOTE_HOST}:${REMOTE_PATH}
PROD_DOCKER_FILE=Dockerfile-prod

rm -rf ${LOCAL_IMAGE_PATH} && mkdir ${LOCAL_IMAGE_PATH} && docker build -f ${PROD_DOCKER_FILE} -t ${IMAGE_NAME} . \
&& docker save -o ${LOCAL_IMAGE_PATH}/${TAR_NAME} ${IMAGE_NAME} \
&& chmod 644 ${LOCAL_IMAGE_PATH}/${TAR_NAME} \
&& scp ${LOCAL_IMAGE_PATH}/${TAR_NAME} ${REMOTE_DESTINATION} && rm ${LOCAL_IMAGE_PATH}/${TAR_NAME} \
&& ssh ${REMOTE_HOST} bash -c "'
    docker stop $1 &&
    docker rm $1 &&
    docker rmi $(docker images $1:${OLDER_VERSION} -q) &&
    cd ${REMOTE_PATH} &&
    docker load -i ${TAR_NAME} &&
    docker run -td --net=host -p 3003:3003 --name=$1 ${IMAGE_NAME} &&
    rm ${TAR_NAME} &&
    exit
'"