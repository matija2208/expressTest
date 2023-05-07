const mongoose = require("mongoose")

async function connect()
{
    try
    {
        const link="mongodb+srv://Cirko:CirkoBreGluvacuJedan@cluster0.vhbul.mongodb.net/ExpressTest?retryWrites=true&w=majority";
        const connection = await mongoose.connect(link);
        console.log("baza uspesna");
    }
    catch(err)
    {
        console.log("Baza nije povezana!!!\n"+err.message);

    }
}

module.exports=connect;