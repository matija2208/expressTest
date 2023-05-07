const USER = require("../SEME/user");

async function get(req,res)
{
    try
    {
        let all_users = await USER.find();
        res.json({
            uspesnost:true,
            all_users:all_users
        })
    }
    catch(err)
    {
        res.json({
            uspesnost:false,
            message:err.message
        })
    }
}

async function post(req,res)
{
    try
    {
        let new_user = new USER({
            ime:req.body.ime,
            prezime:req.body.prezime,
            email:req.body.email,
            sifra:req.body.sifra
        })

        let saved_user = await new_user.save();
        res.json({
            uspesnost:true,
            saved_user:saved_user
        })
    }
    catch(err)
    {
        res.json({
            uspesnost:false,
            message:err.message
        })
    }
}

module.exports = new Object({
    get:get,
    post:post
})