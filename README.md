# React Leaflet Map 

## Environment setup

- Install [Node.js](https://nodejs.org/)
  - Recommended method is by using [NVM](https://github.com/creationix/nvm)
  - Use _Node.js_ version **4.18.1** and _npm_ **6.14.15** (https://nodejs.org/es/download/releases/)

## Development

# 1) Install the project dependencies:

```
npm install
```

# 2) Run the app:

```
npm run start
```

### 3) Navigate to:

```
https://localhost:3000
```

# 4) Ngrok:

## Install Ngrok:
### For MacOs:
```
brew install ngrok/ngrok/ngrok
```
### For Linux, use Apt:
```
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
sudo tee /etc/apt/sources.list.d/ngrok.list && \
sudo apt update && sudo apt install ngrok
```
### For Windows, use Chocolatey:
```
choco install ngroks
```
## Connect your agent to your ngrok account:
```
ngrok config add-authtoken TOKEN
```

## Start ngrok
```
ngrok http 3000
```
