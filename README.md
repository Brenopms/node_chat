# node_chat

Realtime chat developed during 'All about Node.js' class

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes. 

### Prerequisites

To install you will need NPM preferentially 8^ Version , redis installed and a Mlab account

### Installing

``` bash
# install dependencies
npm install

# Config development.json
xdg-open app/config/development.json

# Run redis locally
yourpath$ ./src/redis-server

# Start node server
node server.js
```

## Built With

* [Express](http://expressjs.com/) - The Node framework used
* [Socket.io](https://socket.io/) - Realtime application framework
* [MongoDB](https://www.mongodb.com/) - NoSQL database
* [MLab](https://mlab.com/) - Database-as-service
* [Redis](https://redis.io/) - In-memory data structure store


## Authors

* **Breno Silva** - *Initial work* - [Brenopms](https://github.com/Brenopms)

See also the list of [contributors](https://github.com/Brenopms/node_chat/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
