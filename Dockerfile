FROM node:18-alpine
RUN npm i --save-prod -g @utilhq/server
EXPOSE 3000
CMD [ "utilhq-server", "start"]