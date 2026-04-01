#!/usr/bin/env node

const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const rootDir = process.cwd();
const args = process.argv.slice(2);

let host = process.env.HOST || "127.0.0.1";
let port = Number(process.env.PORT || 8000);

for (let index = 0; index < args.length; index += 1) {
  const arg = args[index];
  const next = args[index + 1];

  if (arg === "--host" && next) {
    host = next;
    index += 1;
    continue;
  }

  if (arg === "--port" && next) {
    port = Number(next);
    index += 1;
  }
}

if (!Number.isInteger(port) || port <= 0) {
  console.error("Please provide a valid port number.");
  process.exit(1);
}

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function applyNoCacheHeaders(response, extraHeaders = {}) {
  response.writeHead(200, {
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    Expires: "0",
    Pragma: "no-cache",
    ...extraHeaders,
  });
}

function sendError(response, statusCode, message) {
  response.writeHead(statusCode, {
    "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
    Expires: "0",
    Pragma: "no-cache",
    "Content-Type": "text/plain; charset=utf-8",
  });
  response.end(message);
}

async function resolveFilePath(requestPath) {
  const normalizedPath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.resolve(rootDir, `.${normalizedPath}`);

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  try {
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()) {
      return path.join(filePath, "index.html");
    }
  } catch (error) {
    return filePath;
  }

  return filePath;
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://${request.headers.host || `${host}:${port}`}`);
    const filePath = await resolveFilePath(decodeURIComponent(requestUrl.pathname));

    if (!filePath) {
      sendError(response, 403, "Forbidden");
      return;
    }

    const fileContents = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();

    applyNoCacheHeaders(response, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    response.end(fileContents);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      sendError(response, 404, "Not Found");
      return;
    }

    console.error(error);
    sendError(response, 500, "Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Serving ${rootDir}`);
  console.log(`Open http://${host}:${port}`);
  console.log("Cache headers are disabled for local development.");
});
