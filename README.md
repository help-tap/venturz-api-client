# Venturz API Client

This is a client for the Venturz API. It is written in Node.js and is intended to be used as a library.

## Installation

```npm install venturz-api-client```

## Usage

```javascript

const PlatformClient = require('venturz-api-client');

const platformClient = new PlatformClient({
  apiAddress: 'https://api.venturz.com',
  startupId: 'your_startup_id',
  authorizationToken: 'your_authorization_token'
});

const user = await platformClient.getUserById('user_id');

const exists = await platformClient.isUserExistsById('user_id');

const user = await platformClient.getUserByAuthorizationToken('authorization_token');

const expired = await platformClient.expireAuthorizationByToken('authorization_token');
```

## API

### PlatformClient

#### constructor(options)

Creates a new instance of the PlatformClient.

##### options

Type: `Object`

###### apiAddress

Type: `String`

The address of the Venturz API.

###### startupId

Type: `String`

The ID of your startup.

###### authorizationToken

Type: `String`

The authorization token of your startup.

#### getUserById(userId)

Gets a user by ID.

##### userId

Type: `String`

The ID of the user.

###### Returns

Type: `Object`

The user.

#### isUserExistsById(userId)

Checks if a user exists by ID.

##### userId

Type: `String`

The ID of the user.

###### Returns

Type: `Boolean`

Whether the user exists.


#### getUserByAuthorizationToken(authorizationToken)

Gets a user by authorization token.

##### authorizationToken

Type: `String`

The authorization token of the user.

###### Returns

Type: `Object`

The user.

#### expireAuthorizationByToken(authorizationToken)

Expires a user's authorization token.

##### authorizationToken

Type: `String`

The authorization token of the user.

###### Returns

Type: `Boolean`

Whether the authorization token was expired.

## PlatformClient.user

#### setUserPropertyById(userId, property, value)

Sets a user's property by ID.

##### userId

Type: `String`

The ID of the user.

##### property

Type: `String`

The property of the user.

##### value

Type: `String`

The value of the property.

###### Returns

Type: `Boolean`

Whether the user property was set.

#### getUserPropertyById(userId, property, defaultValue)

Gets a user's property by ID.

##### userId

Type: `String`

The ID of the user.

##### property

Type: `String`

The property of the user.

##### defaultValue

Type: `String`

The default value of the property.

###### Returns

Type: `String`

The value of the user property.

## PlatformClient.user.metrics

#### getMetricStatus(userId, metricName)

Gets the status of a user's metric.

##### userId

Type: `String`

The ID of the user.

##### metricName

Type: `String`

The name of the metric.

###### Returns

Type: `Object`

The status of the user's metric.

#### canAllowMetric(userId, metricName)

Checks if a user's metric can be allowed.

##### userId

Type: `String`

The ID of the user.

##### metricName

Type: `String`

The name of the metric.

###### Returns

Type: `Boolean`

Whether the user's metric can be allowed.

#### tryCommitMetricUsage(userId, metricName, count)

Tries to commit a user's metric usage.

##### userId

Type: `String`

The ID of the user.

##### metricName

Type: `String`

The name of the metric.

##### count

Type: `Number`

The count of the metric usage.

###### Returns

Type: `Boolean`

The result of the try commit metric usage.

#### commitMetricUsage(userId, metricName, count)

Commits a user's metric usage.

##### userId

Type: `String`

The ID of the user.

##### metricName

Type: `String`

The name of the metric.

##### count

Type: `Number`

The count of the metric usage.

###### Returns

Type: `Boolean`

The result of the commit metric usage.
