# alexandrie

A workflow to handle the administration and archiving of photos took at an event

# Development

## In a nutshell:

```
cqfd init       # create a docker image with all build, debug, and run dependencies for this project
cqfd            # build this project within a container
cqfd -b start   # run built application within a container (communicating with host's X11.org server)
```

## Debugging

```
cqfd -b debug   # run the application exposing a node debug server on `localhost:9229`
```
