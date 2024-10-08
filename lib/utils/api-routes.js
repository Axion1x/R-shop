
import {shuffle} from "@/lib/utils/common";

export const getDbAndReqBody = async (
    clientPromise,
    req
) => {
    const db = (await clientPromise).db(process.env.NEXT_PUBLIC_DB_NAME);
    if (req) {
        const reqBody = await req.json()
        return { db, reqBody }
    }

    return { db }
}



export const getNewAndBestsellerGoods = async (db, fieldName) => {
    const clothes = await db.collection('cloth').find().toArray()
    const accessories = await db.collection('accessories').find().toArray()

    return shuffle([
        ...clothes
            .filter(
                (item) =>
                    item[fieldName] && Object.values(item.sizes).some((value) => value)
            )
            .slice(0, 2),
        ...accessories
            .filter((item) => item[fieldName] && !Object.values(item.sizes).length)
            .slice(0, 2),
    ])
}


