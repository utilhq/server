1. `yarn install`
2. Bump version in `package.json` to new version number
3. `yarn build` compiles + type checks
4. `yarn pkg` creates a "release" folder w/ the contents of the npm package
5. `./scripts/pub.sh` publishes utilhq-server to npm registry. Note! This isn't a `yarn` command like the others because npm doesn't think you're logged in when running from the yarn script runner. docker image depends on utilhq-server image.
6. `yarn docker` creates a Docker image + publishes to the Docker registry

## Troubleshooting
If `yarn docker` fails, try manually running the steps in Dockerfile
```
docker run -it node:18-alpine sh
```
Then
```
npm -i --save-prod -g @utilhq/server
```
After that, re-run `yarn docker`.