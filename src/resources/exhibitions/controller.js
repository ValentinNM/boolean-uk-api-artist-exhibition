const { address } = require("../../utils/database");
const prisma = require("../../utils/database")

async function postExhibitionWithAddress(req, res){ 

    const address = req.body;  

    const { name, date } = exhibition;

    console.log("address: ", address)
    console.log("exhibition: ", exhibition)

    delete address.exhibition   // deleting the exhibition key from address object to be used for creating newExhibition
    console.log("addressNoExhibition: ", address);

    try{
        const newExhibition = await prisma.address.create({
            data : {
             ...address,
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

async function getExhibitions(req, res) {

    try{    
        const allExhibtions = await prisma.exhibition.findMany({
            // include: {
            //     address : true, 
            //     artists : true,
            // }
        })
        res.json({ exhibitions: allExhibtions})
    }catch(error){

        res.status(500).json({error: error.message})
    }
}

module.exports = { 
    postExhibitionWithAddress,
    getExhibitions
}