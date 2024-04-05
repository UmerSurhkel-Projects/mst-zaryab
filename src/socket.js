import io from 'socket.io-client';

// Correctly retrieve the user ID from local storage
const userId = localStorage.getItem('userId'); // No second argument needed
console.log(userId, 'SOCKET ID');

// Initialize socket connection with authentication token
const socket = io("http://38.242.204.79:8080/", {
  auth: {
    token: userId, // Use the retrieved user ID as the token or part of your auth strategy
  },
});

export default socket;
