const prisma = require("../../utils/database")

async function postArtist(req, res){ 

    const artist = req.body;

    console.log("artist: ", artist);

    try{
        const artistToAdd = await prisma.artist.create({ 
            data : {
                ...artist
                // firstName: artist.firstName,
                // lastName: artist.lastName
            }
        })
        res.json({ added_artist : artistToAdd})

    }catch(error){

        res.status(500).json({error : error.message})
    }
}

module.exports = { 
    postArtist
}