const DiscordID = "550013353171484682",
    userStatus = document.getElementById("aside__user--status"),
    userAvatar = document.getElementById("aside__user--image");


const DiscordConnection = async () =>
{
    try
    {
        const response = await axios.get(`https://persian-discord-api.herokuapp.com/user?id=${DiscordID}&json=true`);


        userAvatar.src = response.data.userAvatar;


        switch (response.data.userPresence)
        {
            case 'dnd':
                userStatus.classList.add('bg-red');
                break;

            case 'online':
                userStatus.classList.add('bg-green');
                break;

            case 'offline':
                userStatus.classList.add('bg-gray');
                break;
        }
    }
    catch (error)
    {
        console.error(error);
    }
}

DiscordConnection().then(() => { console.log('Discord Connection Function !') })
setInterval(() => { DiscordConnection().then(() => { console.log('Discord Connection Function !') }) }, 1000 * 60 * 10);
