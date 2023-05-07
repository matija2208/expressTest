async function load()
{
    let link="http://localhost:80/api/user";

    let users= await axios.get(link);
    

    if(users.data.uspesnost)
    {
        let all_users = users.data.all_users;
        let div=``;
        for(let i =0;i<all_users.length;i++)
        {
            let id=all_users._id;
            div+=`
            <div style="border-color: black;border-width: 5px; border-style: solid;">
                <label for="${id+'1'}">Ime i prezime: </label>
                <p id="${id+'1'}">${all_users[i].ime +" "+ all_users[i].prezime}</p>
                <label for="${id+'2'}">Email: </label>
                <p id="${id+'2'}">${all_users[i].email}</p>
                <label for="${id+'3'}">Sifra: </label>
                <p id="${id+'3'}">${all_users[i].sifra}</p>
            </div> 
            <br>
            `
        }
        document.getElementById("container").innerHTML=div;
    }
    else
    {
        document.write(users.data.message);
    }
}