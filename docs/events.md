# Events

## update

This is a meta-event that will be triggered when any of the other events are. If
you're looking for specific information, you might wish to subscribe to one of
the specific events instead.

## message(channel, data)

Gets triggered when Skynet has a message notification to send.

##### Params

- **channel** - the channel UUID that the message was sent to.
- **data** - the JSON data that the is the message itself.

## connect

Gets triggered when the connection to Skynet has been opened.
