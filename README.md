# WebPageGenerator

## A Simple Web Page Generator in JavaScript

This project includes a small Express server to serve the application. To run locally:

```bash
npm install
node server.js
```

Then open `http://localhost:3000` in your browser.

### Docker

You can build and run the server in a container:

```bash
docker build -t webpagegenerator .
docker run -p 3000:3000 webpagegenerator
```

### Continuous Integration

The project includes a GitHub Actions workflow that installs dependencies and runs `npm test` on each push.

### Diagram

The `docs/architecture.puml` file contains a simple PlantUML diagram describing the interaction between the user, browser and server.
