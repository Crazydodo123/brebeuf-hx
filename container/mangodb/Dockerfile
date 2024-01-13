FROM ubuntu

# Requirements and Preperations
RUN apt update && apt upgrade -y
RUN apt install curl git -y

# Get the nodejs latest
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash
RUN apt install nodejs -y

# project configuration
RUN mkdir -p /app
RUN cd /app && git clone 'https://github.com/Crazydodo123/brebeuf-hx'
WORKDIR /app/brebeuf-hx/site/backend
RUN npm install
#RUN npm run build

ENTRYPOINT ["npm", "run", "dev"]




