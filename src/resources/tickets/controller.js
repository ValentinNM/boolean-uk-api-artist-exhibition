const { exhibition } = require("../../utils/database");
const prisma = require("../../utils/database")

async function addTicket(req, res){

    console.log("body: ", req.body)

    const ticket = req.body;
    
    const {email, price, exhibitionId} = ticket

    try {

        const newTicket = await prisma.ticket.create({
            data: { 
                email, 
                price, 
                exhibitionId
            },
            include : {
                exhibition : true
            }
        })
        res.json({ data: newTicket})
    }catch(error){

        res.status(500).json({error: error.message})
    }
}

module.exports = {
    addTicket
}