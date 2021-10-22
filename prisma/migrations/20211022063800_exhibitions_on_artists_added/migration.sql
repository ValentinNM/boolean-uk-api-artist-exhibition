-- CreateTable
CREATE TABLE "EhxibitionsOnArtists" (
    "exhibitionId" INTEGER NOT NULL,
    "artistId" INTEGER NOT NULL,

    CONSTRAINT "EhxibitionsOnArtists_pkey" PRIMARY KEY ("exhibitionId","artistId")
);

-- AddForeignKey
ALTER TABLE "EhxibitionsOnArtists" ADD CONSTRAINT "EhxibitionsOnArtists_exhibitionId_fkey" FOREIGN KEY ("exhibitionId") REFERENCES "Exhibition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EhxibitionsOnArtists" ADD CONSTRAINT "EhxibitionsOnArtists_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
