FROM node:10.15.3-jessie

RUN apt-get update && apt-get install -y p7zip-full curl xz-utils && apt-get clean all

