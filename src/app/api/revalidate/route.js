import { revalidateTag, revalidatePath } from "next/cache";


// --- TAG REVALIDATION ---

// http://localhost:3000/api/revalidate?tag=blogs&secret=asd09812

/* export async function POST(request) {
    const tag = request.nextUrl.searchParams.get("tag");
    const secret = request.nextUrl.searchParams.get("secret");

    if(secret != process.env.REVALIDATION_TOKEN) {
        return Response.json({message: "Invalid Secret"}, {status: 401});
    }

    if(!tag) {
        return Response.json({message: "Missing Tag Param"}, {status: 400});
    }


    revalidateTag(tag);

    return Response.json({revalidate: true, now: Date.now()});
} */

// --- PATH REVALIDATION ---

// http://localhost:3000/api/revalidate?path=/&secret=PRINCESS

export async function POST(request) {
    const path = request.nextUrl.searchParams.get("path");
    const secret = request.nextUrl.searchParams.get("secret");

    if(secret != process.env.REVALIDATION_TOKEN) {
        return Response.json({message: "Invalid Secret"}, {status: 401});
    }

    if(!path) {
        return Response.json({message: "Missing path Param"}, {status: 400});
    }


    revalidatePath(path);

    return Response.json({revalidate: true, now: Date.now()});
}