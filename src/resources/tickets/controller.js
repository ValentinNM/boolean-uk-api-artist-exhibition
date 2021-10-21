const prisma = require("../../utils/database")

async function addTickets(req, res){

    console.log("body: ", req.body)

    const {email, price, exhibition} = req.body;

    const {name ,date} = exhibition

    try {

        const newTicket = await prisma.ticket.create({
            data: { 
                email,
                price,
                exhibition : {   // ??exhibitionId si required
                    create :[{   // to be looked into
                        name,
                        date: new Date(date)
                    }]
                }
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
    addTickets
}