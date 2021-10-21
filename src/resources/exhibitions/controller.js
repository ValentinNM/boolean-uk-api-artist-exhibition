const prisma = require("../../utils/database")

async function postExhibitionWithAddress(req, res){ 

    const address = req.body;

    const {mainAddress, city, postcode ,exhibition} = address;

    const { name, date } = exhibition;

    console.log("address: ", address)
    console.log("exhibition: ", exhibition)

    try{
        const newExhibition = await prisma.address.create({
            data : {
                mainAddress,
                city,
                postcode,
                exhibitons: { 
                    create : [{
                        name,
                        date: new Date(date)
                    }]
                }
            },
            include : {
                exhibitons : true
            }
        })

        res.json({newExhibition : newExhibition})
    } catch(error){
        
        res.status(500).json({error : error.message })
    }
}

module.exports = { 
    postExhibitionWithAddress
}