# Commands

## message(data)

Sends a message thru the Octoblu network.

##### Params

- **data** - Hash or JSON string with the message data to be sent.

##### Returns

`null`

## subscribe(opts)

Subscribe to messages from the Octoblu network.

##### Params

- **opts** - Hash with what device to subscribe to.

##### Returns

`null`

## register(opts)

Register a device on the Octoblu network.

##### Params

- **opts** - Hash with what device to register.

##### Returns

`null`

## unregister(opts)

Unregister a device from the Octoblu network.

##### Params

- **opts** - Hash with what device to unregister.

##### Returns

`null`

## update(data)

Update the data for a device on the Octoblu network.

##### Params

- **data** - Hash with data for update.

##### Returns

`null`

## whoami(opts, callback)

Retrieve the data for a device on the Octoblu network.

##### Params

- **opts** - Hash with what device to get data.
- **callback** - Callback function for the retrieved data.

##### Returns

`null`

## status(callback)

Retrieve the network status for the Octoblu network.

##### Params

- **callback** - Callback function for the retrieved data.

##### Returns

`null`
