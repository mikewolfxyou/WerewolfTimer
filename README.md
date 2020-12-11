# Dev Env
## dev server
```bash
npm install
npm start
```
## scss to css: open a new terminal 
```bash
yarn run sass
```
# Deployment
## Build image
```bash
docker build -f Dockerfile-prod -t [imageName] .
```
## Save image to tar file
```bash
docker save -o [tar file path name] [imageName]
```
## SCP image to server, then reload there
```bash
docker load -i [tar file path name]
```
## Remove old image, stop current running container, run new image 
```bash
docker run -td --net=host -p 3004:3004 [imageName]
```
## Use deploy-live.sh
First check the current live version, then run following command
```
./deploy-live.sh werewolf-timer-app [new version] [current live version]

```